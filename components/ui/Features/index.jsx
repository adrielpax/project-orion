import SectionWrapper from "../../SectionWrapper";
import { AiFillThunderbolt } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaFunnelDollar } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { RiVerifiedBadgeFill } from "react-icons/ri";

const Features = () => {
  const features = [
    {
      icon: <AiFillThunderbolt className="text-white w-6 h-6" />,
      title: "Automação de Processos",
      desc: "Conectamos suas ferramentas, eliminamos tarefas repetitivas e criamos fluxos inteligentes que economizam tempo e dinheiro, com agentes de IA ( Inteligencia Artificial ) que aprendem e se adaptam.",
    },
    {
      icon: <FaCode className="text-white w-6 h-6" />,
      title: "Tecnologia de Ponta",
      desc: "Utilizamos as mais recentes tecnologias de automação e IA para garantir que sua empresa esteja sempre à frente, com soluções escaláveis e personalizadas, tecnologias como Integrations, APIs e automações avançadas, N8N.",
    },
    {
      icon: <BsGraphUpArrow className="text-white w-6 h-6" />,
      title: "Gestão de Tráfego Pago e Organico",
      desc: "Gerenciamos suas campanhas de tráfego pago e orgânico, otimizando resultados e maximizando o retorno sobre investimento, com estratégias baseadas em dados e inteligência de mercado.",
    },
    {
      icon: <FaFunnelDollar className="text-white w-6 h-6" />,
      title: "Integrações e Funis Inteligentes",
      desc: "Criamos integrações personalizadas e funis de vendas inteligentes que conectam suas ferramentas e otimizam o fluxo de trabalho, garantindo uma experiência fluida para seus clientes e leads.",
    },
    {
      icon: <FaDatabase className="text-white w-6 h-6" />,
      title: "Gestão de Dados",
      desc: "Implementamos soluções de gestão de dados que permitem uma análise profunda e insights valiosos, ajudando sua empresa a tomar decisões informadas e estratégicas.",
    },
    {
      icon: <IoLogoWhatsapp className="text-white w-6 h-6" />,
      title: "Chatbots e Assistentes Virtuais e formulários",
      desc: "Implementamos soluções de gestão de dados que permitem uma análise profunda e insights valiosos, ajudando sua empresa a tomar decisões informadas e estratégicas.",
    },
  ];

  return (
    <SectionWrapper>
      <div id="solucoes" className="custom-screen text-white">
        <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item, idx) => (
            <li
              key={idx}
              className="space-y-3 border border-indigo-950 p-6 rounded-lg
              bg-gradient-to-br from-blue-950/30 via-indigo-500/10 to-blue-950/20
              hover:via-indigo-500/20 hover:to-indigo-950/60 transition-all duration-300 ease-in-out bg-transition hover:border-indigo-500/50
              cursor-default hover:shadow-lg hover:shadow-indigo-500/20 backdrop-blur-md relative"
            >
              <RiVerifiedBadgeFill className="absolute h-6 w-6 text-green-600" />

              <div className="w-12 h-12 border text-white rounded-full flex items-center justify-center border border-gray-500 ">
                {item.icon}
              </div>
              <h4 className="flex items-center gap-2 text-lg text-white font-semibold">
                {item.title}
              </h4>
              <p>{item.desc}</p>
            </li>
          ))}
        </ul>
        <div>
          <div className="absolute -z-10 inset-0 top-[20%] left-[10%] rounded-full blur-3xl bg-indigo-500 w-40 h-40"></div>
          <div className="absolute -z-10 right-[10%] top-[40%] rounded-full blur-3xl bg-yellow-500 w-40 h-40"></div>
          <div className="absolute -z-10 right-[20%] top-[9%] rounded-full blur-3xl bg-cyan-500 w-40 h-40"></div>
          <div className="absolute left-[20%] top-[60%] rounded-full blur-3xl bg-green-500 w-32 h-32"></div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Features;
