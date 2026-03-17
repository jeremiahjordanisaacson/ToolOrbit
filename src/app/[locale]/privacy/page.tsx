import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/data/site";

const translations = {
  en: {
    metaTitle: `Privacy Policy | ${siteConfig.name}`,
    metaDescription: `Read the ${siteConfig.name} privacy policy. Learn how we handle your data — spoiler: your data never leaves your browser.`,
    title: "Privacy Policy",
    lastUpdated: "Last updated: March 2026",
    overviewTitle: "Overview",
    overviewP1: `${siteConfig.name} is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our website and tools.`,
    overviewP2: `All tools on ${siteConfig.name} run entirely in your browser. We do not collect, store, or transmit any data you enter into our tools.`,
    overviewP2Bold: "The short version:",
    dataTitle: "Data You Enter Into Tools",
    dataP1: `All text, numbers, and other data you enter into any tool on ${siteConfig.name} is processed entirely within your web browser using JavaScript. This data is never sent to our servers or any third-party servers. When you close the browser tab, your data is gone.`,
    collectTitle: "Information We May Collect",
    collectP1: "We may collect anonymous, aggregated usage data to understand how our tools are used and to improve the site. This may include:",
    collectItems: [
      "Pages visited (anonymized)",
      "Browser type and operating system",
      "Referring website",
      "Country of origin (derived from IP, not stored)",
    ],
    collectP2: "We do not use cookies for tracking. If we implement analytics in the future, we will use a privacy-respecting analytics service that does not use cookies and does not track individuals.",
    cookiesTitle: "Cookies",
    cookiesP1: `${siteConfig.name} uses only essential cookies required for basic site functionality. We do not use tracking cookies, advertising cookies, or third-party analytics cookies. The only cookie we store is your cookie consent preference.`,
    cookiesP2: "Essential cookies used:",
    cookieConsentDesc: "Stores your cookie consent preference (accepted/rejected). Stored in localStorage, not as a cookie. No expiry unless cleared manually.",
    cookiesGdpr: "Under GDPR, you have the right to withdraw consent at any time by clearing your browser\u2019s local storage for this site, or by using your browser\u2019s privacy/cookie settings.",
    gdprTitle: "Your Rights Under GDPR",
    gdprP1: "If you are located in the European Economic Area (EEA), you have the following rights regarding your personal data:",
    gdprRights: [
      { label: "Right of access", desc: "You can request copies of your personal data." },
      { label: "Right to rectification", desc: "You can request correction of inaccurate data." },
      { label: "Right to erasure", desc: "You can request deletion of your personal data." },
      { label: "Right to restrict processing", desc: "You can request we limit how we use your data." },
      { label: "Right to data portability", desc: "You can request we transfer your data to another organization." },
      { label: "Right to object", desc: "You can object to our processing of your data." },
    ],
    gdprP2: `Since ${siteConfig.name} processes all data locally in your browser and does not collect or store personal data on our servers, these rights are automatically satisfied. No personal data is held by us that would need to be accessed, corrected, or deleted.`,
    gdprP3: "If you have questions about your data rights, contact us at contact@toolorbit.com.",
    thirdPartyTitle: "Third-Party Services",
    thirdPartyP1: "Our site may use the following third-party services:",
    thirdPartyHosting: "Hosting:",
    thirdPartyHostingDesc: "Microsoft Azure Static Web Apps for serving the website.",
    thirdPartyFonts: "Fonts:",
    thirdPartyFontsDesc: "Google Fonts for web typography, subject to",
    thirdPartyGoogleLink: "Google\u2019s Privacy Policy",
    advertisingTitle: "Advertising",
    advertisingP1: "We may display advertisements on the site in the future. If we do, this privacy policy will be updated to describe any data collection by advertising partners.",
    childrenTitle: "Children\u2019s Privacy",
    childrenP1: "Our services are not directed to individuals under 13. We do not knowingly collect personal information from children.",
    changesTitle: "Changes to This Policy",
    changesP1: "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated date.",
    contactTitle: "Contact",
    contactP1: "Questions about this policy? Visit our",
    contactLinkText: "contact page",
  },
  es: {
    metaTitle: "Política de Privacidad | ToolOrbit",
    metaDescription: "Lee la política de privacidad de ToolOrbit. Descubre cómo gestionamos tus datos — spoiler: tus datos nunca salen de tu navegador.",
    title: "Política de Privacidad",
    lastUpdated: "Última actualización: marzo de 2026",
    overviewTitle: "Descripción general",
    overviewP1: "ToolOrbit se compromete a proteger tu privacidad. Esta Política de Privacidad explica cómo manejamos la información cuando utilizas nuestro sitio web y nuestras herramientas.",
    overviewP2: "Todas las herramientas de ToolOrbit se ejecutan completamente en tu navegador. No recopilamos, almacenamos ni transmitimos ningún dato que introduzcas en nuestras herramientas.",
    overviewP2Bold: "En resumen:",
    dataTitle: "Datos que introduces en las herramientas",
    dataP1: "Todo el texto, los números y otros datos que introduces en cualquier herramienta de ToolOrbit se procesan completamente dentro de tu navegador web mediante JavaScript. Estos datos nunca se envían a nuestros servidores ni a servidores de terceros. Cuando cierras la pestaña del navegador, tus datos desaparecen.",
    collectTitle: "Información que podemos recopilar",
    collectP1: "Podemos recopilar datos de uso anónimos y agregados para comprender cómo se utilizan nuestras herramientas y mejorar el sitio. Esto puede incluir:",
    collectItems: [
      "Páginas visitadas (anonimizadas)",
      "Tipo de navegador y sistema operativo",
      "Sitio web de referencia",
      "País de origen (derivado de la IP, no almacenado)",
    ],
    collectP2: "No utilizamos cookies para el rastreo. Si implementamos análisis en el futuro, utilizaremos un servicio de análisis respetuoso con la privacidad que no use cookies y no rastree a personas individuales.",
    cookiesTitle: "Cookies",
    cookiesP1: "ToolOrbit utiliza únicamente cookies esenciales necesarias para la funcionalidad básica del sitio. No utilizamos cookies de rastreo, cookies publicitarias ni cookies de análisis de terceros. La única cookie que almacenamos es tu preferencia de consentimiento de cookies.",
    cookiesP2: "Cookies esenciales utilizadas:",
    cookieConsentDesc: "Almacena tu preferencia de consentimiento de cookies (aceptado/rechazado). Se guarda en localStorage, no como una cookie. Sin caducidad a menos que se borre manualmente.",
    cookiesGdpr: "Según el RGPD, tienes derecho a retirar tu consentimiento en cualquier momento borrando el almacenamiento local de tu navegador para este sitio, o utilizando la configuración de privacidad/cookies de tu navegador.",
    gdprTitle: "Tus derechos según el RGPD",
    gdprP1: "Si te encuentras en el Espacio Económico Europeo (EEE), tienes los siguientes derechos respecto a tus datos personales:",
    gdprRights: [
      { label: "Derecho de acceso", desc: "Puedes solicitar copias de tus datos personales." },
      { label: "Derecho de rectificación", desc: "Puedes solicitar la corrección de datos inexactos." },
      { label: "Derecho de supresión", desc: "Puedes solicitar la eliminación de tus datos personales." },
      { label: "Derecho a la limitación del tratamiento", desc: "Puedes solicitar que limitemos el uso de tus datos." },
      { label: "Derecho a la portabilidad de datos", desc: "Puedes solicitar que transfiramos tus datos a otra organización." },
      { label: "Derecho de oposición", desc: "Puedes oponerte al tratamiento de tus datos." },
    ],
    gdprP2: "Dado que ToolOrbit procesa todos los datos localmente en tu navegador y no recopila ni almacena datos personales en nuestros servidores, estos derechos se satisfacen automáticamente. No conservamos ningún dato personal que deba ser consultado, corregido o eliminado.",
    gdprP3: "Si tienes preguntas sobre tus derechos de datos, contáctanos en contact@toolorbit.com.",
    thirdPartyTitle: "Servicios de terceros",
    thirdPartyP1: "Nuestro sitio puede utilizar los siguientes servicios de terceros:",
    thirdPartyHosting: "Alojamiento:",
    thirdPartyHostingDesc: "Microsoft Azure Static Web Apps para servir el sitio web.",
    thirdPartyFonts: "Fuentes:",
    thirdPartyFontsDesc: "Google Fonts para la tipografía web, sujeto a la",
    thirdPartyGoogleLink: "Política de Privacidad de Google",
    advertisingTitle: "Publicidad",
    advertisingP1: "Es posible que mostremos anuncios en el sitio en el futuro. Si lo hacemos, esta política de privacidad se actualizará para describir cualquier recopilación de datos por parte de socios publicitarios.",
    childrenTitle: "Privacidad infantil",
    childrenP1: "Nuestros servicios no están dirigidos a personas menores de 13 años. No recopilamos conscientemente información personal de niños.",
    changesTitle: "Cambios en esta política",
    changesP1: "Podemos actualizar esta Política de Privacidad periódicamente. Los cambios se publicarán en esta página con una fecha actualizada.",
    contactTitle: "Contacto",
    contactP1: "¿Tienes preguntas sobre esta política? Visita nuestra",
    contactLinkText: "página de contacto",
  },
  fr: {
    metaTitle: "Politique de Confidentialité | ToolOrbit",
    metaDescription: "Lisez la politique de confidentialité de ToolOrbit. Découvrez comment nous traitons vos données — spoiler : vos données ne quittent jamais votre navigateur.",
    title: "Politique de Confidentialité",
    lastUpdated: "Dernière mise à jour : mars 2026",
    overviewTitle: "Aperçu",
    overviewP1: "ToolOrbit s\u2019engage à protéger votre vie privée. Cette Politique de Confidentialité explique comment nous traitons les informations lorsque vous utilisez notre site web et nos outils.",
    overviewP2: "Tous les outils de ToolOrbit fonctionnent entièrement dans votre navigateur. Nous ne collectons, ne stockons ni ne transmettons aucune donnée que vous saisissez dans nos outils.",
    overviewP2Bold: "En bref :",
    dataTitle: "Données que vous saisissez dans les outils",
    dataP1: "Tout texte, nombre et autres données que vous saisissez dans un outil de ToolOrbit est traité entièrement dans votre navigateur web à l\u2019aide de JavaScript. Ces données ne sont jamais envoyées à nos serveurs ni à des serveurs tiers. Lorsque vous fermez l\u2019onglet du navigateur, vos données disparaissent.",
    collectTitle: "Informations que nous pouvons collecter",
    collectP1: "Nous pouvons collecter des données d\u2019utilisation anonymes et agrégées pour comprendre comment nos outils sont utilisés et améliorer le site. Cela peut inclure :",
    collectItems: [
      "Pages visitées (anonymisées)",
      "Type de navigateur et système d\u2019exploitation",
      "Site web référent",
      "Pays d\u2019origine (déduit de l\u2019IP, non stocké)",
    ],
    collectP2: "Nous n\u2019utilisons pas de cookies pour le suivi. Si nous mettons en place des analyses à l\u2019avenir, nous utiliserons un service d\u2019analyse respectueux de la vie privée qui n\u2019utilise pas de cookies et ne suit pas les individus.",
    cookiesTitle: "Cookies",
    cookiesP1: "ToolOrbit utilise uniquement les cookies essentiels nécessaires au fonctionnement de base du site. Nous n\u2019utilisons pas de cookies de suivi, de cookies publicitaires ni de cookies d\u2019analyse tiers. Le seul cookie que nous stockons est votre préférence de consentement aux cookies.",
    cookiesP2: "Cookies essentiels utilisés :",
    cookieConsentDesc: "Stocke votre préférence de consentement aux cookies (accepté/refusé). Stocké dans localStorage, pas en tant que cookie. Aucune expiration sauf suppression manuelle.",
    cookiesGdpr: "En vertu du RGPD, vous avez le droit de retirer votre consentement à tout moment en effaçant le stockage local de votre navigateur pour ce site, ou en utilisant les paramètres de confidentialité/cookies de votre navigateur.",
    gdprTitle: "Vos droits en vertu du RGPD",
    gdprP1: "Si vous êtes situé dans l\u2019Espace Économique Européen (EEE), vous disposez des droits suivants concernant vos données personnelles :",
    gdprRights: [
      { label: "Droit d\u2019accès", desc: "Vous pouvez demander des copies de vos données personnelles." },
      { label: "Droit de rectification", desc: "Vous pouvez demander la correction de données inexactes." },
      { label: "Droit à l\u2019effacement", desc: "Vous pouvez demander la suppression de vos données personnelles." },
      { label: "Droit à la limitation du traitement", desc: "Vous pouvez demander que nous limitions l\u2019utilisation de vos données." },
      { label: "Droit à la portabilité des données", desc: "Vous pouvez demander que nous transférions vos données à une autre organisation." },
      { label: "Droit d\u2019opposition", desc: "Vous pouvez vous opposer au traitement de vos données." },
    ],
    gdprP2: "Étant donné que ToolOrbit traite toutes les données localement dans votre navigateur et ne collecte ni ne stocke de données personnelles sur nos serveurs, ces droits sont automatiquement satisfaits. Aucune donnée personnelle n\u2019est détenue par nous qui nécessiterait d\u2019être consultée, corrigée ou supprimée.",
    gdprP3: "Si vous avez des questions sur vos droits en matière de données, contactez-nous à contact@toolorbit.com.",
    thirdPartyTitle: "Services tiers",
    thirdPartyP1: "Notre site peut utiliser les services tiers suivants :",
    thirdPartyHosting: "Hébergement :",
    thirdPartyHostingDesc: "Microsoft Azure Static Web Apps pour servir le site web.",
    thirdPartyFonts: "Polices :",
    thirdPartyFontsDesc: "Google Fonts pour la typographie web, soumis à la",
    thirdPartyGoogleLink: "Politique de Confidentialité de Google",
    advertisingTitle: "Publicité",
    advertisingP1: "Nous pourrons afficher des publicités sur le site à l\u2019avenir. Si tel est le cas, cette politique de confidentialité sera mise à jour pour décrire toute collecte de données par des partenaires publicitaires.",
    childrenTitle: "Vie privée des enfants",
    childrenP1: "Nos services ne sont pas destinés aux personnes de moins de 13 ans. Nous ne collectons pas sciemment d\u2019informations personnelles auprès d\u2019enfants.",
    changesTitle: "Modifications de cette politique",
    changesP1: "Nous pouvons mettre à jour cette Politique de Confidentialité de temps à autre. Les modifications seront publiées sur cette page avec une date mise à jour.",
    contactTitle: "Contact",
    contactP1: "Des questions sur cette politique ? Visitez notre",
    contactLinkText: "page de contact",
  },
  de: {
    metaTitle: "Datenschutzrichtlinie | ToolOrbit",
    metaDescription: "Lesen Sie die Datenschutzrichtlinie von ToolOrbit. Erfahren Sie, wie wir mit Ihren Daten umgehen — Spoiler: Ihre Daten verlassen niemals Ihren Browser.",
    title: "Datenschutzrichtlinie",
    lastUpdated: "Zuletzt aktualisiert: März 2026",
    overviewTitle: "Überblick",
    overviewP1: "ToolOrbit verpflichtet sich, Ihre Privatsphäre zu schützen. Diese Datenschutzrichtlinie erläutert, wie wir mit Informationen umgehen, wenn Sie unsere Website und unsere Tools nutzen.",
    overviewP2: "Alle Tools auf ToolOrbit laufen vollständig in Ihrem Browser. Wir erfassen, speichern oder übertragen keine Daten, die Sie in unsere Tools eingeben.",
    overviewP2Bold: "Kurzfassung:",
    dataTitle: "Daten, die Sie in die Tools eingeben",
    dataP1: "Alle Texte, Zahlen und sonstigen Daten, die Sie in ein Tool auf ToolOrbit eingeben, werden vollständig innerhalb Ihres Webbrowsers mittels JavaScript verarbeitet. Diese Daten werden niemals an unsere Server oder Server von Drittanbietern gesendet. Wenn Sie den Browser-Tab schließen, sind Ihre Daten verschwunden.",
    collectTitle: "Informationen, die wir möglicherweise erfassen",
    collectP1: "Wir können anonyme, aggregierte Nutzungsdaten erheben, um zu verstehen, wie unsere Tools genutzt werden und um die Website zu verbessern. Dies kann umfassen:",
    collectItems: [
      "Besuchte Seiten (anonymisiert)",
      "Browsertyp und Betriebssystem",
      "Verweisende Website",
      "Herkunftsland (von der IP abgeleitet, nicht gespeichert)",
    ],
    collectP2: "Wir verwenden keine Cookies zur Nachverfolgung. Sollten wir in Zukunft Analysen implementieren, werden wir einen datenschutzfreundlichen Analysedienst verwenden, der keine Cookies nutzt und keine Einzelpersonen verfolgt.",
    cookiesTitle: "Cookies",
    cookiesP1: "ToolOrbit verwendet ausschließlich essenzielle Cookies, die für die grundlegende Funktionalität der Website erforderlich sind. Wir verwenden keine Tracking-Cookies, Werbe-Cookies oder Analyse-Cookies von Drittanbietern. Das einzige Cookie, das wir speichern, ist Ihre Cookie-Einwilligungspräferenz.",
    cookiesP2: "Verwendete essenzielle Cookies:",
    cookieConsentDesc: "Speichert Ihre Cookie-Einwilligungspräferenz (akzeptiert/abgelehnt). Wird im localStorage gespeichert, nicht als Cookie. Kein Ablaufdatum, es sei denn, es wird manuell gelöscht.",
    cookiesGdpr: "Gemäß der DSGVO haben Sie das Recht, Ihre Einwilligung jederzeit zu widerrufen, indem Sie den lokalen Speicher Ihres Browsers für diese Website löschen oder die Datenschutz-/Cookie-Einstellungen Ihres Browsers verwenden.",
    gdprTitle: "Ihre Rechte gemäß der DSGVO",
    gdprP1: "Wenn Sie sich im Europäischen Wirtschaftsraum (EWR) befinden, haben Sie folgende Rechte bezüglich Ihrer personenbezogenen Daten:",
    gdprRights: [
      { label: "Auskunftsrecht", desc: "Sie können Kopien Ihrer personenbezogenen Daten anfordern." },
      { label: "Recht auf Berichtigung", desc: "Sie können die Korrektur unrichtiger Daten verlangen." },
      { label: "Recht auf Löschung", desc: "Sie können die Löschung Ihrer personenbezogenen Daten verlangen." },
      { label: "Recht auf Einschränkung der Verarbeitung", desc: "Sie können verlangen, dass wir die Nutzung Ihrer Daten einschränken." },
      { label: "Recht auf Datenübertragbarkeit", desc: "Sie können verlangen, dass wir Ihre Daten an eine andere Organisation übertragen." },
      { label: "Widerspruchsrecht", desc: "Sie können der Verarbeitung Ihrer Daten widersprechen." },
    ],
    gdprP2: "Da ToolOrbit alle Daten lokal in Ihrem Browser verarbeitet und keine personenbezogenen Daten auf unseren Servern erfasst oder speichert, werden diese Rechte automatisch erfüllt. Es werden von uns keine personenbezogenen Daten gespeichert, auf die zugegriffen, die berichtigt oder gelöscht werden müssten.",
    gdprP3: "Wenn Sie Fragen zu Ihren Datenrechten haben, kontaktieren Sie uns unter contact@toolorbit.com.",
    thirdPartyTitle: "Drittanbieterdienste",
    thirdPartyP1: "Unsere Website kann die folgenden Drittanbieterdienste nutzen:",
    thirdPartyHosting: "Hosting:",
    thirdPartyHostingDesc: "Microsoft Azure Static Web Apps zum Bereitstellen der Website.",
    thirdPartyFonts: "Schriftarten:",
    thirdPartyFontsDesc: "Google Fonts für die Web-Typografie, unterliegt der",
    thirdPartyGoogleLink: "Datenschutzrichtlinie von Google",
    advertisingTitle: "Werbung",
    advertisingP1: "Wir werden möglicherweise in Zukunft Werbung auf der Website anzeigen. In diesem Fall wird diese Datenschutzrichtlinie aktualisiert, um jede Datenerhebung durch Werbepartner zu beschreiben.",
    childrenTitle: "Datenschutz für Kinder",
    childrenP1: "Unsere Dienste richten sich nicht an Personen unter 13 Jahren. Wir erheben wissentlich keine personenbezogenen Daten von Kindern.",
    changesTitle: "Änderungen dieser Richtlinie",
    changesP1: "Wir können diese Datenschutzrichtlinie von Zeit zu Zeit aktualisieren. Änderungen werden auf dieser Seite mit einem aktualisierten Datum veröffentlicht.",
    contactTitle: "Kontakt",
    contactP1: "Fragen zu dieser Richtlinie? Besuchen Sie unsere",
    contactLinkText: "Kontaktseite",
  },
  pt: {
    metaTitle: "Política de Privacidade | ToolOrbit",
    metaDescription: "Leia a política de privacidade do ToolOrbit. Saiba como tratamos seus dados — spoiler: seus dados nunca saem do seu navegador.",
    title: "Política de Privacidade",
    lastUpdated: "Última atualização: março de 2026",
    overviewTitle: "Visão geral",
    overviewP1: "O ToolOrbit está comprometido em proteger sua privacidade. Esta Política de Privacidade explica como tratamos as informações quando você utiliza nosso site e nossas ferramentas.",
    overviewP2: "Todas as ferramentas do ToolOrbit funcionam inteiramente no seu navegador. Não coletamos, armazenamos ou transmitimos nenhum dado que você insere em nossas ferramentas.",
    overviewP2Bold: "Resumindo:",
    dataTitle: "Dados que você insere nas ferramentas",
    dataP1: "Todo texto, números e outros dados que você insere em qualquer ferramenta do ToolOrbit são processados inteiramente dentro do seu navegador web usando JavaScript. Esses dados nunca são enviados aos nossos servidores ou a servidores de terceiros. Quando você fecha a aba do navegador, seus dados desaparecem.",
    collectTitle: "Informações que podemos coletar",
    collectP1: "Podemos coletar dados de uso anônimos e agregados para entender como nossas ferramentas são utilizadas e melhorar o site. Isso pode incluir:",
    collectItems: [
      "Páginas visitadas (anonimizadas)",
      "Tipo de navegador e sistema operacional",
      "Site de referência",
      "País de origem (derivado do IP, não armazenado)",
    ],
    collectP2: "Não utilizamos cookies para rastreamento. Se implementarmos análises no futuro, utilizaremos um serviço de análise que respeita a privacidade, que não usa cookies e não rastreia indivíduos.",
    cookiesTitle: "Cookies",
    cookiesP1: "O ToolOrbit utiliza apenas cookies essenciais necessários para a funcionalidade básica do site. Não utilizamos cookies de rastreamento, cookies de publicidade ou cookies de análise de terceiros. O único cookie que armazenamos é sua preferência de consentimento de cookies.",
    cookiesP2: "Cookies essenciais utilizados:",
    cookieConsentDesc: "Armazena sua preferência de consentimento de cookies (aceito/rejeitado). Armazenado no localStorage, não como um cookie. Sem expiração, a menos que seja limpo manualmente.",
    cookiesGdpr: "Sob o RGPD, você tem o direito de retirar seu consentimento a qualquer momento, limpando o armazenamento local do seu navegador para este site, ou usando as configurações de privacidade/cookies do seu navegador.",
    gdprTitle: "Seus direitos sob o RGPD",
    gdprP1: "Se você está localizado no Espaço Econômico Europeu (EEE), você possui os seguintes direitos em relação aos seus dados pessoais:",
    gdprRights: [
      { label: "Direito de acesso", desc: "Você pode solicitar cópias dos seus dados pessoais." },
      { label: "Direito de retificação", desc: "Você pode solicitar a correção de dados imprecisos." },
      { label: "Direito de exclusão", desc: "Você pode solicitar a exclusão dos seus dados pessoais." },
      { label: "Direito à limitação do tratamento", desc: "Você pode solicitar que limitemos o uso dos seus dados." },
      { label: "Direito à portabilidade dos dados", desc: "Você pode solicitar que transfiramos seus dados para outra organização." },
      { label: "Direito de oposição", desc: "Você pode se opor ao processamento dos seus dados." },
    ],
    gdprP2: "Como o ToolOrbit processa todos os dados localmente no seu navegador e não coleta ou armazena dados pessoais em nossos servidores, esses direitos são automaticamente satisfeitos. Nenhum dado pessoal é mantido por nós que precise ser acessado, corrigido ou excluído.",
    gdprP3: "Se você tiver dúvidas sobre seus direitos de dados, entre em contato conosco em contact@toolorbit.com.",
    thirdPartyTitle: "Serviços de terceiros",
    thirdPartyP1: "Nosso site pode utilizar os seguintes serviços de terceiros:",
    thirdPartyHosting: "Hospedagem:",
    thirdPartyHostingDesc: "Microsoft Azure Static Web Apps para servir o site.",
    thirdPartyFonts: "Fontes:",
    thirdPartyFontsDesc: "Google Fonts para tipografia web, sujeito à",
    thirdPartyGoogleLink: "Política de Privacidade do Google",
    advertisingTitle: "Publicidade",
    advertisingP1: "Poderemos exibir anúncios no site no futuro. Se o fizermos, esta política de privacidade será atualizada para descrever qualquer coleta de dados por parceiros publicitários.",
    childrenTitle: "Privacidade infantil",
    childrenP1: "Nossos serviços não são direcionados a indivíduos menores de 13 anos. Não coletamos intencionalmente informações pessoais de crianças.",
    changesTitle: "Alterações nesta política",
    changesP1: "Podemos atualizar esta Política de Privacidade periodicamente. As alterações serão publicadas nesta página com uma data atualizada.",
    contactTitle: "Contato",
    contactP1: "Dúvidas sobre esta política? Visite nossa",
    contactLinkText: "página de contato",
  },
  ja: {
    metaTitle: "プライバシーポリシー | ToolOrbit",
    metaDescription: "ToolOrbitのプライバシーポリシーをお読みください。データの取り扱いについてご説明します。ネタバレ：お客様のデータがブラウザの外に出ることはありません。",
    title: "プライバシーポリシー",
    lastUpdated: "最終更新日：2026年3月",
    overviewTitle: "概要",
    overviewP1: "ToolOrbitはお客様のプライバシーの保護に努めています。このプライバシーポリシーは、当ウェブサイトおよびツールをご利用いただく際の情報の取り扱いについて説明するものです。",
    overviewP2: "ToolOrbitのすべてのツールは完全にお客様のブラウザ内で動作します。ツールに入力されたデータを収集、保存、または送信することは一切ありません。",
    overviewP2Bold: "要約：",
    dataTitle: "ツールに入力するデータ",
    dataP1: "ToolOrbitのツールに入力されるすべてのテキスト、数値、その他のデータは、JavaScriptを使用してお客様のウェブブラウザ内で完全に処理されます。このデータが当社のサーバーや第三者のサーバーに送信されることはありません。ブラウザのタブを閉じると、お客様のデータは消去されます。",
    collectTitle: "収集する可能性のある情報",
    collectP1: "当社のツールの使用状況を把握しサイトを改善するために、匿名の集計された使用データを収集する場合があります。これには以下が含まれる場合があります：",
    collectItems: [
      "訪問ページ（匿名化済み）",
      "ブラウザの種類とオペレーティングシステム",
      "参照元ウェブサイト",
      "出身国（IPアドレスから推定、保存されません）",
    ],
    collectP2: "トラッキング目的でCookieを使用することはありません。将来アナリティクスを導入する場合は、Cookieを使用せず個人を追跡しないプライバシーに配慮したアナリティクスサービスを使用します。",
    cookiesTitle: "Cookie",
    cookiesP1: "ToolOrbitは、サイトの基本機能に必要な必須Cookieのみを使用します。トラッキングCookie、広告Cookie、またはサードパーティのアナリティクスCookieは使用しません。保存する唯一のCookieは、お客様のCookie同意設定です。",
    cookiesP2: "使用される必須Cookie：",
    cookieConsentDesc: "Cookie同意設定（承諾/拒否）を保存します。Cookieとしてではなく、localStorageに保存されます。手動で削除しない限り有効期限はありません。",
    cookiesGdpr: "GDPRに基づき、お客様はこのサイトのブラウザのローカルストレージをクリアするか、ブラウザのプライバシー/Cookie設定を使用して、いつでも同意を撤回する権利を有します。",
    gdprTitle: "GDPRに基づくお客様の権利",
    gdprP1: "お客様が欧州経済領域（EEA）に所在する場合、個人データに関して以下の権利を有します：",
    gdprRights: [
      { label: "アクセス権", desc: "個人データのコピーを請求することができます。" },
      { label: "訂正権", desc: "不正確なデータの訂正を請求することができます。" },
      { label: "消去権", desc: "個人データの削除を請求することができます。" },
      { label: "処理の制限権", desc: "データの使用を制限するよう請求することができます。" },
      { label: "データポータビリティ権", desc: "データを他の組織に移転するよう請求することができます。" },
      { label: "異議申立権", desc: "データの処理に異議を唱えることができます。" },
    ],
    gdprP2: "ToolOrbitはすべてのデータをお客様のブラウザ内でローカルに処理し、当社のサーバーに個人データを収集・保存しないため、これらの権利は自動的に満たされます。アクセス、訂正、または削除が必要な個人データは当社が保持していません。",
    gdprP3: "データ権利に関するご質問は、contact@toolorbit.comまでお問い合わせください。",
    thirdPartyTitle: "サードパーティサービス",
    thirdPartyP1: "当サイトでは、以下のサードパーティサービスを使用する場合があります：",
    thirdPartyHosting: "ホスティング：",
    thirdPartyHostingDesc: "ウェブサイトの配信にMicrosoft Azure Static Web Appsを使用。",
    thirdPartyFonts: "フォント：",
    thirdPartyFontsDesc: "ウェブタイポグラフィにGoogle Fontsを使用。適用される",
    thirdPartyGoogleLink: "Googleのプライバシーポリシー",
    advertisingTitle: "広告",
    advertisingP1: "将来、サイトに広告を表示する可能性があります。その場合、広告パートナーによるデータ収集について説明するよう、このプライバシーポリシーを更新します。",
    childrenTitle: "お子様のプライバシー",
    childrenP1: "当社のサービスは13歳未満の方を対象としておりません。お子様の個人情報を故意に収集することはありません。",
    changesTitle: "本ポリシーの変更",
    changesP1: "このプライバシーポリシーは随時更新される場合があります。変更は更新された日付とともにこのページに掲載されます。",
    contactTitle: "お問い合わせ",
    contactP1: "このポリシーに関するご質問は",
    contactLinkText: "お問い合わせページ",
  },
  zh: {
    metaTitle: "隐私政策 | ToolOrbit",
    metaDescription: "阅读ToolOrbit的隐私政策。了解我们如何处理您的数据——剧透：您的数据永远不会离开您的浏览器。",
    title: "隐私政策",
    lastUpdated: "最后更新：2026年3月",
    overviewTitle: "概述",
    overviewP1: "ToolOrbit致力于保护您的隐私。本隐私政策说明了当您使用我们的网站和工具时，我们如何处理信息。",
    overviewP2: "ToolOrbit上的所有工具完全在您的浏览器中运行。我们不会收集、存储或传输您在工具中输入的任何数据。",
    overviewP2Bold: "简而言之：",
    dataTitle: "您在工具中输入的数据",
    dataP1: "您在ToolOrbit任何工具中输入的所有文本、数字和其他数据都完全在您的网络浏览器中使用JavaScript进行处理。这些数据绝不会发送到我们的服务器或任何第三方服务器。当您关闭浏览器标签页时，您的数据就会消失。",
    collectTitle: "我们可能收集的信息",
    collectP1: "我们可能会收集匿名的聚合使用数据，以了解我们的工具是如何使用的并改进网站。这可能包括：",
    collectItems: [
      "访问的页面（已匿名化）",
      "浏览器类型和操作系统",
      "来源网站",
      "来源国家（从IP推断，不会存储）",
    ],
    collectP2: "我们不使用Cookie进行跟踪。如果将来实施分析功能，我们将使用尊重隐私的分析服务，该服务不使用Cookie，也不跟踪个人。",
    cookiesTitle: "Cookie",
    cookiesP1: "ToolOrbit仅使用网站基本功能所需的必要Cookie。我们不使用跟踪Cookie、广告Cookie或第三方分析Cookie。我们存储的唯一Cookie是您的Cookie同意偏好。",
    cookiesP2: "使用的必要Cookie：",
    cookieConsentDesc: "存储您的Cookie同意偏好（已接受/已拒绝）。存储在localStorage中，而非作为Cookie。除非手动清除，否则不会过期。",
    cookiesGdpr: "根据GDPR，您有权随时通过清除浏览器对本网站的本地存储，或使用浏览器的隐私/Cookie设置来撤回同意。",
    gdprTitle: "您在GDPR下的权利",
    gdprP1: "如果您位于欧洲经济区（EEA），您对个人数据享有以下权利：",
    gdprRights: [
      { label: "访问权", desc: "您可以请求获取个人数据的副本。" },
      { label: "更正权", desc: "您可以请求更正不准确的数据。" },
      { label: "删除权", desc: "您可以请求删除您的个人数据。" },
      { label: "限制处理权", desc: "您可以请求限制我们对您数据的使用。" },
      { label: "数据可携权", desc: "您可以请求将您的数据转移到另一个组织。" },
      { label: "反对权", desc: "您可以反对我们处理您的数据。" },
    ],
    gdprP2: "由于ToolOrbit在您的浏览器中本地处理所有数据，不会在我们的服务器上收集或存储个人数据，因此这些权利自动得到满足。我们不持有任何需要访问、更正或删除的个人数据。",
    gdprP3: "如果您对数据权利有任何疑问，请通过contact@toolorbit.com联系我们。",
    thirdPartyTitle: "第三方服务",
    thirdPartyP1: "我们的网站可能使用以下第三方服务：",
    thirdPartyHosting: "托管：",
    thirdPartyHostingDesc: "使用Microsoft Azure Static Web Apps提供网站服务。",
    thirdPartyFonts: "字体：",
    thirdPartyFontsDesc: "使用Google Fonts提供网页排版，受",
    thirdPartyGoogleLink: "Google隐私政策",
    advertisingTitle: "广告",
    advertisingP1: "我们将来可能在网站上展示广告。如果这样做，本隐私政策将更新以描述广告合作伙伴的任何数据收集行为。",
    childrenTitle: "儿童隐私",
    childrenP1: "我们的服务不面向13岁以下的个人。我们不会故意收集儿童的个人信息。",
    changesTitle: "本政策的变更",
    changesP1: "我们可能会不时更新本隐私政策。变更将在本页面上发布并注明更新日期。",
    contactTitle: "联系我们",
    contactP1: "对本政策有疑问？请访问我们的",
    contactLinkText: "联系页面",
  },
  ko: {
    metaTitle: "개인정보 처리방침 | ToolOrbit",
    metaDescription: "ToolOrbit의 개인정보 처리방침을 읽어보세요. 데이터 처리 방식을 알아보세요 — 스포일러: 귀하의 데이터는 브라우저를 벗어나지 않습니다.",
    title: "개인정보 처리방침",
    lastUpdated: "최종 업데이트: 2026년 3월",
    overviewTitle: "개요",
    overviewP1: "ToolOrbit는 귀하의 개인정보 보호에 최선을 다하고 있습니다. 본 개인정보 처리방침은 귀하가 당사 웹사이트와 도구를 사용할 때 정보를 어떻게 처리하는지 설명합니다.",
    overviewP2: "ToolOrbit의 모든 도구는 귀하의 브라우저에서 완전히 실행됩니다. 도구에 입력하는 데이터를 수집, 저장 또는 전송하지 않습니다.",
    overviewP2Bold: "요약:",
    dataTitle: "도구에 입력하는 데이터",
    dataP1: "ToolOrbit의 모든 도구에 입력하는 텍스트, 숫자 및 기타 데이터는 JavaScript를 사용하여 귀하의 웹 브라우저 내에서 완전히 처리됩니다. 이 데이터는 당사 서버나 제3자 서버로 전송되지 않습니다. 브라우저 탭을 닫으면 데이터가 사라집니다.",
    collectTitle: "수집할 수 있는 정보",
    collectP1: "도구 사용 현황을 파악하고 사이트를 개선하기 위해 익명의 집계된 사용 데이터를 수집할 수 있습니다. 여기에는 다음이 포함될 수 있습니다:",
    collectItems: [
      "방문한 페이지 (익명화됨)",
      "브라우저 유형 및 운영 체제",
      "참조 웹사이트",
      "출신 국가 (IP에서 파생, 저장되지 않음)",
    ],
    collectP2: "추적 목적으로 쿠키를 사용하지 않습니다. 향후 분석을 구현하는 경우, 쿠키를 사용하지 않고 개인을 추적하지 않는 개인정보 보호 분석 서비스를 사용할 것입니다.",
    cookiesTitle: "쿠키",
    cookiesP1: "ToolOrbit는 기본적인 사이트 기능에 필요한 필수 쿠키만 사용합니다. 추적 쿠키, 광고 쿠키 또는 제3자 분석 쿠키를 사용하지 않습니다. 저장하는 유일한 쿠키는 쿠키 동의 환경설정입니다.",
    cookiesP2: "사용되는 필수 쿠키:",
    cookieConsentDesc: "쿠키 동의 환경설정(수락/거부)을 저장합니다. 쿠키가 아닌 localStorage에 저장됩니다. 수동으로 삭제하지 않는 한 만료되지 않습니다.",
    cookiesGdpr: "GDPR에 따라, 이 사이트에 대한 브라우저의 로컬 저장소를 지우거나 브라우저의 개인정보/쿠키 설정을 사용하여 언제든지 동의를 철회할 권리가 있습니다.",
    gdprTitle: "GDPR에 따른 귀하의 권리",
    gdprP1: "귀하가 유럽 경제 지역(EEA)에 거주하는 경우, 개인 데이터에 대해 다음과 같은 권리를 가집니다:",
    gdprRights: [
      { label: "접근권", desc: "개인 데이터의 사본을 요청할 수 있습니다." },
      { label: "정정권", desc: "부정확한 데이터의 수정을 요청할 수 있습니다." },
      { label: "삭제권", desc: "개인 데이터의 삭제를 요청할 수 있습니다." },
      { label: "처리 제한권", desc: "데이터 사용을 제한하도록 요청할 수 있습니다." },
      { label: "데이터 이동권", desc: "데이터를 다른 조직으로 이전하도록 요청할 수 있습니다." },
      { label: "반대권", desc: "데이터 처리에 이의를 제기할 수 있습니다." },
    ],
    gdprP2: "ToolOrbit는 모든 데이터를 귀하의 브라우저에서 로컬로 처리하며 서버에 개인 데이터를 수집하거나 저장하지 않으므로, 이러한 권리는 자동으로 충족됩니다. 접근, 수정 또는 삭제가 필요한 개인 데이터가 당사에 보관되어 있지 않습니다.",
    gdprP3: "데이터 권리에 대한 질문이 있으시면 contact@toolorbit.com으로 문의해 주세요.",
    thirdPartyTitle: "제3자 서비스",
    thirdPartyP1: "당사 사이트는 다음과 같은 제3자 서비스를 사용할 수 있습니다:",
    thirdPartyHosting: "호스팅:",
    thirdPartyHostingDesc: "웹사이트 제공을 위한 Microsoft Azure Static Web Apps.",
    thirdPartyFonts: "글꼴:",
    thirdPartyFontsDesc: "웹 타이포그래피를 위한 Google Fonts 사용,",
    thirdPartyGoogleLink: "Google 개인정보 처리방침",
    advertisingTitle: "광고",
    advertisingP1: "향후 사이트에 광고를 게재할 수 있습니다. 그 경우, 광고 파트너의 데이터 수집에 대해 설명하도록 본 개인정보 처리방침을 업데이트할 것입니다.",
    childrenTitle: "아동 개인정보 보호",
    childrenP1: "당사 서비스는 13세 미만의 개인을 대상으로 하지 않습니다. 아동의 개인정보를 고의로 수집하지 않습니다.",
    changesTitle: "본 방침의 변경",
    changesP1: "본 개인정보 처리방침은 수시로 업데이트될 수 있습니다. 변경 사항은 업데이트된 날짜와 함께 이 페이지에 게시됩니다.",
    contactTitle: "문의",
    contactP1: "본 방침에 대한 질문이 있으신가요?",
    contactLinkText: "문의 페이지",
  },
  it: {
    metaTitle: "Informativa sulla Privacy | ToolOrbit",
    metaDescription: "Leggi l\u2019informativa sulla privacy di ToolOrbit. Scopri come gestiamo i tuoi dati — spoiler: i tuoi dati non lasciano mai il tuo browser.",
    title: "Informativa sulla Privacy",
    lastUpdated: "Ultimo aggiornamento: marzo 2026",
    overviewTitle: "Panoramica",
    overviewP1: "ToolOrbit si impegna a proteggere la tua privacy. Questa Informativa sulla Privacy spiega come gestiamo le informazioni quando utilizzi il nostro sito web e i nostri strumenti.",
    overviewP2: "Tutti gli strumenti su ToolOrbit funzionano interamente nel tuo browser. Non raccogliamo, memorizziamo o trasmettiamo alcun dato inserito nei nostri strumenti.",
    overviewP2Bold: "In breve:",
    dataTitle: "Dati inseriti negli strumenti",
    dataP1: "Tutto il testo, i numeri e gli altri dati inseriti in qualsiasi strumento di ToolOrbit vengono elaborati interamente all\u2019interno del tuo browser web tramite JavaScript. Questi dati non vengono mai inviati ai nostri server o a server di terze parti. Quando chiudi la scheda del browser, i tuoi dati scompaiono.",
    collectTitle: "Informazioni che potremmo raccogliere",
    collectP1: "Potremmo raccogliere dati di utilizzo anonimi e aggregati per comprendere come vengono utilizzati i nostri strumenti e migliorare il sito. Questi possono includere:",
    collectItems: [
      "Pagine visitate (anonimizzate)",
      "Tipo di browser e sistema operativo",
      "Sito web di provenienza",
      "Paese di origine (derivato dall\u2019IP, non memorizzato)",
    ],
    collectP2: "Non utilizziamo cookie per il tracciamento. Se in futuro implementeremo strumenti di analisi, utilizzeremo un servizio di analisi rispettoso della privacy che non utilizza cookie e non traccia gli individui.",
    cookiesTitle: "Cookie",
    cookiesP1: "ToolOrbit utilizza solo cookie essenziali necessari per le funzionalità di base del sito. Non utilizziamo cookie di tracciamento, cookie pubblicitari o cookie di analisi di terze parti. L\u2019unico cookie che memorizziamo è la tua preferenza di consenso ai cookie.",
    cookiesP2: "Cookie essenziali utilizzati:",
    cookieConsentDesc: "Memorizza la tua preferenza di consenso ai cookie (accettato/rifiutato). Memorizzato in localStorage, non come cookie. Nessuna scadenza a meno che non venga cancellato manualmente.",
    cookiesGdpr: "Ai sensi del GDPR, hai il diritto di revocare il consenso in qualsiasi momento cancellando la memoria locale del browser per questo sito o utilizzando le impostazioni di privacy/cookie del browser.",
    gdprTitle: "I tuoi diritti ai sensi del GDPR",
    gdprP1: "Se ti trovi nello Spazio Economico Europeo (SEE), hai i seguenti diritti riguardo ai tuoi dati personali:",
    gdprRights: [
      { label: "Diritto di accesso", desc: "Puoi richiedere copie dei tuoi dati personali." },
      { label: "Diritto di rettifica", desc: "Puoi richiedere la correzione di dati inesatti." },
      { label: "Diritto alla cancellazione", desc: "Puoi richiedere la cancellazione dei tuoi dati personali." },
      { label: "Diritto alla limitazione del trattamento", desc: "Puoi richiedere che limitiamo l\u2019uso dei tuoi dati." },
      { label: "Diritto alla portabilità dei dati", desc: "Puoi richiedere il trasferimento dei tuoi dati a un\u2019altra organizzazione." },
      { label: "Diritto di opposizione", desc: "Puoi opporti al trattamento dei tuoi dati." },
    ],
    gdprP2: "Poiché ToolOrbit elabora tutti i dati localmente nel tuo browser e non raccoglie né memorizza dati personali sui nostri server, questi diritti sono automaticamente soddisfatti. Non deteniamo alcun dato personale che debba essere consultato, corretto o cancellato.",
    gdprP3: "Se hai domande sui tuoi diritti relativi ai dati, contattaci a contact@toolorbit.com.",
    thirdPartyTitle: "Servizi di terze parti",
    thirdPartyP1: "Il nostro sito potrebbe utilizzare i seguenti servizi di terze parti:",
    thirdPartyHosting: "Hosting:",
    thirdPartyHostingDesc: "Microsoft Azure Static Web Apps per la distribuzione del sito web.",
    thirdPartyFonts: "Font:",
    thirdPartyFontsDesc: "Google Fonts per la tipografia web, soggetto alla",
    thirdPartyGoogleLink: "Informativa sulla Privacy di Google",
    advertisingTitle: "Pubblicità",
    advertisingP1: "In futuro potremmo visualizzare annunci pubblicitari sul sito. In tal caso, questa informativa sulla privacy verrà aggiornata per descrivere qualsiasi raccolta di dati da parte dei partner pubblicitari.",
    childrenTitle: "Privacy dei minori",
    childrenP1: "I nostri servizi non sono rivolti a persone di età inferiore ai 13 anni. Non raccogliamo consapevolmente informazioni personali di minori.",
    changesTitle: "Modifiche a questa informativa",
    changesP1: "Potremmo aggiornare questa Informativa sulla Privacy di tanto in tanto. Le modifiche saranno pubblicate su questa pagina con una data aggiornata.",
    contactTitle: "Contatti",
    contactP1: "Domande su questa informativa? Visita la nostra",
    contactLinkText: "pagina di contatto",
  },
  hi: {
    metaTitle: "गोपनीयता नीति | ToolOrbit",
    metaDescription: "ToolOrbit की गोपनीयता नीति पढ़ें। जानें कि हम आपके डेटा को कैसे संभालते हैं — स्पॉइलर: आपका डेटा कभी भी आपके ब्राउज़र से बाहर नहीं जाता।",
    title: "गोपनीयता नीति",
    lastUpdated: "अंतिम अपडेट: मार्च 2026",
    overviewTitle: "अवलोकन",
    overviewP1: "ToolOrbit आपकी गोपनीयता की सुरक्षा के लिए प्रतिबद्ध है। यह गोपनीयता नीति बताती है कि जब आप हमारी वेबसाइट और उपकरणों का उपयोग करते हैं तो हम जानकारी को कैसे संभालते हैं।",
    overviewP2: "ToolOrbit के सभी उपकरण पूरी तरह से आपके ब्राउज़र में चलते हैं। हम आपके द्वारा हमारे उपकरणों में दर्ज किए गए किसी भी डेटा को एकत्र, संग्रहीत या प्रसारित नहीं करते हैं।",
    overviewP2Bold: "संक्षेप में:",
    dataTitle: "उपकरणों में आपके द्वारा दर्ज किया गया डेटा",
    dataP1: "ToolOrbit के किसी भी उपकरण में आपके द्वारा दर्ज किया गया सभी टेक्स्ट, संख्याएँ और अन्य डेटा JavaScript का उपयोग करके आपके वेब ब्राउज़र के भीतर पूरी तरह से संसाधित होता है। यह डेटा कभी भी हमारे सर्वर या किसी तृतीय-पक्ष सर्वर को नहीं भेजा जाता। जब आप ब्राउज़र टैब बंद करते हैं, तो आपका डेटा गायब हो जाता है।",
    collectTitle: "जो जानकारी हम एकत्र कर सकते हैं",
    collectP1: "हम अपने उपकरणों के उपयोग को समझने और साइट को बेहतर बनाने के लिए अनाम, समेकित उपयोग डेटा एकत्र कर सकते हैं। इसमें शामिल हो सकता है:",
    collectItems: [
      "देखे गए पृष्ठ (अनामित)",
      "ब्राउज़र प्रकार और ऑपरेटिंग सिस्टम",
      "संदर्भित वेबसाइट",
      "मूल देश (IP से प्राप्त, संग्रहीत नहीं)",
    ],
    collectP2: "हम ट्रैकिंग के लिए कुकीज़ का उपयोग नहीं करते हैं। यदि हम भविष्य में एनालिटिक्स लागू करते हैं, तो हम एक गोपनीयता-सम्मानजनक एनालिटिक्स सेवा का उपयोग करेंगे जो कुकीज़ का उपयोग नहीं करती और व्यक्तियों को ट्रैक नहीं करती।",
    cookiesTitle: "कुकीज़",
    cookiesP1: "ToolOrbit केवल साइट की बुनियादी कार्यक्षमता के लिए आवश्यक अनिवार्य कुकीज़ का उपयोग करता है। हम ट्रैकिंग कुकीज़, विज्ञापन कुकीज़ या तृतीय-पक्ष एनालिटिक्स कुकीज़ का उपयोग नहीं करते हैं। हम जो एकमात्र कुकी संग्रहीत करते हैं वह आपकी कुकी सहमति प्राथमिकता है।",
    cookiesP2: "उपयोग की जाने वाली अनिवार्य कुकीज़:",
    cookieConsentDesc: "आपकी कुकी सहमति प्राथमिकता (स्वीकृत/अस्वीकृत) को संग्रहीत करता है। कुकी के रूप में नहीं, बल्कि localStorage में संग्रहीत। मैन्युअल रूप से साफ़ किए जाने तक कोई समाप्ति नहीं।",
    cookiesGdpr: "GDPR के तहत, आपको इस साइट के लिए अपने ब्राउज़र का लोकल स्टोरेज साफ़ करके, या अपने ब्राउज़र की गोपनीयता/कुकी सेटिंग्स का उपयोग करके किसी भी समय सहमति वापस लेने का अधिकार है।",
    gdprTitle: "GDPR के तहत आपके अधिकार",
    gdprP1: "यदि आप यूरोपीय आर्थिक क्षेत्र (EEA) में स्थित हैं, तो आपके व्यक्तिगत डेटा के संबंध में निम्नलिखित अधिकार हैं:",
    gdprRights: [
      { label: "पहुँच का अधिकार", desc: "आप अपने व्यक्तिगत डेटा की प्रतियों का अनुरोध कर सकते हैं।" },
      { label: "सुधार का अधिकार", desc: "आप गलत डेटा के सुधार का अनुरोध कर सकते हैं।" },
      { label: "मिटाने का अधिकार", desc: "आप अपने व्यक्तिगत डेटा को हटाने का अनुरोध कर सकते हैं।" },
      { label: "प्रसंस्करण प्रतिबंधित करने का अधिकार", desc: "आप अनुरोध कर सकते हैं कि हम आपके डेटा के उपयोग को सीमित करें।" },
      { label: "डेटा पोर्टेबिलिटी का अधिकार", desc: "आप अनुरोध कर सकते हैं कि हम आपका डेटा किसी अन्य संगठन को स्थानांतरित करें।" },
      { label: "आपत्ति का अधिकार", desc: "आप अपने डेटा के प्रसंस्करण पर आपत्ति कर सकते हैं।" },
    ],
    gdprP2: "चूंकि ToolOrbit आपके ब्राउज़र में सभी डेटा को स्थानीय रूप से संसाधित करता है और हमारे सर्वर पर व्यक्तिगत डेटा एकत्र या संग्रहीत नहीं करता है, इसलिए ये अधिकार स्वचालित रूप से पूरे होते हैं। हमारे पास कोई व्यक्तिगत डेटा नहीं है जिसे एक्सेस, सुधारा या हटाया जाना आवश्यक हो।",
    gdprP3: "यदि आपके डेटा अधिकारों के बारे में प्रश्न हैं, तो contact@toolorbit.com पर हमसे संपर्क करें।",
    thirdPartyTitle: "तृतीय-पक्ष सेवाएँ",
    thirdPartyP1: "हमारी साइट निम्नलिखित तृतीय-पक्ष सेवाओं का उपयोग कर सकती है:",
    thirdPartyHosting: "होस्टिंग:",
    thirdPartyHostingDesc: "वेबसाइट प्रदान करने के लिए Microsoft Azure Static Web Apps।",
    thirdPartyFonts: "फ़ॉन्ट:",
    thirdPartyFontsDesc: "वेब टाइपोग्राफी के लिए Google Fonts, जो",
    thirdPartyGoogleLink: "Google की गोपनीयता नीति",
    advertisingTitle: "विज्ञापन",
    advertisingP1: "हम भविष्य में साइट पर विज्ञापन प्रदर्शित कर सकते हैं। यदि हम ऐसा करते हैं, तो इस गोपनीयता नीति को विज्ञापन भागीदारों द्वारा किसी भी डेटा संग्रह का वर्णन करने के लिए अपडेट किया जाएगा।",
    childrenTitle: "बच्चों की गोपनीयता",
    childrenP1: "हमारी सेवाएँ 13 वर्ष से कम आयु के व्यक्तियों के लिए निर्देशित नहीं हैं। हम जानबूझकर बच्चों से व्यक्तिगत जानकारी एकत्र नहीं करते हैं।",
    changesTitle: "इस नीति में परिवर्तन",
    changesP1: "हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं। परिवर्तन अपडेट की गई तिथि के साथ इस पृष्ठ पर प्रकाशित किए जाएँगे।",
    contactTitle: "संपर्क",
    contactP1: "इस नीति के बारे में प्रश्न हैं? हमारे",
    contactLinkText: "संपर्क पृष्ठ",
  },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;
  return generatePageMetadata(
    t.metaTitle,
    t.metaDescription,
    `/${locale}/privacy/`
  );
}

