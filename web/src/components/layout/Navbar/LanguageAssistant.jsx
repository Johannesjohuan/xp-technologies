import { useEffect, useRef, useState } from "react";
import "./LanguageAssistant.css";

const instructions = {
  en: {
    title: "Translate this website",
    description: "Use your browser's built-in translation feature to read this website in your preferred language.",
    chrome: "Right-click anywhere on the page and select Translate. Then choose your preferred language.",
    edge: "Right-click the page and select Translate. Choose the language you want.",
    safari: "Open the Page menu in the address bar and select Translate Website, if available.",
    firefox: "Open the browser menu and select Translate page, if available.",
    mobile: "Open your browser menu and look for Translate or Translate Page.",
    other: "Open your browser menu and look for a page translation option.",
    browser: "Your browser",
    language: "Instruction language",
    tip: "Your browser controls the translation. This website cannot open the browser's translation menu automatically.",
  },
  pt: {
    title: "Traduzir este site",
    description: "Utilize a funcionalidade de tradução do seu navegador para ler este site no idioma que preferir.",
    chrome: "Clique com o botão direito do rato na página e selecione Traduzir. Depois, escolha o idioma pretendido.",
    edge: "Clique com o botão direito do rato na página e selecione Traduzir. Escolha o idioma pretendido.",
    safari: "Abra o menu da página na barra de endereços e selecione Traduzir site, se disponível.",
    firefox: "Abra o menu do navegador e selecione Traduzir página, se disponível.",
    mobile: "Abra o menu do navegador e procure Traduzir ou Traduzir página.",
    other: "Abra o menu do navegador e procure uma opção de tradução da página.",
    browser: "O seu navegador",
    language: "Idioma das instruções",
    tip: "A tradução é controlada pelo navegador. Este site não pode abrir automaticamente o menu de tradução.",
  },
  de: {
    title: "Diese Website übersetzen",
    description: "Nutzen Sie die Übersetzungsfunktion Ihres Browsers, um diese Website in Ihrer bevorzugten Sprache zu lesen.",
    chrome: "Klicken Sie mit der rechten Maustaste auf die Seite und wählen Sie Übersetzen. Wählen Sie dann Ihre Sprache.",
    edge: "Klicken Sie mit der rechten Maustaste auf die Seite und wählen Sie Übersetzen. Wählen Sie Ihre Sprache.",
    safari: "Öffnen Sie das Seitenmenü in der Adressleiste und wählen Sie Website übersetzen, falls verfügbar.",
    firefox: "Öffnen Sie das Browsermenü und wählen Sie Seite übersetzen, falls verfügbar.",
    mobile: "Öffnen Sie das Browsermenü und suchen Sie nach Übersetzen oder Seite übersetzen.",
    other: "Öffnen Sie das Browsermenü und suchen Sie nach einer Übersetzungsoption.",
    browser: "Ihr Browser",
    language: "Sprache der Anleitung",
    tip: "Die Übersetzung wird vom Browser gesteuert. Diese Website kann das Übersetzungsmenü nicht automatisch öffnen.",
  },
  fr: {
    title: "Traduire ce site",
    description: "Utilisez la fonction de traduction de votre navigateur pour lire ce site dans la langue de votre choix.",
    chrome: "Faites un clic droit sur la page et sélectionnez Traduire. Choisissez ensuite votre langue.",
    edge: "Faites un clic droit sur la page et sélectionnez Traduire. Choisissez la langue souhaitée.",
    safari: "Ouvrez le menu de la page dans la barre d'adresse et sélectionnez Traduire le site web, si disponible.",
    firefox: "Ouvrez le menu du navigateur et sélectionnez Traduire la page, si disponible.",
    mobile: "Ouvrez le menu du navigateur et recherchez Traduire ou Traduire la page.",
    other: "Ouvrez le menu du navigateur et recherchez une option de traduction.",
    browser: "Votre navigateur",
    language: "Langue des instructions",
    tip: "La traduction est gérée par votre navigateur. Ce site ne peut pas ouvrir automatiquement le menu de traduction.",
  },
  es: {
    title: "Traducir este sitio web",
    description: "Utiliza la función de traducción de tu navegador para leer este sitio en tu idioma preferido.",
    chrome: "Haz clic derecho en la página y selecciona Traducir. Después, elige tu idioma.",
    edge: "Haz clic derecho en la página y selecciona Traducir. Elige el idioma que prefieras.",
    safari: "Abre el menú de la página en la barra de direcciones y selecciona Traducir sitio web, si está disponible.",
    firefox: "Abre el menú del navegador y selecciona Traducir página, si está disponible.",
    mobile: "Abre el menú del navegador y busca Traducir o Traducir página.",
    other: "Abre el menú del navegador y busca una opción para traducir la página.",
    browser: "Tu navegador",
    language: "Idioma de las instrucciones",
    tip: "La traducción depende del navegador. Este sitio no puede abrir automáticamente el menú de traducción.",
  },
  it: {
    title: "Traduci questo sito",
    description: "Usa la funzione di traduzione del browser per leggere questo sito nella lingua che preferisci.",
    chrome: "Fai clic con il tasto destro sulla pagina e seleziona Traduci. Poi scegli la lingua.",
    edge: "Fai clic con il tasto destro sulla pagina e seleziona Traduci. Scegli la lingua desiderata.",
    safari: "Apri il menu della pagina nella barra degli indirizzi e seleziona Traduci sito web, se disponibile.",
    firefox: "Apri il menu del browser e seleziona Traduci pagina, se disponibile.",
    mobile: "Apri il menu del browser e cerca Traduci o Traduci pagina.",
    other: "Apri il menu del browser e cerca un'opzione per tradurre la pagina.",
    browser: "Il tuo browser",
    language: "Lingua delle istruzioni",
    tip: "La traduzione dipende dal browser. Questo sito non può aprire automaticamente il menu di traduzione.",
  },
  ar: {
    title: "ترجمة هذا الموقع",
    description: "استخدم ميزة الترجمة في متصفحك لقراءة الموقع بلغتك المفضلة.",
    chrome: "انقر بزر الفأرة الأيمن على الصفحة واختر ترجمة، ثم حدد لغتك المفضلة.",
    edge: "انقر بزر الفأرة الأيمن على الصفحة واختر ترجمة، ثم حدد اللغة.",
    safari: "افتح قائمة الصفحة في شريط العنوان واختر ترجمة الموقع إذا كان الخيار متاحًا.",
    firefox: "افتح قائمة المتصفح واختر ترجمة الصفحة إذا كان الخيار متاحًا.",
    mobile: "افتح قائمة المتصفح وابحث عن خيار ترجمة أو ترجمة الصفحة.",
    other: "افتح قائمة المتصفح وابحث عن خيار ترجمة الصفحة.",
    browser: "متصفحك",
    language: "لغة التعليمات",
    tip: "يتحكم المتصفح في الترجمة. لا يستطيع هذا الموقع فتح قائمة الترجمة تلقائيًا.",
  },
  zh: {
    title: "翻译此网站",
    description: "使用浏览器自带的翻译功能，以您喜欢的语言阅读本网站。",
    chrome: "右键点击页面并选择翻译，然后选择您喜欢的语言。",
    edge: "右键点击页面并选择翻译，然后选择目标语言。",
    safari: "打开地址栏中的页面菜单，如果可用，请选择翻译网站。",
    firefox: "打开浏览器菜单，如果可用，请选择翻译页面。",
    mobile: "打开浏览器菜单，查找翻译或翻译页面选项。",
    other: "打开浏览器菜单，查找页面翻译选项。",
    browser: "您的浏览器",
    language: "说明语言",
    tip: "翻译由浏览器控制。本网站无法自动打开浏览器的翻译菜单。",
  },
  ja: {
    title: "このウェブサイトを翻訳",
    description: "ブラウザーの翻訳機能を使って、お好みの言語でこのサイトを読むことができます。",
    chrome: "ページを右クリックして「翻訳」を選択し、希望する言語を選んでください。",
    edge: "ページを右クリックして「翻訳」を選択し、希望する言語を選んでください。",
    safari: "アドレスバーのページメニューから、利用可能であれば「Webサイトを翻訳」を選択してください。",
    firefox: "ブラウザーのメニューから、利用可能であれば「ページを翻訳」を選択してください。",
    mobile: "ブラウザーのメニューを開き、「翻訳」または「ページを翻訳」を探してください。",
    other: "ブラウザーのメニューからページ翻訳の項目を探してください。",
    browser: "お使いのブラウザー",
    language: "説明の言語",
    tip: "翻訳はブラウザーが管理します。このサイトから翻訳メニューを自動的に開くことはできません。",
  },
  hi: {
    title: "इस वेबसाइट का अनुवाद करें",
    description: "इस वेबसाइट को अपनी पसंदीदा भाषा में पढ़ने के लिए ब्राउज़र की अनुवाद सुविधा का उपयोग करें।",
    chrome: "पेज पर राइट-क्लिक करें और अनुवाद का विकल्प चुनें। फिर अपनी भाषा चुनें।",
    edge: "पेज पर राइट-क्लिक करें और अनुवाद का विकल्प चुनें। अपनी पसंदीदा भाषा चुनें।",
    safari: "एड्रेस बार में पेज मेनू खोलें और उपलब्ध होने पर वेबसाइट का अनुवाद चुनें।",
    firefox: "ब्राउज़र मेनू खोलें और उपलब्ध होने पर पेज का अनुवाद चुनें।",
    mobile: "ब्राउज़र मेनू खोलें और अनुवाद या पेज का अनुवाद विकल्प खोजें।",
    other: "ब्राउज़र मेनू में पेज अनुवाद का विकल्प खोजें।",
    browser: "आपका ब्राउज़र",
    language: "निर्देशों की भाषा",
    tip: "अनुवाद ब्राउज़र द्वारा नियंत्रित होता है। यह वेबसाइट अनुवाद मेनू अपने आप नहीं खोल सकती।",
  },
};

