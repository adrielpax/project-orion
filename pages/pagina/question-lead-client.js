import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "survey-core/survey-core.css";
import { Model } from "survey-core";
import { surveyJson } from "../../lib/surveySchema";
import { surveyTheme } from "../../lib/surveyTheme";

// Carregamento do componente React do Survey apenas no client
const Survey = dynamic(
  async () => {
    const mod = await import("survey-react-ui");
    return mod.Survey;
  },
  { ssr: false }
);

export default function QuestionLeadPage() {
  const [survey, setSurvey] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  useEffect(() => {
    let mounted = true;
    const s = new Model(surveyJson);
    s.sendResultOnPageNext = false;
    s.showCompletedPage = false;

    // Aplicar tema (seu código existente)
    try {
      if (surveyTheme && typeof s.applyTheme === "function") {
        s.applyTheme({
          themeName: "default",
          colorPalette: "dark",
          isPanelless: true,
          backgroundImage: "",
          backgroundImageFit: "cover",
          backgroundImageAttachment: "fixed",
          backgroundOpacity: 1,
          cssVariables: {
            // ... suas variáveis CSS existentes
            "--sjs-font-family": "Open Sans",
            "--sjs-font-size": "16px",
            "--sjs-corner-radius": "4px",
            "--sjs-base-unit": "8px",
            "--sjs-shadow-small": "0px 1px 2px 0px rgba(0, 0, 0, 0.35)",
            "--sjs-shadow-inner": "inset 0px 1px 2px 0px rgba(0, 0, 0, 0.2)",
            "--sjs-border-default": "rgba(255, 255, 255, 0.12)",
            "--sjs-border-light": "rgba(255, 255, 255, 0.08)",
            "--sjs-general-backcolor": "rgba(48, 48, 48, 1)",
            "--sjs-general-backcolor-dark": "rgba(52, 52, 52, 1)",
            "--sjs-general-backcolor-dim-light": "rgba(43, 43, 43, 1)",
            "--sjs-general-backcolor-dim-dark": "rgba(46, 46, 46, 1)",
            "--sjs-general-forecolor": "rgba(255, 255, 255, 0.78)",
            "--sjs-general-forecolor-light": "rgba(255, 255, 255, 0.42)",
            "--sjs-general-dim-forecolor": "rgba(255, 255, 255, 0.79)",
            "--sjs-general-dim-forecolor-light": "rgba(255, 255, 255, 0.45)",
            "--sjs-secondary-backcolor": "rgba(255, 152, 20, 1)",
            "--sjs-secondary-backcolor-light": "rgba(255, 152, 20, 0.1)",
            "--sjs-secondary-backcolor-semi-light": "rgba(255, 152, 20, 0.25)",
            "--sjs-secondary-forecolor": "rgba(48, 48, 48, 1)",
            "--sjs-secondary-forecolor-light": "rgba(48, 48, 48, 0.25)",
            "--sjs-general-backcolor-dim": "#0F0F11",
            "--sjs-primary-backcolor": "#E74F11",
            "--sjs-primary-backcolor-dark": "rgba(231, 79, 17, 1)",
            "--sjs-primary-backcolor-light": "rgba(231, 79, 17, 0.07)",
            "--sjs-primary-forecolor": "rgba(32, 32, 32, 1)",
            "--sjs-primary-forecolor-light": "rgba(32, 32, 32, 0.25)",
            "--sjs-special-red": "rgba(254, 76, 108, 1)",
            "--sjs-special-red-light": "rgba(254, 76, 108, 0.1)",
          },
          header: {
            height: 0,
            mobileHeight: 0,
            inheritWidthFrom: "survey",
            textAreaWidth: 0,
            backgroundImageFit: "cover",
            backgroundImageOpacity: 100,
            overlapEnabled: false,
            logoPositionX: "left",
            logoPositionY: "top",
            titlePositionX: "center",
            titlePositionY: "middle",
            descriptionPositionX: "left",
            descriptionPositionY: "bottom",
          },
          headerView: "advanced",
        });
      } else {
        // Fallback para temas builtin
        import("survey-core/themes")
          .then((themes) => {
            const builtin =
              themes.LayeredDarkPanelless ||
              themes.DefaultV2 ||
              themes.ContrastLight;
            if (builtin && typeof s.applyTheme === "function") {
              s.applyTheme(builtin);
            }
          })
          .catch((e) => {
            console.warn("Não conseguiu importar temas builtin:", e);
          });
      }
    } catch (err) {
      console.error("Erro ao aplicar tema:", err);
    }

    // Handler onComplete melhorado
    const handleComplete = async (sender) => {
      setIsSubmitting(true);
      setSubmitStatus(null);
      
      try {
        console.log("Dados do formulário:", sender.data);
        
        // Adiciona dados extras
        const formData = {
          ...sender.data,
          timestamp: new Date().toISOString(),
          origem: "Website - Formulário Lead",
          userAgent: navigator.userAgent,
          url: window.location.href
        };
        
        // Faz a requisição para o Google Apps Script
        const response = await fetch(process.env.NEXT_PUBLIC_SHEETS_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });
        
        const result = await response.json();
        
        if (result.success) {
          console.log("Lead enviado com sucesso!", result);
          setSubmitStatus({
            type: "success",
            message: "Obrigado! Seus dados foram enviados com sucesso."
          });
          
          // Opcional: redirecionar após sucesso
          // setTimeout(() => {
          //   window.location.href = "/obrigado";
          // }, 2000);
          
        } else {
          throw new Error(result.error || "Erro desconhecido");
        }
        
      } catch (error) {
        console.error("Erro ao enviar lead:", error);
        setSubmitStatus({
          type: "error",
          message: "Ocorreu um erro ao enviar seus dados. Tente novamente."
        });
      } finally {
        setIsSubmitting(false);
      }
    };
    
    s.onComplete.add(handleComplete);

    if (mounted) setSurvey(s);

    return () => {
      mounted = false;
      s.onComplete.remove(handleComplete);
    };
  }, []);

  if (!survey) {
    return (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        height: '200px',
        color: '#fff'
      }}>
        Carregando formulário...
      </div>
    );
  }

  return (
    <div>
      <Survey model={survey} />
      
      {/* Loading overlay */}
      {isSubmitting && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          zIndex: 9999,
          color: '#fff'
        }}>
          <div style={{ textAlign: 'center' }}>
            <div>Enviando dados...</div>
            <div style={{ marginTop: '10px' }}>⏳</div>
          </div>
        </div>
      )}
      
      {/* Status messages */}
      {submitStatus && (
        <div style={{
          position: 'fixed',
          top: '20px',
          right: '20px',
          padding: '15px 20px',
          borderRadius: '5px',
          backgroundColor: submitStatus.type === 'success' ? '#4CAF50' : '#f44336',
          color: 'white',
          zIndex: 9999,
          maxWidth: '300px'
        }}>
          {submitStatus.message}
        </div>
      )}
    </div>
  );
}