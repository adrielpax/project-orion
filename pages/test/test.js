import React, { useState } from 'react';
import { Check, Star, Play, Zap, Target, TrendingUp, Users, Shield, Rocket, Clock, ChevronDown, Award, BarChart, Lightbulb, Heart, Code, Cpu, DollarSign, LineChart, ArrowRight, CheckCircle, XCircle, AlertCircle, Layout, Mail, CreditCard, Database, PieChart, Settings } from 'lucide-react';
import * as Accordion from '@radix-ui/react-accordion';
import * as Tabs from '@radix-ui/react-tabs';

// ============================================
// CONFIGURAÇÃO DE CORES - EDITE AQUI
// ============================================
export const COLORS = {
  // Backgrounds
  bgGradientStart: 'transparent',
  bgGradientMid: 'transparent',
  bgGradientEnd: 'transparent',
  bgDark: '#111111',
  bgCard: '#1a1a1a',
  bgCardHover: '#222222',
  
  // Text
  textPrimary: '#ffffff',
  textSecondary: '#e0e0e0',
  textMuted: '#a0a0a0',
  
  // Accent/CTA
  ctaPrimary: '#0891b2',
  ctaSecondary: '#16a34a',
  accentCyan: '#2c5364',
  accentBlue: '#203a43',
  
  // Borders
  borderDefault: '#333333',
  borderAccent: '#FF6B35',
  borderCyan: '#2c5364'
};


