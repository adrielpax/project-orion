"use client";

import Image from "next/image";
import NavLink from "../NavLink";
import Brand from "../Brand";
import { AiFillThunderbolt } from "react-icons/ai";

const Sobre = () => {
  return (
    <section
      id="sobre"
      className="border-y border-[#272727] text-white py-24"
    >
      <div className="custom-screen grid md:grid-cols-2 gap-10 items-center">
        {/* Imagem do fundador */}
        <div className="flex justify-center md:justify-start">
          {/* <Image
            src="/meuperfil.jpg" // substitua com o caminho real da sua imagem
            alt="Adriel Lucas - Fundador"
            width={300}
            height={300}
            className="rounded-2xl shadow-xl object-cover"
          /> */}
          <img
            className="rounded-full object-cover shadow-lg scale-75 select-none"
            src="/perfil-pro.jpeg"
          />
        </div>

        {/* Texto de apresentação */}
        <div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Quem está por trás da{" "}
            {/* <span>
              O R I <span className="text-indigo-600">O </span>N
            </span> */}
            <Brand />
          </h2>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Olá! Sou <strong>Adriel Lucas</strong>, um profissional apaixonado
            por automação, tecnologia e soluções inteligentes. Criei a Soluções
            Automações para ajudar empresas e pessoas a otimizarem seus
            processos, ganharem tempo e alcançarem mais resultados com
            ferramentas acessíveis e eficientes.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            <div
              className="bg-zinc-950 cursor-default
              text-gray-500 hover:text-gray-200
              hover:border-indigo-500 border hover:text-white 
              border-[#272727] p-4 rounded-xl shadow hover:scale-105 transition-all delay backdrop-blur-md"
            >
              <h3 className="text-xl font-semibold text-indigo-500">Missão</h3>
              <p className="text-sm mt-2">
                Automatizar processos e simplificar rotinas com soluções
                acessíveis, eficientes e humanas.
              </p>
            </div>
            <div
              className="bg-zinc-950 cursor-default
              text-gray-500 hover:text-gray-200
            hover:border-yellow-500 border hover:text-white border-[#272727] p-4 rounded-xl shadow hover:scale-105 transition-all delay backdrop-blur-md"
            >
              <h3 className="text-xl font-semibold text-yellow-500">Visão</h3>
              <p className="text-sm mt-2">
                Ser referência em automação criativa e acessível para empresas
                de todos os tamanhos.
              </p>
            </div>
            <div
              className="bg-zinc-950 cursor-default
              text-gray-500 hover:text-gray-200
            hover:border-cyan-500 border hover:text-white border-[#272727] p-4 rounded-xl shadow hover:scale-105 transition-all delay backdrop-blur-md"
            >
              <h3 className="text-xl font-semibold text-cyan-500">Valores</h3>
              <p className="text-sm mt-2">
                Inovação, simplicidade, ética, proximidade com o cliente e foco
                em resultado real.
              </p>
            </div>
          </div>
          <div className="flex w-full space-y-4 mt-8 justify-center">
            <NavLink
              href="https://www.linkedin.com/in/adriel-lucas/"
              target="_blank"
              className="text-white border border-[#272727]
            bg-gradient-to-r from-zinc-700 via-zinc-800 to-zinc-900 
            rounded-lg px-6 py-3 transition-all duration-300 ease-in-out active:bg-gray-900 
            hover:text-white hover:border-zinc-100 hover:scale-105 hover:shadow-xl 
            hover:bg-gradient-to-b from-zinc-400 via-zinc-600 to-zinc-900 
            hover:shadow-zinc-500/50  "
            >
              Saber Mais !
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
