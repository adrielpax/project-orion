import Head from "next/head";
import Hero from "../components/ui/Hero";


export default function Home() {
  const hero_section = {
    star_title: "Impulsione sua empresa com",
    end_title: [
      "Automação de Processos",
      "Tráfego e SEO Inteligente",
      "Agentes de IAs",
      "Marketing Branding",
      "Sites e Web Development",
    ],
    // end_title: "automação e tráfego inteligente com agentes de IA",
    impact_text:
      "Descubra como a automação pode transformar o fluxo da sua empresa e impulsionar o crescimento com soluções de tráfego e marketing inteligente e agentes de IA.",
    CTA_buttons: true,
  };

  return (
    <>
      <Head>
        <meta name="robots" content="index" />
      </Head>
      <Hero
        star_title={hero_section.star_title}
        end_title={hero_section.end_title}
        impact_text={hero_section.impact_text}
        CTA_buttons={hero_section.CTA_buttons}
      />



    </>
  );
}