export default async function PrivacyPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">{t.title}</h1>
      <p className="mb-6 text-sm text-gray-500">
        {t.lastUpdated}
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">{t.overviewTitle}</h2>
        <p>{t.overviewP1}</p>
        <p>
          <strong>{t.overviewP2Bold}</strong> {t.overviewP2}
        </p>

        <h2 className="text-xl font-semibold text-gray-900">
          {t.dataTitle}
        </h2>
        <p>{t.dataP1}</p>

        <h2 className="text-xl font-semibold text-gray-900">
          {t.collectTitle}
        </h2>
        <p>{t.collectP1}</p>
        <ul className="list-inside list-disc space-y-1">
          {t.collectItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
        <p>{t.collectP2}</p>

        <h2 className="text-xl font-semibold text-gray-900">{t.cookiesTitle}</h2>
        <p>{t.cookiesP1}</p>
        <p>
          <strong>{t.cookiesP2}</strong>
        </p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <strong>toolorbit_cookie_consent</strong> — {t.cookieConsentDesc}
          </li>
        </ul>
        <p>{t.cookiesGdpr}</p>

        <h2 className="text-xl font-semibold text-gray-900">
          {t.gdprTitle}
        </h2>
        <p>{t.gdprP1}</p>
        <ul className="list-inside list-disc space-y-1">
          {t.gdprRights.map((right, i) => (
            <li key={i}><strong>{right.label}</strong> — {right.desc}</li>
          ))}
        </ul>
        <p>{t.gdprP2}</p>
        <p>{t.gdprP3}</p>

        <h2 className="text-xl font-semibold text-gray-900">
          {t.thirdPartyTitle}
        </h2>
        <p>{t.thirdPartyP1}</p>
        <ul className="list-inside list-disc space-y-1">
          <li>
            <strong>{t.thirdPartyHosting}</strong> {t.thirdPartyHostingDesc}
          </li>
          <li>
            <strong>{t.thirdPartyFonts}</strong> {t.thirdPartyFontsDesc}{" "}
            <a
              href="https://policies.google.com/privacy"
              className="text-primary-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.thirdPartyGoogleLink}
            </a>
            .
          </li>
        </ul>

        <h2 className="text-xl font-semibold text-gray-900">{t.advertisingTitle}</h2>
        <p>{t.advertisingP1}</p>

        <h2 className="text-xl font-semibold text-gray-900">
          {t.childrenTitle}
        </h2>
        <p>{t.childrenP1}</p>

        <h2 className="text-xl font-semibold text-gray-900">
          {t.changesTitle}
        </h2>
        <p>{t.changesP1}</p>

        <h2 className="text-xl font-semibold text-gray-900">{t.contactTitle}</h2>
        <p>
          {t.contactP1}{" "}
          <a href={`/${locale}/contact/`} className="text-primary-600 hover:underline">{t.contactLinkText}</a>.
        </p>
      </div>
    </div>
  );
}
