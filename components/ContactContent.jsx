import { useState } from "react";
import {
  AiFillThunderbolt,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineEnvironment,
  AiFillStar,
} from "react-icons/ai";
import { FiSend, FiUser, FiMessageSquare, FiSettings } from "react-icons/fi";

const ContactSection = ({
  title = "Vamos Conversar",
  subtitle = "Entre em contato e transforme suas ideias em realidade",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio
    await new Promise((resolve) => setTimeout(resolve, 2000));

    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ name: "", email: "", phone: "", service: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <AiOutlineMail className="w-6 h-6" />,
      title: "Email",
      info: "contato@suaempresa.com",
      color: "text-indigo-400",
      href: "mailto:contato@suaempresa.com",
    },
    {
      icon: <AiOutlinePhone className="w-6 h-6" />,
      title: "Telefone",
      info: "+55 (11) 99999-9999",
      color: "text-orange-400",
      href: "tel:+5511999999999",
    },
    {
      icon: <AiOutlineEnvironment className="w-6 h-6" />,
      title: "Localização",
      info: "São Paulo, SP - Brasil",
      color: "text-cyan-400",
      href: "#",
    },
  ];

  const services = [
    "Automação com IA",
    "Marketing Digital",
    "Analytics & BI",
    "Desenvolvimento Web",
    "Consultoria Tech",
    "Pacote Completo",
  ];

  return (
    <section className="bg-black relative overflow-hidden">
      {/* Background Effects */}
      <AiFillThunderbolt className="absolute top-[20%] left-[10%] text-purple-500/10 blur-md w-80 h-80 -z-10 opacity-15 animate-pulse" />
      <AiFillThunderbolt className="absolute bottom-[10%] right-[15%] text-cyan-500/10 w-72 h-72 -z-10 opacity-20 animate-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 text-white relative z-10">
        {/* Header */}
        <div className="text-center space-y-5 max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl font-extrabold sm:text-5xl">
            {title.split(" ").slice(0, -1).join(" ")}{" "}
            <span className="bg-gradient-to-l from-orange-400 to-indigo-900 text-transparent bg-clip-text font-bold">
              {title.split(" ").slice(-1)}
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-gray-300">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-white">
                Como podemos te{" "}
                <span className="bg-gradient-to-l from-orange-400 to-indigo-400 text-transparent bg-clip-text">
                  ajudar?
                </span>
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                Nossa equipe está pronta para discutir seu projeto e encontrar a
                melhor solução para suas necessidades. Entre em contato através
                de qualquer um dos canais abaixo.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-center gap-4 p-6 bg-gradient-to-r from-zinc-900/80 via-zinc-800/60 to-zinc-900/80 border border-gray-700/50 rounded-xl hover:border-gray-600/70 transition-all duration-300 hover:scale-105 cursor-pointer group"
                >
                  <div
                    className={`${item.color} transform transition-transform duration-300 group-hover:scale-110`}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-white group-hover:text-transparent group-hover:bg-gradient-to-l group-hover:from-orange-400 group-hover:to-indigo-400 group-hover:bg-clip-text transition-all duration-300">
                      {item.title}
                    </h4>
                    <p className="text-gray-300">{item.info}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Proof */}
            <div className="bg-gradient-to-br from-indigo-900/30 via-purple-800/20 to-indigo-900/30 border-2 border-indigo-500/50 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-orange-400">
                  {[...Array(5)].map((_, i) => (
                    <AiFillStar key={i} className="w-5 h-5" />
                  ))}
                </div>
                <span className="text-white font-semibold">4.9/5</span>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                "Excelente trabalho! A automação implementada aumentou nossa
                eficiência em 300%. Recomendo para qualquer empresa que busca
                inovação."
              </p>
              <p className="text-indigo-400 text-sm mt-3 font-medium">
                - João Silva, CEO TechCorp
              </p>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 rounded-lg border border-gray-700/30">
                <div className="text-2xl font-bold text-orange-400">150+</div>
                <div className="text-sm text-gray-300">Projetos</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 rounded-lg border border-gray-700/30">
                <div className="text-2xl font-bold text-indigo-400">98%</div>
                <div className="text-sm text-gray-300">Satisfação</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 rounded-lg border border-gray-700/30">
                <div className="text-2xl font-bold text-cyan-400">24h</div>
                <div className="text-sm text-gray-300">Resposta</div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gradient-to-br from-zinc-900/80 via-zinc-800/60 to-zinc-900/80 border border-gray-700/50 rounded-2xl p-8">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Envie sua{" "}
                <span className="bg-gradient-to-l from-orange-400 to-indigo-400 text-transparent bg-clip-text">
                  mensagem
                </span>
              </h3>
              <p className="text-gray-300 text-sm">
                Preencha o formulário abaixo e retornaremos em até 24 horas.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white font-medium flex items-center gap-2">
                    <FiUser className="w-4 h-4 text-indigo-400" />
                    Nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full p-4 bg-black/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                      focusedField === "name"
                        ? "border-indigo-500 shadow-lg shadow-indigo-500/25"
                        : "border-gray-600"
                    }`}
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white font-medium flex items-center gap-2">
                    <AiOutlineMail className="w-4 h-4 text-orange-400" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    required
                    className={`w-full p-4 bg-black/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                      focusedField === "email"
                        ? "border-orange-500 shadow-lg shadow-orange-500/25"
                        : "border-gray-600"
                    }`}
                    placeholder="seu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-white font-medium flex items-center gap-2">
                    <AiOutlinePhone className="w-4 h-4 text-cyan-400" />
                    Telefone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full p-4 bg-black/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none ${
                      focusedField === "phone"
                        ? "border-cyan-500 shadow-lg shadow-cyan-500/25"
                        : "border-gray-600"
                    }`}
                    placeholder="(11) 99999-9999"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-white font-medium flex items-center gap-2">
                    <FiSettings className="w-4 h-4 text-purple-400" />
                    Serviço de Interesse
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedField("service")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full p-4 bg-black/50 border rounded-lg text-white transition-all duration-300 focus:outline-none ${
                      focusedField === "service"
                        ? "border-purple-500 shadow-lg shadow-purple-500/25"
                        : "border-gray-600"
                    }`}
                  >
                    <option value="">Selecione um serviço</option>
                    {services.map((service, index) => (
                      <option key={index} value={service} className="bg-black">
                        {service}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-white font-medium flex items-center gap-2">
                  <FiMessageSquare className="w-4 h-4 text-green-400" />
                  Mensagem *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows={5}
                  className={`w-full p-4 bg-black/50 border rounded-lg text-white placeholder-gray-400 transition-all duration-300 focus:outline-none resize-none ${
                    focusedField === "message"
                      ? "border-green-500 shadow-lg shadow-green-500/25"
                      : "border-gray-600"
                  }`}
                  placeholder="Conte-nos sobre seu projeto ou dúvida..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-4 px-6 rounded-lg font-medium text-white transition-all duration-300 flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-gradient-to-tr from-indigo-400 via-indigo-600 to-indigo-900 border-2 border-indigo-500 hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Enviando...
                  </>
                ) : (
                  <>
                    Enviar Mensagem
                    <FiSend className="w-5 h-5" />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-400 text-center">
                Ao enviar este formulário, você concorda com nossos{" "}
                <a
                  href="/termos"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  termos de uso
                </a>{" "}
                e{" "}
                <a
                  href="/privacidade"
                  className="text-indigo-400 hover:text-indigo-300 underline"
                >
                  política de privacidade
                </a>
                .
              </p>
            </form>
          </div>
        </div>

        {/* Additional CTA */}
        <div className="text-center mt-16 p-8 bg-gradient-to-br from-indigo-900/20 via-purple-800/15 to-orange-900/20 border border-indigo-500/30 rounded-2xl">
          <h3 className="text-2xl font-bold text-white mb-4">
            Prefere falar diretamente?{" "}
            <span className="bg-gradient-to-l from-orange-400 to-indigo-900 text-transparent bg-clip-text">
              Ligue agora!
            </span>
          </h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Nossa equipe de especialistas está disponível para uma conversa
            rápida e esclarecimento de dúvidas. Atendimento de segunda a sexta,
            das 9h às 18h.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+5511999999999"
              className="flex items-center gap-2 text-white border-2 border-indigo-500 bg-gradient-to-tr from-indigo-400 via-indigo-600 to-indigo-900 rounded-lg px-8 py-3 shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:shadow-indigo-500/50 font-medium"
            >
              <AiOutlinePhone className="w-5 h-5" />
              (11) 99999-9999
            </a>
            <a
              href="https://wa.me/5511999999999"
              className="flex items-center gap-2 text-white border border-green-500 bg-gradient-to-r from-green-700 via-green-800 to-green-900 rounded-lg px-8 py-3 transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-xl hover:bg-gradient-to-b hover:shadow-zinc-500/50 font-medium"
            >
              💬 WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
