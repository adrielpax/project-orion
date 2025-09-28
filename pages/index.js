// {libs}
import Head from "next/head";

// {components}
import DataAutomationLanding from "../components/templates/landingpage-automação/index"


// {mock data}
//  const benefits = [
//     {
//       icon: <FiClock className="w-8 h-8" />,
//       title: "90% Menos Tempo",
//       description:
//         "Reduza drasticamente o tempo gasto em tarefas manuais de dados",
//       color: "text-cyan-400",
//     },
//     {
//       icon: <FiTrendingUp className="w-8 h-8" />,
//       title: "300% Mais Produtividade",
//       description:
//         "Sua equipe focará em análises estratégicas ao invés de coleta manual",
//       color: "text-green-400",
//     },
//     {
//       icon: <FiShield className="w-8 h-8" />,
//       title: "100% Precisão",
//       description: "Elimine erros humanos e garanta dados sempre consistentes",
//       color: "text-purple-400",
//     },
//     {
//       icon: <FiZap className="w-8 h-8" />,
//       title: "Resultados em Tempo Real",
//       description: "Dashboards e relatórios atualizados automaticamente 24/7",
//       color: "text-orange-400",
//     },
//   ];

export default function Home() {
  // const hero_section = {
  //   star_title: "Impulsione sua empresa com",
  //   end_title: [
  //     "Automação de Processos",
  //     "Tráfego e SEO Inteligente",
  //     "Agentes de IAs",
  //     "Marketing Branding",
  //     "Sites e Web Development",
  //   ],
  //   // end_title: "automação e tráfego inteligente com agentes de IA",
  //   impact_text:
  //     "Descubra como a automação pode transformar o fluxo da sua empresa e impulsionar o crescimento com soluções de tráfego e marketing inteligente e agentes de IA.",
  //   CTA_buttons: true,
  // };

  return (
    <>
      <Head>
        <meta name="robots" content="index" />
      </Head>
      {/* <Hero
        star_title={hero_section.star_title}
        end_title={hero_section.end_title}
        impact_text={hero_section.impact_text}
        CTA_buttons={hero_section.CTA_buttons}
      />

      
            <section className="py-24 relative bg-transparent">
              <AiFillThunderbolt className="absolute top-[10%] right-[10%] text-purple-500/10 blur-md w-72 h-72 -z-10 opacity-15 animate-pulse" />
      
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-4xl font-extrabold text-white sm:text-5xl mb-6">
                    Resultados que{" "}
                    <span className="bg-gradient-to-l from-cyan-400 to-indigo-900 text-transparent bg-clip-text">
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

      <SectionWrapper>
        <CTA/>
      </SectionWrapper> */}

      <DataAutomationLanding/>

    </>
  );
}