// ============================================
// CONFIGURAÇÕES DO PRODUTO - EDITE AQUI
// ============================================
const CONFIG = {
  // Hero Section
  headline: "Transforme Seu Negócio com um Ecossistema Digital Completo",
  subheadline: "Tenha landing pages, automações, integrações e tráfego rodando juntos em menos de 30 dias.",
  videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  ctaText: "QUERO MEU ECOSSISTEMA AGORA",
  ctaLink: "#checkout",
  
  // Sobre o Criador - PERSONALIZE AQUI
  creator: {
    name: "Seu Nome Aqui",
    title: "Fundador da Click Lab",
    photo: "👤", // Substitua por URL da imagem
    bio: "Especialista em transformação digital com mais de 10 anos de experiência ajudando empresas a escalarem através de tecnologia e automação. Já implementei ecossistemas digitais para mais de 500 negócios.",
    achievements: [
      "500+ empresas transformadas",
      "R$ 100M+ em vendas geradas pelos clientes",
      "10+ anos de experiência em marketing digital",
      "Certificações em Growth e Automação"
    ],
    cta: "Conheça minha história completa"
  },
  
  // Benefícios
  benefits: [
    {
      icon: Layout,
      title: "Tudo em Um Só Lugar",
      description: "Site, automação, CRM e checkout integrados em uma única plataforma poderosa."
    },
    {
      icon: Zap,
      title: "Menos Trabalho Manual",
      description: "Automações cuidam das tarefas repetitivas enquanto você foca no crescimento."
    },
    {
      icon: TrendingUp,
      title: "Vendas Previsíveis",
      description: "Geração e nutrição de leads funcionando 24/7 no piloto automático."
    },
    {
      icon: Award,
      title: "Profissionalismo Imediato",
      description: "Seu negócio com presença digital de agência desde o primeiro dia."
    },
    {
      icon: Rocket,
      title: "Escalável e Modular",
      description: "Comece pequeno e cresça conforme suas necessidades aumentam."
    },
    {
      icon: Shield,
      title: "Suporte Dedicado",
      description: "Time especializado para garantir que tudo funcione perfeitamente."
    }
  ],
  
  // Depoimentos
  testimonials: [
    {
      name: "João Silva",
      role: "Dono de E-commerce",
      avatar: "JS",
      text: "Meu faturamento aumentou 3x depois que a Click Lab implementou o ecossistema digital no meu negócio. Hoje tenho previsibilidade de vendas.",
      rating: 5
    },
    {
      name: "Maria Santos",
      role: "Consultora de Marketing",
      avatar: "MS",
      text: "A automação me deu meu tempo de volta. Agora posso focar em estratégia enquanto o sistema trabalha por mim 24/7.",
      rating: 5
    },
    {
      name: "Pedro Costa",
      role: "Infoprodutor",
      avatar: "PC",
      text: "Finalmente tenho um sistema profissional que converte. As landing pages e automações mudaram completamente meu negócio.",
      rating: 5
    },
    {
      name: "Ana Oliveira",
      role: "Coach de Negócios",
      avatar: "AO",
      text: "O ROI foi imediato. Em 2 meses já havia recuperado o investimento e estava crescendo de forma sustentável.",
      rating: 5
    },
    {
      name: "Carlos Ferreira",
      role: "CEO Startup",
      avatar: "CF",
      text: "Parecia impossível ter um ecossistema completo sem gastar fortunas. A Click Lab provou que é possível e lucrativo.",
      rating: 5
    },
    {
      name: "Juliana Reis",
      role: "Gestora de Vendas",
      avatar: "JR",
      text: "A integração perfeita entre todas as ferramentas eliminou nosso trabalho manual. Produtividade aumentou 300%.",
      rating: 5
    }
  ],
  
  // Como Funciona
  steps: [
    {
      number: "01",
      title: "Diagnóstico",
      description: "Entendemos profundamente seu negócio, objetivos e desafios atuais para criar a solução perfeita."
    },
    {
      number: "02",
      title: "Construção",
      description: "Criamos sua máquina digital personalizada com todas as integrações e automações necessárias."
    },
    {
      number: "03",
      title: "Entrega",
      description: "Tudo pronto para rodar e gerar vendas automáticas. Você recebe treinamento completo do sistema."
    }
  ],
  
  // O que está incluído
  included: [
    {
      icon: Layout,
      title: "Landing Page Otimizada",
      description: "Design profissional focado em conversão com copy persuasiva",
      items: ["Design responsivo", "Otimização para SEO", "Testes A/B integrados"]
    },
    {
      icon: Mail,
      title: "Sistema de Automação",
      description: "Mensagens e follow-up automáticos por email e WhatsApp",
      items: ["Sequências personalizadas", "Segmentação inteligente", "Disparo programado"]
    },
    {
      icon: CreditCard,
      title: "Gateway de Pagamento",
      description: "Integração completa com principais meios de pagamento",
      items: ["Checkout otimizado", "Recorrência automática", "Gestão de cobranças"]
    },
    {
      icon: Database,
      title: "Mini CRM Integrado",
      description: "Gerenciamento completo de leads e clientes",
      items: ["Pipeline visual", "Histórico de interações", "Tags e segmentações"]
    },
    {
      icon: PieChart,
      title: "Painel de Resultados",
      description: "Métricas e análises em tempo real",
      items: ["Dashboard customizável", "Relatórios automáticos", "KPIs principais"]
    },
    {
      icon: Settings,
      title: "Suporte e Ajustes",
      description: "Acompanhamento inicial para garantir resultados",
      items: ["Onboarding completo", "Suporte prioritário", "Ajustes pós-entrega"]
    }
  ],
  
  // Módulos Detalhados
  modules: [
    {
      number: 1,
      title: "Setup e Diagnóstico",
      duration: "Semana 1",
      items: [
        "Análise completa do negócio atual",
        "Definição de objetivos e KPIs",
        "Mapeamento da jornada do cliente",
        "Escolha de integrações necessárias"
      ]
    },
    {
      number: 2,
      title: "Landing Pages e Design",
      duration: "Semana 2",
      items: [
        "Criação de páginas de alta conversão",
        "Design alinhado com sua marca",
        "Copy persuasiva profissional",
        "Otimização mobile-first"
      ]
    },
    {
      number: 3,
      title: "Automações e Integrações",
      duration: "Semana 3",
      items: [
        "Setup de automações de email e WhatsApp",
        "Integração com CRM e ferramentas",
        "Configuração de checkout e pagamentos",
        "Testes de fluxos completos"
      ]
    },
    {
      number: 4,
      title: "Entrega e Otimização",
      duration: "Semana 4",
      items: [
        "Treinamento completo do sistema",
        "Documentação detalhada",
        "Período de ajustes e melhorias",
        "Suporte intensivo inicial"
      ]
    }
  ],
  
  // Oferta
  offer: {
    title: "Seu Ecossistema Digital Completo",
    description: "Tudo que você precisa para transformar seu negócio em uma máquina de vendas automatizada.",
    items: [
      "Landing page otimizada para conversão",
      "Sistema de automação de mensagens e follow-up",
      "Integração com gateways de pagamento",
      "Mini CRM para gerenciar leads e clientes",
      "Painel de resultados para acompanhar métricas",
      "Suporte e ajustes iniciais inclusos"
    ],
    bonuses: [
      {
        title: "Setup WhatsApp Business API",
        value: "R$ 997",
        description: "Configuração completa para automação via WhatsApp"
      },
      {
        title: "Templates de Campanhas",
        value: "R$ 497",
        description: "Modelos prontos de email e WhatsApp que convertem"
      },
      {
        title: "Consultoria Individual 1:1",
        value: "R$ 1.997",
        description: "Sessão estratégica para personalizar seu ecossistema"
      }
    ],
    originalPrice: "R$ 4.997",
    price: "12x R$ 297",
    fullPrice: "ou R$ 2.997 à vista"
  },
  
  // FAQ Expandido
  faq: [
    {
      question: "Para quem é esse ecossistema digital?",
      answer: "Para qualquer negócio que queira profissionalizar sua presença digital e automatizar vendas: infoprodutores, consultores, e-commerces, prestadores de serviço, coaches e agências. Se você vende online ou quer vender, esse ecossistema é para você."
    },
    {
      question: "Quanto tempo leva para ficar pronto?",
      answer: "O ecossistema completo é entregue em até 30 dias. Você acompanha todo o processo e recebe treinamento para usar tudo que foi criado. Dividimos em 4 semanas: diagnóstico, construção, integração e entrega."
    },
    {
      question: "Preciso ter conhecimento técnico?",
      answer: "Não! Fazemos tudo por você e entregamos pronto para usar. Além disso, você recebe treinamento completo e suporte para tirar qualquer dúvida. Nossa missão é que você foque no seu negócio, não na técnica."
    },
    {
      question: "Posso fazer alterações depois da entrega?",
      answer: "Sim! Você tem acesso completo ao sistema e pode fazer ajustes simples. Para mudanças mais complexas, oferecemos suporte adicional ou você pode contratar nossa manutenção mensal."
    },
    {
      question: "Quais integrações estão incluídas?",
      answer: "Incluímos as integrações essenciais: gateways de pagamento (Stripe, Mercado Pago, PagSeguro), email marketing (ActiveCampaign, RD Station), WhatsApp Business API, CRM básico e Google Analytics. Integrações adicionais podem ser negociadas."
    },
    {
      question: "E se eu não ficar satisfeito?",
      answer: "Oferecemos garantia de satisfação. Se após a entrega você não estiver satisfeito com o trabalho, fazemos os ajustes necessários sem custo adicional até você ficar 100% feliz com o resultado."
    },
    {
      question: "Posso parcelar o investimento?",
      answer: "Sim! Aceitamos cartão de crédito em até 12x sem juros. Também há desconto de 10% para pagamento à vista via PIX ou boleto. Queremos facilitar o máximo possível."
    },
    {
      question: "O que acontece após os 30 dias?",
      answer: "Você fica com o ecossistema funcionando 100% no seu nome. Oferecemos planos opcionais de manutenção (R$ 497/mês) e suporte contínuo, mas não é obrigatório. O sistema é seu."
    },
    {
      question: "Vocês fazem o design também?",
      answer: "Sim! Nossa equipe de designers cria toda a identidade visual das suas páginas, alinhada com sua marca. Você aprova tudo antes de ir ao ar."
    },
    {
      question: "Como funciona o suporte após a entrega?",
      answer: "Você tem 30 dias de suporte intensivo incluído após a entrega. Depois disso, pode contratar suporte avulso ou plano mensal. Também mantemos uma comunidade exclusiva para clientes."
    },
    {
      question: "Preciso ter um site antes?",
      answer: "Não! Criamos tudo do zero. Se você já tem um site, podemos integrá-lo ao ecossistema. Se não tem, criamos landing pages otimizadas para você começar imediatamente."
    },
    {
      question: "Qual a diferença entre vocês e uma agência tradicional?",
      answer: "Agências cobram R$ 15k-50k e levam 3-6 meses. Nós entregamos um ecossistema completo em 30 dias por menos de R$ 3k. Focamos em resultados práticos, não em burocracias."
    }
  ],
  
  // Estatísticas
  stats: [
    { number: "500+", label: "Negócios Transformados" },
    { number: "R$ 100M+", label: "Em Vendas Geradas" },
    { number: "98%", label: "Taxa de Satisfação" },
    { number: "30 dias", label: "Tempo de Entrega" }
  ]
};

