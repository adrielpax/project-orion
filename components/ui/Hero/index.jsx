"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import * as Dialog from "@radix-ui/react-dialog";
import { AiFillThunderbolt } from "react-icons/ai";
import Typewriter from "../Typewritter";

const Hero = ({
  text_left,
  star_title,
  end_title,
  impact_text,
  CTA_buttons,
}) => {
  const [openDialog, setOpenDialog] = useState(false);
  const router = useRouter();

  const handleSubmit = () => {
    router.push("/lab");
  };

  return (
    <section>
      <div className="custom-screen py-28 text-white">
        <div
          className={`space-y-5 max-w-4xl z-20 ${
            text_left ? "text-left" : "text-center mx-auto"
          }`}
        >
          <h1 className="text-4xl text-white font-extrabold mx-auto sm:text-5xl">
            {star_title}
            <span className="bg-gradient-to-l from-orange-400 to-indigo-900 text-transparent bg-clip-text z-20 font-bold">
              <Typewriter words={end_title} />
            </span>
          </h1>

          <p
            className={`max-w-xl ${
              text_left ? "text-left" : "text-center mx-auto"
            }`}
          >
            {impact_text}
          </p>

          {CTA_buttons && (
            <div className="flex flex-col md:flex-row items-center justify-center gap-x-3 font-medium text-sm gap-y-3 md:gap-y-0 w-full md:w-auto">
              <button
                onClick={() => setOpenDialog(true)}
                className="flex flex-row items-center gap-2 text-white border-2 border-cyan-500 bg-gradient-to-tr
              from-gray-900 via-green-600 to-cyan-600 
              rounded-lg px-6 py-3 shadow-lg transition-all duration-300 ease-in-out  
              hover:text-white hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50"
              >
                <AiFillThunderbolt className="text-white w-6 h-6" />
                Quero automatizar meu negócio
              </button>
            </div>
          )}
        </div>

        {/* Background Icons */}
        <AiFillThunderbolt className="absolute inset-0 md:top-[10%] left-[50%] text-cyan-500/10 blur-md md:w-96 md:h-96 -z-10 opacity-20 animate-pulse" />
        <AiFillThunderbolt className="absolute top-[10%] left-[50%] text-yellow-500/10 md:w-96 md:h-96 -z-10 opacity-20 animate-pulse" />
      </div>

      {/* Radix Dialog */}
      <Dialog.Root open={openDialog} onOpenChange={setOpenDialog}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40" />
          <Dialog.Content
            className="fixed z-50 top-1/2 left-1/2 w-[90%] max-w-md -translate-x-1/2 -translate-y-1/2 
            rounded-2xl bg-[#111111] p-6 shadow-xl border border-[#222222] focus:outline-none"
          >
            <Dialog.Title className="text-xl font-bold text-white">
              🚀 Vamos automatizar seu negócio
            </Dialog.Title>
            <Dialog.Description className="mt-2 text-gray-400">
              Preencha seus dados e entraremos em contato com uma solução sob
              medida.
            </Dialog.Description>

            {/* Formulário com botão Enviar */}
            <form className="mt-4 space-y-3">
              <input
                type="text"
                placeholder="Seu nome"
                required
                className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] border border-[#333] text-white focus:outline-none focus:border-cyan-500"
              />
              <input
                type="email"
                placeholder="Seu e-mail"
                required
                className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] border border-[#333] text-white focus:outline-none focus:border-cyan-500"
              />
              <input
                type="tel"
                placeholder="Seu telefone"
                required
                className="w-full px-3 py-2 rounded-lg bg-[#1a1a1a] border border-[#333] text-white focus:outline-none focus:border-cyan-500"
              />

              {/* Botão de enviar */}
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="w-full py-2 rounded-lg bg-gradient-to-tr from-green-600 to-cyan-600 text-white font-semibold hover:scale-105 transition-all"
              >
                Enviar
              </button>
            </form>

            <Dialog.Close asChild>
              <button className="absolute top-3 right-3 text-gray-400 hover:text-white">
                ✕
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </section>
  );
};

export default Hero;
