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

      <DataAutomationLanding/>

    </>
  );
}
