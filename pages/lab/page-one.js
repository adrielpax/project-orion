import { useState, useEffect } from "react";
import {
  AiFillThunderbolt,
  AiFillStar,
  AiOutlineCheckCircle,
  AiOutlineMail,
  AiOutlinePhone,
  AiFillPlayCircle,
} from "react-icons/ai";
import {
  FiDatabase,
  FiTrendingUp,
  FiClock,
  FiShield,
  FiZap,
  FiUsers,
  FiArrowRight,
  FiDownload,
  FiBarChart,
  FiSettings,
  FiTarget,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi";

// Mock Data
const mockData = {
  hero: {
    badgeText: "🚀 Transformação Digital de Dados",
    title: "Automatize seus",
    animatedWords: ["Processos de Dados", "Relatórios", "Dashboards", "Análises"],
    subtitle: "Transforme horas de trabalho manual em minutos automatizados. Nossa IA processa, analisa e entrega insights de dados em tempo real, liberando sua equipe para decisões estratégicas.",
    primaryCta: "Automatizar Agora - Grátis 30 dias",
    secondaryCta: "Ver Demonstração (3 min)",
    trustedBy: "Empresas que já transformaram seus dados:",
    companies: ["TechCorp", "DataFlow", "InnovaSoft", "SmartBI"]
  },
  benefits: {
    title: "Resultados que Impressionam",
    subtitle: "Veja os benefícios reais que nossos clientes alcançaram em apenas 30 dias",
    items: [
      {
        icon: <FiClock className="w-8 h-8" />,
        title: "90% Menos Tempo",
        description: "Reduza drasticamente o tempo gasto em tarefas manuais de dados",
        color: "text-cyan-400",
      },
      {
        icon: <FiTrendingUp className="w-8 h-8" />,
        title: "300% Mais Produtividade",
        description: "Sua equipe focará em análises estratégicas ao invés de coleta manual",
        color: "text-green-400",
      },
      {
        icon: <FiShield className="w-8 h-8" />,
        title: "100% Precisão",
        description: "Elimine erros humanos e garanta dados sempre consistentes",
        color: "text-purple-400",
      },
      {
        icon: <FiZap className="w-8 h-8" />,
        title: "Resultados em Tempo Real",
        description: "Dashboards e relatórios atualizados automaticamente 24/7",
        color: "text-orange-400",
      },
    ]
  },
  features: {
    title: "Recursos Poderosos",
    subtitle: "Uma plataforma completa que revoluciona como você trabalha com dados",
    items: [
      {
        icon: <FiDatabase className="w-6 h-6" />,
        title: "Integração Multi-fontes",
        description: "Conecte Excel, SQL, APIs, CRM e qualquer fonte de dados",
      },
      {
        icon: <FiBarChart className="w-6 h-6" />,
        title: "Dashboards Inteligentes",
        description: "Visualizações automáticas com insights em tempo real",
      },
      {
        icon: <FiSettings className="w-6 h-6" />,
        title: "Automação Completa",
        description: "Coleta, processamento e distribuição 100% automatizada",
      },
      {
        icon: <FiUsers className="w-6 h-6" />,
        title: "Colaboração em Equipe",
        description: "Compartilhamento seguro e controle de acesso granular",
      },
      {
        icon: <FiTarget className="w-6 h-6" />,
        title: "Alertas Inteligentes",
        description: "Notificações automáticas baseadas em KPIs críticos",
      },
      {
        icon: <FiShield className="w-6 h-6" />,
        title: "Segurança Enterprise",
        description: "Criptografia avançada e compliance com LGPD",
      },
    ],
    demo: {
      title: "Dashboard em Tempo Real",
      stats: [
        { value: "98.7%", label: "Precisão", color: "text-green-400" },
        { value: "2.3s", label: "Processamento", color: "text-cyan-400" },
        { value: "24/7", label: "Uptime", color: "text-orange-400" }
      ]
    }
  },
  testimonials: {
    title: "Clientes Satisfeitos",
    items: [
      {
        name: "Carlos Silva",
        position: "CEO, DataTech Solutions",
        rating: 5,
        text: "Reduziu nosso tempo de geração de relatórios de 8 horas para 15 minutos. ROI de 300% em 6 meses!",
        company: "DataTech",
      },
      {
        name: "Ana Costa",
        position: "Gerente de BI, InnovaCorp",
        rating: 5,
        text: "Automação perfeita! Nossa equipe agora foca em análises estratégicas ao invés de tarefas manuais.",
        company: "InnovaCorp",
      },
      {
        name: "Roberto Lima",
        position: "Diretor de TI, FastData",
        rating: 5,
        text: "Implementação rápida e resultados imediatos. Economizamos R$ 50.000/mês em processos manuais.",
        company: "FastData",
      },
    ]
  },
  pricing: {
    title: "Planos que Se Adaptam",
    subtitle: "Escolha o plano ideal para o seu negócio. Teste grátis por 30 dias, cancele quando quiser.",
    plans: [
      {
        name: "Starter",
        price: "R$ 1.997",
        period: "/mês",
        popular: false,
        features: [
          "Até 3 fontes de dados",
          "2 dashboards personalizados",
          "Relatórios automáticos",
          "Suporte por email",
          "Atualizações horárias",
        ],
      },
      {
        name: "Professional",
        price: "R$ 3.997",
        period: "/mês",
        popular: true,
        features: [
          "Fontes de dados ilimitadas",
          "Dashboards ilimitados",
          "BI avançado com IA",
          "Suporte prioritário",
          "Atualizações em tempo real",
          "Alertas personalizados",
          "Treinamento da equipe",
        ],
      },
      {
        name: "Enterprise",
        price: "R$ 7.997",
        period: "/mês",
        popular: false,
        features: [
          "Tudo do Professional",
          "Servidor dedicado",
          "Customizações ilimitadas",
          "Gerente de conta dedicado",
          "SLA de 99.9%",
          "Integração white-label",
          "Consultoria estratégica",
        ],
      },
    ]
  },
  contact: {
    title: "Pronto para Transformar?",
    subtitle: "Fale com nossos especialistas e receba uma proposta personalizada em até 2 horas",
    phone: "(11) 99999-9999",
    email: "automacao@suaempresa.com",
    guarantees: [
      "30 dias de teste grátis",
      "Implementação em até 7 dias",
      "ROI garantido ou dinheiro de volta",
      "Suporte 24/7 incluso"
    ]
  },
  footer: {
    companyName: "AutomationPro",
    description: "Transformando empresas através da automação inteligente de dados. Mais de 500 clientes satisfeitos e milhões de horas economizadas.",
    links: {
      product: ["Recursos", "Preços", "Demonstração", "API"],
      company: ["Sobre", "Blog", "Carreiras", "Contato"],
      support: ["Central de Ajuda", "Documentação", "Status", "Segurança"]
    },
    legal: ["Termos de Uso", "Privacidade", "LGPD"]
  }
};

// Components
const TypewriterEffect = ({ words, className = "" }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  useEffect(() => {
    const currentWord = words[currentWordIndex];
    let index = 0;

    const typeInterval = setInterval(() => {
      if (index < currentWord.length) {
        setDisplayedText(currentWord.substring(0, index + 1));
        index++;
      } else {
        setTimeout(() => {
          const clearInterval = setInterval(() => {
            setDisplayedText(currentWord.substring(0, index));
            index--;
            if (index < 0) {
              clearInterval(clearInterval);
              setCurrentWordIndex((prev) => (prev + 1) % words.length);
            }
          }, 100);
        }, 2000);
        clearInterval(typeInterval);
      }
    }, 150);

    return () => clearInterval(typeInterval);
  }, [currentWordIndex, words]);

  return (
    <span className={className}>
      {displayedText}
      <span className="animate-pulse">|</span>
    </span>
  );
};

const HeroSection = ({ data }) => (
  <section className="relative overflow-hidden">
    <AiFillThunderbolt className="absolute top-[10%] left-[20%] text-cyan-500/10 blur-md w-96 h-96 -z-10 opacity-20 animate-pulse" />
    <AiFillThunderbolt className="absolute bottom-[20%] right-[15%] text-yellow-500/10 w-80 h-80 -z-10 opacity-20 animate-pulse" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-zinc-900 relative">
      <div className="text-center space-y-8 max-w-4xl mx-auto">
        <div className="inline-block bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 rounded-full px-6 py-2 mb-6">
          <span className="text-indigo-300 font-medium">{data.badgeText}</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight">
          {data.title}{" "}
          <TypewriterEffect 
            words={data.animatedWords} 
            className="bg-gradient-to-l from-orange-400 to-indigo-900 text-transparent bg-clip-text"
          />
        </h1>

        <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
          {data.subtitle}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-8">
          <button className="flex items-center gap-3 text-zinc-900 border-2 border-indigo-500 bg-gradient-to-tr from-indigo-400 via-indigo-600 to-indigo-900 rounded-lg px-8 py-4 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50 font-semibold text-lg animate-pulse">
            <AiFillThunderbolt className="text-orange-600 w-6 h-6" />
            {data.primaryCta}
          </button>
          <button className="flex items-center gap-3 text-zinc-900 border border-gray-500 bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-900 rounded-lg px-8 py-4 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-b from-zinc-400 via-zinc-600 to-zinc-900 hover:shadow-zinc-500/50 font-semibold">
            <AiFillPlayCircle className="w-6 h-6" />
            {data.secondaryCta}
          </button>
        </div>

        <div className="pt-12">
          <p className="text-gray-400 mb-4">{data.trustedBy}</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {data.companies.map((company, index) => (
              <div key={index} className="text-2xl font-bold">{company}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const BenefitsSection = ({ data }) => (
  <section className="py-24 relative">
    <AiFillThunderbolt className="absolute top-[10%] right-[10%] text-purple-500/10 blur-md w-72 h-72 -z-10 opacity-15 animate-pulse" />

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl mb-6">
          Resultados que{" "}
          <span className="bg-gradient-to-l from-orange-400 to-indigo-900 text-transparent bg-clip-text">
            Impressionam
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">{data.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {data.items.map((benefit, index) => (
          <div
            key={index}
            className="text-center p-8 bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 rounded-2xl border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 hover:scale-105"
          >
            <div className={`${benefit.color} mb-6 flex justify-center transform transition-transform duration-300 hover:scale-110`}>
              {benefit.icon}
            </div>
            <h3 className="text-2xl font-bold text-zinc-900 mb-4">{benefit.title}</h3>
            <p className="text-gray-300">{benefit.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const FeaturesSection = ({ data }) => (
  <section className="py-24 bg-gradient-to-b from-zinc-900/20 to-black relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h2 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl mb-8">
            Recursos{" "}
            <span className="bg-gradient-to-l from-orange-400 to-indigo-900 text-transparent bg-clip-text">
              Poderosos
            </span>
          </h2>
          <p className="text-xl text-gray-300 mb-12">{data.subtitle}</p>

          <div className="space-y-6">
            {data.items.map((feature, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-gradient-to-r from-zinc-900/50 to-zinc-800/30 rounded-xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
              >
                <div className="text-indigo-400 flex-shrink-0 mt-1">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold text-zinc-900 text-lg mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="bg-gradient-to-br from-indigo-900/30 via-purple-800/20 to-orange-900/30 border-2 border-indigo-500/30 rounded-2xl p-8 backdrop-blur-sm">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">{data.demo.title}</h3>
              <div className="h-64 bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 rounded-lg border border-gray-600/50 flex items-center justify-center">
                <div className="text-center text-gray-400">
                  <FiBarChart className="w-16 h-16 mx-auto mb-4 text-indigo-400" />
                  <p>Preview interativo do dashboard</p>
                  <p className="text-sm mt-2">Dados atualizados automaticamente</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-3 gap-4 text-center">
              {data.demo.stats.map((stat, index) => (
                <div key={index} className="p-4 bg-black/30 rounded-lg border border-gray-600/30">
                  <div className={`text-2xl font-bold ${stat.color}`}>{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = ({ data }) => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % data.items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [data.items.length]);

  return (
    <section className="py-24 relative">
      <AiFillThunderbolt className="absolute bottom-[10%] left-[5%] text-indigo-500/10 w-96 h-96 -z-10 opacity-15 animate-pulse" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl mb-16">
          Clientes{" "}
          <span className="bg-gradient-to-l from-orange-400 to-indigo-900 text-transparent bg-clip-text">
            Satisfeitos
          </span>
        </h2>

        <div className="relative">
          <div className="bg-gradient-to-br from-indigo-900/30 via-purple-800/20 to-orange-900/30 border-2 border-indigo-500/30 rounded-2xl p-12 backdrop-blur-sm">
            <div className="flex justify-center mb-6">
              {[...Array(data.items[currentTestimonial].rating)].map((_, i) => (
                <AiFillStar key={i} className="w-6 h-6 text-orange-400" />
              ))}
            </div>

            <blockquote className="text-2xl font-medium text-zinc-900 mb-8 leading-relaxed">
              "{data.items[currentTestimonial].text}"
            </blockquote>

            <div>
              <div className="font-semibold text-zinc-900 text-lg">
                {data.items[currentTestimonial].name}
              </div>
              <div className="text-indigo-400">
                {data.items[currentTestimonial].position}
              </div>
              <div className="text-gray-400 text-sm">
                {data.items[currentTestimonial].company}
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {data.items.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index
                    ? "bg-indigo-500"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PricingSection = ({ data }) => (
  <section className="py-24 bg-gradient-to-b from-zinc-900/20 to-black relative">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl mb-6">
          Planos que{" "}
          <span className="bg-gradient-to-l from-orange-400 to-indigo-900 text-transparent bg-clip-text">
            Se Adaptam
          </span>
        </h2>
        <p className="text-xl text-gray-300 max-w-3xl mx-auto">{data.subtitle}</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {data.plans.map((plan, index) => (
          <div
            key={index}
            className={`relative p-8 rounded-2xl transition-all duration-300 hover:scale-105 ${
              plan.popular
                ? "bg-gradient-to-br from-indigo-900/40 via-purple-800/30 to-orange-900/40 border-2 border-indigo-500 shadow-2xl shadow-indigo-500/25"
                : "bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 border border-gray-700/50 hover:border-gray-600/70"
            }`}
          >
            {plan.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-zinc-900 text-sm font-bold px-4 py-2 rounded-full animate-pulse">
                  Mais Popular
                </div>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-zinc-900 mb-4">{plan.name}</h3>
              <div className="mb-6">
                <span className={`text-4xl font-extrabold ${
                  plan.popular
                    ? "bg-gradient-to-l from-orange-400 to-indigo-400 text-transparent bg-clip-text"
                    : "text-zinc-900"
                }`}>
                  {plan.price}
                </span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {plan.features.map((feature, featureIndex) => (
                <li key={featureIndex} className="flex items-center gap-3">
                  <AiOutlineCheckCircle className={`w-5 h-5 flex-shrink-0 ${
                    plan.popular ? "text-indigo-400" : "text-green-400"
                  }`} />
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              plan.popular
                ? "bg-gradient-to-tr from-indigo-400 via-indigo-600 to-indigo-900 text-zinc-900 border-2 border-indigo-500 hover:shadow-indigo-500/50"
                : "bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-900 text-zinc-900 border border-gray-500 hover:border-zinc-100 hover:bg-gradient-to-b from-zinc-400 via-zinc-600 to-zinc-900 hover:shadow-zinc-500/50"
            }`}>
              Começar Teste Grátis
            </button>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactForm = ({ onSubmit, isSubmitting }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-zinc-900 font-medium flex items-center gap-2">
            <FiUser className="w-4 h-4 text-indigo-400" />
            Nome *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            required
            className={`w-full p-4 bg-black/50 border rounded-lg text-zinc-900 placeholder-gray-400 transition-all duration-300 focus:outline-none ${
              focusedField === "name"
                ? "border-indigo-500 shadow-lg shadow-indigo-500/25"
                : "border-gray-600"
            }`}
            placeholder="Seu nome completo"
          />
        </div>

        <div className="space-y-2">
          <label className="text-zinc-900 font-medium flex items-center gap-2">
            <AiOutlineMail className="w-4 h-4 text-orange-400" />
            Email *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            required
            className={`w-full p-4 bg-black/50 border rounded-lg text-zinc-900 placeholder-gray-400 transition-all duration-300 focus:outline-none ${
              focusedField === "email"
                ? "border-orange-500 shadow-lg shadow-orange-500/25"
                : "border-gray-600"
            }`}
            placeholder="seu@email.com"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-zinc-900 font-medium flex items-center gap-2">
            <FiSettings className="w-4 h-4 text-purple-400" />
            Empresa *
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            onFocus={() => setFocusedField("company")}
            onBlur={() => setFocusedField(null)}
            required
            className={`w-full p-4 bg-black/50 border rounded-lg text-zinc-900 placeholder-gray-400 transition-all duration-300 focus:outline-none ${
              focusedField === "company"
                ? "border-purple-500 shadow-lg shadow-purple-500/25"
                : "border-gray-600"
            }`}
            placeholder="Nome da empresa"
          />
        </div>

        <div className="space-y-2">
          <label className="text-zinc-900 font-medium flex items-center gap-2">
            <AiOutlinePhone className="w-4 h-4 text-cyan-400" />
            Telefone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            onFocus={() => setFocusedField("phone")}
            onBlur={() => setFocusedField(null)}
            className={`w-full p-4 bg-black/50 border rounded-lg text-zinc-900 placeholder-gray-400 transition-all duration-300 focus:outline-none ${
              focusedField === "phone"
                ? "border-cyan-500 shadow-lg shadow-cyan-500/25"
                : "border-gray-600"
            }`}
            placeholder="(11) 99999-9999"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label className="text-zinc-900 font-medium flex items-center gap-2">
          <FiMessageSquare className="w-4 h-4 text-green-400" />
          Descreva seu desafio com dados *
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          onFocus={() => setFocusedField("message")}
          onBlur={() => setFocusedField(null)}
          required
          rows={4}
          className={`w-full p-4 bg-black/50 border rounded-lg text-zinc-900 placeholder-gray-400 transition-all duration-300 focus:outline-none resize-none ${
            focusedField === "message"
              ? "border-green-500 shadow-lg shadow-green-500/25"
              : "border-gray-600"
          }`}
          placeholder="Conte-nos sobre seus processos manuais de dados, relatórios que consome tempo, ou qualquer desafio que nossa automação pode resolver..."
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className={`w-full py-4 px-6 rounded-lg font-semibold text-zinc-900 transition-all duration-300 flex items-center justify-center gap-2 ${
          isSubmitting
            ? "bg-gray-600 cursor-not-allowed"
            : "bg-gradient-to-tr from-indigo-400 via-indigo-600 to-indigo-900 border-2 border-indigo-500 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50"
        }`}
      >
        {isSubmitting ? (
          <>
            <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            Enviando Proposta...
          </>
        ) : (
          <>
            Receber Proposta Gratuita
            <FiSend className="w-5 h-5" />
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        🔒 Seus dados estão seguros. Não compartilhamos com terceiros.
      </p>
    </form>
  );
};

const ContactSection = ({ data }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleFormSubmit = async (formData) => {
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Proposta enviada! Entraremos em contato em até 2 horas.");
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 relative">
      <AiFillThunderbolt className="absolute top-[10%] left-[10%] text-cyan-500/10 blur-md w-80 h-80 -z-10 opacity-15 animate-pulse" />
      <AiFillThunderbolt className="absolute bottom-[10%] right-[10%] text-orange-500/10 w-72 h-72 -z-10 opacity-20 animate-pulse" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-zinc-900 sm:text-5xl mb-6">
            Pronto para{" "}
            <span className="bg-gradient-to-l from-orange-400 to-indigo-900 text-transparent bg-clip-text">
              Transformar?
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">{data.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-indigo-900/30 via-purple-800/20 to-orange-900/30 border-2 border-indigo-500/30 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-zinc-900 mb-6">Fale com um Especialista</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <AiOutlinePhone className="w-6 h-6 text-indigo-400" />
                  <div>
                    <div className="font-semibold text-zinc-900">Telefone</div>
                    <div className="text-gray-300">{data.phone}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <AiOutlineMail className="w-6 h-6 text-orange-400" />
                  <div>
                    <div className="font-semibold text-zinc-900">Email</div>
                    <div className="text-gray-300">{data.email}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-6 bg-black/30 rounded-lg border border-gray-600/30">
                <h4 className="font-semibold text-zinc-900 mb-3">Garantias Incluídas:</h4>
                <ul className="space-y-2 text-sm text-gray-300">
                  {data.guarantees.map((guarantee, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <AiOutlineCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      {guarantee}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-zinc-900/80 via-zinc-800/60 to-zinc-900/80 border border-gray-700/50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-zinc-900 mb-6">
              Receba uma{" "}
              <span className="bg-gradient-to-l from-orange-400 to-indigo-400 text-transparent bg-clip-text">
                Proposta
              </span>
            </h3>
            <ContactForm onSubmit={handleFormSubmit} isSubmitting={isSubmitting} />
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-br from-indigo-900/20 via-purple-800/15 to-orange-900/20 border border-indigo-500/30 rounded-2xl">
          <h3 className="text-3xl font-bold text-zinc-900 mb-4">
            🌟 Seu Negócio no{" "}
            <span className="bg-gradient-to-l from-orange-400 to-indigo-900 text-transparent bg-clip-text">
              Topo do Google
            </span>
          </h3>
          <p className="text-gray-300 mb-6 max-w-3xl mx-auto text-lg">
            Junte-se a mais de 200 empresas que já transformaram sua presença digital conosco. 
            Sites profissionais que convertem e SEO que gera resultados reais.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center gap-2 text-zinc-900 border-2 border-indigo-500 bg-gradient-to-tr from-indigo-400 via-indigo-600 to-indigo-900 rounded-lg px-8 py-4 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50 font-semibold text-lg animate-pulse">
              <AiFillThunderbolt className="text-orange-600 w-6 h-6" />
              Criar Meu Site Agora
            </button>
            <button className="flex items-center gap-2 text-zinc-900 border border-gray-500 bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-900 rounded-lg px-8 py-4 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gradient-to-b from-zinc-400 via-zinc-600 to-zinc-900 hover:shadow-zinc-500/50 font-semibold">
              <FiDownload className="w-5 h-5" />
              Download Portfolio
            </button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <AiOutlineCheckCircle className="w-5 h-5 text-green-400" />
              Análise gratuita
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineCheckCircle className="w-5 h-5 text-green-400" />
              Site responsivo
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineCheckCircle className="w-5 h-5 text-green-400" />
              SEO otimizado
            </div>
            <div className="flex items-center gap-2">
              <AiOutlineCheckCircle className="w-5 h-5 text-green-400" />
              Suporte incluso
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = ({ data }) => (
  <footer className="bg-zinc-900/50 border-t border-gray-800 py-12">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <AiFillThunderbolt className="w-8 h-8 text-indigo-400" />
          <span className="text-2xl font-bold text-zinc-900">{data.companyName}</span>
        </div>
        <p className="text-gray-400 mb-8 max-w-2xl mx-auto">{data.description}</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4">Produto</h4>
            <ul className="space-y-2 text-gray-400">
              {data.links.product.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-indigo-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4">Empresa</h4>
            <ul className="space-y-2 text-gray-400">
              {data.links.company.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-indigo-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-zinc-900 mb-4">Suporte</h4>
            <ul className="space-y-2 text-gray-400">
              {data.links.support.map((link, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-indigo-400 transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © 2025 {data.companyName}. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {data.legal.map((link, index) => (
              <a key={index} href="#" className="text-gray-400 hover:text-indigo-400 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  </footer>
);

// Main App Component
const ModularLandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-black">
      <HeroSection data={mockData.hero} />
      <BenefitsSection data={mockData.benefits} />
      <FeaturesSection data={mockData.features} />
      <TestimonialsSection data={mockData.testimonials} />
      <PricingSection data={mockData.pricing} />
      <ContactSection data={mockData.contact} />
      <Footer data={mockData.footer} />
    </div>
  );
};

export default ModularLandingPage;