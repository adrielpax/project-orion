import { Model } from "survey-core";
import { Survey } from "survey-react-ui";
// components/Survey.tsx
import "survey-core/survey-core.css";
import { surveyJson } from "../../lib/surveySchema";
import { surveyTheme } from "../../lib/surveyTheme"
import { LayeredDarkPanelless } from "survey-core/themes";

export default function QuestionLeadPage() {
  const survey = new Model(surveyJson);
  survey.applyTheme(surveyTheme);
   

  survey.onComplete.add((sender) => {
    console.log("Respostas:", sender.data);
    // Aqui você pode mandar as respostas para uma API/DB
    // fetch("/api/saveQuiz", { method: "POST", body: JSON.stringify(sender.data) })
  });

  return (
    <>
      <Survey model={survey} />
    </>
  );
}
