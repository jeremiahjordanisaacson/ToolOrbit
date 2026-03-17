import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/data/site";
import Link from "next/link";

interface AboutTranslations {
  metaTitle: string;
  metaDescription: string;
  title: string;
  intro: string;
  missionTitle: string;
  missionIntro: string;
  privacyFirst: string;
  privacyFirstDesc: string;
  alwaysFree: string;
  alwaysFreeDesc: string;
  fastSimple: string;
  fastSimpleDesc: string;
  accessible: string;
  accessibleDesc: string;
  whatWeOfferTitle: string;
  whatWeOfferText: string;
  textEditing: string;
  softwareDev: string;
  mathConversion: string;
  randomGenerators: string;
  whatWeOfferSuffix: string;
  technologyTitle: string;
  technologyText: string;
  contactTitle: string;
  contactText: string;
  contactLinkText: string;
}

const translations: Record<string, AboutTranslations> = {
  en: {
    metaTitle: "About ToolOrbit — Free Online Tools for Everyday Tasks",
    metaDescription:
      "Learn about ToolOrbit, a free collection of online tools for text editing, development, calculations, and more. Privacy-first, fast, and always free.",
    title: `About ${siteConfig.name}`,
    intro: `${siteConfig.name} is a free collection of online tools designed to make everyday tasks faster and easier. Whether you're a writer counting words, a developer formatting JSON, a student calculating percentages, or anyone who needs a quick utility tool — ${siteConfig.name} has you covered.`,
    missionTitle: "Our Mission",
    missionIntro: `We believe simple tools should be free, fast, and private. Too many utility websites are cluttered with ads, require signups, or send your data to servers. ${siteConfig.name} takes a different approach:`,
    privacyFirst: "Privacy first",
    privacyFirstDesc:
      "Every tool runs entirely in your browser. Your data never leaves your device.",
    alwaysFree: "Always free",
    alwaysFreeDesc:
      "No premium tiers, no feature locks, no signup required.",
    fastSimple: "Fast and simple",
    fastSimpleDesc: "Clean design, instant results, no bloat.",
    accessible: "Accessible",
    accessibleDesc:
      "Built to work for everyone, including keyboard-only and screen reader users.",
    whatWeOfferTitle: "What We Offer",
    whatWeOfferText: "Our growing collection includes tools for",
    textEditing: "text editing",
    softwareDev: "software development",
    mathConversion: "math and unit conversion",
    randomGenerators: "random generators",
    whatWeOfferSuffix:
      ". Each tool is carefully built to be genuinely useful, not just a thin wrapper around a basic function.",
    technologyTitle: "Technology",
    technologyText: `${siteConfig.name} is built with modern web technology for maximum speed and reliability. Our tools use browser-native APIs like the Web Crypto API for secure random generation and the SubtleCrypto API for hash generation. The site loads fast and works offline once loaded.`,
    contactTitle: "Contact",
    contactText: "Have feedback, a tool request, or a bug report? Visit our",
    contactLinkText: "contact page",
  },
  es: {
    metaTitle:
      "Acerca de ToolOrbit — Herramientas en línea gratuitas para tareas cotidianas",
    metaDescription:
      "Conoce ToolOrbit, una colección gratuita de herramientas en línea para edición de texto, desarrollo, cálculos y más. Privacidad ante todo, rápidas y siempre gratuitas.",
    title: `Acerca de ${siteConfig.name}`,
    intro: `${siteConfig.name} es una colección gratuita de herramientas en línea diseñadas para hacer las tareas cotidianas más rápidas y sencillas. Ya seas un escritor contando palabras, un desarrollador formateando JSON, un estudiante calculando porcentajes o alguien que necesita una herramienta práctica — ${siteConfig.name} tiene lo que necesitas.`,
    missionTitle: "Nuestra misión",
    missionIntro: `Creemos que las herramientas simples deben ser gratuitas, rápidas y privadas. Demasiados sitios web de utilidades están llenos de anuncios, requieren registro o envían tus datos a servidores. ${siteConfig.name} adopta un enfoque diferente:`,
    privacyFirst: "Privacidad ante todo",
    privacyFirstDesc:
      "Cada herramienta se ejecuta completamente en tu navegador. Tus datos nunca salen de tu dispositivo.",
    alwaysFree: "Siempre gratis",
    alwaysFreeDesc:
      "Sin planes premium, sin funciones bloqueadas, sin necesidad de registro.",
    fastSimple: "Rápido y sencillo",
    fastSimpleDesc: "Diseño limpio, resultados instantáneos, sin relleno.",
    accessible: "Accesible",
    accessibleDesc:
      "Diseñado para funcionar para todos, incluyendo usuarios de teclado y lectores de pantalla.",
    whatWeOfferTitle: "Lo que ofrecemos",
    whatWeOfferText:
      "Nuestra colección en crecimiento incluye herramientas para",
    textEditing: "edición de texto",
    softwareDev: "desarrollo de software",
    mathConversion: "matemáticas y conversión de unidades",
    randomGenerators: "generadores aleatorios",
    whatWeOfferSuffix:
      ". Cada herramienta está cuidadosamente construida para ser realmente útil, no solo un envoltorio básico de una función simple.",
    technologyTitle: "Tecnología",
    technologyText: `${siteConfig.name} está construido con tecnología web moderna para máxima velocidad y fiabilidad. Nuestras herramientas utilizan APIs nativas del navegador como la Web Crypto API para generación aleatoria segura y la SubtleCrypto API para generación de hashes. El sitio carga rápido y funciona sin conexión una vez cargado.`,
    contactTitle: "Contacto",
    contactText:
      "¿Tienes comentarios, una solicitud de herramienta o un informe de error? Visita nuestra",
    contactLinkText: "página de contacto",
  },
  fr: {
    metaTitle:
      "À propos de ToolOrbit — Outils en ligne gratuits pour les tâches quotidiennes",
    metaDescription:
      "Découvrez ToolOrbit, une collection gratuite d'outils en ligne pour l'édition de texte, le développement, les calculs et bien plus. Confidentialité d'abord, rapide et toujours gratuit.",
    title: `À propos de ${siteConfig.name}`,
    intro: `${siteConfig.name} est une collection gratuite d'outils en ligne conçus pour rendre les tâches quotidiennes plus rapides et plus simples. Que vous soyez un rédacteur comptant les mots, un développeur formatant du JSON, un étudiant calculant des pourcentages ou toute personne ayant besoin d'un outil pratique — ${siteConfig.name} est là pour vous.`,
    missionTitle: "Notre mission",
    missionIntro: `Nous croyons que les outils simples doivent être gratuits, rapides et respectueux de la vie privée. Trop de sites utilitaires sont encombrés de publicités, exigent une inscription ou envoient vos données à des serveurs. ${siteConfig.name} adopte une approche différente :`,
    privacyFirst: "Confidentialité d'abord",
    privacyFirstDesc:
      "Chaque outil fonctionne entièrement dans votre navigateur. Vos données ne quittent jamais votre appareil.",
    alwaysFree: "Toujours gratuit",
    alwaysFreeDesc:
      "Pas de formules premium, pas de fonctionnalités verrouillées, pas d'inscription requise.",
    fastSimple: "Rapide et simple",
    fastSimpleDesc:
      "Design épuré, résultats instantanés, sans superflu.",
    accessible: "Accessible",
    accessibleDesc:
      "Conçu pour fonctionner pour tous, y compris les utilisateurs de clavier uniquement et de lecteurs d'écran.",
    whatWeOfferTitle: "Ce que nous proposons",
    whatWeOfferText:
      "Notre collection grandissante comprend des outils pour",
    textEditing: "l'édition de texte",
    softwareDev: "le développement logiciel",
    mathConversion: "les mathématiques et la conversion d'unités",
    randomGenerators: "les générateurs aléatoires",
    whatWeOfferSuffix:
      ". Chaque outil est soigneusement conçu pour être véritablement utile, pas simplement une couche superficielle autour d'une fonction basique.",
    technologyTitle: "Technologie",
    technologyText: `${siteConfig.name} est construit avec des technologies web modernes pour une vitesse et une fiabilité maximales. Nos outils utilisent des APIs natives du navigateur comme la Web Crypto API pour la génération aléatoire sécurisée et la SubtleCrypto API pour la génération de hachages. Le site se charge rapidement et fonctionne hors ligne une fois chargé.`,
    contactTitle: "Contact",
    contactText:
      "Vous avez des commentaires, une demande d'outil ou un bug à signaler ? Visitez notre",
    contactLinkText: "page de contact",
  },
  de: {
    metaTitle:
      "Über ToolOrbit — Kostenlose Online-Tools für alltägliche Aufgaben",
    metaDescription:
      "Erfahren Sie mehr über ToolOrbit, eine kostenlose Sammlung von Online-Tools für Textbearbeitung, Entwicklung, Berechnungen und mehr. Datenschutz zuerst, schnell und immer kostenlos.",
    title: `Über ${siteConfig.name}`,
    intro: `${siteConfig.name} ist eine kostenlose Sammlung von Online-Tools, die alltägliche Aufgaben schneller und einfacher machen. Ob Sie als Autor Wörter zählen, als Entwickler JSON formatieren, als Student Prozentsätze berechnen oder einfach ein praktisches Werkzeug brauchen — ${siteConfig.name} hat die passende Lösung.`,
    missionTitle: "Unsere Mission",
    missionIntro: `Wir glauben, dass einfache Tools kostenlos, schnell und privat sein sollten. Zu viele Utility-Websites sind mit Werbung überladen, erfordern eine Registrierung oder senden Ihre Daten an Server. ${siteConfig.name} verfolgt einen anderen Ansatz:`,
    privacyFirst: "Datenschutz zuerst",
    privacyFirstDesc:
      "Jedes Tool läuft vollständig in Ihrem Browser. Ihre Daten verlassen niemals Ihr Gerät.",
    alwaysFree: "Immer kostenlos",
    alwaysFreeDesc:
      "Keine Premium-Stufen, keine gesperrten Funktionen, keine Registrierung erforderlich.",
    fastSimple: "Schnell und einfach",
    fastSimpleDesc:
      "Klares Design, sofortige Ergebnisse, kein Ballast.",
    accessible: "Barrierefrei",
    accessibleDesc:
      "Entwickelt für alle, einschließlich Tastatur- und Screenreader-Nutzer.",
    whatWeOfferTitle: "Was wir bieten",
    whatWeOfferText:
      "Unsere wachsende Sammlung umfasst Tools für",
    textEditing: "Textbearbeitung",
    softwareDev: "Softwareentwicklung",
    mathConversion: "Mathematik und Einheitenumrechnung",
    randomGenerators: "Zufallsgeneratoren",
    whatWeOfferSuffix:
      ". Jedes Tool ist sorgfältig entwickelt, um wirklich nützlich zu sein — nicht nur eine dünne Hülle um eine einfache Funktion.",
    technologyTitle: "Technologie",
    technologyText: `${siteConfig.name} ist mit moderner Webtechnologie für maximale Geschwindigkeit und Zuverlässigkeit gebaut. Unsere Tools nutzen browsereigene APIs wie die Web Crypto API für sichere Zufallsgenerierung und die SubtleCrypto API für Hash-Generierung. Die Seite lädt schnell und funktioniert nach dem Laden auch offline.`,
    contactTitle: "Kontakt",
    contactText:
      "Haben Sie Feedback, einen Tool-Wunsch oder einen Fehlerbericht? Besuchen Sie unsere",
    contactLinkText: "Kontaktseite",
  },
  pt: {
    metaTitle:
      "Sobre o ToolOrbit — Ferramentas online gratuitas para tarefas do dia a dia",
    metaDescription:
      "Conheça o ToolOrbit, uma coleção gratuita de ferramentas online para edição de texto, desenvolvimento, cálculos e muito mais. Privacidade em primeiro lugar, rápido e sempre gratuito.",
    title: `Sobre o ${siteConfig.name}`,
    intro: `O ${siteConfig.name} é uma coleção gratuita de ferramentas online projetadas para tornar as tarefas do dia a dia mais rápidas e fáceis. Seja você um escritor contando palavras, um desenvolvedor formatando JSON, um estudante calculando porcentagens ou qualquer pessoa que precise de uma ferramenta prática — o ${siteConfig.name} tem o que você precisa.`,
    missionTitle: "Nossa missão",
    missionIntro: `Acreditamos que ferramentas simples devem ser gratuitas, rápidas e privadas. Muitos sites de utilidades são cheios de anúncios, exigem cadastro ou enviam seus dados para servidores. O ${siteConfig.name} segue uma abordagem diferente:`,
    privacyFirst: "Privacidade em primeiro lugar",
    privacyFirstDesc:
      "Cada ferramenta roda inteiramente no seu navegador. Seus dados nunca saem do seu dispositivo.",
    alwaysFree: "Sempre gratuito",
    alwaysFreeDesc:
      "Sem planos premium, sem recursos bloqueados, sem necessidade de cadastro.",
    fastSimple: "Rápido e simples",
    fastSimpleDesc:
      "Design limpo, resultados instantâneos, sem enrolação.",
    accessible: "Acessível",
    accessibleDesc:
      "Feito para funcionar para todos, incluindo usuários de teclado e leitores de tela.",
    whatWeOfferTitle: "O que oferecemos",
    whatWeOfferText:
      "Nossa coleção em crescimento inclui ferramentas para",
    textEditing: "edição de texto",
    softwareDev: "desenvolvimento de software",
    mathConversion: "matemática e conversão de unidades",
    randomGenerators: "geradores aleatórios",
    whatWeOfferSuffix:
      ". Cada ferramenta é cuidadosamente construída para ser genuinamente útil, não apenas um invólucro superficial de uma função básica.",
    technologyTitle: "Tecnologia",
    technologyText: `O ${siteConfig.name} é construído com tecnologia web moderna para máxima velocidade e confiabilidade. Nossas ferramentas utilizam APIs nativas do navegador, como a Web Crypto API para geração aleatória segura e a SubtleCrypto API para geração de hashes. O site carrega rápido e funciona offline depois de carregado.`,
    contactTitle: "Contato",
    contactText:
      "Tem feedback, uma sugestão de ferramenta ou um relatório de bug? Visite nossa",
    contactLinkText: "página de contato",
  },
  ja: {
    metaTitle:
      "ToolOrbitについて — 日常のタスクに使える無料オンラインツール",
    metaDescription:
      "ToolOrbitは、テキスト編集、開発、計算などに使える無料オンラインツールのコレクションです。プライバシー重視、高速、そしていつでも無料。",
    title: `${siteConfig.name}について`,
    intro: `${siteConfig.name}は、日常のタスクをより速く簡単にするために設計された無料のオンラインツール集です。文字数を数えるライター、JSONを整形する開発者、百分率を計算する学生、または便利なツールが必要な方まで — ${siteConfig.name}がお役に立ちます。`,
    missionTitle: "私たちのミッション",
    missionIntro: `シンプルなツールは無料で、速く、プライバシーが守られるべきだと考えています。多くのユーティリティサイトは広告だらけで、会員登録を要求したり、データをサーバーに送信したりします。${siteConfig.name}は異なるアプローチを取ります：`,
    privacyFirst: "プライバシー最優先",
    privacyFirstDesc:
      "すべてのツールはブラウザ上で完全に動作します。データがデバイスの外に出ることはありません。",
    alwaysFree: "常に無料",
    alwaysFreeDesc:
      "プレミアムプランなし、機能制限なし、会員登録不要。",
    fastSimple: "高速でシンプル",
    fastSimpleDesc:
      "すっきりしたデザイン、瞬時の結果、無駄のない構成。",
    accessible: "アクセシブル",
    accessibleDesc:
      "キーボードのみの操作やスクリーンリーダーを含め、すべての方が使えるよう設計されています。",
    whatWeOfferTitle: "提供するツール",
    whatWeOfferText: "成長を続ける私たちのコレクションには、",
    textEditing: "テキスト編集",
    softwareDev: "ソフトウェア開発",
    mathConversion: "数学と単位変換",
    randomGenerators: "ランダム生成",
    whatWeOfferSuffix:
      "のツールが含まれています。各ツールは、単なる基本機能の薄いラッパーではなく、本当に役立つよう丁寧に作られています。",
    technologyTitle: "技術",
    technologyText: `${siteConfig.name}は、最高の速度と信頼性を実現するために最新のWeb技術で構築されています。ツールはWeb Crypto APIによる安全な乱数生成やSubtleCrypto APIによるハッシュ生成など、ブラウザネイティブのAPIを活用しています。サイトは高速に読み込まれ、一度読み込まれればオフラインでも動作します。`,
    contactTitle: "お問い合わせ",
    contactText:
      "フィードバック、ツールのリクエスト、バグの報告がありますか？",
    contactLinkText: "お問い合わせページ",
  },
  zh: {
    metaTitle: "关于 ToolOrbit — 免费的日常在线工具",
    metaDescription:
      "了解 ToolOrbit，一个免费的在线工具集合，提供文本编辑、开发、计算等功能。隐私优先、快速且永久免费。",
    title: `关于 ${siteConfig.name}`,
    intro: `${siteConfig.name} 是一个免费的在线工具集合，旨在让日常任务更快捷、更简单。无论您是在计算字数的写作者、在格式化 JSON 的开发者、在计算百分比的学生，还是需要实用工具的任何人 — ${siteConfig.name} 都能满足您的需求。`,
    missionTitle: "我们的使命",
    missionIntro: `我们认为，简单的工具应该是免费的、快速的、并且注重隐私的。太多实用网站充斥着广告、要求注册或将您的数据发送到服务器。${siteConfig.name} 采取了不同的方式：`,
    privacyFirst: "隐私优先",
    privacyFirstDesc:
      "每个工具都完全在您的浏览器中运行。您的数据永远不会离开您的设备。",
    alwaysFree: "永久免费",
    alwaysFreeDesc: "没有付费套餐、没有功能限制、无需注册。",
    fastSimple: "快速简洁",
    fastSimpleDesc: "简洁设计，即时结果，毫无冗余。",
    accessible: "无障碍",
    accessibleDesc:
      "为所有人设计，包括仅使用键盘和屏幕阅读器的用户。",
    whatWeOfferTitle: "我们提供的服务",
    whatWeOfferText: "我们不断增长的工具集包括",
    textEditing: "文本编辑",
    softwareDev: "软件开发",
    mathConversion: "数学与单位转换",
    randomGenerators: "随机生成器",
    whatWeOfferSuffix:
      "等工具。每个工具都经过精心构建，力求真正实用，而不仅仅是对基础功能的简单封装。",
    technologyTitle: "技术",
    technologyText: `${siteConfig.name} 使用现代 Web 技术构建，以实现最高的速度和可靠性。我们的工具使用浏览器原生 API，如 Web Crypto API 进行安全随机生成，SubtleCrypto API 进行哈希生成。网站加载迅速，加载后可离线使用。`,
    contactTitle: "联系我们",
    contactText: "有反馈、工具请求或错误报告？请访问我们的",
    contactLinkText: "联系页面",
  },
  ko: {
    metaTitle:
      "ToolOrbit 소개 — 일상 작업을 위한 무료 온라인 도구",
    metaDescription:
      "ToolOrbit은 텍스트 편집, 개발, 계산 등을 위한 무료 온라인 도구 모음입니다. 개인정보 보호 우선, 빠르고 항상 무료입니다.",
    title: `${siteConfig.name} 소개`,
    intro: `${siteConfig.name}은 일상적인 작업을 더 빠르고 쉽게 만들어주는 무료 온라인 도구 모음입니다. 단어를 세는 작가, JSON을 포맷하는 개발자, 백분율을 계산하는 학생, 또는 빠른 유틸리티 도구가 필요한 누구든 — ${siteConfig.name}이 도와드립니다.`,
    missionTitle: "우리의 미션",
    missionIntro: `간단한 도구는 무료이고, 빠르며, 개인정보가 보호되어야 한다고 믿습니다. 너무 많은 유틸리티 웹사이트가 광고로 가득하고, 회원가입을 요구하거나, 데이터를 서버로 전송합니다. ${siteConfig.name}은 다른 접근 방식을 택합니다:`,
    privacyFirst: "개인정보 보호 우선",
    privacyFirstDesc:
      "모든 도구는 브라우저에서 완전히 실행됩니다. 데이터가 기기 밖으로 나가지 않습니다.",
    alwaysFree: "항상 무료",
    alwaysFreeDesc:
      "프리미엄 요금제 없음, 기능 잠금 없음, 가입 불필요.",
    fastSimple: "빠르고 간편",
    fastSimpleDesc: "깔끔한 디자인, 즉각적인 결과, 군더더기 없음.",
    accessible: "접근성",
    accessibleDesc:
      "키보드 전용 사용자와 스크린 리더 사용자를 포함한 모든 분을 위해 설계되었습니다.",
    whatWeOfferTitle: "제공하는 서비스",
    whatWeOfferText: "계속 성장하는 저희 컬렉션에는",
    textEditing: "텍스트 편집",
    softwareDev: "소프트웨어 개발",
    mathConversion: "수학 및 단위 변환",
    randomGenerators: "랜덤 생성기",
    whatWeOfferSuffix:
      " 도구가 포함되어 있습니다. 각 도구는 기본 기능의 얇은 래퍼가 아닌, 진정으로 유용하도록 정성껏 만들어졌습니다.",
    technologyTitle: "기술",
    technologyText: `${siteConfig.name}은 최고의 속도와 안정성을 위해 최신 웹 기술로 구축되었습니다. 안전한 난수 생성을 위한 Web Crypto API와 해시 생성을 위한 SubtleCrypto API 등 브라우저 네이티브 API를 활용합니다. 사이트는 빠르게 로드되며 한 번 로드되면 오프라인에서도 작동합니다.`,
    contactTitle: "문의하기",
    contactText:
      "피드백, 도구 요청 또는 버그 제보가 있으신가요?",
    contactLinkText: "문의 페이지",
  },
  it: {
    metaTitle:
      "Informazioni su ToolOrbit — Strumenti online gratuiti per le attività quotidiane",
    metaDescription:
      "Scopri ToolOrbit, una raccolta gratuita di strumenti online per editing di testo, sviluppo, calcoli e altro. Privacy al primo posto, veloce e sempre gratuito.",
    title: `Informazioni su ${siteConfig.name}`,
    intro: `${siteConfig.name} è una raccolta gratuita di strumenti online progettati per rendere le attività quotidiane più veloci e semplici. Che tu sia uno scrittore che conta le parole, uno sviluppatore che formatta JSON, uno studente che calcola percentuali o chiunque abbia bisogno di uno strumento pratico — ${siteConfig.name} ha quello che ti serve.`,
    missionTitle: "La nostra missione",
    missionIntro: `Crediamo che gli strumenti semplici debbano essere gratuiti, veloci e rispettosi della privacy. Troppi siti di utilità sono pieni di pubblicità, richiedono registrazione o inviano i tuoi dati a server esterni. ${siteConfig.name} adotta un approccio diverso:`,
    privacyFirst: "Privacy al primo posto",
    privacyFirstDesc:
      "Ogni strumento funziona interamente nel tuo browser. I tuoi dati non lasciano mai il tuo dispositivo.",
    alwaysFree: "Sempre gratuito",
    alwaysFreeDesc:
      "Nessun piano premium, nessuna funzionalità bloccata, nessuna registrazione richiesta.",
    fastSimple: "Veloce e semplice",
    fastSimpleDesc:
      "Design pulito, risultati istantanei, niente fronzoli.",
    accessible: "Accessibile",
    accessibleDesc:
      "Progettato per funzionare per tutti, inclusi utenti che usano solo la tastiera e screen reader.",
    whatWeOfferTitle: "Cosa offriamo",
    whatWeOfferText:
      "La nostra collezione in crescita include strumenti per",
    textEditing: "editing di testo",
    softwareDev: "sviluppo software",
    mathConversion: "matematica e conversione di unità",
    randomGenerators: "generatori casuali",
    whatWeOfferSuffix:
      ". Ogni strumento è costruito con cura per essere genuinamente utile, non solo un sottile involucro attorno a una funzione di base.",
    technologyTitle: "Tecnologia",
    technologyText: `${siteConfig.name} è costruito con tecnologia web moderna per la massima velocità e affidabilità. I nostri strumenti utilizzano API native del browser come la Web Crypto API per la generazione casuale sicura e la SubtleCrypto API per la generazione di hash. Il sito si carica velocemente e funziona offline una volta caricato.`,
    contactTitle: "Contatti",
    contactText:
      "Hai feedback, una richiesta di strumento o una segnalazione di bug? Visita la nostra",
    contactLinkText: "pagina contatti",
  },
  hi: {
    metaTitle:
      "ToolOrbit के बारे में — रोज़मर्रा के कामों के लिए मुफ़्त ऑनलाइन टूल",
    metaDescription:
      "ToolOrbit के बारे में जानें, टेक्स्ट एडिटिंग, डेवलपमेंट, गणना और अन्य के लिए मुफ़्त ऑनलाइन टूल का संग्रह। गोपनीयता पहले, तेज़ और हमेशा मुफ़्त।",
    title: `${siteConfig.name} के बारे में`,
    intro: `${siteConfig.name} मुफ़्त ऑनलाइन टूल्स का एक संग्रह है जो रोज़मर्रा के कामों को तेज़ और आसान बनाने के लिए डिज़ाइन किया गया है। चाहे आप शब्द गिनने वाले लेखक हों, JSON फ़ॉर्मेट करने वाले डेवलपर हों, प्रतिशत निकालने वाले छात्र हों, या कोई भी जिसे एक त्वरित टूल की ज़रूरत हो — ${siteConfig.name} आपकी मदद के लिए तैयार है।`,
    missionTitle: "हमारा मिशन",
    missionIntro: `हमारा मानना है कि सरल टूल्स मुफ़्त, तेज़ और निजी होने चाहिए। बहुत सारी यूटिलिटी वेबसाइटें विज्ञापनों से भरी होती हैं, साइन-अप की मांग करती हैं, या आपका डेटा सर्वर पर भेजती हैं। ${siteConfig.name} एक अलग दृष्टिकोण अपनाता है:`,
    privacyFirst: "गोपनीयता सबसे पहले",
    privacyFirstDesc:
      "हर टूल पूरी तरह आपके ब्राउज़र में चलता है। आपका डेटा कभी भी आपके डिवाइस से बाहर नहीं जाता।",
    alwaysFree: "हमेशा मुफ़्त",
    alwaysFreeDesc:
      "कोई प्रीमियम प्लान नहीं, कोई फ़ीचर लॉक नहीं, साइन-अप की ज़रूरत नहीं।",
    fastSimple: "तेज़ और सरल",
    fastSimpleDesc:
      "साफ़ डिज़ाइन, तुरंत परिणाम, बिना किसी अतिरिक्त भार के।",
    accessible: "सुलभ",
    accessibleDesc:
      "सभी के लिए काम करने के लिए बनाया गया है, जिसमें कीबोर्ड-ओनली और स्क्रीन रीडर उपयोगकर्ता शामिल हैं।",
    whatWeOfferTitle: "हम क्या प्रदान करते हैं",
    whatWeOfferText:
      "हमारे बढ़ते संग्रह में शामिल हैं",
    textEditing: "टेक्स्ट एडिटिंग",
    softwareDev: "सॉफ़्टवेयर डेवलपमेंट",
    mathConversion: "गणित और इकाई रूपांतरण",
    randomGenerators: "रैंडम जनरेटर",
    whatWeOfferSuffix:
      " के टूल्स। प्रत्येक टूल को सच में उपयोगी बनाने के लिए सावधानीपूर्वक बनाया गया है, न कि किसी बुनियादी फ़ंक्शन का पतला आवरण।",
    technologyTitle: "तकनीक",
    technologyText: `${siteConfig.name} अधिकतम गति और विश्वसनीयता के लिए आधुनिक वेब तकनीक से बनाया गया है। हमारे टूल्स ब्राउज़र-नेटिव API जैसे सुरक्षित रैंडम जनरेशन के लिए Web Crypto API और हैश जनरेशन के लिए SubtleCrypto API का उपयोग करते हैं। साइट तेज़ी से लोड होती है और एक बार लोड होने के बाद ऑफ़लाइन भी काम करती है।`,
    contactTitle: "संपर्क करें",
    contactText:
      "कोई फ़ीडबैक, टूल अनुरोध या बग रिपोर्ट है? हमारे",
    contactLinkText: "संपर्क पृष्ठ",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t =
    translations[locale as keyof typeof translations] || translations.en;
  return generatePageMetadata(t.metaTitle, t.metaDescription, `/${locale}/about/`, locale);
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t =
    translations[locale as keyof typeof translations] || translations.en;
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">{t.title}</h1>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>{t.intro}</p>

        <h2 className="text-xl font-semibold text-gray-900">
          {t.missionTitle}
        </h2>
        <p>{t.missionIntro}</p>
        <ul className="list-inside list-disc space-y-2">
          <li>
            <strong>{t.privacyFirst}</strong> — {t.privacyFirstDesc}
          </li>
          <li>
            <strong>{t.alwaysFree}</strong> — {t.alwaysFreeDesc}
          </li>
          <li>
            <strong>{t.fastSimple}</strong> — {t.fastSimpleDesc}
          </li>
          <li>
            <strong>{t.accessible}</strong> — {t.accessibleDesc}
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900">
          {t.whatWeOfferTitle}
        </h2>
        <p>
          {t.whatWeOfferText}{" "}
          <Link
            href={`/${locale}/categories/text-tools/`}
            className="text-primary-600 hover:underline"
          >
            {t.textEditing}
          </Link>
          ,{" "}
          <Link
            href={`/${locale}/categories/developer-tools/`}
            className="text-primary-600 hover:underline"
          >
            {t.softwareDev}
          </Link>
          ,{" "}
          <Link
            href={`/${locale}/categories/math-and-conversion-tools/`}
            className="text-primary-600 hover:underline"
          >
            {t.mathConversion}
          </Link>
          ,{" "}
          <Link
            href={`/${locale}/categories/random-and-utility-tools/`}
            className="text-primary-600 hover:underline"
          >
            {t.randomGenerators}
          </Link>
          {t.whatWeOfferSuffix}
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          {t.technologyTitle}
        </h2>
        <p>{t.technologyText}</p>

        <h2 className="text-xl font-semibold text-gray-900">
          {t.contactTitle}
        </h2>
        <p>
          {t.contactText}{" "}
          <Link
            href={`/${locale}/contact/`}
            className="text-primary-600 hover:underline"
          >
            {t.contactLinkText}
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
