import SectionWrapper from "../../SectionWrapper";
import { SiN8N } from "react-icons/si";
import { FaWordpress } from "react-icons/fa";
import { RiNextjsFill } from "react-icons/ri";
import { LuBrainCircuit } from "react-icons/lu";
import { FcGoogle } from "react-icons/fc";
import { FaDocker } from "react-icons/fa";

const ToolKit = () => {
  const features = [
    {
      icon: <FaWordpress className="text-blue-700 w-12 h-12" />,
      title: "Wordpress",
      desc: "O WordPress é um sistema de gerenciamento de conteúdo (CMS) de código aberto. ( Usamos como CMS para blogs e sites de conteúdo conectando com Next.js ).",
    },
    {
      icon: <RiNextjsFill className="text-black w-12 h-12" />,
      title: "Next.js",
      desc: "Next.js é um framework React que fornece blocos de construção para criar aplicativos web.( Usamos para criar sites e aplicativos web dinâmicos e rápidos, todo o poder da personalização e o SEO ).",
    },
    {
      icon: <SiN8N className="text-pink-700 w-12 h-12" />,
      title: "N8N",
      desc: "N8N é uma plataforma de automação de fluxo de trabalho de código aberto que permite conectar diferentes aplicativos e serviços. ( Usamos para criar automações complexas e fluxos de trabalho personalizados, conectando APIs e serviços e agentes de IA).",
    },
    {
      icon: <LuBrainCircuit className="text-green-700 w-12 h-12" />,
      title: "Artificial Intelligence",
      desc: "Agentes de IA são sistemas que utilizam inteligência artificial para automatizar tarefas e processos. ( Usamos para criar soluções inteligentes que aprendem e se adaptam às necessidades do negócio, melhorando a eficiência e a tomada de decisões ).",
    },
    {
      icon: <FcGoogle className="w-12 h-12" />,
      title: "Apps Google",
      desc: "Integrações com Google Apps como Google Sheets, Google Drive e Google Calendar para automação e gestão de dados. ( Usamos para criar soluções que conectam e automatizam processos com os aplicativos do Google, facilitando a colaboração e a produtividade ).",
    },
    {
      icon: <FaDocker className="text-cyan-600 w-12 h-12" />,
      title: "Docker",
      desc: "Docker é uma plataforma de software que permite criar, implantar e executar aplicativos em contêineres. ( Usamos para empacotar aplicativos e suas dependências em contêineres, garantindo consistência e portabilidade entre ambientes ).",
    },
  ];

  return (
    <SectionWrapper>
      <div
        id="nossa-stack"
        className="max-w-screen-xl mx-auto px-4 text-white md:px-8"
      >
        <div className="mt-12">
          <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((item, idx) => (
              <li
                key={idx}
                className="flex gap-x-4 border p-4 rounded-lg border-[#272727] transition-colors
                bg-gray-500/10 hover:opacity-75 hover:bg-gradient-to-r hover:from-gray-900/20 hover:to-blue-500/20 hover:shadow-lg
                hover:border-blue-500 hover:scale-105 transition-transform duration-300 delay-100
                cursor-default"
              >
                <div
                  className="flex-none w-12 h-12 rounded-lg p-1 flex items-center justify-center
                bg-white"
                >
                  {item.icon}
                  {/* <Image alt={item.title} /> */}
                </div>
                <div>
                  <h4 className="text-lg text-white font-semibold">
                    {item.title}
                  </h4>
                  <p className="mt-3 text-zinc-400">{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ToolKit;
