import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";

const FooterCTA = () => (
  <SectionWrapper>
    <div className="custom-screen">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-white text-3xl font-semibold sm:text-4xl">
          Automatize seus processos de negócios com a ORI
          <span className="text-indigo-600">O</span>N
        </h2>
        <p className="mt-3 text-white">
          Descubra como a automação pode transformar o fluxo da sua empresa e
          impulsionar o crescimento com soluções de tráfego e marketing
          inteligente e agentes de IA.
        </p>
        <NavLink
          href="/paginas/get-started"
          className="mt-4 inline-block font-medium text-sm 
          text-white border-2 border-green-500 bg-gradient-to-tr from-green-400 via-green-600 to-green-900 
              rounded-lg px-6 py-3 shadow-lg transition-all duration-300 ease-in-out active:bg-green-100 
              hover:text-white hover:border-green-100 hover:scale-105 hover:shadow-xl 
              hover:bg-gradient-to-b from-green-400 via-green-600 to-green-900 
              hover:shadow-green-500/50"
        >
          Começar automação agora !
        </NavLink>
      </div>
    </div>
  </SectionWrapper>
);

export default FooterCTA;
