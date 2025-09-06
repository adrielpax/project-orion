import { useState } from "react";
import {
  AiFillThunderbolt,
  AiOutlineCheckCircle,
  AiFillStar,
} from "react-icons/ai";
import { FiSettings, FiTrendingUp, FiBarChart, FiCpu } from "react-icons/fi";

const ServicesSection = ({
  title = "Nossos Serviços",
  subtitle = "Soluções completas para transformar seu negócio",
}) => {
  const [hoveredService, setHoveredService] = useState(null);

  const services = [
    {
      id: 1,
      icon: <FiCpu className="w-8 h-8" />,
      title: "Automação com IA",
      description:
        "Sistemas inteligentes que automatizam processos complexos e aumentam a eficiência operacional.",
      features: [
        "Chatbots Inteligentes",
        "Automação de Processos",
        "Integração APIs",
        "Análise Preditiva",
      ],
      price: "A partir de R$ 2.500",
      priceDetail: "/mês",
      popular: true,
      color: "indigo",
    },
    // {
    //   id: 1,
    //   icon: <FiCpu className="w-8 h-8" />,
    //   title: "Automação com IA",
    //   description:
    //     "Sistemas inteligentes que automatizam processos complexos e aumentam a eficiência operacional.",
    //   features: [
    //     "Chatbots Inteligentes",
    //     "Automação de Processos",
    //     "Integração APIs",
    //     "Análise Preditiva",
    //   ],
    //   price: "A partir de R$ 2.500",
    //   priceDetail: "/mês",
    //   popular: true,
    //   color: "indigo",
    // },
    // {
    //   id: 2,
    //   icon: <FiTrendingUp className="w-8 h-8" />,
    //   title: "Marketing Digital",
    //   description:
    //     "Estratégias de marketing digital personalizadas com foco em conversão e ROI.",
    //   features: [
    //     "Campanhas Google Ads",
    //     "Social Media",
    //     "SEO/SEM",
    //     "Email Marketing",
    //   ],
    //   price: "A partir de R$ 1.800",
    //   priceDetail: "/mês",
    //   popular: false,
    //   color: "orange",
    // },
    // {
    //   id: 3,
    //   icon: <FiBarChart className="w-8 h-8" />,
    //   title: "Analytics & BI",
    //   description:
    //     "Dashboards inteligentes e análises avançadas para tomada de decisões estratégicas.",
    //   features: [
    //     "Dashboards Customizados",
    //     "Relatórios Automáticos",
    //     "KPIs em Tempo Real",
    //     "Data Mining",
    //   ],
    //   price: "A partir de R$ 3.200",
    //   priceDetail: "/mês",
    //   popular: false,
    //   color: "cyan",
    // },
    // {
    //   id: 4,
    //   icon: <FiSettings className="w-8 h-8" />,
    //   title: "Desenvolvimento Web",
    //   description:
    //     "Aplicações web modernas, responsivas e otimizadas para performance e conversão.",
    //   features: ["Sites Responsivos", "E-commerce", "Sistemas Web", "PWA"],
    //   price: "A partir de R$ 5.500",
    //   priceDetail: "/projeto",
    //   popular: false,
    //   color: "purple",
    // },
    // {
    //   id: 5,
    //   icon: <FiCpu className="w-8 h-8" />,
    //   title: "Consultoria Tech",
    //   description:
    //     "Consultoria especializada em transformação digital e otimização de processos tecnológicos.",
    //   features: [
    //     "Auditoria Técnica",
    //     "Estratégia Digital",
    //     "Treinamentos",
    //     "Suporte Contínuo",
    //   ],
    //   price: "A partir de R$ 280",
    //   priceDetail: "/hora",
    //   popular: false,
    //   color: "green",
    // },
    // {
    //   id: 6,
    //   icon: <AiFillThunderbolt className="w-8 h-8" />,
    //   title: "Pacote Completo",
    //   description:
    //     "Solução completa incluindo automação, marketing digital e analytics em um pacote integrado.",
    //   features: [
    //     "Todos os Serviços",
    //     "Suporte 24/7",
    //     "Reuniões Semanais",
    //     "Relatórios Mensais",
    //   ],
    //   price: "A partir de R$ 6.800",
    //   priceDetail: "/mês",
    //   popular: true,
    //   color: "gradient",
    // },
  ];

  const getColorClasses = (color, isHovered) => {
    const colors = {
      indigo: {
        border: isHovered ? "border-indigo-400" : "border-indigo-600/50",
        bg: isHovered
          ? "from-indigo-900/40 via-indigo-800/30 to-indigo-900/40"
          : "from-indigo-900/20 via-indigo-800/15 to-indigo-900/20",
        icon: "text-indigo-400",
        price: "from-indigo-400 to-indigo-600",
      },
      orange: {
        border: isHovered ? "border-orange-400" : "border-orange-600/50",
        bg: isHovered
          ? "from-orange-900/40 via-orange-800/30 to-orange-900/40"
          : "from-orange-900/20 via-orange-800/15 to-orange-900/20",
        icon: "text-orange-400",
        price: "from-orange-400 to-orange-600",
      },
      cyan: {
        border: isHovered ? "border-cyan-400" : "border-cyan-600/50",
        bg: isHovered
          ? "from-cyan-900/40 via-cyan-800/30 to-cyan-900/40"
          : "from-cyan-900/20 via-cyan-800/15 to-cyan-900/20",
        icon: "text-cyan-400",
        price: "from-cyan-400 to-cyan-600",
      },
      purple: {
        border: isHovered ? "border-purple-400" : "border-purple-600/50",
        bg: isHovered
          ? "from-purple-900/40 via-purple-800/30 to-purple-900/40"
          : "from-purple-900/20 via-purple-800/15 to-purple-900/20",
        icon: "text-purple-400",
        price: "from-purple-400 to-purple-600",
      },
      green: {
        border: isHovered ? "border-green-400" : "border-green-600/50",
        bg: isHovered
          ? "from-green-900/40 via-green-800/30 to-green-900/40"
          : "from-green-900/20 via-green-800/15 to-green-900/20",
        icon: "text-green-400",
        price: "from-green-400 to-green-600",
      },
      gradient: {
        border: isHovered ? "border-indigo-400" : "border-indigo-600/50",
        bg: isHovered
          ? "from-indigo-900/40 via-purple-800/30 to-orange-900/40"
          : "from-indigo-900/20 via-purple-800/15 to-orange-900/20",
        icon: "text-orange-400",
        price: "from-orange-400 to-indigo-600",
      },
    };
    return colors[color] || colors.indigo;
  };

  return (
    <section className="relative overflow-hidden z-0">
      {/* Background Effects */}
      <AiFillThunderbolt className="absolute top-[5%] right-[10%] text-indigo-500/10 blur-md w-72 h-72 -z-10 opacity-15 animate-pulse" />
      <AiFillThunderbolt className="absolute bottom-[15%] left-[5%] text-orange-500/10 w-64 h-64 -z-10 opacity-20 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-white relative z-10">
        {/* Header */}
        <div className="text-center space-y-5 max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="bg-gradient-to-l from-orange-400 to-indigo-900 text-transparent bg-clip-text font-bold">
              {title.split(" ").slice(-1)}
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-300">{subtitle}</p>
        </div>

        {/* Services Grid */}
        <div className={`grid grid-cols-1 ${services.length <= 0 && "md:grid-cols-2 lg:grid-cols-3"} gap-8 mb-16`}>
          {services.map((service) => {
            const isHovered = hoveredService === service.id;
            const colorClasses = getColorClasses(service.color, isHovered);

            return (
              <div
                key={service.id}
                className={`relative mx-auto w-[380px] group p-8 rounded-xl transition-all duration-500 transform hover:scale-105 border-2 ${
                  service.popular
                    ? "bg-gradient-to-br from-indigo-900/40 via-purple-800/30 to-orange-900/40 border-indigo-500"
                    : `bg-gradient-to-br ${colorClasses.bg} ${colorClasses.border}`
                } hover:shadow-2xl`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="flex items-center gap-1 bg-gradient-to-r from-orange-400 to-orange-600 text-white text-xs font-bold px-4 py-2 rounded-full animate-pulse">
                      <AiFillStar className="w-3 h-3" />
                      Mais Popular
                    </div>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`${
                    colorClasses.icon
                  } mb-6 transform transition-transform duration-300 ${
                    isHovered ? "scale-110 rotate-12" : ""
                  }`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-l group-hover:from-orange-400 group-hover:to-indigo-400 group-hover:bg-clip-text transition-all duration-300">
                    {service.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-300"
                      >
                        <AiOutlineCheckCircle
                          className={`w-4 h-4 ${colorClasses.icon} flex-shrink-0`}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="pt-4 border-t border-gray-700">
                    <div
                      className={`text-2xl font-bold bg-gradient-to-r ${colorClasses.price} text-transparent bg-clip-text`}
                    >
                      {service.price}
                    </div>
                    <div className="text-sm text-gray-400">
                      {service.priceDetail}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full mt-6 py-3 px-6 rounded-lg font-medium text-sm transition-all duration-300 ${
                      service.popular
                        ? "bg-gradient-to-tr from-indigo-400 via-indigo-600 to-indigo-900 text-white border-2 border-indigo-500 hover:shadow-indigo-500/50"
                        : "bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-900 text-white border border-gray-500 hover:border-zinc-100 hover:bg-gradient-to-b from-zinc-400 via-zinc-600 to-zinc-900 hover:shadow-zinc-500/50"
                    } hover:scale-105 hover:shadow-xl`}
                  >
                    Solicitar Orçamento
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA Final */}
        <div className="text-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white">
              Não encontrou o que procura?{" "}
              <span className="bg-gradient-to-l from-orange-400 to-indigo-900 text-transparent bg-clip-text">
                Vamos conversar!
              </span>
            </h3>
            <p className="text-gray-300 max-w-xl mx-auto">
              Criamos soluções personalizadas para atender às necessidades
              específicas do seu negócio.
            </p>
            <button className="text-white border-2 border-indigo-500 bg-gradient-to-tr from-indigo-400 via-indigo-600 to-indigo-900 rounded-lg px-8 py-3 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50 font-medium">
              Falar com Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