// ============================================
// COMPONENTES
// ============================================

const CTAButton = ({ text, link, size = "default" }) => {
  const sizeClasses = size === "large" 
    ? "text-xl px-12 py-6" 
    : "text-lg px-8 py-4";
    
  return (
    <a
      href={link}
      style={{
        background: `linear-gradient(135deg, ${COLORS.ctaPrimary} 0%, ${COLORS.ctaSecondary} 100%)`
      }}
      className={`${sizeClasses} text-white font-bold rounded-full shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105 inline-block text-center hover:brightness-110`}
    >
      {text}
    </a>
  );
};

const VideoPlayer = ({ url }) => (
  <div className="w-full max-w-4xl mx-auto mb-8 rounded-2xl overflow-hidden shadow-2xl">
    <div className="relative pb-[56.25%] h-0">
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={url}
        title="Video"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  </div>
);

const HeroSection = () => (
  <section 
    className="min-h-screen flex items-center justify-center px-4 py-20"
    style={{
      background: `linear-gradient(135deg, ${COLORS.bgGradientStart} 0%, ${COLORS.bgGradientMid} 50%, ${COLORS.bgGradientEnd} 100%)`
    }}
  >
    <div className="max-w-6xl mx-auto text-center">
      <div className="inline-block mb-6 px-6 py-2 rounded-full border"
        style={{
          background: `${COLORS.ctaPrimary}20`,
          borderColor: `${COLORS.ctaPrimary}50`
        }}
      >
        <span style={{ color: COLORS.ctaPrimary }} className="font-semibold">
          ✨ Ecossistema Completo em 30 Dias
        </span>
      </div>
      <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight" style={{ color: COLORS.textPrimary }}>
        {CONFIG.headline}
      </h1>
      <p className="text-xl md:text-2xl mb-12 max-w-4xl mx-auto leading-relaxed" style={{ color: COLORS.textSecondary }}>
        {CONFIG.subheadline}
      </p>
      <VideoPlayer url={CONFIG.videoUrl} />
      <CTAButton text={CONFIG.ctaText} link={CONFIG.ctaLink} size="large" />
      <p className="mt-6" style={{ color: COLORS.textMuted }}>
        ⚡ Setup completo • 🔒 Garantia de satisfação • 🚀 Suporte incluído
      </p>
    </div>
  </section>
);

