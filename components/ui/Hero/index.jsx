import NavLink from "../NavLink";
import { AiFillThunderbolt } from "react-icons/ai";
import Typewriter from "../Typewritter";
const Hero = ({
  text_left,
  star_title,
  end_title,
  impact_text,
  CTA_buttons,
}) => (
  <section>
    <div className="custom-screen py-28 text-white">
      <div
        className={`space-y-5 max-w-4xl  z-20 
        ${text_left ? "text-left" : "text-center mx-auto"}`}
      >
        <h1
          className={`text-4xl text-white font-extrabold mx-auto sm:text-5xl`}
        >
          {star_title}
          {/* Transforme sua empresa com soluções de{" "} */}
          <span
            className="bg-gradient-to-l from-orange-400  to-indigo-900
          text-transparent bg-clip-text z-20 font-bold"
          >
            <Typewriter words={end_title} />
            {/* {end_title} */}
            {/* automação e tráfego inteligente com agentes de IA */}
          </span>
        </h1>
        <p
          className={`max-w-xl ${
            text_left ? "text-left" : "text-center mx-auto"
          }`}
        >
          {impact_text}
          {/* Acelere o crescimento da sua empresa com soluções de automação e
          tráfego inteligente, aproveitando o poder dos agentes de IA para
          otimizar processos e impulsionar resultados.  */}
          {/* Descubra como a automação pode transformar o fluxo da sua empresa e
          impulsionar o crescimento com soluções de tráfego e marketing
          inteligente e agentes de IA. */}
        </p>
        {CTA_buttons && (
          <div className="flex flex-col md:flex-row items-center justify-center gap-x-3 font-medium text-sm gap-y-3 md:gap-y-0 w-full md:w-auto">
            <NavLink
              href="/paginas/get-started"
              className="flex flex-row items-center gap-2 text-white border-2 border-indigo-500 bg-gradient-to-tr 
            rounded-lg px-6 py-3 shadow-lg transition-all duration-300 ease-in-out active:bg-indigo-100 
            hover:text-white hover:border-indigo-100 hover:scale-105 hover:shadow-xl 
            hover:bg-gradient-to-b from-indigo-400 via-indigo-600 to-indigo-900 
            hover:shadow-indigo-500/50 animate-pulse
            "
            >
              Quero automatizar meu negócio
              <AiFillThunderbolt className="text-orange-600 w-6 h-6" />
            </NavLink>
            <NavLink
              href="#cta"
              className="text-white border border-gray-500 
            bg-gradient-to-r from-zinc-700 
            rounded-lg px-6 py-3 transition-all duration-300 ease-in-out active:bg-gray-900 
            hover:text-white hover:border-zinc-100 hover:scale-105 hover:shadow-xl 
            hover:bg-gradient-to-b via-zinc-600 to-zinc-900 
            hover:shadow-zinc-500/50"
              scroll={false}
            >
              Ver demonstração
            </NavLink>
          </div>
        )}
      </div>
      <AiFillThunderbolt
        className="absolute inset-0 md:top-[10%] left-[50%] text-cyan-500/10 blur-md md:w-96 md:h-96
    -z-10 opacity-20 animate-pulse"
      />
      <AiFillThunderbolt
        className="absolute top-[10%] left-[50%] text-yellow-500/10 md:w-96 md:h-96
    -z-10 opacity-20 animate-pulse"
      />
    </div>
  </section>
);

export default Hero;
