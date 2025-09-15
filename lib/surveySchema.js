export const surveyJson = {
  "locale": "pt-br",
  "title": "Prospecção de Lead Click Pulso",
  "completedHtml": {
    "pt-br": ""},
  "pages": [
    {
      "name": "page 1",
      "elements": [
        {
          "type": "text",
          "name": "name",
          "title": "👋 Olá, como podemos te chamar?",
          "isRequired": true,
          "placeholder": "Ex: João"
        }
      ]
    },
    {
      "name": "page 2",
      "elements": [
        {
          "type": "dropdown",
          "name": "enterpriseType",
          "title": "😁 Legal {name}, conta pra gente qual é o perfil da sua empresa?",
          "isRequired": true,
          "choices": [
            {
              "value": "mei",
              "text": "Microempresa / MEI"
            },
            {
              "value": "pequena",
              "text": "Pequena empresa"
            },
            {
              "value": "startup",
              "text": "Agência ou Startup"
            },
            {
              "value": "grande",
              "text": "Empresa de médio/grande porte"
            }
          ],
          "showOtherItem": true,
          "placeholder": "Clique aqui para selecionar"
        }
      ]
    },
    {
      "name": "page 3",
      "elements": [
        {
          "type": "dropdown",
          "name": "serviceOption",
          "title": "👉 O que você mais precisa no momento {name}?",
          "isRequired": true,
          "choices": [
            {
              "value": "selling",
              "text": "📈 Geração de Leads"
            },
            {
              "value": "automation",
              "text": "⚡ Automação de Processos"
            },
            {
              "value": "chatBot",
              "text": "🤖 Chatbots e Atendimento"
            },
            {
              "value": "dataAnalyst",
              "text": "📊 Dashboard de Dados e Relatórios"
            },
            {
              "value": "marketing",
              "text": "🎯 Tráfego e Marketing Digital"
            },
            {
              "value": "branding",
              "text": "🙃 Apenas Melhorar meu Branding"
            }
          ],
          "showOtherItem": true
        }
      ]
    },
    {
      "name": "page 4",
      "elements": [
        {
          "type": "dropdown",
          "name": "painSelling",
          "visibleIf": "{serviceOption} = 'selling'",
          "title": "👉 Qual o maior desafio que você enfrenta hoje em geração de leads?",
          "isRequired": true,
          "choices": [
            "Poucos leads qualificados",
            "Baixa conversão em vendas",
            "Dificuldade em criar campanhas efetivas",
            "Custo por lead muito alto"
          ]
        },
        {
          "type": "dropdown",
          "name": "painAutomation",
          "visibleIf": "{serviceOption} = 'automation'",
          "title": "👉 Qual o maior desafio que você enfrenta hoje em automação de processos?",
          "isRequired": true,
          "choices": [
            "Muito tempo em tarefas repetitivas",
            "Falta de integração entre ferramentas",
            "Erros humanos constantes",
            "Não sei por onde começar a automatizar"
          ]
        },
        {
          "type": "dropdown",
          "name": "painChatbot",
          "visibleIf": "{serviceOption} = 'chatBot'",
          "title": "👉 Qual o maior desafio que você enfrenta hoje em chatbots e atendimento?",
          "isRequired": true,
          "choices": [
            "Baixa agilidade no atendimento",
            "Dificuldade em manter atendimento 24/7",
            "Falta de personalização no chatbot",
            "Dificuldade em integrar o chatbot com meus sistemas"
          ]
        },
        {
          "type": "dropdown",
          "name": "painData",
          "visibleIf": "{serviceOption} = 'dataAnalyst'",
          "title": "👉 Qual o maior desafio que você enfrenta hoje em dashboards e relatórios?",
          "isRequired": true,
          "choices": [
            "Não consigo medir resultados com clareza",
            "Dados espalhados em várias ferramentas",
            "Dificuldade em criar relatórios úteis",
            "Falta de previsibilidade nas métricas"
          ]
        },
        {
          "type": "dropdown",
          "name": "painMarketing",
          "visibleIf": "{serviceOption} = 'marketing'",
          "title": "👉 Qual o maior desafio que você enfrenta hoje em tráfego e marketing digital?",
          "isRequired": true,
          "choices": [
            "Poucos leads qualificados",
            "Campanhas não trazem retorno",
            "Não consigo escalar resultados",
            "Falta de estratégia clara"
          ]
        },
        {
          "type": "dropdown",
          "name": "painBranding",
          "visibleIf": "{serviceOption} = 'branding'",
          "title": "👉 Qual o maior desafio que você enfrenta hoje em branding?",
          "isRequired": true,
          "choices": [
            "Não consigo melhorar minha marca (Design)",
            "Pouca diferenciação da concorrência",
            "Falta de identidade visual clara",
            "Dificuldade em transmitir credibilidade"
          ]
        }
      ]
    },
    {
      "name": "page 5",
      "elements": [
        {
          "type": "multipletext",
          "name": "lead",
          "title": "📩 Podemos te enviar um plano prático com as melhores soluções para o seu caso. Para onde devemos mandar?",
          "isRequired": true,
          "items": [
            {
              "name": "email",
              "isRequired": true,
              "placeholder": "Qual é o seu melhor e-mail?",
              "inputType": "email",
              "title": "Email"
            },
            {
              "name": "phoneNumber",
              "isRequired": true,
              "placeholder": "Qual é o seu WhatsApp para contato rápido?",
              "inputType": "tel",
              "title": "WhatsApp"
            }
          ]
        }
      ]
    }
  ],
  "cookieName": "",
  "showPrevButton": false,
  "showTitle": false,
  "progressBarLocation": "bottom",
  "progressBarShowPageNumbers": true,
  "pageNextText": "Pronto",
  "completeText": "Iniciar Automação",
  "gridLayoutEnabled": true,
  "headerView": "advanced"
}