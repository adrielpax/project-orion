import Head from "next/head";
// import GradientWrapper from "../components/GradientWrapper";
// import CTA from "../components/ui/CTA";
// import Features from "../components/ui/Features";
// import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
// import LogoGrid from "../components/ui/LogoGrid";
// import Testimonials from "../components/ui/Testimonials";
// import ToolKit from "../components/ui/ToolKit";
// import About from "../components/ui/About";

export default function Home() {
  const hero_section = {
    star_title: "Inpulsione sua empresa com",
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
      {/* <LogoGrid />
      <GradientWrapper>
        <Features />
        <CTA />
      </GradientWrapper>
      <About />
      <ToolKit />
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper> */}
      {/* <FooterCTA /> */}

    </>
  );
}