const StatsSection = () => (
  <section className="py-16 px-4" style={{ backgroundColor: COLORS.bgDark }}>
    <div className="max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {CONFIG.stats.map((stat, index) => (
          <div key={index} className="text-center">
            <div className="text-4xl md:text-5xl font-bold mb-2"
              style={{
                background: `linear-gradient(135deg, ${COLORS.ctaPrimary} 0%, ${COLORS.ctaSecondary} 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >
              {stat.number}
            </div>
            <div style={{ color: COLORS.textMuted }}>{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const BenefitsSection = () => (
  <section 
    className="py-20 px-4"
    style={{
      background: `linear-gradient(180deg, ${COLORS.bgGradientStart} 0%, ${COLORS.bgGradientMid} 100%)`
    }}
  >
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: COLORS.textPrimary }}>
        Por Que Escolher Este Ecossistema?
      </h2>
      <p className="text-xl text-center mb-16" style={{ color: COLORS.textMuted }}>
        Tudo que seu negócio precisa para crescer de forma previsível
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {CONFIG.benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <div
              key={index}
              className="p-8 rounded-2xl border transition-all duration-300 hover:transform hover:scale-105"
              style={{
                backgroundColor: COLORS.bgCard,
                borderColor: COLORS.borderDefault
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = COLORS.borderAccent}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = COLORS.borderDefault}
            >
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.ctaPrimary} 0%, ${COLORS.ctaSecondary} 100%)`
                }}
              >
                <Icon className="w-8 h-8" style={{ color: COLORS.textPrimary }} />
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.textPrimary }}>
                {benefit.title}
              </h3>
              <p className="leading-relaxed" style={{ color: COLORS.textMuted }}>
                {benefit.description}
              </p>
            </div>
          );
        })}
      </div>
      <div className="text-center">
        <CTAButton text={CONFIG.ctaText} link={CONFIG.ctaLink} size="large" />
      </div>
    </div>
  </section>
);

const CreatorSection = () => (
  <section className="py-20 px-4" style={{ backgroundColor: COLORS.bgDark }}>
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-16" style={{ color: COLORS.textPrimary }}>
        Quem Está Por Trás Deste Ecossistema
      </h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="text-center md:text-left">
          <div className="text-9xl mb-6 inline-block">{CONFIG.creator.photo}</div>
          <h3 className="text-3xl font-bold mb-2" style={{ color: COLORS.textPrimary }}>
            {CONFIG.creator.name}
          </h3>
          <p className="text-xl mb-6" style={{ color: COLORS.ctaPrimary }}>
            {CONFIG.creator.title}
          </p>
          <p className="text-lg leading-relaxed mb-6" style={{ color: COLORS.textSecondary }}>
            {CONFIG.creator.bio}
          </p>
          <CTAButton text={CONFIG.creator.cta} link="#sobre" />
        </div>
        <div 
          className="p-8 rounded-2xl"
          style={{
            backgroundColor: COLORS.bgCard,
            borderLeft: `4px solid ${COLORS.ctaPrimary}`
          }}
        >
          <h4 className="text-2xl font-bold mb-6" style={{ color: COLORS.textPrimary }}>
            Conquistas e Resultados
          </h4>
          <ul className="space-y-4">
            {CONFIG.creator.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start gap-3">
                <Check className="w-6 h-6 flex-shrink-0 mt-1" style={{ color: COLORS.ctaPrimary }} />
                <span className="text-lg" style={{ color: COLORS.textSecondary }}>
                  {achievement}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section 
    className="py-20 px-4"
    style={{
      background: `linear-gradient(180deg, ${COLORS.bgGradientMid} 0%, ${COLORS.bgGradientEnd} 100%)`
    }}
  >
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: COLORS.textPrimary }}>
        Transformações Reais
      </h2>
      <p className="text-xl text-center mb-16" style={{ color: COLORS.textMuted }}>
        Veja o que nossos clientes estão dizendo
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
        {CONFIG.testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl border transition-all duration-300"
            style={{
              backgroundColor: COLORS.bgCard,
              borderColor: COLORS.borderDefault
            }}
          >
            <div className="flex items-center mb-4">
              {[...Array(testimonial.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-current" style={{ color: COLORS.ctaPrimary }} />
              ))}
            </div>
            <p className="mb-6 italic leading-relaxed" style={{ color: COLORS.textSecondary }}>
              "{testimonial.text}"
            </p>
            <div className="flex items-center">
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center font-bold mr-4"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.ctaPrimary} 0%, ${COLORS.ctaSecondary} 100%)`,
                  color: COLORS.textPrimary
                }}
              >
                {testimonial.avatar}
              </div>
              <div>
                <p className="font-bold" style={{ color: COLORS.textPrimary }}>
                  {testimonial.name}
                </p>
                <p className="text-sm" style={{ color: COLORS.textMuted }}>
                  {testimonial.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center">
        <VideoPlayer url={CONFIG.videoUrl} />
        <CTAButton text={CONFIG.ctaText} link={CONFIG.ctaLink} size="large" />
      </div>
    </div>
  </section>
);

