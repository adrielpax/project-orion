import SectionWrapper from "../../SectionWrapper";
import NavLink from "../NavLink";
import ctaImage from "../../../public/cta-image.jpg";
import Image from "next/image";
import { AiFillThunderbolt } from "react-icons/ai";

const CTA = () => {
  return (
    <SectionWrapper id="cta" className="pb-0">
      <div className="custom-screen">
        <div className="items-center gap-x-12 lg:flex">
          <div className="flex-1 sm:hidden lg:block">
            <Image
              src={ctaImage}
              className="rounded-lg md:max-w-lg"
              alt="Create Successful Business Models with Our IT Solutions"
            />
          </div>
          <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
            <h2 className="text-white text-3xl font-semibold sm:text-4xl">
              Crie modelos de negócios de sucesso com nossas soluções de TI
            </h2>
            <p className="mt-3 text-white">
              A CLICK PULSO tech, empresa de desenvolvimento de software, auxilia na
              digitalização de negócios, concentrando-se nos desafios e
              necessidades dos clientes, desde do branding e marketing ao
              trafego e automação com agentes de IA, com uso de ferramentas como
              N8N e Zapier... Valorizamos a cooperação estreita e transparente e
              incentivamos nossos clientes a participar ativamente do ciclo de
              vida do desenvolvimento do projeto.
            </p>
            <NavLink
              href="/paginas/get-started"
              className="flex items-center gap-2 inline-block mt-4 font-medium text-sm
              text-white border-2 border-orange-500 bg-gradient-to-tr from-orange-400 via-orange-600 to-orange-900 
              rounded-lg px-6 py-3 shadow-lg transition-all duration-300 ease-in-out active:bg-orange-100 w-[fit-content]
              hover:text-white hover:border-orange-100 hover:scale-105 hover:shadow-xl 
              hover:bg-gradient-to-b from-orange-400 via-orange-600 to-orange-900 
              hover:shadow-orange-500/50 font-bold animate-pulse"
            >
              Quero implementar hoje !
              <AiFillThunderbolt className="text-purple-600 w-6 h-6" />
            </NavLink>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CTA;
