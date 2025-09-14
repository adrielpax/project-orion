export const surveyJson = {
  "locale": "pt-br",
  "title": "Prospecção de Lead Click Pulso",
  "pages": [
    {
      "name": "page5",
      "elements": [
        {
          "type": "text",
          "name": "name",
          "title": {
            "pt-br": "Como podemos te chamar ?"
          },
          "isRequired": true,
          "placeholder": {
            "pt-br": "nome e sobrenome"
          }
        }
      ]
    },
    {
      "name": "page1",
      "elements": [
        {
          "type": "dropdown",
          "name": "enterpriseType",
          "title": "Qual é o perfil da sua empresa ?\n",
          "description": "Selecione e opção que mais tem haver com você",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "Microempresa / MEI"
            },
            {
              "value": "Item 2",
              "text": "Pequena empresa"
            },
            {
              "value": "Item 3",
              "text": "Agência ou Startup"
            },
            {
              "value": "Item 4",
              "text": "Empresa de médio/grande porte"
            }
          ],
          "showOtherItem": true,
          "otherPlaceholder": "Selecione o que tem mais haver com você",
          "placeholder": "Cliquei aqui para selecionar"
        }
      ]
    },
    {
      "name": "page2",
      "elements": [
        {
          "type": "dropdown",
          "name": "serviceOption",
          "title": "O que você mais precisa no momento ?\n",
          "description": "Escolha a maneira que podemos ajudar você.",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "📈 Geração de Leads"
            },
            {
              "value": "Item 2",
              "text": "⚡ Automação de Processos"
            },
            {
              "value": "Item 3",
              "text": "🤖 Chatbots e Atendimento"
            },
            {
              "value": "Item 4",
              "text": "📊 Dashboard de Dados e Relatórios"
            },
            {
              "value": "Item 5",
              "text": "🎯 Tráfego e Marketing Digital"
            },
            {
              "value": "Item 6",
              "text": "🙃 Apenas Melhorar meu Branding"
            }
          ]
        }
      ]
    },
    {
      "name": "page3",
      "elements": [
        {
          "type": "dropdown",
          "name": "clientPain",
          "title": "Qual o maior desafio que você enfrenta hoje?",
          "description": "Qual dessas dores abaixo você enfrenta hoje",
          "isRequired": true,
          "choices": [
            {
              "value": "Item 1",
              "text": "Poucos leads qualificados"
            },
            {
              "value": "Item 2",
              "text": "Muito tempo em tarefas repetitivas"
            },
            {
              "value": "Item 3",
              "text": "Baixa conversão em vendas"
            },
            {
              "value": "Item 4",
              "text": "Falta de integração entre ferramentas"
            },
            {
              "value": "Item 5",
              "text": "Não consigo medir resultados"
            },
            {
              "value": "Item 6",
              "text": "Não consigo melhorar minha marca ( Design )"
            }
          ]
        }
      ]
    },
    {
      "name": "page4",
      "elements": [
        {
          "type": "multipletext",
          "name": "lead",
          "title": "Quer receber um plano prático com as melhores soluções para o seu caso ?",
          "description": "Preencha e vamos impulsionar seu negocio",
          "isRequired": true,
          "items": [
            {
              "name": "email",
              "isRequired": true,
              "placeholder": {
                "default": "Ex: meuemail@email.com",
                "pt-br": "emailexemple@email.com"
              },
              "inputType": "email",
              "title": "Email"
            },
            {
              "name": "Numero",
              "isRequired": true,
              "placeholder": {
                "default": "Ex: john brown",
                "pt-br": "(99)9 9999-9999"
              },
              "inputType": "tel",
              "title": "Nome"
            }
          ]
        }
      ]
    }
  ],
  "cookieName": "1",
  "showPrevButton": false,
  "showTitle": false,
  "showPageTitles": false,
  "showCompletePage": false,
  "progressBarLocation": "bottom",
  "progressBarShowPageNumbers": true,
  "pageNextText": "Pronto",
  "completeText": "Iniciar Automação",
  "gridLayoutEnabled": true,
  "headerView": "advanced"
}