const StepsSection = () => (
  <section className="py-20 px-4" style={{ backgroundColor: COLORS.bgDark }}>
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: COLORS.textPrimary }}>
        Como Funciona
      </h2>
      <p className="text-xl text-center mb-16" style={{ color: COLORS.textMuted }}>
        Do diagnóstico à entrega em apenas 3 passos simples
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {CONFIG.steps.map((step, index) => (
          <div key={index} className="relative">
            <div 
              className="p-8 rounded-2xl border transition-all duration-300 h-full"
              style={{
                backgroundColor: COLORS.bgCard,
                borderColor: COLORS.borderDefault
              }}
            >
              <div className="text-7xl font-bold mb-4"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.ctaPrimary} 0%, ${COLORS.ctaSecondary} 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                {step.number}
              </div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: COLORS.textPrimary }}>
                {step.title}
              </h3>
              <p className="leading-relaxed" style={{ color: COLORS.textMuted }}>
                {step.description}
              </p>
            </div>
            {index < CONFIG.steps.length - 1 && (
              <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                <ArrowRight className="w-8 h-8" style={{ color: COLORS.ctaPrimary }} />
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="text-center">
        <CTAButton text={CONFIG.ctaText} link={CONFIG.ctaLink} size="large" />
      </div>
    </div>
  </section>
);

const IncludedSection = () => (
  <section 
    className="py-20 px-4"
    style={{
      background: `linear-gradient(180deg, ${COLORS.bgGradientStart} 0%, ${COLORS.bgGradientMid} 100%)`
    }}
  >
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: COLORS.textPrimary }}>
        O Que Está Incluído
      </h2>
      <p className="text-xl text-center mb-16" style={{ color: COLORS.textMuted }}>
        Seu ecossistema digital completo, pronto para gerar resultados
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CONFIG.included.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className="p-8 rounded-2xl border"
              style={{
                backgroundColor: COLORS.bgCard,
                borderColor: COLORS.borderDefault
              }}
            >
              <div 
                className="w-16 h-16 rounded-xl flex items-center justify-center mb-4"
                style={{
                  background: `linear-gradient(135deg, ${COLORS.ctaPrimary} 0%, ${COLORS.ctaSecondary} 100%)`
                }}
              >
                <Icon className="w-8 h-8" style={{ color: COLORS.textPrimary }} />
              </div>
              <h3 className="text-2xl font-bold mb-2" style={{ color: COLORS.textPrimary }}>
                {item.title}
              </h3>
              <p className="mb-4" style={{ color: COLORS.textMuted }}>
                {item.description}
              </p>
              <ul className="space-y-2">
                {item.items.map((subItem, subIndex) => (
                  <li key={subIndex} className="flex items-center gap-2 text-sm" style={{ color: COLORS.textSecondary }}>
                    <Check className="w-4 h-4" style={{ color: COLORS.ctaPrimary }} />
                    {subItem}
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);

const TimelineSection = () => (
  <section className="py-20 px-4" style={{ backgroundColor: COLORS.bgDark }}>
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: COLORS.textPrimary }}>
        Cronograma de Entrega
      </h2>
      <p className="text-xl text-center mb-16" style={{ color: COLORS.textMuted }}>
        30 dias para transformar completamente sua presença digital
      </p>
      
      <Accordion.Root type="single" collapsible className="space-y-4">
        {CONFIG.modules.map((module, index) => (
          <Accordion.Item
            key={index}
            value={`module-${index}`}
            className="rounded-2xl border overflow-hidden"
            style={{
              backgroundColor: COLORS.bgCard,
              borderColor: COLORS.borderDefault
            }}
          >
            <Accordion.Trigger className="w-full p-6 text-left flex items-center justify-between hover:brightness-110 transition-all group">
              <div className="flex items-start gap-6 flex-1">
                <div 
                  className="w-16 h-16 rounded-xl flex items-center justify-center font-bold text-2xl flex-shrink-0"
                  style={{
                    background: `linear-gradient(135deg, ${COLORS.ctaPrimary} 0%, ${COLORS.ctaSecondary} 100%)`,
                    color: COLORS.textPrimary
                  }}
                >
                  {module.number}
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:brightness-110 transition-all" style={{ color: COLORS.textPrimary }}>
                    {module.title}
                  </h3>
                  <div className="flex items-center gap-2 text-sm" style={{ color: COLORS.textMuted }}>
                    <Clock className="w-4 h-4" />
                    <span>{module.duration}</span>
                  </div>
                </div>
              </div>
              <ChevronDown className="w-6 h-6 flex-shrink-0 transition-transform group-data-[state=open]:rotate-180" style={{ color: COLORS.ctaPrimary }} />
            </Accordion.Trigger>
            
            <Accordion.Content className="px-6 pb-6">
              <div className="ml-22 pl-6" style={{ borderLeft: `2px solid ${COLORS.ctaPrimary}30` }}>
                <ul className="space-y-3">
                  {module.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3" style={{ color: COLORS.textSecondary }}>
                      <Check className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: COLORS.ctaPrimary }} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
      
      <div className="text-center mt-16">
        <CTAButton text={CONFIG.ctaText} link={CONFIG.ctaLink} size="large" />
      </div>
    </div>
  </section>
);

const OfferSection = () => (
  <section 
    className="py-20 px-4"
    style={{
      background: `linear-gradient(180deg, ${COLORS.bgGradientMid} 0%, ${COLORS.bgGradientEnd} 100%)`
    }}
  >
    <div className="max-w-5xl mx-auto">
      <div 
        className="p-8 md:p-12 rounded-3xl shadow-2xl"
        style={{
          backgroundColor: COLORS.bgCard,
          border: `2px solid ${COLORS.ctaPrimary}`
        }}
      >
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" style={{ color: COLORS.textPrimary }}>
            {CONFIG.offer.title}
          </h2>
          <p className="text-xl" style={{ color: COLORS.textSecondary }}>
            {CONFIG.offer.description}
          </p>
        </div>
        
        <div 
          className="p-8 rounded-2xl mb-8"
          style={{ backgroundColor: `${COLORS.bgDark}80` }}
        >
          <h3 className="text-2xl font-bold mb-6" style={{ color: COLORS.textPrimary }}>
            O que você recebe:
          </h3>
          <div className="space-y-4">
            {CONFIG.offer.items.map((item, index) => (
              <div key={index} className="flex items-start">
                <Check className="w-6 h-6 mr-3 flex-shrink-0 mt-1" style={{ color: COLORS.ctaPrimary }} />
                <span className="text-lg" style={{ color: COLORS.textSecondary }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-6 text-center" style={{ color: COLORS.textPrimary }}>
            🎁 Bônus Exclusivos
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {CONFIG.offer.bonuses.map((bonus, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl border"
                style={{
                  backgroundColor: COLORS.bgDark,
                  borderColor: `${COLORS.ctaPrimary}50`
                }}
              >
                <div 
                  className="inline-block px-4 py-1 rounded-full text-sm font-semibold mb-3"
                  style={{
                    backgroundColor: `${COLORS.ctaPrimary}20`,
                    color: COLORS.ctaPrimary
                  }}
                >
                  {bonus.value}
                </div>
                <h4 className="text-lg font-bold mb-2" style={{ color: COLORS.textPrimary }}>
                  {bonus.title}
                </h4>
                <p className="text-sm" style={{ color: COLORS.textMuted }}>
                  {bonus.description}
                </p>
              </div>
            ))}
          </div>
        </div>
        
        <div className="text-center mb-8">
          <p className="line-through text-xl mb-2" style={{ color: COLORS.textMuted }}>
            De {CONFIG.offer.originalPrice}
          </p>
          <p className="text-5xl md:text-6xl font-bold mb-2" style={{ color: COLORS.textPrimary }}>
            {CONFIG.offer.price}
          </p>
          <p className="text-xl" style={{ color: COLORS.textMuted }}>
            {CONFIG.offer.fullPrice}
          </p>
        </div>
        
        <div className="text-center">
          <VideoPlayer url={CONFIG.videoUrl} />
          <CTAButton text={CONFIG.ctaText} link={CONFIG.ctaLink} size="large" />
          <p className="mt-6" style={{ color: COLORS.textMuted }}>
            🔒 Pagamento 100% seguro | ✅ Garantia de satisfação | 🚀 Entrega em 30 dias
          </p>
        </div>
      </div>
    </div>
  </section>
);

const ComparisonSection = () => (
  <section className="py-20 px-4" style={{ backgroundColor: COLORS.bgDark }}>
    <div className="max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: COLORS.textPrimary }}>
        Compare e Decida
      </h2>
      <p className="text-xl text-center mb-16" style={{ color: COLORS.textMuted }}>
        Veja a diferença entre fazer sozinho e ter o ecossistema completo
      </p>
      
      <div className="grid md:grid-cols-2 gap-8">
        <div 
          className="p-8 rounded-2xl border"
          style={{
            backgroundColor: COLORS.bgCard,
            borderColor: '#ef444450'
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <XCircle className="w-8 h-8 text-red-500" />
            <h3 className="text-2xl font-bold" style={{ color: COLORS.textPrimary }}>
              Fazendo Sozinho
            </h3>
          </div>
          <ul className="space-y-4">
            {[
              "Meses de tentativa e erro",
              "Custo alto com múltiplas ferramentas",
              "Integrações quebradas e instáveis",
              "Falta de conhecimento técnico",
              "Sem suporte quando precisa",
              "Design amador e pouco profissional",
              "Perda de vendas por problemas técnicos",
              "Tempo precioso desperdiçado"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={{ color: COLORS.textSecondary }}>
                <XCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div 
          className="p-8 rounded-2xl border-2"
          style={{
            backgroundColor: COLORS.bgCard,
            borderColor: COLORS.ctaPrimary,
            boxShadow: `0 0 30px ${COLORS.ctaPrimary}30`
          }}
        >
          <div className="flex items-center gap-3 mb-6">
            <CheckCircle className="w-8 h-8" style={{ color: COLORS.ctaPrimary }} />
            <h3 className="text-2xl font-bold" style={{ color: COLORS.textPrimary }}>
              Com o Ecossistema
            </h3>
          </div>
          <ul className="space-y-4">
            {[
              "Pronto em 30 dias, testado e funcionando",
              "Investimento único e previsível",
              "Tudo integrado e estável",
              "Implementado por especialistas",
              "Suporte dedicado incluído",
              "Design profissional que converte",
              "Sistema robusto e confiável",
              "Foco no seu negócio, não na técnica"
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3" style={{ color: COLORS.textSecondary }}>
                <CheckCircle className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: COLORS.ctaPrimary }} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="text-center mt-12">
        <CTAButton text={CONFIG.ctaText} link={CONFIG.ctaLink} size="large" />
      </div>
    </div>
  </section>
);

const FAQSection = () => (
  <section 
    className="py-20 px-4"
    style={{
      background: `linear-gradient(180deg, ${COLORS.bgGradientStart} 0%, ${COLORS.bgGradientMid} 100%)`
    }}
  >
    <div className="max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold text-center mb-4" style={{ color: COLORS.textPrimary }}>
        Perguntas Frequentes
      </h2>
      <p className="text-xl text-center mb-16" style={{ color: COLORS.textMuted }}>
        Tire suas dúvidas antes de começar
      </p>
      
      <Accordion.Root type="single" collapsible className="space-y-4">
        {CONFIG.faq.map((item, index) => (
          <Accordion.Item
            key={index}
            value={`faq-${index}`}
            className="rounded-2xl border overflow-hidden"
            style={{
              backgroundColor: COLORS.bgCard,
              borderColor: COLORS.borderDefault
            }}
          >
            <Accordion.Trigger className="w-full p-6 text-left flex items-center justify-between hover:brightness-110 transition-all group">
              <span className="text-xl font-bold pr-4 group-hover:brightness-110 transition-all" style={{ color: COLORS.textPrimary }}>
                {item.question}
              </span>
              <ChevronDown className="w-6 h-6 flex-shrink-0 transition-transform group-data-[state=open]:rotate-180" style={{ color: COLORS.ctaPrimary }} />
            </Accordion.Trigger>
            <Accordion.Content className="px-6 pb-6">
              <p className="leading-relaxed" style={{ color: COLORS.textSecondary }}>
                {item.answer}
              </p>
            </Accordion.Content>
          </Accordion.Item>
        ))}
      </Accordion.Root>
    </div>
  </section>
);

const GuaranteeSection = () => (
  <section className="py-20 px-4" style={{ backgroundColor: COLORS.bgDark }}>
    <div className="max-w-4xl mx-auto text-center">
      <div className="inline-block mb-8">
        <div 
          className="w-32 h-32 rounded-full flex items-center justify-center mx-auto"
          style={{
            background: `linear-gradient(135deg, ${COLORS.ctaPrimary} 0%, ${COLORS.ctaSecondary} 100%)`
          }}
        >
          <Shield className="w-16 h-16" style={{ color: COLORS.textPrimary }} />
        </div>
      </div>
      <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: COLORS.textPrimary }}>
        Garantia de Satisfação
      </h2>
      <p className="text-xl mb-8 leading-relaxed" style={{ color: COLORS.textSecondary }}>
        Se após a entrega você não estiver 100% satisfeito com o ecossistema digital, 
        faremos todos os ajustes necessários sem custo adicional até você ficar completamente satisfeito.
      </p>
      <div 
        className="p-8 rounded-2xl border max-w-2xl mx-auto"
        style={{
          backgroundColor: COLORS.bgCard,
          borderColor: `${COLORS.ctaPrimary}30`
        }}
      >
        <h3 className="text-2xl font-bold mb-4" style={{ color: COLORS.textPrimary }}>
          Nossa Promessa
        </h3>
        <p className="leading-relaxed" style={{ color: COLORS.textSecondary }}>
          Não descansamos até você ter um sistema que funciona perfeitamente e gera resultados reais. 
          Seu sucesso é o nosso sucesso, e estamos comprometidos em fazer dar certo.
        </p>
      </div>
    </div>
  </section>
);

const UrgencySection = () => (
  <section 
    className="py-20 px-4"
    style={{
      background: `linear-gradient(180deg, ${COLORS.bgGradientMid} 0%, ${COLORS.bgGradientEnd} 100%)`
    }}
  >
    <div className="max-w-4xl mx-auto">
      <div 
        className="p-8 md:p-12 rounded-3xl"
        style={{
          backgroundColor: `${COLORS.ctaPrimary}15`,
          border: `2px solid ${COLORS.ctaPrimary}`
        }}
      >
        <div className="text-center mb-8">
          <AlertCircle className="w-16 h-16 mx-auto mb-4" style={{ color: COLORS.ctaPrimary }} />
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: COLORS.textPrimary }}>
            🔥 Vagas Limitadas — Ação Exclusiva
          </h2>
          <p className="text-xl" style={{ color: COLORS.textSecondary }}>
            Só conseguimos atender um número limitado de clientes por mês para garantir 
            qualidade máxima. Os bônus exclusivos são apenas para as próximas vagas.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div 
            className="p-6 rounded-xl text-center"
            style={{ backgroundColor: `${COLORS.bgDark}80` }}
          >
            <div className="text-4xl font-bold mb-2" style={{ color: COLORS.ctaPrimary }}>
              8
            </div>
            <div style={{ color: COLORS.textMuted }}>Vagas Restantes</div>
          </div>
          <div 
            className="p-6 rounded-xl text-center"
            style={{ backgroundColor: `${COLORS.bgDark}80` }}
          >
            <div className="text-4xl font-bold mb-2" style={{ color: COLORS.ctaPrimary }}>
              R$ 3.491
            </div>
            <div style={{ color: COLORS.textMuted }}>Em Bônus Grátis</div>
          </div>
          <div 
            className="p-6 rounded-xl text-center"
            style={{ backgroundColor: `${COLORS.bgDark}80` }}
          >
            <div className="text-4xl font-bold mb-2" style={{ color: COLORS.ctaPrimary }}>
              30 Dias
            </div>
            <div style={{ color: COLORS.textMuted }}>Para Entrega</div>
          </div>
        </div>
        
        <div className="text-center">
          <CTAButton text="GARANTIR MINHA VAGA AGORA" link={CONFIG.ctaLink} size="large" />
          <p className="mt-4" style={{ color: COLORS.textMuted }}>
            ⚡ Oferta válida por tempo limitado
          </p>
        </div>
      </div>
    </div>
  </section>
);

const FinalCTASection = () => (
  <section className="py-20 px-4" style={{ backgroundColor: COLORS.bgDark }}>
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl md:text-6xl font-bold mb-6" style={{ color: COLORS.textPrimary }}>
        Não Fique Para Trás
      </h2>
      <p className="text-xl md:text-2xl mb-12 leading-relaxed" style={{ color: COLORS.textSecondary }}>
        Tenha hoje o ecossistema que grandes empresas já usam para crescer. 
        Transforme seu negócio em uma máquina de vendas automatizada.
      </p>
      <div className="mb-12">
        <div className="inline-flex flex-wrap justify-center gap-4 mb-8">
          <div 
            className="flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              backgroundColor: `${COLORS.ctaPrimary}10`,
              color: COLORS.ctaPrimary
            }}
          >
            <Zap className="w-5 h-5" />
            <span>Entrega em 30 dias</span>
          </div>
          <div 
            className="flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              backgroundColor: `${COLORS.ctaPrimary}10`,
              color: COLORS.ctaPrimary
            }}
          >
            <Shield className="w-5 h-5" />
            <span>Garantia de satisfação</span>
          </div>
          <div 
            className="flex items-center gap-2 px-4 py-2 rounded-full"
            style={{
              backgroundColor: `${COLORS.ctaPrimary}10`,
              color: COLORS.ctaPrimary
            }}
          >
            <Rocket className="w-5 h-5" />
            <span>Suporte incluído</span>
          </div>
        </div>
      </div>
      <VideoPlayer url={CONFIG.videoUrl} />
      <CTAButton text={CONFIG.ctaText} link={CONFIG.ctaLink} size="large" />
      <p className="mt-8 text-lg" style={{ color: COLORS.textMuted }}>
        🔒 Compra 100% segura | 🎁 Bônus exclusivos | ⚡ Acesso imediato ao processo
      </p>
    </div>
  </section>
);


export  {
  HeroSection,
  StatsSection,
  BenefitsSection,
  CreatorSection,
  TestimonialsSection,
  StepsSection,
  IncludedSection,
  TimelineSection,
  OfferSection,
  ComparisonSection,
  FAQSection,
  GuaranteeSection,
  UrgencySection,
  FinalCTASection
}