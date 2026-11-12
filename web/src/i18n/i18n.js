import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      solutions: "Solutions",
      industries: "Industries",
      portfolio: "Portfolio",
      aboutUs: "About Us",
      resources: "Resources",
      bookConsultation: "Book a Consultation",
      viewAllSolutions: "View all solutions",
      solutionItems: [
        {
          title: "Enterprise ERP Systems",
          description: "Complete system to run and manage your business"
        },
        {
          title: "Business Process Automation",
          description: "Automate workflows and eliminate manual tasks"
        },
        {
          title: "Legacy System Modernisation",
          description: "Upgrade outdated systems to modern platforms"
        },
        {
          title: "Technical Support & Maintenance",
          description: "Keep your systems running smoothly and reliably"
        },
        {
          title: "ERP Security & Infrastructure",
          description: "Protect your data, systems and business"
        }
      ]
    }
  },
  pt: {
    translation: {
      solutions: "Soluções",
      industries: "Setores",
      portfolio: "Portfólio",
      aboutUs: "Sobre Nós",
      resources: "Recursos",
      bookConsultation: "Agendar uma Consulta",
      viewAllSolutions: "Ver todas as soluções"
    }
  },
  fr: {
    translation: {
      solutions: "Solutions",
      industries: "Secteurs",
      portfolio: "Portfolio",
      aboutUs: "À propos",
      resources: "Ressources",
      bookConsultation: "Réserver une consultation",
      viewAllSolutions: "Voir toutes les solutions"
    }
  },
  es: {
    translation: {
      solutions: "Soluciones",
      industries: "Sectores",
      portfolio: "Portafolio",
      aboutUs: "Sobre Nosotros",
      resources: "Recursos",
      bookConsultation: "Reservar una Consulta",
      viewAllSolutions: "Ver todas las soluciones"
    }
  },
  de: {
    translation: {
      solutions: "Lösungen",
      industries: "Branchen",
      portfolio: "Portfolio",
      aboutUs: "Über Uns",
      resources: "Ressourcen",
      bookConsultation: "Beratung Buchen",
      viewAllSolutions: "Alle Lösungen ansehen"
    }
  },
  ar: {
    translation: {
      solutions: "الحلول",
      industries: "القطاعات",
      portfolio: "الأعمال",
      aboutUs: "من نحن",
      resources: "الموارد",
      bookConsultation: "احجز استشارة",
      viewAllSolutions: "عرض جميع الحلول"
    }
  },
  zh: {
    translation: {
      solutions: "解决方案",
      industries: "行业",
      portfolio: "项目案例",
      aboutUs: "关于我们",
      resources: "资源",
      bookConsultation: "预约咨询",
      viewAllSolutions: "查看所有解决方案"
    }
  }
};

const savedLanguage = localStorage.getItem("xp-language") || "en";

i18n.use(initReactI18next).init({
  resources,
  lng: resources[savedLanguage] ? savedLanguage : "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false
  }
});

export default i18n;