import Link from "next/link";
import { useState } from "react";
import {
  AiFillThunderbolt,
  AiOutlineEye,
  AiOutlineGithub,
} from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";

const ProjectGallery = ({
  title = "Nossos Projetos",
  subtitle = "Soluções inovadoras que transformam negócios",
  projects = [],
}) => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState(null);

  // Dados de exemplo se nenhum projeto for passado   image: "https://media.shellypalmer.com/wp-content/images/2025/02/google-ai.jpg",
  const defaultProjects = [
  
    // {
    //   id: 1,
    //   title: "Automação E-commerce",
    //   description:
    //     "Sistema completo de automação para vendas online com IA integrada para otimização de conversões.",
    //   image:
    //     "https://media.shellypalmer.com/wp-content/images/2025/02/google-ai.jpg",
    //   category: "automation",
    //   tags: ["Next.js", "IA", "E-commerce"],
    //   demoUrl: "#",
    //   githubUrl: "#",
    //   featured: true,
    // },
    // {
    //   id: 2,
    //   title: "Dashboard Analytics",
    //   description:
    //     "Painel inteligente para análise de tráfego e performance com insights em tempo real.",
    //   image:
    //     "https://media.shellypalmer.com/wp-content/images/2025/02/google-ai.jpg",
    //   category: "analytics",
    //   tags: ["React", "Dashboard", "Analytics"],
    //   demoUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
    // {
    //   id: 3,
    //   title: "Chatbot IA",
    //   description:
    //     "Assistente virtual inteligente para atendimento ao cliente com processamento de linguagem natural.",
    //   image:
    //     "https://media.shellypalmer.com/wp-content/images/2025/02/google-ai.jpg",
    //   category: "ai",
    //   tags: ["IA", "Chatbot", "NLP"],
    //   demoUrl: "#",
    //   githubUrl: "#",
    //   featured: true,
    // },
    // {
    //   id: 4,
    //   title: "CRM Inteligente",
    //   description:
    //     "Sistema de gestão de relacionamento com clientes potencializado por inteligência artificial.",
    //   image:
    //     "https://media.shellypalmer.com/wp-content/images/2025/02/google-ai.jpg",
    //   category: "automation",
    //   tags: ["CRM", "IA", "Automação"],
    //   demoUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
    // {
    //   id: 5,
    //   title: "Marketing Automation",
    //   description:
    //     "Plataforma de automação de marketing com segmentação inteligente e campanhas otimizadas.",
    //   image:
    //     "https://media.shellypalmer.com/wp-content/images/2025/02/google-ai.jpg",
    //   category: "marketing",
    //   tags: ["Marketing", "Automação", "Campanhas"],
    //   demoUrl: "#",
    //   githubUrl: "#",
    //   featured: false,
    // },
    // {
    //   id: 6,
    //   title: "Análise Preditiva",
    //   description:
    //     "Ferramenta de análise preditiva para forecasting de vendas e tendências de mercado.",
    //   image:
    //     "https://media.shellypalmer.com/wp-content/images/2025/02/google-ai.jpg",
    //   category: "analytics",
    //   tags: ["Análise", "Predição", "Machine Learning"],
    //   demoUrl: "#",
    //   githubUrl: "#",
    //   featured: true,
    // },
  ];

  const projectsData = projects.length > 0 ? projects : defaultProjects;

  const categories = [
    { id: "all", label: "Todos" },
    { id: "automation", label: "Automação" },
    { id: "ai", label: "Inteligência Artificial" },
    { id: "analytics", label: "Analytics" },
    { id: "marketing", label: "Marketing" },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projectsData
      : projectsData.filter((project) => project.category === activeFilter);

  return (
    <section className="min-h-screen relative overflow-hidden z-0">
      {/* Background Effects */}
      <AiFillThunderbolt className="absolute top-[10%] left-[20%] text-cyan-500/10 blur-md w-64 h-64 -z-10 opacity-20 animate-pulse" />
      <AiFillThunderbolt className="absolute bottom-[20%] right-[15%] text-yellow-500/10 w-80 h-80 -z-10 opacity-20 animate-pulse" />
      <AiFillThunderbolt className="absolute top-[60%] left-[70%] text-indigo-500/10 blur-md w-72 h-72 -z-10 opacity-15 animate-pulse" />

      <div className="custom-screen py-28 text-zinc-900 relative z-10">
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

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-lg font-medium text-sm transition-all duration-300 ease-in-out ${
                activeFilter === category.id
                  ? "text-zinc-900 border-2 border-indigo-500 bg-gradient-to-tr from-indigo-400 via-indigo-600 to-indigo-900 shadow-lg hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50"
                  : "text-zinc-900 border border-gray-500 bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-900 hover:border-zinc-100 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-b hover:shadow-zinc-500/50"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`z-30 relative group rounded-xl overflow-hidden transition-all duration-500 ease-in-out transform hover:scale-105 ${
                project.featured
                  ? "bg-gradient-to-br from-indigo-900/30 via-purple-800/20 to-indigo-900/30 border-2 border-indigo-500/50"
                  : "bg-gradient-to-br from-zinc-900/80 via-zinc-800/60 to-zinc-900/80 border border-gray-700/50"
              } hover:shadow-2xl ${
                project.featured
                  ? "hover:shadow-indigo-500/25"
                  : "hover:shadow-zinc-500/25"
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Featured Badge */}
              {project.featured && (
                <div className="absolute top-4 right-4 z-20">
                  <span className="bg-gradient-to-r from-orange-400 to-orange-600 text-zinc-900 text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                    Destaque
                  </span>
                </div>
              )}

              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    hoveredProject === project.id
                      ? "bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-100"
                      : "bg-gradient-to-t from-black/60 to-transparent opacity-0"
                  }`}
                />

                {/* Action Buttons */}
                <div
                  className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
                    hoveredProject === project.id
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <Link
                    href={project.demoUrl}
                    className="flex items-center gap-2 bg-gradient-to-tr from-indigo-400 via-indigo-600 to-indigo-900 text-zinc-900 px-4 py-2 rounded-lg font-medium text-sm shadow-lg hover:shadow-indigo-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <AiOutlineEye className="w-4 h-4" />
                    ver mais
                  </Link>
                  {/* <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-900 text-zinc-900 px-4 py-2 rounded-lg font-medium text-sm shadow-lg hover:shadow-zinc-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <AiOutlineGithub className="w-4 h-4" />
                    Código
                  </a> */}
                </div>
              </div>
              <Link href={project.demoUrl}>
                {/* Project Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-zinc-900 group-hover:text-transparent group-hover:bg-gradient-to-l group-hover:from-orange-400 group-hover:to-indigo-400 group-hover:bg-clip-text transition-all duration-300">
                      {project.title}
                    </h3>

                    <FiExternalLink className="w-5 h-5 text-gray-400 group-hover:text-indigo-400 transition-colors duration-300" />
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className={`text-xs px-3 py-1 rounded-full font-medium ${
                          project.featured
                            ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/30"
                            : "bg-zinc-700/50 text-gray-300 border border-gray-600/50"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-zinc-900">
              Pronto para transformar seu{" "}
              <span className="bg-gradient-to-l from-orange-400 to-indigo-900 text-transparent bg-clip-text">
                negócio?
              </span>
            </h3>
            <p className="text-gray-300 max-w-xl mx-auto">
              Entre em contato conosco e descubra como nossas soluções podem
              acelerar o crescimento da sua empresa.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="/contato"
                className="flex items-center gap-2 text-zinc-900 border-2 border-indigo-500 bg-gradient-to-tr from-indigo-400 via-indigo-600 to-indigo-900 rounded-lg px-8 py-3 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50 font-medium"
              >
                Iniciar Projeto
                <AiFillThunderbolt className="text-orange-600 w-5 h-5" />
              </a>
              <a
                href="/portfolio"
                className="text-zinc-900 border border-gray-500 bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-900 rounded-lg px-8 py-3 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gradient-to-b from-zinc-400 via-zinc-600 to-zinc-900 hover:shadow-zinc-500/50 font-medium"
              >
                Ver Mais Projetos
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectGallery;
