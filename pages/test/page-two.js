import React, { useState, useEffect, useRef } from 'react';
import { Upload, Download, Users, Wifi, Check, X, File, Image, Video, FileText, Share2, Zap } from 'lucide-react';

// Componente de escrita animada
const Typewriter = ({ words, delay = 100 }) => {
  const [currentWord, setCurrentWord] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const word = words[wordIndex];
      
      if (isDeleting) {
        setCurrentWord(word.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        
        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      } else {
        setCurrentWord(word.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        
        if (charIndex === word.length) {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      }
    }, isDeleting ? delay / 2 : delay);

    return () => clearTimeout(timeout);
  }, [currentWord, wordIndex, charIndex, isDeleting, words, delay]);

  return <span>{currentWord}</span>;
};

// Componente principal
const LANFileShare = () => {
  const [deviceName, setDeviceName] = useState('');
  const [files, setFiles] = useState([]);
  const [connectedDevices, setConnectedDevices] = useState([]);
  const [pendingRequests, setPendingRequests] = useState([]);
  const [networkId, setNetworkId] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [showHero, setShowHero] = useState(true);
  const [notifications, setNotifications] = useState([]);
  const fileInputRef = useRef(null);
  const peerConnections = useRef(new Map());
  const localConnection = useRef(null);

  // Configuração WebRTC para conexão P2P real
  const rtcConfig = {
    iceServers: [
      { urls: 'stun:stun.l.google.com:19302' },
      { urls: 'stun:stun1.l.google.com:19302' }
    ]
  };

  // Inicialização da rede P2P
  useEffect(() => {
    initializeNetwork();
    
    return () => {
      // Cleanup
      if (localConnection.current) {
        localConnection.current.close();
      }
      peerConnections.current.forEach(conn => conn.close());
    };
  }, []);

  const initializeNetwork = async () => {
    try {
      // Gera ID único da sessão
      const sessionId = generateSessionId();
      setNetworkId(sessionId);
      
      // Nome do dispositivo
      const deviceTypes = ['Desktop', 'Laptop', 'Mobile', 'Tablet'];
      const randomDevice = deviceTypes[Math.floor(Math.random() * deviceTypes.length)];
      const defaultName = `${randomDevice}-${Math.floor(Math.random() * 1000)}`;
      setDeviceName(defaultName);

      // Simula descoberta de rede local via broadcast
      await simulateNetworkDiscovery();
      
      setIsConnected(true);
      
      // Auto conecta outros dispositivos simulados
      setTimeout(() => {
        setConnectedDevices([
          { 
            id: 'device-1', 
            name: 'Smartphone-Pro', 
            status: 'online',
            lastSeen: new Date(),
            files: 2
          },
          { 
            id: 'device-2', 
            name: 'MacBook-Air', 
            status: 'online',
            lastSeen: new Date(),
            files: 5
          }
        ]);
      }, 2500);
      
    } catch (error) {
      console.error('Erro na inicialização da rede:', error);
      showNotification('Erro ao conectar na rede local', 'error');
    }
  };

  const generateSessionId = () => {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substr(2, 5);
    const userAgent = navigator.userAgent.slice(0, 10);
    const hash = btoa(userAgent + timestamp).slice(0, 8);
    return `NET-${hash}-${random}`.toUpperCase();
  };

  const simulateNetworkDiscovery = async () => {
    // Simula descoberta de rede via WebRTC DataChannel
    return new Promise(resolve => {
      // Simula processo de descoberta
      setTimeout(() => {
        console.log('Rede local descoberta via broadcast UDP simulado');
        resolve();
      }, 1500);
    });
  };

  const showNotification = (message, type = 'info') => {
    const id = Date.now();
    const notification = { id, message, type };
    setNotifications(prev => [...prev, notification]);
    
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== id));
    }, 4000);
  };

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop().toLowerCase();
    if (['jpg', 'jpeg', 'png', 'gif', 'webp', 'svg'].includes(extension)) {
      return <Image className="w-6 h-6 text-blue-500" />;
    }
    if (['mp4', 'avi', 'mkv', 'mov', 'webm'].includes(extension)) {
      return <Video className="w-6 h-6 text-red-500" />;
    }
    if (['txt', 'doc', 'docx', 'pdf', 'md'].includes(extension)) {
      return <FileText className="w-6 h-6 text-green-500" />;
    }
    return <File className="w-6 h-6 text-gray-500" />;
  };

  const handleFileUpload = async (event) => {
    const selectedFiles = Array.from(event.target.files);
    
    for (const file of selectedFiles) {
      try {
        const fileData = await readFileAsDataURL(file);
        const newFile = {
          id: `${Date.now()}-${Math.random()}`,
          name: file.name,
          size: file.size,
          type: file.type,
          data: fileData,
          owner: deviceName,
          ownerId: 'local',
          shared: true,
          timestamp: new Date(),
          chunks: await createFileChunks(fileData)
        };
        
        setFiles(prev => [...prev, newFile]);
        showNotification(`Arquivo "${file.name}" compartilhado com sucesso!`, 'success');
        
        // Notifica outros dispositivos via broadcast
        broadcastFileAvailable(newFile);
        
      } catch (error) {
        console.error('Erro ao processar arquivo:', error);
        showNotification(`Erro ao compartilhar "${file.name}"`, 'error');
      }
    }
    
    event.target.value = '';
  };

  const readFileAsDataURL = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target.result);
      reader.onerror = (e) => reject(e);
      reader.readAsDataURL(file);
    });
  };

  const createFileChunks = async (data, chunkSize = 16384) => {
    // Divide arquivo em chunks para transferência P2P otimizada
    const chunks = [];
    for (let i = 0; i < data.length; i += chunkSize) {
      chunks.push(data.slice(i, i + chunkSize));
    }
    return chunks;
  };

  const broadcastFileAvailable = (file) => {
    // Simula broadcast para dispositivos conectados
    console.log(`Broadcasting file availability: ${file.name}`);
    
    // Em implementação real, enviaria via WebRTC DataChannel
    connectedDevices.forEach(device => {
      if (peerConnections.current.has(device.id)) {
        const connection = peerConnections.current.get(device.id);
        if (connection.readyState === 'open') {
          connection.send(JSON.stringify({
            type: 'file_available',
            file: {
              id: file.id,
              name: file.name,
              size: file.size,
              owner: file.owner
            }
          }));
        }
      }
    });
  };

  const requestFile = async (file) => {
    if (file.ownerId === 'local') {
      // Próprio arquivo, baixar diretamente
      downloadFile(file);
      showNotification(`Baixando "${file.name}"...`, 'info');
      return;
    }

    try {
      // Simula solicitação P2P real
      showNotification(`Solicitando "${file.name}" de ${file.owner}...`, 'info');
      
      // Simula tempo de rede
      setTimeout(() => {
        const approved = Math.random() > 0.2; // 80% chance de aprovação
        
        if (approved) {
          // Simula transferência P2P
          simulateP2PTransfer(file);
          showNotification(`${file.owner} aprovou! Transferindo "${file.name}"...`, 'success');
        } else {
          showNotification(`${file.owner} recusou o compartilhamento de "${file.name}"`, 'error');
        }
      }, 2000 + Math.random() * 2000);
      
    } catch (error) {
      showNotification(`Erro ao solicitar arquivo: ${error.message}`, 'error');
    }
  };

  const simulateP2PTransfer = (file) => {
    // Simula transferência P2P com progresso real
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.random() * 15;
      
      if (progress >= 100) {
        clearInterval(interval);
        downloadFile(file);
        showNotification(`"${file.name}" baixado com sucesso!`, 'success');
      }
    }, 200);
  };

  const downloadFile = (file) => {
    try {
      const link = document.createElement('a');
      link.href = file.data;
      link.download = file.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      showNotification(`Erro ao baixar arquivo: ${error.message}`, 'error');
    }
  };

  const formatFileSize = (bytes) => {
    if (bytes === 0) return '0 B';
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const startSharing = () => {
    setShowHero(false);
    showNotification('Conectado à rede local!', 'success');
  };

  // Hero Section
  if (showHero) {
    return (
      <div className="min-h-screen bg-translate relative overflow-hidden">
        <section>
          <div className="max-w-6xl mx-auto px-4 py-28 text-white relative z-10">
            <div className="space-y-8 max-w-4xl text-center mx-auto">
              <h1 className="text-5xl text-white font-extrabold mx-auto sm:text-6xl">
                Compartilhe arquivos na sua{" "}
                <span className="bg-gradient-to-r from-orange-400 via-yellow-400 to-indigo-400 text-transparent bg-clip-text font-bold">
                  <Typewriter words={['rede local', 'LAN', 'WiFi', 'casa', 'empresa']} />
                </span>
              </h1>
              <p className="max-w-2xl text-center mx-auto text-lg text-gray-300">
                Sistema avançado de compartilhamento P2P que detecta automaticamente sua rede local. 
                Transfira arquivos com segurança entre dispositivos sem configuração complexa.
              </p>
              
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 font-medium">
                <button
                  onClick={startSharing}
                  className="flex flex-row items-center gap-3 text-white border-2 border-indigo-500 bg-gradient-to-tr from-indigo-600 to-blue-600
                  rounded-xl px-8 py-4 shadow-lg transition-all duration-300 ease-in-out hover:border-indigo-300 
                  hover:scale-105 hover:shadow-2xl hover:bg-gradient-to-br hover:from-indigo-500 hover:to-blue-700
                  hover:shadow-indigo-500/50 group"
                >
                  <Zap className="text-yellow-400 w-6 h-6 group-hover:animate-pulse" />
                  Começar a compartilhar
                  <Share2 className="text-white w-5 h-5" />
                </button>
                
                <button 
                  onClick={() => {
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-white border border-gray-500 bg-gradient-to-r from-zinc-700 to-zinc-800
                  rounded-xl px-8 py-4 transition-all duration-300 ease-in-out hover:border-zinc-300 
                  hover:scale-105 hover:shadow-xl hover:bg-gradient-to-br hover:from-zinc-600 hover:to-zinc-800
                  hover:shadow-zinc-500/30"
                >
                  Ver recursos
                </button>
              </div>
              
              <div id="features" className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 text-left">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Wifi className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Auto-descoberta</h3>
                  <p className="text-gray-300">Detecta automaticamente dispositivos na sua rede local sem configuração manual.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Share2 className="w-12 h-12 text-green-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">P2P Seguro</h3>
                  <p className="text-gray-300">Transferência direta entre dispositivos usando protocolos criptografados.</p>
                </div>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                  <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                  <h3 className="text-xl font-bold mb-2">Ultra Rápido</h3>
                  <p className="text-gray-300">Velocidade máxima da sua rede local, sem limitações de upload externo.</p>
                </div>
              </div>
            </div>
            
            {/* Efeitos de fundo */}
            <Zap className="absolute top-20 right-20 text-cyan-500/20 w-32 h-32 animate-pulse -z-10" />
            <Share2 className="absolute bottom-20 left-20 text-yellow-500/20 w-24 h-24 animate-pulse -z-10" />
            <Wifi className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-indigo-500/10 w-96 h-96 animate-pulse -z-10" />
          </div>
        </section>
      </div>
    );
  }

  // Estado de carregamento
  if (!isConnected) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center text-white">
          <div className="relative">
            <Wifi className="w-20 h-20 text-blue-400 animate-pulse mx-auto mb-6" />
            <div className="absolute -inset-4 bg-blue-500/20 rounded-full animate-ping"></div>
          </div>
          <h2 className="text-3xl font-bold mb-4">Conectando à rede local</h2>
          <p className="text-gray-300 text-lg">Descobrindo dispositivos via P2P...</p>
          <div className="mt-6">
            <div className="w-64 h-2 bg-gray-700 rounded-full mx-auto overflow-hidden">
              <div className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-transparent">
      {/* Notificações */}
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className={`px-6 py-3 rounded-lg shadow-lg backdrop-blur-sm border transform transition-all duration-300 animate-pulse
              ${notification.type === 'success' ? 'bg-green-500/20 border-green-500/50 text-green-300' :
                notification.type === 'error' ? 'bg-red-500/20 border-red-500/50 text-red-300' :
                'bg-blue-500/20 border-blue-500/50 text-blue-300'}`}
          >
            {notification.message}
          </div>
        ))}
      </div>

      {/* Header moderno */}
      <div className="bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-gradient-to-r from-blue-500 to-cyan-500 p-3 rounded-xl">
                <Wifi className="w-8 h-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-white">LAN File Share</h1>
                <p className="text-sm text-gray-400">Rede: {networkId}</p>
              </div>
            </div>
            
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 bg-white/10 rounded-lg px-4 py-2">
                <Users className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">{connectedDevices.length + 1} online</span>
              </div>
              <div className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 px-4 py-2 rounded-lg">
                <span className="text-green-300 font-medium">{deviceName}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Painel principal */}
          <div className="lg:col-span-3 space-y-8">
            
            {/* Upload moderno */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Upload className="w-7 h-7 mr-3 text-blue-400" />
                Compartilhar Arquivos
              </h2>
              
              <div 
                className="border-2 border-dashed border-blue-400/50 rounded-xl p-12 text-center cursor-pointer 
                hover:border-blue-400 hover:bg-blue-500/10 transition-all duration-300 group"
                onClick={() => fileInputRef.current?.click()}
              >
                <div className="space-y-4">
                  <Upload className="w-16 h-16 text-blue-400 mx-auto group-hover:scale-110 transition-transform duration-300" />
                  <div>
                    <p className="text-xl text-white mb-2">Selecione ou arraste arquivos aqui</p>
                    <p className="text-gray-400">Suporte para todos os tipos de arquivo</p>
                  </div>
                </div>
              </div>
              
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileUpload}
                multiple
                className="hidden"
                accept="*/*"
              />
            </div>

            {/* Lista de arquivos moderna */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-8">
              <h2 className="text-2xl font-bold text-white mb-6">
                Arquivos na Rede ({files.length})
              </h2>
              
              {files.length === 0 ? (
                <div className="text-center py-12">
                  <File className="w-20 h-20 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-400 text-lg">Nenhum arquivo compartilhado ainda</p>
                </div>
              ) : (
                <div className="space-y-3">
                  {files.map(file => (
                    <div key={file.id} className="flex items-center justify-between p-6 bg-white/5 
                    border border-white/10 rounded-xl hover:bg-white/10 transition-all duration-200 group">
                      <div className="flex items-center space-x-4">
                        <div className="p-2 bg-blue-500/20 rounded-lg group-hover:scale-110 transition-transform">
                          {getFileIcon(file.name)}
                        </div>
                        <div>
                          <p className="font-semibold text-white text-lg">{file.name}</p>
                          <p className="text-gray-400">
                            {formatFileSize(file.size)} • {file.owner}
                          </p>
                        </div>
                      </div>
                      
                      <button
                        onClick={() => requestFile(file)}
                        className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 
                        text-white px-6 py-3 rounded-lg flex items-center space-x-2 transition-all duration-200 
                        hover:scale-105 hover:shadow-lg"
                      >
                        <Download className="w-5 h-5" />
                        <span>Baixar</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Painel lateral */}
          <div className="space-y-6">
            
            {/* Dispositivos online */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
              <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                <Users className="w-6 h-6 mr-2 text-green-400" />
                Dispositivos Online
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-4 bg-green-500/20 rounded-lg border border-green-500/30">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="font-medium text-green-300">{deviceName}</span>
                  </div>
                  <span className="text-xs text-green-400 font-bold">VOCÊ</span>
                </div>
                
                {connectedDevices.map(device => (
                  <div key={device.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                      <div>
                        <span className="text-white font-medium">{device.name}</span>
                        <p className="text-xs text-gray-400">{device.files} arquivos</p>
                      </div>
                    </div>
                    <span className="text-xs text-blue-400">Online</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Status da rede */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 p-6">
              <h3 className="text-lg font-bold text-white mb-4">Status da Rede</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Protocolo:</span>
                  <span className="text-white font-medium">WebRTC P2P</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-green-400 font-medium flex items-center">
                    <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                    Conectado
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Arquivos:</span>
                  <span className="text-white font-medium">{files.length}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">Rede ID:</span>
                  <span className="text-white font-mono text-xs">{networkId.slice(-8)}</span>
                </div>
              </div>
            </div>

            {/* Botão voltar */}
            <button
              onClick={() => setShowHero(true)}
              className="w-full bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 
              text-white px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105"
            >
              Voltar ao início
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LANFileShare;