const languageOptions = [
  { code: "en", name: "English" },
  { code: "pt", name: "Português" },
  { code: "de", name: "Deutsch" },
  { code: "fr", name: "Français" },
  { code: "es", name: "Español" },
  { code: "it", name: "Italiano" },
  { code: "ar", name: "العربية" },
  { code: "zh", name: "中文" },
  { code: "ja", name: "日本語" },
  { code: "hi", name: "हिन्दी" },
];

function detectBrowser() {
  const agent = navigator.userAgent;

  if (/Edg\//.test(agent)) return "edge";
  if (/Firefox\//.test(agent) || /FxiOS\//.test(agent)) return "firefox";
  if (/CriOS\//.test(agent) || /Chrome\//.test(agent)) return "chrome";
  if (/Safari\//.test(agent)) return "safari";

  return "other";
}

function LanguageAssistant() {
  const [open, setOpen] = useState(false);
  const [language, setLanguage] = useState(() => {
    const preferred = (
      navigator.languages?.[0] ||
      navigator.language ||
      "en"
    ).split("-")[0].toLowerCase();

    return instructions[preferred] ? preferred : "en";
  });

  const containerRef = useRef(null);
  const browser = detectBrowser();
  const isMobile = /Android|iPhone|iPad|iPod|Mobile/i.test(
    navigator.userAgent
  );

  const content = instructions[language] || instructions.en;
  const browserName = {
    chrome: "Google Chrome",
    edge: "Microsoft Edge",
    safari: "Safari",
    firefox: "Firefox",
    other: content.browser,
  }[browser];

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (!containerRef.current?.contains(event.target)) {
        setOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("pointerdown", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div className="xp-language-assistant" ref={containerRef}>
      <button
        type="button"
        className="xp-language-trigger"
        aria-label="Translate website"
        aria-expanded={open}
        aria-controls="xp-language-popup"
        onClick={() => setOpen((current) => !current)}
      >
        <i className="bi bi-globe2" aria-hidden="true"></i>
        <span>{language.toUpperCase()}</span>
        <i className="bi bi-chevron-down xp-language-arrow" aria-hidden="true"></i>
      </button>

      {open && (
        <div
          id="xp-language-popup"
          className="xp-language-popup"
          lang={language}
          dir={language === "ar" ? "rtl" : "ltr"}
        >
          <div className="xp-language-popup-heading">
            <span className="xp-language-popup-icon">
              <i className="bi bi-translate"></i>
            </span>

            <strong>{content.title}</strong>

            <button
              type="button"
              className="xp-language-close"
              onClick={() => setOpen(false)}
              aria-label="Close"
            >
              <i className="bi bi-x-lg"></i>
            </button>
          </div>

          <p className="xp-language-description">
            {content.description}
          </p>

          <label
            className="xp-language-label"
            htmlFor="xp-instruction-language"
          >
            {content.language}
          </label>

          <select
            id="xp-instruction-language"
            className="xp-language-choice"
            value={language}
            onChange={(event) => setLanguage(event.target.value)}
          >
            {languageOptions.map((option) => (
              <option key={option.code} value={option.code}>
                {option.name}
              </option>
            ))}
          </select>

          <div className="xp-browser-instructions">
            <div className="xp-browser-name">
              <i className="bi bi-browser-chrome"></i>
              <span>{browserName}</span>
            </div>

            <p>
              {isMobile ? content.mobile : content[browser]}
            </p>
          </div>

          <p className="xp-language-note">
            <i className="bi bi-info-circle"></i>
            <span>{content.tip}</span>
          </p>
        </div>
      )}
    </div>
  );
}

export default LanguageAssistant;