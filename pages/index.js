import Head from "next/head";
import GradientWrapper from "../components/GradientWrapper";
import CTA from "../components/ui/CTA";
import Features from "../components/ui/Features";
import FooterCTA from "../components/ui/FooterCTA";
import Hero from "../components/ui/Hero";
import LogoGrid from "../components/ui/LogoGrid";
import Testimonials from "../components/ui/Testimonials";
import ToolKit from "../components/ui/ToolKit";
import About from "../components/ui/About";

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
      <LogoGrid />
      <GradientWrapper>
        <Features />
        <CTA />
      </GradientWrapper>
      <About />
      <ToolKit />
      <GradientWrapper>
        <Testimonials />
      </GradientWrapper>
      <FooterCTA />
      <div className="-z-50 blur-[100px] fixed inset-0 w-full h-full bg-gradient-to-r from-zinc-900/20 via-black to-zinc-800/20">
        {/* Background gradients */}
        <div className="-z-50 fixed top-[10%] left-[8%] rounded-full w-56 h-56 bg-gradient-to-r from-cyan-500/50 to-cyan-700/20"></div>
        <div className="-z-50 fixed right-[10%] top-[20%] rounded-full w-32 h-32 bg-gradient-to-r from-green-500/50 to-green-700/20"></div>
        <div className="-z-50 fixed bottom-[20%] left-[20%] rounded-full w-40 h-40 bg-gradient-to-r from-yellow-500/50 to-yellow-700/20"></div>
        <div className="-z-50 fixed bottom-[15%] right-[20%] rounded-full w-56 h-56 bg-gradient-to-r from-indigo-400/50 to-indigo-600/50"></div>
      </div>
    </>
  );
}
