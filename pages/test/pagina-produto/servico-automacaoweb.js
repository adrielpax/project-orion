import { useState, useEffect } from "react";
import NavLink from "../../../components/ui/NavLink";
import Hero from "../../../components/ui/Hero";
import StepByStep from "../../../components/StepByStep";
import { FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { SiCloudflarepages } from "react-icons/si";
import { BsStars } from "react-icons/bs";
import { FaWhatsappSquare } from "react-icons/fa";
import Sobre from "../../../components/ui/About";
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

const DataAutomationLanding = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  // Hero Section Typewriter Effect
  const [displayedText, setDisplayedText] = useState("");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const words = ["Processos de Dados", "Relatórios", "Dashboards", "Análises"];

  // useEffect(() => {
  //   const currentWord = words[currentWordIndex];
  //   let index = 0;

  //   const typeInterval = setInterval(() => {
  //     if (index < currentWord.length) {
  //       setDisplayedText(currentWord.substring(0, index + 1));
  //       index++;
  //     } else {
  //       setTimeout(() => {
  //         // Clear text
  //         const clearInterval = setInterval(() => {
  //           setDisplayedText(currentWord.substring(0, index));
  //           index--;
  //           if (index < 0) {
  //             clearInterval(clearInterval);
  //             setCurrentWordIndex((prev) => (prev + 1) % words.length);
  //           }
  //         }, 100);
  //       }, 2000);
  //       clearInterval(typeInterval);
  //     }
  //   }, 150);

  //   return () => clearInterval(typeInterval);
  // }, [currentWordIndex]);

  // Testimonials
  const hero_section = {
    star_title: "impulsione sua empresa com",
    end_title: [
      "Automação de Processos",
      "Tráfego e SEO Inteligente",
      "Agentes de IAs",
      "Marketing Branding",
      "Sites e Web Development",
    ],
    // end_title: "automação e tráfego inteligente com agentes de IA",
    impact_text:
      "👉 “A CLICK LAB automatiza processos para pequenos negócios e empresas, integrando WhatsApp, planilhas, sistemas e vendas em um só fluxo.”",
    CTA_buttons: true,
  };

  const testimonials = [
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
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Form handling
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert("Proposta enviada! Entraremos em contato em até 2 horas.");
    setFormData({ name: "", email: "", company: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const benefits = [
    {
      icon: <FiClock className="w-8 h-8" />,
      title: "90% Menos Tempo",
      description:
        "Reduza drasticamente o tempo gasto em tarefas manuais de dados",
      color: "text-cyan-400",
    },
    {
      icon: <FiTrendingUp className="w-8 h-8" />,
      title: "300% Mais Produtividade",
      description:
        "Sua equipe focará em análises estratégicas ao invés de coleta manual",
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
  ];

  const features = [
    {
      icon: <FiDatabase className="w-6 h-6" />,
      title: "Integração Fonte de Dados",
      description: "Conecte Google Sheets, Supabase e APIs",
    },
    {
      icon: <BsStars className="w-6 h-6" />,
      title: "Inteligencia Artificial",
      description: "Entrega com o que há de melhor no mercado",
    },
    {
      icon: <SiCloudflarepages className="w-6 h-6" />,
      title: "Super Pagina",
      description: "Sua Pagina com um Plus",
    },
    {
      icon: <FaInstagram className="w-6 h-6" />,
      title: "Redes Sociais Automatizadas",
      description: "Leads, conversas, atendimento",
    },
    // {
    //   icon: <FiTarget className="w-6 h-6" />,
    //   title: "Alertas Inteligentes",
    //   description: "Notificações automáticas baseadas em KPIs críticos",
    // },
    // {
    //   icon: <FiShield className="w-6 h-6" />,
    //   title: "Segurança com seus Dados",
    //   description: "Criptografia avançada e compliance com LGPD",
    // },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "Free ou 19,90",
      period: "/mês",
      popular: false,
      features: [
        "Automação para Google Sheets",
        "Automação de mensagens para o Instagram",
        "Acesso a IA que gera POSTs (ate 5 Posts por dia)",
        "Chatbot para seu WhatsApp",
        "LinkTree - Free",
        "SEO para seu Google Negocios",
      ],
    },
    {
      name: "Avançe",
      price: "R$ 47",
      period: "/mês",
      popular: true,
      features: [
        "Tudo do plano Start",
        "AI de POSTs( 100 posts diarios )",
        "AI para seu Whatsapp bussines",
        "Automação de Processo ja Existente",

        // "Fontes de dados ilimitadas",
        // "Dashboards ilimitados",
        // "BI avançado com IA",
        // "Suporte prioritário",
        // "Atualizações em tempo real",
        // "Alertas personalizados",
        // "Treinamento da equipe",
      ],
    },
    {
      name: "Stark",
      price: "R$ 97",
      period: "/mês",
      popular: false,
      features: [
        "Tudo do Professional",
        "Servidor dedicado",
        "Customizações ilimitadas",
        "Gerente de conta dedicado",
        "Integração white-label",
        "Consultoria estratégica",
      ],
    },
  ];

  return (
    <div className=" min-h-screen z-0">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <AiFillThunderbolt className="absolute top-[10%] left-[20%] text-cyan-500/10 blur-md w-96 h-96 -z-10 opacity-20 animate-pulse" />
        <AiFillThunderbolt className="absolute bottom-[20%] right-[15%] text-yellow-500/10 w-80 h-80 -z-10 opacity-20 animate-pulse" />

        <Hero
          star_title={hero_section.star_title}
          end_title={hero_section.end_title}
          impact_text={hero_section.impact_text}
          CTA_buttons={hero_section.CTA_buttons}
        />
      </section>

      {/* Benefits Section */}
      <section className="py-24 relative bg-transparent">
        <AiFillThunderbolt className="absolute top-[10%] right-[10%] text-purple-500/10 blur-md w-72 h-72 -z-10 opacity-15 animate-pulse" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-6">
              Resultados que{" "}
              <span className="bg-gradient-to-l from-orange-400 to-indigo-900 text-transparent bg-clip-text">
                Impressionam
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Veja os benefícios reais que nossos clientes alcançaram em apenas
              30 dias
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center p-8 bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 rounded-2xl border border-gray-700/50 hover:border-gray-600/70 transition-all duration-300 hover:scale-105"
              >
                <div
                  className={`${benefit.color} mb-6 flex justify-center transform transition-transform duration-300 hover:scale-110`}
                >
                  {benefit.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 relative bg-transparent">
        <StepByStep />
        <div className="flex justify-center items-center w-full mx-auto my-6 py-6">
          <NavLink
            href="/pagina-produto/page-two"
            className="flex flex-row items-center gap-2 text-white border-2 border-indigo-500 bg-gradient-to-tr 
            rounded-lg px-6 py-3 shadow-lg transition-all duration-300 ease-in-out active:bg-indigo-100 
            hover:text-white hover:border-indigo-100 hover:scale-105 hover:shadow-xl 
            hover:bg-gradient-to-b from-indigo-400 via-indigo-600 to-indigo-900 
            hover:shadow-indigo-500/50 animate-pulse
          "
          >
             Começar Agora
            <AiFillThunderbolt className="text-cyan-600 w-6 h-6" />
          </NavLink>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-transparent relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-8">
                Recursos{" "}
                <span className="bg-gradient-to-l from-orange-400 to-indigo-900 text-transparent bg-clip-text">
                  Poderosos
                </span>
              </h2>
              <p className="text-xl text-gray-300 mb-12">
                Uma plataforma completa que revoluciona como você trabalha com
                dados
              </p>

              <div className="space-y-6">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-6 bg-gradient-to-r from-zinc-900/50 to-zinc-800/30 rounded-xl border border-gray-700/30 hover:border-gray-600/50 transition-all duration-300"
                  >
                    <div className="text-indigo-400 flex-shrink-0 mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-white text-lg mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-indigo-900/30 via-purple-800/20 to-orange-900/30 border-2 border-indigo-500/30 rounded-2xl p-8 backdrop-blur-sm">
                {/* <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Dashboard em Tempo Real 
                  </h3>
                  <div className="h-64 bg-gradient-to-br from-zinc-900/80 to-zinc-800/60 rounded-lg border border-gray-600/50 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <FiBarChart className="w-16 h-16 mx-auto mb-4 text-indigo-400" />
                      <p>Preview interativo do dashboard</p>
                      <p className="text-sm mt-2">
                        Dados atualizados automaticamente
                      </p>
                    </div>
                  </div>
                </div> */}
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="p-4 bg-black/30 rounded-lg border border-gray-600/30">
                    <div className="text-2xl font-bold text-green-400">
                      98.7%
                    </div>
                    <div className="text-sm text-gray-400">Precisão</div>
                  </div>
                  <div className="p-4 bg-black/30 rounded-lg border border-gray-600/30">
                    <div className="text-2xl font-bold text-cyan-400">2.3s</div>
                    <div className="text-sm text-gray-400">Velocidade</div>
                  </div>
                  <div className="p-4 bg-black/30 rounded-lg border border-gray-600/30">
                    <div className="text-2xl font-bold text-orange-400">
                      24/7
                    </div>
                    <div className="text-sm text-gray-400">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Sobre />

      {/* Testimonials Section */}
      <section className="py-24 relative">
        <AiFillThunderbolt className="absolute bottom-[10%] left-[5%] text-indigo-500/10 w-96 h-96 -z-10 opacity-15 animate-pulse" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-16">
            Clientes{" "}
            <span className="bg-gradient-to-l from-orange-400 to-indigo-900 text-transparent bg-clip-text">
              Satisfeitos
            </span>
          </h2>

          <div className="relative">
            <div className="bg-gradient-to-br from-indigo-900/30 via-purple-800/20 to-orange-900/30 border-2 border-indigo-500/30 rounded-2xl p-12 backdrop-blur-sm">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map(
                  (_, i) => (
                    <AiFillStar key={i} className="w-6 h-6 text-orange-400" />
                  )
                )}
              </div>

              <blockquote className="text-2xl font-medium text-white mb-8 leading-relaxed">
                "{testimonials[currentTestimonial].text}"
              </blockquote>

              <div>
                <div className="font-semibold text-white text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-indigo-400">
                  {testimonials[currentTestimonial].position}
                </div>
                <div className="text-gray-400 text-sm">
                  {testimonials[currentTestimonial].company}
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
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

      {/* Pricing Section */}
      <section className="py-24 bg-gradient-to-b from-zinc-900/20 to-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-6">
              Planos que{" "}
              <span className="bg-gradient-to-l from-orange-400 to-indigo-900 text-transparent bg-clip-text">
                Se Adaptam
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Escolha o plano ideal para o seu negócio. Teste grátis por 30
              dias, cancele quando quiser.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
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
                    <div className="bg-gradient-to-r from-orange-400 to-orange-600 text-white text-sm font-bold px-4 py-2 rounded-full animate-pulse">
                      Mais Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {plan.name}
                  </h3>
                  <div className="mb-6">
                    <span
                      className={`text-4xl font-extrabold ${
                        plan.popular
                          ? "bg-gradient-to-l from-orange-400 to-indigo-400 text-transparent bg-clip-text"
                          : "text-white"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <AiOutlineCheckCircle
                        className={`w-5 h-5 flex-shrink-0 ${
                          plan.popular ? "text-indigo-400" : "text-green-400"
                        }`}
                      />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-4 px-6 rounded-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                    plan.popular
                      ? "bg-gradient-to-tr from-indigo-400 via-indigo-600 to-indigo-900 text-white border-2 border-indigo-500 hover:shadow-indigo-500/50"
                      : "bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-900 text-white border border-gray-500 hover:border-zinc-100 hover:bg-gradient-to-b from-zinc-400 via-zinc-600 to-zinc-900 hover:shadow-zinc-500/50"
                  }`}
                >
                  Começar Teste Grátis
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <p className="text-gray-300 mb-6">
              Precisa de algo personalizado? Nossa equipe de especialistas pode
              criar uma solução sob medida.
            </p>
            <button className="text-white border-2 border-indigo-500 bg-gradient-to-tr from-indigo-400 via-indigo-600 to-indigo-900 rounded-lg px-8 py-3 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50 font-semibold">
              Solicitar Proposta Enterprise
            </button>
          </div>
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section className="py-24 relative">
        <AiFillThunderbolt className="absolute top-[10%] left-[10%] text-cyan-500/10 blur-md w-80 h-80 -z-10 opacity-15 animate-pulse" />
        <AiFillThunderbolt className="absolute bottom-[10%] right-[10%] text-orange-500/10 w-72 h-72 -z-10 opacity-20 animate-pulse" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-6">
              Pronto para{" "}
              <span className="bg-gradient-to-l from-orange-400 to-indigo-900 text-transparent bg-clip-text">
                Transformar?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Fale com nossos especialistas e receba uma proposta personalizada
              em até 2 horas
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-indigo-900/30 via-purple-800/20 to-orange-900/30 border-2 border-indigo-500/30 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Fale com um Especialista
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <AiOutlinePhone className="w-6 h-6 text-indigo-400" />
                    <div>
                      <div className="font-semibold text-white">Telefone</div>
                      <div className="text-gray-300">(11) 99999-9999</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <AiOutlineMail className="w-6 h-6 text-orange-400" />
                    <div>
                      <div className="font-semibold text-white">Email</div>
                      <div className="text-gray-300">
                        automacao@suaempresa.com
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-black/30 rounded-lg border border-gray-600/30">
                  <h4 className="font-semibold text-white mb-3">
                    Garantias Incluídas:
                  </h4>
                  <ul className="space-y-2 text-sm text-gray-300">
                    <li className="flex items-center gap-2">
                      <AiOutlineCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      30 dias de teste grátis
                    </li>
                    <li className="flex items-center gap-2">
                      <AiOutlineCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      Implementação em até 7 dias
                    </li>
                    <li className="flex items-center gap-2">
                      <AiOutlineCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      ROI garantido ou dinheiro de volta
                    </li>
                    <li className="flex items-center gap-2">
                      <AiOutlineCheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      Suporte 24/7 incluso
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-zinc-900/80 via-zinc-800/60 to-zinc-900/80 border border-gray-700/50 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">
                Receba uma{" "}
                <span className="bg-gradient-to-l from-orange-400 to-indigo-400 text-transparent bg-clip-text">
                  Proposta
                </span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-white font-medium flex items-center gap-2">
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
                      className={`w-full p-4 bg-black/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                        focusedField === "name"
                          ? "border-indigo-500 shadow-lg shadow-indigo-500/25"
                          : "border-gray-600"
                      }`}
                      placeholder="Seu nome completo"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white font-medium flex items-center gap-2">
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
                      className={`w-full p-4 bg-black/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
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
                    <label className="text-white font-medium flex items-center gap-2">
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
                      className={`w-full p-4 bg-black/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                        focusedField === "company"
                          ? "border-purple-500 shadow-lg shadow-purple-500/25"
                          : "border-gray-600"
                      }`}
                      placeholder="Nome da empresa"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-white font-medium flex items-center gap-2">
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
                      className={`w-full p-4 bg-black/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                        focusedField === "phone"
                          ? "border-cyan-500 shadow-lg shadow-cyan-500/25"
                          : "border-gray-600"
                      }`}
                      placeholder="(11) 99999-9999"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-white font-medium flex items-center gap-2">
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
                    className={`w-full p-4 bg-black/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none resize-none ${
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
                  className={`w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 ${
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
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16 p-8 bg-gradient-to-br from-indigo-900/20 via-purple-800/15 to-orange-900/20 border border-indigo-500/30 rounded-2xl">
            <h3 className="text-3xl font-bold text-white mb-4">
              💡 Transformação em{" "}
              <span className="bg-gradient-to-l from-orange-400 to-indigo-900 text-transparent bg-clip-text">
                30 Dias
              </span>
            </h3>
            <p className="text-gray-300 mb-6 max-w-3xl mx-auto text-lg">
              Junte-se a mais de 500 empresas que já automatizaram seus dados e
              aumentaram a produtividade em 300%. Implementação rápida,
              resultados garantidos.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="flex items-center gap-2 text-white border-2 border-indigo-500 bg-gradient-to-tr from-indigo-400 via-indigo-600 to-indigo-900 rounded-lg px-8 py-4 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50 font-semibold text-lg animate-pulse">
                <AiFillThunderbolt className="text-orange-600 w-6 h-6" />
                Começar Teste Grátis Agora
              </button>
              <button className="flex items-center gap-2 text-white border border-gray-500 bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-900 rounded-lg px-8 py-4 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gradient-to-b from-zinc-400 via-zinc-600 to-zinc-900 hover:shadow-zinc-500/50 font-semibold">
                <FiDownload className="w-5 h-5" />
                Baixar Caso de Sucesso
              </button>
            </div>

            <div className="mt-8 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <AiOutlineCheckCircle className="w-5 h-5 text-green-400" />
                Setup gratuito
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineCheckCircle className="w-5 h-5 text-green-400" />
                Treinamento incluso
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineCheckCircle className="w-5 h-5 text-green-400" />
                Suporte especializado
              </div>
              <div className="flex items-center gap-2">
                <AiOutlineCheckCircle className="w-5 h-5 text-green-400" />
                ROI garantido
              </div>
            </div>
          </div>
        </div>
        <Link
          href={
            "https://wa.me/5531991097507?text=Ola%20vi%20o%20site%20da%20CLICK LAB%2C%20gostaria%20de%20um%20servi%C3%A7o%2Fproduto%2C%20como%20podemos%20proseguir%20%3F"
          }
          className="fixed bottom-4 right-6 rounded-lg  p-0 m-0 z-10"
        >
          <FaWhatsappSquare className="text-green-500 w-12 h-12 bg-white rounded-lg border-indigo-500 border" />
        </Link>
      </section>

      {/* Footer */}
      {/* <footer className="bg-zinc-900/50 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <AiFillThunderbolt className="w-8 h-8 text-indigo-400" />
              <span className="text-2xl font-bold text-white">
                AutomationPro
              </span>
            </div>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Transformando empresas através da automação inteligente de dados.
              Mais de 500 clientes satisfeitos e milhões de horas economizadas.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-semibold text-white mb-4">Produto</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-indigo-400 transition-colors"
                    >
                      Recursos
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-indigo-400 transition-colors"
                    >
                      Preços
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-indigo-400 transition-colors"
                    >
                      Demonstração
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-indigo-400 transition-colors"
                    >
                      API
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Empresa</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-indigo-400 transition-colors"
                    >
                      Sobre
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-indigo-400 transition-colors"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-indigo-400 transition-colors"
                    >
                      Carreiras
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-indigo-400 transition-colors"
                    >
                      Contato
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-white mb-4">Suporte</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>
                    <a
                      href="#"
                      className="hover:text-indigo-400 transition-colors"
                    >
                      Central de Ajuda
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-indigo-400 transition-colors"
                    >
                      Documentação
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-indigo-400 transition-colors"
                    >
                      Status
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="hover:text-indigo-400 transition-colors"
                    >
                      Segurança
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-500 text-sm">
                © 2025 AutomationPro. Todos os direitos reservados.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  Termos de Uso
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  Privacidade
                </a>
                <a
                  href="#"
                  className="text-gray-400 hover:text-indigo-400 transition-colors"
                >
                  LGPD
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer> */}
    </div>
  );
};

export default DataAutomationLanding;
