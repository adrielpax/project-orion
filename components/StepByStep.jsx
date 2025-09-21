import React from 'react'

function StepByStep() {
  return (
     <div className="space-y-8 max-w-4xl mx-auto text-center z-20">
              {/* Título */}
              <div className="space-y-4">
                <h2 className="text-3xl text-zinc-900 font-extrabold sm:text-4xl">
                  {/* {title} */} Como funciona ?
                </h2>
                <p className="max-w-2xl mx-auto text-gray-300">
                  {/* {subtitle} */} Em 3 passos simples criamos soluções inteligentes
                </p>
              </div>
    
               {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 text-center">
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full 
                    flex items-center justify-center mx-auto">
                    {/* <AiFillThunderbolt className="w-6 h-6 text-zinc-900" /> */}
                    <span className='text-zinc-900 font-bold '>1</span>
                  </div>
                  <h3 className="font-semibold text-zinc-900">Diagnostico Rapido</h3>
                  <p className="text-gray-400 text-sm">
                    Nosso agente de IA analisa seu pedido e entrega uma solução eficiente de automação para seu processo.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-full 
                    flex items-center justify-center mx-auto">
                    {/* <AiFillThunderbolt className="w-6 h-6 text-zinc-900" /> */}
                    <span className='text-zinc-900 font-bold '>2</span>

                  </div>
                  <h3 className="font-semibold text-zinc-900">Solução Personalizada</h3>
                  <p className="text-gray-400 text-sm">
                    Cada resposta é única para seu negócio, aplicamos nossa tecnologia e em minutos você tem automações inscriveis.
                  </p>
                </div>
                
                <div className="space-y-2">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-full 
                    flex items-center justify-center mx-auto">
                    {/* <AiFillThunderbolt className="w-6 h-6 text-zinc-900" /> */}
                    <span className='text-zinc-900 font-bold '>3</span>

                  </div>
                  <h3 className="font-semibold text-zinc-900">Implementação Fácil</h3>
                  <p className="text-gray-400 text-sm">
                    Instruções claras e práticas, O simples é essencial e eficiente. 
                  </p>
                </div>
              </div>
    
              {/* Input Area */}
              {/* <div className="space-y-6">
                <div className="relative">
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder={placeholder}
                    rows={6}
                    disabled={isLoading}
                    className="w-full p-6 text-zinc-900 bg-zinc-900/60
                      border-2 border-indigo-500/30 rounded-xl resize-none 
                      focus:outline-none focus:border-indigo-400 focus:ring-2 focus:ring-indigo-500/20
                      placeholder-zinc-400 backdrop-blur-sm
                      transition-all duration-300 ease-in-out
                      hover:border-indigo-400/50
                      disabled:opacity-50 disabled:cursor-not-allowed"
                  /> */}
                  
                  {/* Character Counter */}
                  {/* <div className="absolute bottom-4 right-4 text-xs text-gray-400">
                    {prompt.length}/500
                  </div>
                </div> */}
    
                {/* Submit Button */}
                {/* <button
                  onClick={handleSubmit}
                  disabled={!prompt.trim() || isLoading}
                  className="flex flex-end items-center justify-center gap-3 text-zinc-900 border-2 border-indigo-500 
                    bg-gradient-to-tr from-indigo-600
                    rounded-xl px-8 py-4 font-medium text-lg
                    shadow-lg transition-all duration-300 ease-in-out 
                    hover:text-zinc-900 hover:border-indigo-100 hover:scale-105 hover:shadow-xl 
                    hover:bg-gradient-to-b via-indigo-600 to-indigo-900 
                    hover:shadow-indigo-500/50
                    disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
                    active:scale-95"
                >
                  {isLoading ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                      Processando...
                    </>
                  ) : (
                    <>
                      Gerar Solução
                      <AiOutlineSend className="w-6 h-6" />
                    </>
                  )}
                </button>
              </div> */}
    
             
            </div>
  )
}

export default StepByStep