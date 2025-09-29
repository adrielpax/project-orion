import React, { useState } from 'react';
import { X, Zap, Plus, Bot } from 'lucide-react';

// Componente FormLead
const FormLead = ({ onAddLead }) => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleSubmit = () => {
    if (nome && email && telefone) {
      onAddLead({ nome, email, telefone });
      setNome('');
      setEmail('');
      setTelefone('');
    }
  };

  return (
    <div className="bg-[#222222] rounded-2xl p-6 shadow-lg shadow-black/20 border border-[#333333]">
      <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <Plus className="w-5 h-5 text-cyan-400" />
        Adicionar Novo Lead
      </h2>
      
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Nome</label>
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#9b1bcf] focus:ring-2 focus:ring-[#9b1bcf]/20 transition-all duration-200"
              placeholder="Digite o nome"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#9b1bcf] focus:ring-2 focus:ring-[#9b1bcf]/20 transition-all duration-200"
              placeholder="email@exemplo.com"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">Telefone</label>
            <input
              type="tel"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="w-full px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#9b1bcf] focus:ring-2 focus:ring-[#9b1bcf]/20 transition-all duration-200"
              placeholder="(11) 99999-9999"
              required
            />
          </div>
        </div>
        
        <div className="flex justify-end">
          <button
            onClick={handleSubmit}
            className="bg-gradient-to-r from-[#9b1bcf] to-[#7c3aed] hover:from-[#8b15b8] hover:to-[#6d28d9] text-white font-semibold py-3 px-8 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-[#9b1bcf]/25"
          >
            Adicionar Lead
          </button>
        </div>
      </div>
    </div>
  );
};

// Componente ModalIA
const ModalIA = ({ isOpen, onClose, lead }) => {
  const [instrucoes, setInstrucoes] = useState('');

  if (!isOpen) return null;

  const handleGenerateSuggestion = () => {
    console.log('Gerando sugestão com IA para:', {
      lead,
      instrucoes
    });
    // Aqui será implementada a lógica da IA
  };

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-[#222222] rounded-2xl p-6 w-full max-w-2xl border border-[#333333] shadow-2xl shadow-black/50 animate-in fade-in duration-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-cyan-500/10 rounded-xl">
              <Zap className="w-6 h-6 text-cyan-400" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">Assistente IA</h3>
              <p className="text-sm text-gray-400">
                Lead: {lead?.nome} | {lead?.email}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#333333] rounded-xl transition-colors"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Instruções para o Assistente IA
            </label>
            <textarea
              value={instrucoes}
              onChange={(e) => setInstrucoes(e.target.value)}
              className="w-full h-32 px-4 py-3 bg-[#1a1a1a] border border-[#333333] rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#9b1bcf] focus:ring-2 focus:ring-[#9b1bcf]/20 transition-all duration-200 resize-none"
              placeholder="Ex: Gere uma estratégia de follow-up personalizada para este lead, considerando o perfil dele..."
            />
          </div>

          <div className="flex gap-3 justify-end">
            <button
              onClick={onClose}
              className="px-6 py-3 text-gray-300 hover:text-white hover:bg-[#333333] rounded-xl transition-all duration-200"
            >
              Cancelar
            </button>
            <button
              onClick={handleGenerateSuggestion}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-cyan-500/25 flex items-center gap-2"
            >
              <Bot className="w-4 h-4" />
              Gerar Sugestão com IA
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Componente TableLeads
const TableLeads = ({ leads, onOpenModal }) => {
  return (
    <div className="bg-[#222222] rounded-2xl p-6 shadow-lg shadow-black/20 border border-[#333333]">
      <h2 className="text-xl font-semibold text-white mb-6 flex items-center gap-2">
        <Bot className="w-5 h-5 text-green-400" />
        Lista de Leads
      </h2>
      
      {leads.length === 0 ? (
        <div className="text-center py-12 text-gray-400">
          <Bot className="w-12 h-12 mx-auto mb-4 opacity-50" />
          <p>Nenhum lead cadastrado ainda.</p>
          <p className="text-sm mt-1">Adicione o primeiro lead acima!</p>
        </div>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#333333]">
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Nome</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium hidden md:table-cell">Email</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium hidden sm:table-cell">Telefone</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Status</th>
                <th className="text-left py-3 px-4 text-gray-300 font-medium">Ações</th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr key={lead.id} className="border-b border-[#333333]/50 hover:bg-[#2a2a2a] transition-colors">
                  <td className="py-4 px-4 text-white">{lead.nome}</td>
                  <td className="py-4 px-4 text-gray-300 hidden md:table-cell">{lead.email}</td>
                  <td className="py-4 px-4 text-gray-300 hidden sm:table-cell">{lead.telefone}</td>
                  <td className="py-4 px-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      {lead.status}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <button
                      onClick={() => onOpenModal(lead)}
                      className="bg-gradient-to-r from-[#9b1bcf] to-[#7c3aed] hover:from-[#8b15b8] hover:to-[#6d28d9] text-white text-sm font-medium py-2 px-4 rounded-lg transition-all duration-200 hover:scale-105 shadow-lg shadow-[#9b1bcf]/25 flex items-center gap-2"
                    >
                      <Zap className="w-3 h-3" />
                      Assistente IA
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

// Componente Principal CRMPage
const CRMPage = () => {
  const [leads, setLeads] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLead, setSelectedLead] = useState(null);

  const handleAddLead = (leadData) => {
    const newLead = {
      id: Date.now().toString(),
      ...leadData,
      status: 'Novo'
    };
    setLeads([...leads, newLead]);
  };

  const handleOpenModal = (lead) => {
    setSelectedLead(lead);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedLead(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#090909] to-[#272727] font-['Red_Hat_Display']">
      {/* Header Fixo */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-[#090909]/90 backdrop-blur-lg border-b border-[#333333]">
        <div className="container mx-auto px-4 py-4">
          <h1 className="text-2xl md:text-3xl font-bold text-white text-center bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            Mini CRM com IA
          </h1>
        </div>
      </header>

      {/* Conteúdo Principal */}
      <main className="container mx-auto px-4 py-8 mt-20 space-y-8">
        <FormLead onAddLead={handleAddLead} />
        <TableLeads leads={leads} onOpenModal={handleOpenModal} />
      </main>

      {/* Modal IA */}
      <ModalIA 
        isOpen={modalOpen} 
        onClose={handleCloseModal} 
        lead={selectedLead} 
      />
    </div>
  );
};

export default CRMPage;