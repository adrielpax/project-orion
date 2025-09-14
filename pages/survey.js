import React from "react";
import { Survey } from "survey-react-ui";
import * as SurveyCore from "survey-core";
import "survey-core/defaultV2.min.css";

const surveyJson = {
  elements: [
    { type: "text", name: "name", title: "👋 Como podemos te chamar?", isRequired: true },
    { type: "text", name: "email", title: "Seu e-mail", isRequired: true },
    { type: "dropdown", name: "service", title: "Qual serviço você procura?", choices: ["Design", "Marketing", "Tráfego Pago", "Automação"], isRequired: true },
    { type: "dropdown", name: "challengeDesign", visibleIf: "{service}='Design'", title: "Qual o maior desafio em Design?", choices: ["Não consigo melhorar minha marca", "Pouca diferenciação", "Falta de identidade visual"] },
    { type: "dropdown", name: "challengeMarketing", visibleIf: "{service}='Marketing'", title: "Qual o maior desafio em Marketing?", choices: ["Poucos leads qualificados", "Campanhas sem retorno", "Falta de estratégia"] },
    { type: "dropdown", name: "challengeTraffic", visibleIf: "{service}='Tráfego Pago'", title: "Qual o maior desafio em Tráfego?", choices: ["CPC alto", "Falta de segmentação", "Conversão baixa"] },
    { type: "dropdown", name: "challengeAutomation", visibleIf: "{service}='Automação'", title: "Qual o maior desafio em Automação?", choices: ["Tarefas repetitivas", "Falta de integração", "Erros humanos"] }
  ]
};

export default function SurveyPage() {
  const handleComplete = async (sender) => {
    const data = sender.data;

    const res = await fetch("/api/check-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: data.email })
    });

    const result = await res.json();

    if (result.isReturning) {
      // Lead recorrente → página de agradecimento
      window.location.href = "/thank-you-returning";
    } else {
      // Lead novo → redireciona para página de venda segmentada
      if (data.service === "Design") window.location.href = "/venda-design";
      if (data.service === "Marketing") window.location.href = "/venda-marketing";
      if (data.service === "Tráfego Pago") window.location.href = "/venda-trafego";
      if (data.service === "Automação") window.location.href = "/venda-automacao";
    }
  };

  const model = new SurveyCore.Model(surveyJson);

  return <Survey model={model} onComplete={handleComplete} />;
}
