import Head from "next/head";
import Footer from "./ui/Footer";
import Navbar from "./ui/Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>
          Agentes de AI e Automação de Processos, Trafego e Marketing | ORION
        </title>
        <meta
          name="description"
          content="Impulsione sua empresa com automação de processos, tráfego inteligente e agentes de IA. Descubra soluções inovadoras para otimizar seu negócio. 
          Explore como a automação pode transformar o fluxo da sua empresa e impulsionar o crescimento com soluções de tráfego e marketing inteligente."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
