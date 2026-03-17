import { Locale } from "./config";

interface CategoryTranslation {
  name: string;
  headline: string;
  intro: string;
}

const categoryTranslations: Record<
  string,
  Record<Locale, CategoryTranslation>
> = {
  "text-tools": {
    en: {
      name: "Text Tools",
      headline: "Free Online Text Tools",
      intro:
        "Edit, clean, and transform text instantly with our collection of free online text utilities. Every tool runs in your browser — no data leaves your device.",
    },
    es: {
      name: "Herramientas de Texto",
      headline: "Herramientas de Texto Gratuitas en Línea",
      intro:
        "Edita, limpia y transforma texto al instante con nuestra colección de utilidades de texto en línea gratuitas. Todo se ejecuta en tu navegador — tus datos no salen de tu dispositivo.",
    },
    fr: {
      name: "Outils de Texte",
      headline: "Outils de Texte en Ligne Gratuits",
      intro:
        "Éditez, nettoyez et transformez du texte instantanément avec nos utilitaires de texte en ligne gratuits. Tout fonctionne dans votre navigateur — aucune donnée ne quitte votre appareil.",
    },
    de: {
      name: "Textwerkzeuge",
      headline: "Kostenlose Online-Textwerkzeuge",
      intro:
        "Bearbeiten, bereinigen und transformieren Sie Text sofort mit unserer Sammlung kostenloser Online-Texttools. Alles läuft in Ihrem Browser — keine Daten verlassen Ihr Gerät.",
    },
    pt: {
      name: "Ferramentas de Texto",
      headline: "Ferramentas de Texto Online Gratuitas",
      intro:
        "Edite, limpe e transforme texto instantaneamente com nossa coleção de utilitários de texto online gratuitos. Tudo funciona no seu navegador — nenhum dado sai do seu dispositivo.",
    },
    ja: {
      name: "テキストツール",
      headline: "無料オンラインテキストツール",
      intro:
        "無料のオンラインテキストツールで、テキストの編集・整形・変換を即座に行えます。すべてブラウザ上で動作し、データが外部に送信されることはありません。",
    },
    zh: {
      name: "文本工具",
      headline: "免费在线文本工具",
      intro:
        "使用我们的免费在线文本工具即时编辑、清理和转换文本。所有工具均在浏览器中运行，数据不会离开您的设备。",
    },
    ko: {
      name: "텍스트 도구",
      headline: "무료 온라인 텍스트 도구",
      intro:
        "무료 온라인 텍스트 유틸리티로 텍스트를 즉시 편집, 정리 및 변환하세요. 모든 도구는 브라우저에서 실행되며, 데이터가 기기를 떠나지 않습니다.",
    },
    it: {
      name: "Strumenti di Testo",
      headline: "Strumenti di Testo Online Gratuiti",
      intro:
        "Modifica, pulisci e trasforma il testo istantaneamente con la nostra raccolta di strumenti di testo online gratuiti. Tutto funziona nel tuo browser — nessun dato lascia il tuo dispositivo.",
    },
    hi: {
      name: "टेक्स्ट टूल",
      headline: "मुफ्त ऑनलाइन टेक्स्ट टूल",
      intro:
        "हमारे मुफ्त ऑनलाइन टेक्स्ट टूल से टेक्स्ट को तुरंत संपादित, साफ़ और रूपांतरित करें। सभी टूल आपके ब्राउज़र में चलते हैं — कोई डेटा आपके डिवाइस से बाहर नहीं जाता।",
    },
  },

  "developer-tools": {
    en: {
      name: "Developer Tools",
      headline: "Free Online Developer Tools",
      intro:
        "Format, encode, decode, and test with our suite of free developer tools. Everything runs client-side — your data never leaves the browser.",
    },
    es: {
      name: "Herramientas para Desarrolladores",
      headline: "Herramientas Gratuitas para Desarrolladores",
      intro:
        "Formatea, codifica, decodifica y prueba con nuestro conjunto de herramientas gratuitas para desarrolladores. Todo se ejecuta en el cliente — tus datos nunca salen del navegador.",
    },
    fr: {
      name: "Outils pour Développeurs",
      headline: "Outils Gratuits pour Développeurs",
      intro:
        "Formatez, encodez, décodez et testez avec notre suite d'outils gratuits pour développeurs. Tout s'exécute côté client — vos données ne quittent jamais le navigateur.",
    },
    de: {
      name: "Entwicklerwerkzeuge",
      headline: "Kostenlose Online-Entwicklerwerkzeuge",
      intro:
        "Formatieren, kodieren, dekodieren und testen Sie mit unserer Sammlung kostenloser Entwicklertools. Alles läuft clientseitig — Ihre Daten verlassen nie den Browser.",
    },
    pt: {
      name: "Ferramentas para Desenvolvedores",
      headline: "Ferramentas Online Gratuitas para Desenvolvedores",
      intro:
        "Formate, codifique, decodifique e teste com nosso conjunto de ferramentas gratuitas para desenvolvedores. Tudo roda no cliente — seus dados nunca saem do navegador.",
    },
    ja: {
      name: "開発者ツール",
      headline: "無料オンライン開発者ツール",
      intro:
        "無料の開発者ツールでフォーマット、エンコード、デコード、テストが行えます。すべてクライアント側で動作し、データがブラウザの外に出ることはありません。",
    },
    zh: {
      name: "开发者工具",
      headline: "免费在线开发者工具",
      intro:
        "使用我们的免费开发者工具进行格式化、编码、解码和测试。所有操作均在客户端完成，数据不会离开浏览器。",
    },
    ko: {
      name: "개발자 도구",
      headline: "무료 온라인 개발자 도구",
      intro:
        "무료 개발자 도구로 포맷, 인코딩, 디코딩, 테스트를 수행하세요. 모든 작업은 클라이언트 측에서 실행되며, 데이터가 브라우저를 떠나지 않습니다.",
    },
    it: {
      name: "Strumenti per Sviluppatori",
      headline: "Strumenti Gratuiti per Sviluppatori",
      intro:
        "Formatta, codifica, decodifica e testa con la nostra suite di strumenti gratuiti per sviluppatori. Tutto viene eseguito lato client — i tuoi dati non lasciano mai il browser.",
    },
    hi: {
      name: "डेवलपर टूल",
      headline: "मुफ्त ऑनलाइन डेवलपर टूल",
      intro:
        "हमारे मुफ्त डेवलपर टूल से फ़ॉर्मेट, एनकोड, डिकोड और टेस्ट करें। सब कुछ क्लाइंट-साइड चलता है — आपका डेटा कभी ब्राउज़र से बाहर नहीं जाता।",
    },
  },

  "math-and-conversion-tools": {
    en: {
      name: "Math & Conversion Tools",
      headline: "Free Online Calculators & Converters",
      intro:
        "Calculate percentages, convert units, estimate loan payments, and more with our free online math tools. Instant results with no signup required.",
    },
    es: {
      name: "Herramientas de Matemáticas y Conversión",
      headline: "Calculadoras y Conversores Gratuitos en Línea",
      intro:
        "Calcula porcentajes, convierte unidades, estima pagos de préstamos y más con nuestras herramientas matemáticas gratuitas. Resultados instantáneos sin registro.",
    },
    fr: {
      name: "Outils de Calcul et Conversion",
      headline: "Calculatrices et Convertisseurs en Ligne Gratuits",
      intro:
        "Calculez des pourcentages, convertissez des unités, estimez des mensualités de prêt et bien plus avec nos outils mathématiques gratuits. Résultats instantanés sans inscription.",
    },
    de: {
      name: "Mathe- & Umrechnungstools",
      headline: "Kostenlose Online-Rechner und Umrechner",
      intro:
        "Berechnen Sie Prozentsätze, rechnen Sie Einheiten um, schätzen Sie Kreditraten und mehr mit unseren kostenlosen Online-Mathetools. Sofortige Ergebnisse ohne Registrierung.",
    },
    pt: {
      name: "Ferramentas de Matemática e Conversão",
      headline: "Calculadoras e Conversores Online Gratuitos",
      intro:
        "Calcule porcentagens, converta unidades, estime parcelas de empréstimos e muito mais com nossas ferramentas matemáticas gratuitas. Resultados instantâneos sem cadastro.",
    },
    ja: {
      name: "数学・変換ツール",
      headline: "無料オンライン計算機・変換ツール",
      intro:
        "無料のオンライン数学ツールで、パーセント計算、単位変換、ローン返済額の見積もりなどが行えます。登録不要で即座に結果を取得できます。",
    },
    zh: {
      name: "数学与转换工具",
      headline: "免费在线计算器和转换器",
      intro:
        "使用我们的免费在线数学工具计算百分比、转换单位、估算贷款还款额等。无需注册即可获得即时结果。",
    },
    ko: {
      name: "수학 및 변환 도구",
      headline: "무료 온라인 계산기 및 변환기",
      intro:
        "무료 온라인 수학 도구로 백분율 계산, 단위 변환, 대출 상환액 추정 등을 수행하세요. 가입 없이 즉시 결과를 확인할 수 있습니다.",
    },
    it: {
      name: "Strumenti di Calcolo e Conversione",
      headline: "Calcolatrici e Convertitori Online Gratuiti",
      intro:
        "Calcola percentuali, converti unità, stima rate di prestiti e molto altro con i nostri strumenti matematici gratuiti. Risultati immediati senza registrazione.",
    },
    hi: {
      name: "गणित और रूपांतरण टूल",
      headline: "मुफ्त ऑनलाइन कैलकुलेटर और कनवर्टर",
      intro:
        "हमारे मुफ्त ऑनलाइन गणित टूल से प्रतिशत गणना करें, इकाइयाँ बदलें, ऋण भुगतान का अनुमान लगाएं और बहुत कुछ करें। बिना साइन-अप के तुरंत परिणाम पाएं।",
    },
  },

  "random-and-utility-tools": {
    en: {
      name: "Random & Utility Tools",
      headline: "Free Random Generators & Utility Tools",
      intro:
        "Generate random numbers, roll dice, flip coins, pick names, and create QR codes with our free online utility tools. Perfect for games, decisions, and quick tasks.",
    },
    es: {
      name: "Herramientas Aleatorias y de Utilidad",
      headline: "Generadores Aleatorios y Herramientas de Utilidad Gratuitas",
      intro:
        "Genera números aleatorios, lanza dados, tira monedas, elige nombres y crea códigos QR con nuestras herramientas de utilidad gratuitas. Ideales para juegos, decisiones y tareas rápidas.",
    },
    fr: {
      name: "Outils Aléatoires et Utilitaires",
      headline: "Générateurs Aléatoires et Outils Utilitaires Gratuits",
      intro:
        "Générez des nombres aléatoires, lancez des dés, tirez à pile ou face, choisissez des noms et créez des codes QR avec nos outils gratuits. Parfaits pour les jeux, les décisions et les tâches rapides.",
    },
    de: {
      name: "Zufalls- & Hilfswerkzeuge",
      headline: "Kostenlose Zufallsgeneratoren und Hilfswerkzeuge",
      intro:
        "Generieren Sie Zufallszahlen, würfeln Sie, werfen Sie Münzen, wählen Sie Namen und erstellen Sie QR-Codes mit unseren kostenlosen Online-Hilfstools. Perfekt für Spiele, Entscheidungen und schnelle Aufgaben.",
    },
    pt: {
      name: "Ferramentas Aleatórias e Utilitárias",
      headline: "Geradores Aleatórios e Ferramentas Utilitárias Gratuitas",
      intro:
        "Gere números aleatórios, lance dados, jogue moedas, sorteie nomes e crie códigos QR com nossas ferramentas utilitárias gratuitas. Perfeitas para jogos, decisões e tarefas rápidas.",
    },
    ja: {
      name: "ランダム・ユーティリティツール",
      headline: "無料ランダム生成・ユーティリティツール",
      intro:
        "無料のオンラインユーティリティツールで、乱数生成、サイコロ、コイントス、名前抽選、QRコード作成ができます。ゲーム、意思決定、ちょっとした作業に最適です。",
    },
    zh: {
      name: "随机与实用工具",
      headline: "免费随机生成器和实用工具",
      intro:
        "使用我们的免费在线实用工具生成随机数、掷骰子、抛硬币、抽取姓名和创建二维码。非常适合游戏、决策和快速任务。",
    },
    ko: {
      name: "랜덤 및 유틸리티 도구",
      headline: "무료 랜덤 생성기 및 유틸리티 도구",
      intro:
        "무료 온라인 유틸리티 도구로 난수 생성, 주사위 굴리기, 동전 던지기, 이름 뽑기, QR 코드 만들기를 수행하세요. 게임, 의사결정, 빠른 작업에 안성맞춤입니다.",
    },
    it: {
      name: "Strumenti Casuali e di Utilità",
      headline: "Generatori Casuali e Strumenti di Utilità Gratuiti",
      intro:
        "Genera numeri casuali, lancia dadi, tira monete, scegli nomi e crea codici QR con i nostri strumenti di utilità gratuiti. Perfetti per giochi, decisioni e attività rapide.",
    },
    hi: {
      name: "रैंडम और यूटिलिटी टूल",
      headline: "मुफ्त रैंडम जनरेटर और यूटिलिटी टूल",
      intro:
        "हमारे मुफ्त ऑनलाइन यूटिलिटी टूल से रैंडम नंबर बनाएं, पासा फेंकें, सिक्का उछालें, नाम चुनें और QR कोड बनाएं। खेल, फैसले और त्वरित कार्यों के लिए बिल्कुल सही।",
    },
  },

  "unit-converters": {
    en: {
      name: "Unit Converters",
      headline: "Free Online Unit Converters",
      intro:
        "Convert between any units instantly. Our collection covers length, weight, volume, area, speed, digital storage, pressure, energy, time, and more.",
    },
    es: {
      name: "Conversores de Unidades",
      headline: "Conversores de Unidades Gratuitos en Línea",
      intro:
        "Convierte entre cualquier unidad al instante. Nuestra colección cubre longitud, peso, volumen, área, velocidad, almacenamiento digital, presión, energía, tiempo y más.",
    },
    fr: {
      name: "Convertisseurs d'Unités",
      headline: "Convertisseurs d'Unités en Ligne Gratuits",
      intro:
        "Convertissez entre toutes les unités instantanément. Notre collection couvre longueur, poids, volume, superficie, vitesse, stockage numérique, pression, énergie, temps et plus.",
    },
    de: {
      name: "Einheitenumrechner",
      headline: "Kostenlose Online-Einheitenumrechner",
      intro:
        "Rechnen Sie sofort zwischen beliebigen Einheiten um. Unsere Sammlung umfasst Länge, Gewicht, Volumen, Fläche, Geschwindigkeit, Datenspeicher, Druck, Energie, Zeit und mehr.",
    },
    pt: {
      name: "Conversores de Unidades",
      headline: "Conversores de Unidades Online Gratuitos",
      intro:
        "Converta entre qualquer unidade instantaneamente. Nossa coleção abrange comprimento, peso, volume, área, velocidade, armazenamento digital, pressão, energia, tempo e mais.",
    },
    ja: {
      name: "単位変換ツール",
      headline: "無料オンライン単位変換ツール",
      intro:
        "あらゆる単位を即座に変換できます。長さ、重さ、体積、面積、速度、デジタルストレージ、圧力、エネルギー、時間など幅広くカバーしています。",
    },
    zh: {
      name: "单位转换器",
      headline: "免费在线单位转换器",
      intro:
        "即时转换任意单位。我们的工具涵盖长度、重量、体积、面积、速度、数字存储、压力、能量、时间等。",
    },
    ko: {
      name: "단위 변환기",
      headline: "무료 온라인 단위 변환기",
      intro:
        "모든 단위를 즉시 변환하세요. 길이, 무게, 부피, 면적, 속도, 디지털 저장 용량, 압력, 에너지, 시간 등을 폭넓게 지원합니다.",
    },
    it: {
      name: "Convertitori di Unità",
      headline: "Convertitori di Unità Online Gratuiti",
      intro:
        "Converti istantaneamente tra qualsiasi unità. La nostra raccolta copre lunghezza, peso, volume, area, velocità, archiviazione digitale, pressione, energia, tempo e altro.",
    },
    hi: {
      name: "इकाई कनवर्टर",
      headline: "मुफ्त ऑनलाइन इकाई कनवर्टर",
      intro:
        "किसी भी इकाई को तुरंत बदलें। हमारा संग्रह लंबाई, वजन, आयतन, क्षेत्रफल, गति, डिजिटल स्टोरेज, दबाव, ऊर्जा, समय और बहुत कुछ कवर करता है।",
    },
  },

  "encoding-tools": {
    en: {
      name: "Encoding & Decoding Tools",
      headline: "Free Encoding & Decoding Tools",
      intro:
        "Convert text between different encoding formats including binary, hexadecimal, ASCII, Morse code, ROT13, and more. All conversions run in your browser.",
    },
    es: {
      name: "Herramientas de Codificación y Decodificación",
      headline: "Herramientas Gratuitas de Codificación y Decodificación",
      intro:
        "Convierte texto entre diferentes formatos de codificación como binario, hexadecimal, ASCII, código Morse, ROT13 y más. Todas las conversiones se ejecutan en tu navegador.",
    },
    fr: {
      name: "Outils d'Encodage et Décodage",
      headline: "Outils d'Encodage et Décodage Gratuits",
      intro:
        "Convertissez du texte entre différents formats d'encodage : binaire, hexadécimal, ASCII, code Morse, ROT13 et plus. Toutes les conversions s'exécutent dans votre navigateur.",
    },
    de: {
      name: "Kodierungs- & Dekodierungstools",
      headline: "Kostenlose Kodierungs- und Dekodierungstools",
      intro:
        "Konvertieren Sie Text zwischen verschiedenen Kodierungsformaten wie Binär, Hexadezimal, ASCII, Morsecode, ROT13 und mehr. Alle Konvertierungen laufen in Ihrem Browser.",
    },
    pt: {
      name: "Ferramentas de Codificação e Decodificação",
      headline: "Ferramentas Gratuitas de Codificação e Decodificação",
      intro:
        "Converta texto entre diferentes formatos de codificação como binário, hexadecimal, ASCII, código Morse, ROT13 e mais. Todas as conversões são feitas no seu navegador.",
    },
    ja: {
      name: "エンコード・デコードツール",
      headline: "無料エンコード・デコードツール",
      intro:
        "バイナリ、16進数、ASCII、モールス信号、ROT13など、さまざまなエンコード形式間でテキストを変換できます。すべての変換はブラウザ上で行われます。",
    },
    zh: {
      name: "编码与解码工具",
      headline: "免费编码与解码工具",
      intro:
        "在二进制、十六进制、ASCII、摩尔斯电码、ROT13等不同编码格式之间转换文本。所有转换均在浏览器中完成。",
    },
    ko: {
      name: "인코딩 및 디코딩 도구",
      headline: "무료 인코딩 및 디코딩 도구",
      intro:
        "바이너리, 16진수, ASCII, 모스 부호, ROT13 등 다양한 인코딩 형식 간에 텍스트를 변환하세요. 모든 변환은 브라우저에서 실행됩니다.",
    },
    it: {
      name: "Strumenti di Codifica e Decodifica",
      headline: "Strumenti Gratuiti di Codifica e Decodifica",
      intro:
        "Converti il testo tra diversi formati di codifica tra cui binario, esadecimale, ASCII, codice Morse, ROT13 e altro. Tutte le conversioni avvengono nel tuo browser.",
    },
    hi: {
      name: "एन्कोडिंग और डिकोडिंग टूल",
      headline: "मुफ्त एन्कोडिंग और डिकोडिंग टूल",
      intro:
        "बाइनरी, हेक्साडेसिमल, ASCII, मोर्स कोड, ROT13 और अन्य प्रारूपों के बीच टेक्स्ट को कनवर्ट करें। सभी रूपांतरण आपके ब्राउज़र में ही होते हैं।",
    },
  },

  "finance-calculators": {
    en: {
      name: "Finance Calculators",
      headline: "Free Online Finance Calculators",
      intro:
        "Calculate interest, ROI, taxes, salary conversions, savings goals, and more with our free financial tools. Make smarter money decisions with accurate numbers.",
    },
    es: {
      name: "Calculadoras Financieras",
      headline: "Calculadoras Financieras Gratuitas en Línea",
      intro:
        "Calcula intereses, retorno de inversión, impuestos, conversiones salariales, metas de ahorro y más con nuestras herramientas financieras gratuitas. Toma mejores decisiones con cifras precisas.",
    },
    fr: {
      name: "Calculatrices Financières",
      headline: "Calculatrices Financières en Ligne Gratuites",
      intro:
        "Calculez les intérêts, le retour sur investissement, les impôts, les conversions de salaire, les objectifs d'épargne et plus avec nos outils financiers gratuits. Prenez de meilleures décisions grâce à des chiffres précis.",
    },
    de: {
      name: "Finanzrechner",
      headline: "Kostenlose Online-Finanzrechner",
      intro:
        "Berechnen Sie Zinsen, Rendite, Steuern, Gehaltsumrechnungen, Sparziele und mehr mit unseren kostenlosen Finanztools. Treffen Sie klügere Finanzentscheidungen mit genauen Zahlen.",
    },
    pt: {
      name: "Calculadoras Financeiras",
      headline: "Calculadoras Financeiras Online Gratuitas",
      intro:
        "Calcule juros, retorno sobre investimento, impostos, conversões salariais, metas de poupança e mais com nossas ferramentas financeiras gratuitas. Tome decisões financeiras mais inteligentes com números precisos.",
    },
    ja: {
      name: "金融計算ツール",
      headline: "無料オンライン金融計算ツール",
      intro:
        "無料の金融ツールで、利息、投資利益率、税金、給与換算、貯蓄目標などを計算できます。正確な数字でよりスマートなお金の判断を。",
    },
    zh: {
      name: "金融计算器",
      headline: "免费在线金融计算器",
      intro:
        "使用我们的免费金融工具计算利息、投资回报率、税费、薪资换算、储蓄目标等。用精确的数字做出更明智的理财决策。",
    },
    ko: {
      name: "금융 계산기",
      headline: "무료 온라인 금융 계산기",
      intro:
        "무료 금융 도구로 이자, 투자수익률, 세금, 급여 환산, 저축 목표 등을 계산하세요. 정확한 수치로 더 현명한 재정 결정을 내리세요.",
    },
    it: {
      name: "Calcolatori Finanziari",
      headline: "Calcolatori Finanziari Online Gratuiti",
      intro:
        "Calcola interessi, ROI, tasse, conversioni salariali, obiettivi di risparmio e altro con i nostri strumenti finanziari gratuiti. Prendi decisioni finanziarie più intelligenti con numeri precisi.",
    },
    hi: {
      name: "वित्त कैलकुलेटर",
      headline: "मुफ्त ऑनलाइन वित्त कैलकुलेटर",
      intro:
        "हमारे मुफ्त वित्तीय टूल से ब्याज, ROI, कर, वेतन रूपांतरण, बचत लक्ष्य और बहुत कुछ गणना करें। सटीक आंकड़ों के साथ समझदारी से पैसों के फैसले लें।",
    },
  },

  "date-and-time-tools": {
    en: {
      name: "Date & Time Tools",
      headline: "Free Date & Time Tools",
      intro:
        "Calculate the difference between dates, add or subtract days, find week numbers, check leap years, and more with our free date and time tools.",
    },
    es: {
      name: "Herramientas de Fecha y Hora",
      headline: "Herramientas Gratuitas de Fecha y Hora",
      intro:
        "Calcula la diferencia entre fechas, suma o resta días, encuentra números de semana, verifica años bisiestos y más con nuestras herramientas gratuitas de fecha y hora.",
    },
    fr: {
      name: "Outils de Date et Heure",
      headline: "Outils de Date et Heure Gratuits",
      intro:
        "Calculez la différence entre des dates, ajoutez ou soustrayez des jours, trouvez le numéro de semaine, vérifiez les années bissextiles et plus avec nos outils gratuits de date et heure.",
    },
    de: {
      name: "Datums- & Zeittools",
      headline: "Kostenlose Datums- und Zeittools",
      intro:
        "Berechnen Sie den Unterschied zwischen Daten, addieren oder subtrahieren Sie Tage, finden Sie Kalenderwochen, prüfen Sie Schaltjahre und mehr mit unseren kostenlosen Datums- und Zeittools.",
    },
    pt: {
      name: "Ferramentas de Data e Hora",
      headline: "Ferramentas Gratuitas de Data e Hora",
      intro:
        "Calcule a diferença entre datas, adicione ou subtraia dias, encontre o número da semana, verifique anos bissextos e mais com nossas ferramentas gratuitas de data e hora.",
    },
    ja: {
      name: "日付・時間ツール",
      headline: "無料日付・時間ツール",
      intro:
        "無料の日付・時間ツールで、日付の差分計算、日数の加減算、週番号の検索、うるう年の確認などが行えます。",
    },
    zh: {
      name: "日期和时间工具",
      headline: "免费日期和时间工具",
      intro:
        "使用我们的免费日期和时间工具计算日期差、增减天数、查找周数、检查闰年等。",
    },
    ko: {
      name: "날짜 및 시간 도구",
      headline: "무료 날짜 및 시간 도구",
      intro:
        "무료 날짜 및 시간 도구로 날짜 차이 계산, 일수 더하기/빼기, 주 번호 찾기, 윤년 확인 등을 수행하세요.",
    },
    it: {
      name: "Strumenti Data e Ora",
      headline: "Strumenti Gratuiti Data e Ora",
      intro:
        "Calcola la differenza tra date, aggiungi o sottrai giorni, trova il numero della settimana, verifica gli anni bisestili e altro con i nostri strumenti gratuiti di data e ora.",
    },
    hi: {
      name: "दिनांक और समय टूल",
      headline: "मुफ्त दिनांक और समय टूल",
      intro:
        "हमारे मुफ्त दिनांक और समय टूल से तारीखों के बीच अंतर गणना करें, दिन जोड़ें या घटाएं, सप्ताह संख्या खोजें, लीप वर्ष जांचें और बहुत कुछ करें।",
    },
  },

  "number-converters": {
    en: {
      name: "Number Converters",
      headline: "Free Number Base Converters",
      intro:
        "Convert numbers between binary, hexadecimal, octal, decimal, and Roman numerals instantly. Essential tools for programming, computer science, and mathematics.",
    },
    es: {
      name: "Conversores Numéricos",
      headline: "Conversores de Bases Numéricas Gratuitos",
      intro:
        "Convierte números entre binario, hexadecimal, octal, decimal y números romanos al instante. Herramientas esenciales para programación, informática y matemáticas.",
    },
    fr: {
      name: "Convertisseurs Numériques",
      headline: "Convertisseurs de Bases Numériques Gratuits",
      intro:
        "Convertissez des nombres entre binaire, hexadécimal, octal, décimal et chiffres romains instantanément. Des outils essentiels pour la programmation, l'informatique et les mathématiques.",
    },
    de: {
      name: "Zahlensystem-Umrechner",
      headline: "Kostenlose Zahlensystem-Umrechner",
      intro:
        "Rechnen Sie Zahlen sofort zwischen Binär-, Hexadezimal-, Oktal-, Dezimalsystem und römischen Ziffern um. Unverzichtbare Werkzeuge für Programmierung, Informatik und Mathematik.",
    },
    pt: {
      name: "Conversores Numéricos",
      headline: "Conversores de Bases Numéricas Gratuitos",
      intro:
        "Converta números entre binário, hexadecimal, octal, decimal e algarismos romanos instantaneamente. Ferramentas essenciais para programação, ciência da computação e matemática.",
    },
    ja: {
      name: "数値変換ツール",
      headline: "無料進数変換ツール",
      intro:
        "2進数、16進数、8進数、10進数、ローマ数字間の変換を即座に行えます。プログラミング、コンピュータサイエンス、数学に欠かせないツールです。",
    },
    zh: {
      name: "数制转换器",
      headline: "免费数制转换器",
      intro:
        "即时在二进制、十六进制、八进制、十进制和罗马数字之间转换。编程、计算机科学和数学的必备工具。",
    },
    ko: {
      name: "진법 변환기",
      headline: "무료 진법 변환기",
      intro:
        "2진수, 16진수, 8진수, 10진수, 로마 숫자 간 변환을 즉시 수행하세요. 프로그래밍, 컴퓨터 과학, 수학에 필수적인 도구입니다.",
    },
    it: {
      name: "Convertitori Numerici",
      headline: "Convertitori di Basi Numeriche Gratuiti",
      intro:
        "Converti numeri tra binario, esadecimale, ottale, decimale e numeri romani istantaneamente. Strumenti essenziali per programmazione, informatica e matematica.",
    },
    hi: {
      name: "संख्या कनवर्टर",
      headline: "मुफ्त संख्या आधार कनवर्टर",
      intro:
        "बाइनरी, हेक्साडेसिमल, ऑक्टल, डेसिमल और रोमन अंकों के बीच संख्याओं को तुरंत बदलें। प्रोग्रामिंग, कंप्यूटर विज्ञान और गणित के लिए आवश्यक टूल।",
    },
  },

  "health-and-fitness-tools": {
    en: {
      name: "Health & Fitness Tools",
      headline: "Free Health & Fitness Calculators",
      intro:
        "Calculate your BMR, daily calories, macros, ideal weight, body fat percentage, and more. Use these tools to support your health and fitness goals.",
    },
    es: {
      name: "Herramientas de Salud y Fitness",
      headline: "Calculadoras Gratuitas de Salud y Fitness",
      intro:
        "Calcula tu metabolismo basal, calorías diarias, macros, peso ideal, porcentaje de grasa corporal y más. Usa estas herramientas para apoyar tus objetivos de salud y fitness.",
    },
    fr: {
      name: "Outils Santé et Fitness",
      headline: "Calculatrices Santé et Fitness Gratuites",
      intro:
        "Calculez votre métabolisme de base, calories quotidiennes, macros, poids idéal, pourcentage de masse grasse et plus. Utilisez ces outils pour soutenir vos objectifs de santé et de forme.",
    },
    de: {
      name: "Gesundheits- & Fitnesstools",
      headline: "Kostenlose Gesundheits- und Fitnessrechner",
      intro:
        "Berechnen Sie Ihren Grundumsatz, tägliche Kalorien, Makronährstoffe, Idealgewicht, Körperfettanteil und mehr. Nutzen Sie diese Tools zur Unterstützung Ihrer Gesundheits- und Fitnessziele.",
    },
    pt: {
      name: "Ferramentas de Saúde e Fitness",
      headline: "Calculadoras Gratuitas de Saúde e Fitness",
      intro:
        "Calcule sua taxa metabólica basal, calorias diárias, macros, peso ideal, percentual de gordura corporal e mais. Use essas ferramentas para apoiar seus objetivos de saúde e fitness.",
    },
    ja: {
      name: "健康・フィットネスツール",
      headline: "無料健康・フィットネス計算ツール",
      intro:
        "基礎代謝量、1日のカロリー、マクロ栄養素、理想体重、体脂肪率などを計算できます。健康とフィットネスの目標達成をサポートするツールです。",
    },
    zh: {
      name: "健康与健身工具",
      headline: "免费健康与健身计算器",
      intro:
        "计算您的基础代谢率、每日热量、宏量营养素、理想体重、体脂率等。使用这些工具助力您的健康与健身目标。",
    },
    ko: {
      name: "건강 및 피트니스 도구",
      headline: "무료 건강 및 피트니스 계산기",
      intro:
        "기초대사량, 일일 칼로리, 매크로 영양소, 이상 체중, 체지방률 등을 계산하세요. 건강과 피트니스 목표 달성을 지원하는 도구입니다.",
    },
    it: {
      name: "Strumenti Salute e Fitness",
      headline: "Calcolatori Gratuiti Salute e Fitness",
      intro:
        "Calcola il tuo metabolismo basale, le calorie giornaliere, i macronutrienti, il peso ideale, la percentuale di grasso corporeo e altro. Usa questi strumenti per raggiungere i tuoi obiettivi di salute e fitness.",
    },
    hi: {
      name: "स्वास्थ्य और फिटनेस टूल",
      headline: "मुफ्त स्वास्थ्य और फिटनेस कैलकुलेटर",
      intro:
        "अपनी बेसल मेटाबॉलिक दर, दैनिक कैलोरी, मैक्रोन्यूट्रिएंट्स, आदर्श वजन, बॉडी फैट प्रतिशत और बहुत कुछ गणना करें। अपने स्वास्थ्य और फिटनेस लक्ष्यों को पूरा करने के लिए इन टूल का उपयोग करें।",
    },
  },

  "education-tools": {
    en: {
      name: "Education Tools",
      headline: "Free Education Calculators",
      intro:
        "Calculate your GPA, final grades, test scores, and more with our free education tools. Designed for students, teachers, and academic planners.",
    },
    es: {
      name: "Herramientas Educativas",
      headline: "Calculadoras Educativas Gratuitas",
      intro:
        "Calcula tu promedio, notas finales, puntajes de exámenes y más con nuestras herramientas educativas gratuitas. Diseñadas para estudiantes, profesores y planificadores académicos.",
    },
    fr: {
      name: "Outils Éducatifs",
      headline: "Calculatrices Éducatives Gratuites",
      intro:
        "Calculez votre moyenne, vos notes finales, vos résultats d'examens et plus avec nos outils éducatifs gratuits. Conçus pour les étudiants, les enseignants et les responsables pédagogiques.",
    },
    de: {
      name: "Bildungstools",
      headline: "Kostenlose Bildungsrechner",
      intro:
        "Berechnen Sie Ihren Notendurchschnitt, Endnoten, Testergebnisse und mehr mit unseren kostenlosen Bildungstools. Entwickelt für Schüler, Lehrkräfte und akademische Planer.",
    },
    pt: {
      name: "Ferramentas Educacionais",
      headline: "Calculadoras Educacionais Gratuitas",
      intro:
        "Calcule sua média, notas finais, pontuações de provas e mais com nossas ferramentas educacionais gratuitas. Projetadas para estudantes, professores e planejadores acadêmicos.",
    },
    ja: {
      name: "教育ツール",
      headline: "無料教育計算ツール",
      intro:
        "無料の教育ツールで、GPA、最終成績、テストスコアなどを計算できます。学生、教師、教務担当者のために設計されています。",
    },
    zh: {
      name: "教育工具",
      headline: "免费教育计算器",
      intro:
        "使用我们的免费教育工具计算绩点、期末成绩、考试分数等。专为学生、教师和教务人员设计。",
    },
    ko: {
      name: "교육 도구",
      headline: "무료 교육 계산기",
      intro:
        "무료 교육 도구로 학점, 최종 성적, 시험 점수 등을 계산하세요. 학생, 교사, 학사 관리자를 위해 설계되었습니다.",
    },
    it: {
      name: "Strumenti Educativi",
      headline: "Calcolatori Educativi Gratuiti",
      intro:
        "Calcola la tua media, i voti finali, i punteggi dei test e altro con i nostri strumenti educativi gratuiti. Progettati per studenti, insegnanti e pianificatori accademici.",
    },
    hi: {
      name: "शिक्षा टूल",
      headline: "मुफ्त शिक्षा कैलकुलेटर",
      intro:
        "हमारे मुफ्त शिक्षा टूल से अपना GPA, अंतिम ग्रेड, परीक्षा अंक और बहुत कुछ गणना करें। छात्रों, शिक्षकों और शैक्षणिक योजनाकारों के लिए डिज़ाइन किया गया।",
    },
  },
};

export function getCategoryTranslation(
  slug: string,
  locale: Locale,
): CategoryTranslation {
  const cat = categoryTranslations[slug];
  if (!cat) return { name: slug, headline: slug, intro: "" };
  return cat[locale] || cat.en;
}
