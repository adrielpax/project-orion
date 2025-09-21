import React, { useState } from 'react';
import { AiFillThunderbolt, AiOutlineArrowRight, AiOutlineArrowLeft } from 'react-icons/ai';
import { FaRocket, FaGraduationCap, FaCog, FaChartLine, FaUsers, FaBuilding,FaHourglassHalf,
  FaExclamationTriangle ,FaBolt,FaMoneyBillWave,FaFire
 } from 'react-icons/fa';

const AutomationTypeForm = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    objetivo: '',
    experiencia: '',
    tipoNegocio: '',
    faturamento: '',
    principalDesafio: '',
    nome: '',
    email: '',
    telefone: '',
    empresa: ''
  });

  // const questions = [
  //   {
  //     id: 'objetivo',
  //     type: 'choice',
  //     question: 'Qual é o seu principal objetivo?',
  //     subtitle: 'Escolha a opção que mais se identifica com você',
  //     icon: <FaRocket className="w-8 h-8" />,
  //     options: [
  //       { value: 'aprender', label: '🎓 Quero aprender automação', description: 'Busco conhecimento e treinamentos' },
  //       { value: 'contratar', label: '⚡ Quero contratar serviços', description: 'Preciso de soluções prontas' },
  //       { value: 'ambos', label: '🚀 Quero ambos', description: 'Aprender e implementar ao mesmo tempo' }
  //     ]
  //   },
  //   {
  //     id: 'experiencia',
  //     type: 'choice',
  //     question: 'Qual seu nível de experiência com automação?',
  //     subtitle: 'Isso nos ajuda a personalizar a melhor solução',
  //     icon: <FaGraduationCap className="w-8 h-8" />,
  //     options: [
  //       { value: 'iniciante', label: '🌱 Iniciante', description: 'Nunca usei automação' },
  //       { value: 'basico', label: '📈 Básico', description: 'Já testei algumas ferramentas' },
  //       { value: 'intermediario', label: '⚙️ Intermediário', description: 'Uso automação regularmente' },
  //       { value: 'avancado', label: '🏆 Avançado', description: 'Sou especialista no assunto' }
  //     ]
  //   },
  //   {
  //     id: 'tipoNegocio',
  //     type: 'choice',
  //     question: 'Qual o tipo do seu negócio?',
  //     subtitle: 'Vamos entender seu contexto empresarial',
  //     icon: <FaBuilding className="w-8 h-8" />,
  //     options: [
  //       { value: 'ecommerce', label: '🛒 E-commerce', description: 'Venda online de produtos' },
  //       { value: 'servicos', label: '💼 Prestação de Serviços', description: 'Consultoria, agência, etc.' },
  //       { value: 'infoprodutos', label: '📚 Infoprodutos', description: 'Cursos, ebooks, mentorias' },
  //       { value: 'fisico', label: '🏪 Negócio Físico', description: 'Loja, restaurante, clínica' },
  //       { value: 'freelancer', label: '👤 Freelancer/Autônomo', description: 'Trabalho independente' }
  //     ]
  //   },
  //   {
  //     id: 'faturamento',
  //     type: 'choice',
  //     question: 'Qual o faturamento mensal do seu negócio?',
  //     subtitle: 'Informação confidencial para dimensionar a solução',
  //     icon: <FaChartLine className="w-8 h-8" />,
  //     options: [
  //       { value: 'ate5k', label: '💰 Até R$ 5.000', description: 'Começando ou micro negócio' },
  //       { value: '5k-20k', label: '💎 R$ 5.000 - R$ 20.000', description: 'Pequeno negócio' },
  //       { value: '20k-100k', label: '🏆 R$ 20.000 - R$ 100.000', description: 'Negócio em crescimento' },
  //       { value: '100k+', label: '👑 Mais de R$ 100.000', description: 'Empresa consolidada' }
  //     ]
  //   },
  //   {
  //     id: 'principalDesafio',
  //     type: 'choice',
  //     question: 'Qual seu principal desafio hoje?',
  //     subtitle: 'Vamos focar na sua maior dor',
  //     icon: <FaCog className="w-8 h-8" />,
  //     options: [
  //       { value: 'tempo', label: '⏰ Falta de Tempo', description: 'Muitas tarefas manuais' },
  //       { value: 'leads', label: '👥 Gerar mais Leads', description: 'Preciso de mais prospects' },
  //       { value: 'vendas', label: '💵 Aumentar Vendas', description: 'Converter mais clientes' },
  //       { value: 'organizacao', label: '📊 Organização', description: 'Controle de processos' },
  //       { value: 'atendimento', label: '💬 Atendimento', description: 'Melhorar relacionamento com clientes' }
  //     ]
  //   },
  //   {
  //     id: 'contato',
  //     type: 'form',
  //     question: 'Vamos finalizar com seus dados',
  //     subtitle: 'Últimas informações para criarmos sua solução personalizada',
  //     icon: <FaUsers className="w-8 h-8" />,
  //     fields: [
  //       { name: 'nome', label: 'Nome completo', type: 'text', placeholder: 'Seu nome completo' },
  //       { name: 'email', label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
  //       { name: 'telefone', label: 'WhatsApp', type: 'tel', placeholder: '(11) 99999-9999' },
  //       { name: 'empresa', label: 'Empresa', type: 'text', placeholder: 'Nome da sua empresa (opcional)' }
  //     ]
  //   }
  // ];

  const questions = [
  {
    id: 'impacto',
    type: 'choice',
    question: 'Se nada mudar, onde você acha que seu negócio estará daqui a 6 meses?',
    subtitle: 'Escolha a opção que mais se aproxima da sua realidade',
    icon: <FaHourglassHalf className="w-8 h-8" />,
    options: [
      { value: 'parado', label: '⏳ Estagnado', description: 'Faturando igual ou até menos' },
      { value: 'atrasado', label: '📉 Perdendo espaço', description: 'Concorrentes avançando mais rápido' },
      { value: 'correndo', label: '🔥 Correndo atrás do prejuízo', description: 'Trabalhando dobrado para pouco resultado' },
      { value: 'crescendo', label: '🚀 Crescendo de verdade', description: 'Com processos claros e escala' }
    ]
  },
  {
    id: 'erro',
    type: 'choice',
    question: 'Qual erro você mais repete hoje que está custando caro?',
    subtitle: 'Admita: todo mundo tem um gargalo que drena tempo e dinheiro',
    icon: <FaExclamationTriangle className="w-8 h-8" />,
    options: [
      { value: 'manual', label: '🖐️ Fazer tudo manualmente', description: 'Copiar, colar, planilhas infinitas...' },
      { value: 'leads', label: '🕳️ Deixar leads escaparem', description: 'Falta acompanhamento e follow-up' },
      { value: 'tempo', label: '⏰ Trabalhar demais, render de menos', description: 'Vivo apagando incêndio' },
      { value: 'caos', label: '📊 Falta de processos claros', description: 'Cada dia é uma nova bagunça' }
    ]
  },
  {
    id: 'concorrencia',
    type: 'choice',
    question: 'Como você se sente ao ver concorrentes fechando mais vendas?',
    subtitle: 'Seja sincero, isso mostra sua prioridade em mudar',
    icon: <FaBolt className="w-8 h-8" />,
    options: [
      { value: 'injusto', label: '😡 Injusto', description: 'Meu produto é bom, mas não consigo acompanhar' },
      { value: 'indiferente', label: '😐 Indiferente', description: 'Acho que um dia vou acertar' },
      { value: 'alerta', label: '👀 Em alerta', description: 'Se eu não acelerar, vou ficar para trás' },
      { value: 'superior', label: '🏆 Seguro', description: 'Já estou alguns passos à frente' }
    ]
  },
  {
    id: 'investimento',
    type: 'choice',
    question: 'Quando o assunto é investir em automação, qual dessas frases mais define você?',
    subtitle: 'Sua resposta revela se você vai continuar no jogo ou ficar para trás',
    icon: <FaMoneyBillWave className="w-8 h-8" />,
    options: [
      { value: 'gasto', label: '💸 Vejo como gasto', description: 'Prefiro economizar agora, mesmo perdendo depois' },
      { value: 'desejo', label: '🤔 Tenho vontade, mas adio sempre', description: 'Nunca parece o momento certo' },
      { value: 'necessario', label: '⚡ Vejo como necessário', description: 'Sem automação não há escala' },
      { value: 'obrigatorio', label: '🚀 É obrigatório', description: 'Automatizar é a única forma de crescer' }
    ]
  },
  {
    id: 'urgencia',
    type: 'choice',
    question: 'O que aconteceria se você não resolvesse seus gargalos agora?',
    subtitle: 'Pense bem: cada dia custa mais caro',
    icon: <FaFire className="w-8 h-8" />,
    options: [
      { value: 'clientes', label: '👥 Perder clientes', description: 'Eles vão para quem responde mais rápido' },
      { value: 'dinheiro', label: '💰 Jogar dinheiro fora', description: 'Tempo perdido é dinheiro queimado' },
      { value: 'saude', label: '🤯 Ficar esgotado', description: 'Trabalho sem fim e sem retorno' },
      { value: 'nada', label: '🙄 Nada muda', description: 'Vou continuar na mesma (até não aguentar)' }
    ]
  },
  {
    id: 'contato',
    type: 'form',
    question: 'Último passo: vamos entender quem você é de verdade',
    subtitle: 'Seja direto, isso vai definir sua análise personalizada',
    icon: <FaUsers className="w-8 h-8" />,
    fields: [
      { name: 'nome', label: 'Seu nome', type: 'text', placeholder: 'Digite aqui' },
      { name: 'email', label: 'E-mail', type: 'email', placeholder: 'seu@email.com' },
      { name: 'telefone', label: 'WhatsApp', type: 'tel', placeholder: '(11) 99999-9999' },
      { name: 'empresa', label: 'Empresa/Projeto', type: 'text', placeholder: 'Opcional, mas ajuda a entender seu cenário' }
    ]
  }
];



  const handleChoice = (value) => {
    const question = questions[currentStep];
    setFormData(prev => ({
      ...prev,
      [question.id]: value
    }));
    
    setTimeout(() => {
      if (currentStep < questions.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }, 300);
  };

  const handleInputChange = (name, value) => {
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Dados do formulário:', formData);
    alert('Formulário enviado com sucesso! Em breve entraremos em contato.');
  };

  const goBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-transparent text-zinc-900 relative overflow-hidden">
      {/* Background Effects */}
      <AiFillThunderbolt className="absolute top-[20%] left-[10%] text-cyan-500/5 w-64 h-64 -z-10 opacity-30 animate-pulse" />
      <AiFillThunderbolt className="absolute bottom-[20%] right-[10%] text-orange-400/5 w-64 h-64 -z-10 opacity-30 animate-pulse" />
      
      {/* Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-2 bg-zinc-800 z-50">
        <div 
          className="h-full bg-gradient-to-r from-orange-400 to-red-500 transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      <div className="container mx-auto px-4 py-12 min-h-screen flex items-center justify-center">
        <div className="max-w-2xl mx-auto w-full">
          
          {/* Header */}
          <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
              <div className="p-4 rounded-full bg-gradient-to-r from-orange-400 to-red-500">
                {currentQuestion.icon}
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-400 to-indigo-400 text-transparent bg-clip-text">
                {currentQuestion.question}
              </span>
            </h1>
            <p className="text-gray-300 text-lg">{currentQuestion.subtitle}</p>
          </div>

          {/* Question Content */}
          <div className="space-y-6">
            {currentQuestion.type === 'choice' && (
              <div className="space-y-4">
                {currentQuestion.options.map((option, index) => (
                  <button
                    key={option.value}
                    onClick={() => handleChoice(option.value)}
                    className="w-full p-6 bg-transparent rounded-xl border border-gray-600 
                             hover:border-orange-400 hover:bg-gradient-to-r hover:from-zinc-900 hover:to-zinc-800
                             transition-all duration-300 transform hover:scale-105 hover:shadow-xl 
                             hover:shadow-orange-500/20 group text-left"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="text-2xl">{option.label.split(' ')[0]}</div>
                      <div className="flex-1">
                        <div className="font-semibold text-zinc-900 group-hover:text-orange-300 transition-colors">
                          {option.label.slice(2)}
                        </div>
                        <div className="text-gray-400 text-sm mt-1">{option.description}</div>
                      </div>
                      <AiOutlineArrowRight className="w-5 h-5 text-gray-400 group-hover:text-orange-400 transition-colors" />
                    </div>
                  </button>
                ))}
              </div>
            )}

            {currentQuestion.type === 'form' && (
              <div className="space-y-6">
                <div className="grid gap-6">
                  {currentQuestion.fields.map((field) => (
                    <div key={field.name} className="space-y-2">
                      <label className="block text-sm font-medium text-gray-300">
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        value={formData[field.name] || ''}
                        onChange={(e) => handleInputChange(field.name, e.target.value)}
                        className="w-full px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg 
                                 focus:ring-2 focus:ring-orange-400 focus:border-transparent
                                 text-zinc-900 placeholder-gray-400 transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
                
                <button
                  onClick={handleSubmit}
                  disabled={!formData.nome || !formData.email}
                  className="w-full py-4 px-8 bg-gradient-to-r from-orange-400 via-red-500 to-red-600 
                           rounded-xl font-bold text-zinc-900 shadow-lg transition-all duration-300 
                           hover:scale-105 hover:shadow-xl hover:shadow-red-500/50
                           disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                           flex items-center justify-center space-x-2"
                >
                  <AiFillThunderbolt className="w-6 h-6" />
                  <span>Quero minha automação personalizada!</span>
                </button>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12">
            <button
              onClick={goBack}
              className={`flex items-center space-x-2 px-4 py-2 text-gray-400 hover:text-zinc-900 
                         transition-colors ${currentStep === 0 ? 'invisible' : ''}`}
            >
              <AiOutlineArrowLeft className="w-4 h-4" />
              <span>Voltar</span>
            </button>
            
            <div className="text-sm text-gray-400">
              {currentStep + 1} de {questions.length}
            </div>
          </div>

          {/* Footer */}
          <div className="text-center mt-8">
            <p className="text-gray-500 text-sm">
              🔒 Suas informações estão seguras conosco
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomationTypeForm;