import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/data/site";

const translations = {
  en: {
    metaTitle: "Terms of Service | ToolOrbit",
    metaDescription: "Read the ToolOrbit terms of service. Understand the terms governing your use of our free online tools.",
    title: "Terms of Service",
    lastUpdated: "Last updated: March 2026",
    acceptanceTitle: "Acceptance of Terms",
    acceptanceP1: `By accessing and using ${siteConfig.name} ("the Site"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.`,
    descriptionTitle: "Description of Service",
    descriptionP1: `${siteConfig.name} provides free online utility tools that run in your web browser. These tools include text editors, code formatters, calculators, converters, and generators. The tools are provided "as is" without warranty.`,
    useTitle: "Use of Tools",
    useP1: "You may use our tools for any lawful purpose. You agree not to:",
    useItems: [
      "Use the tools for any illegal or unauthorized purpose",
      "Attempt to disrupt or overload the service",
      "Copy or redistribute the site's code without permission",
      "Use automated systems to access the site in a way that sends more requests than a human could reasonably produce",
    ],
    warrantyTitle: "No Warranty",
    warrantyP1: `The tools on ${siteConfig.name} are provided "as is" and "as available" without any warranties of any kind, express or implied. We do not guarantee that the tools will be error-free, accurate, or available at all times.`,
    liabilityTitle: "Limitation of Liability",
    liabilityP1: `To the maximum extent permitted by law, ${siteConfig.name} and its operators shall not be liable for any damages arising from the use or inability to use our tools. This includes but is not limited to direct, indirect, incidental, consequential, or punitive damages.`,
    ipTitle: "Intellectual Property",
    ipP1: `The content, design, and code of ${siteConfig.name} are protected by copyright and other intellectual property laws. You may not reproduce, distribute, or create derivative works from the site without permission.`,
    changesTitle: "Changes to Terms",
    changesP1: "We reserve the right to modify these Terms of Service at any time. Changes will be posted on this page with an updated effective date. Continued use of the Site after changes constitutes acceptance of the revised terms.",
    contactTitle: "Contact",
    contactP1: "Questions about these terms? Visit our",
    contactLinkText: "contact page",
  },
  es: {
    metaTitle: "Términos de Servicio | ToolOrbit",
    metaDescription: "Lea los términos de servicio de ToolOrbit. Comprenda las condiciones que rigen el uso de nuestras herramientas en línea gratuitas.",
    title: "Términos de Servicio",
    lastUpdated: "Última actualización: marzo de 2026",
    acceptanceTitle: "Aceptación de los Términos",
    acceptanceP1: "Al acceder y utilizar ToolOrbit (\"el Sitio\"), usted acepta quedar vinculado por estos Términos de Servicio. Si no está de acuerdo con estos términos, le rogamos que no utilice el Sitio.",
    descriptionTitle: "Descripción del Servicio",
    descriptionP1: "ToolOrbit proporciona herramientas de utilidad en línea gratuitas que se ejecutan en su navegador web. Estas herramientas incluyen editores de texto, formateadores de código, calculadoras, convertidores y generadores. Las herramientas se proporcionan \"tal cual\" sin garantía.",
    useTitle: "Uso de las Herramientas",
    useP1: "Puede utilizar nuestras herramientas para cualquier fin lícito. Usted se compromete a no:",
    useItems: [
      "Utilizar las herramientas con fines ilegales o no autorizados",
      "Intentar interrumpir o sobrecargar el servicio",
      "Copiar o redistribuir el código del sitio sin autorización",
      "Utilizar sistemas automatizados para acceder al sitio de forma que genere más solicitudes de las que una persona podría producir razonablemente",
    ],
    warrantyTitle: "Sin Garantía",
    warrantyP1: "Las herramientas de ToolOrbit se proporcionan \"tal cual\" y \"según disponibilidad\" sin garantías de ningún tipo, ya sean expresas o implícitas. No garantizamos que las herramientas estén libres de errores, sean precisas o estén disponibles en todo momento.",
    liabilityTitle: "Limitación de Responsabilidad",
    liabilityP1: "En la máxima medida permitida por la ley, ToolOrbit y sus operadores no serán responsables de ningún daño derivado del uso o la imposibilidad de uso de nuestras herramientas. Esto incluye, entre otros, daños directos, indirectos, incidentales, consecuentes o punitivos.",
    ipTitle: "Propiedad Intelectual",
    ipP1: "El contenido, el diseño y el código de ToolOrbit están protegidos por derechos de autor y otras leyes de propiedad intelectual. No puede reproducir, distribuir ni crear obras derivadas del sitio sin autorización.",
    changesTitle: "Cambios en los Términos",
    changesP1: "Nos reservamos el derecho de modificar estos Términos de Servicio en cualquier momento. Los cambios se publicarán en esta página con una fecha de vigencia actualizada. El uso continuado del Sitio tras los cambios constituye la aceptación de los términos revisados.",
    contactTitle: "Contacto",
    contactP1: "¿Tiene preguntas sobre estos términos? Visite nuestra",
    contactLinkText: "página de contacto",
  },
  fr: {
    metaTitle: "Conditions d'Utilisation | ToolOrbit",
    metaDescription: "Lisez les conditions d'utilisation de ToolOrbit. Comprenez les termes régissant l'utilisation de nos outils en ligne gratuits.",
    title: "Conditions d'Utilisation",
    lastUpdated: "Dernière mise à jour : mars 2026",
    acceptanceTitle: "Acceptation des Conditions",
    acceptanceP1: "En accédant et en utilisant ToolOrbit (« le Site »), vous acceptez d'être lié par les présentes Conditions d'Utilisation. Si vous n'acceptez pas ces conditions, veuillez ne pas utiliser le Site.",
    descriptionTitle: "Description du Service",
    descriptionP1: "ToolOrbit fournit des outils utilitaires en ligne gratuits qui fonctionnent dans votre navigateur web. Ces outils comprennent des éditeurs de texte, des formateurs de code, des calculatrices, des convertisseurs et des générateurs. Les outils sont fournis « en l'état » sans garantie.",
    useTitle: "Utilisation des Outils",
    useP1: "Vous pouvez utiliser nos outils à toute fin licite. Vous vous engagez à ne pas :",
    useItems: [
      "Utiliser les outils à des fins illégales ou non autorisées",
      "Tenter de perturber ou de surcharger le service",
      "Copier ou redistribuer le code du site sans autorisation",
      "Utiliser des systèmes automatisés pour accéder au site d'une manière générant plus de requêtes qu'un être humain ne pourrait raisonnablement produire",
    ],
    warrantyTitle: "Absence de Garantie",
    warrantyP1: "Les outils de ToolOrbit sont fournis « en l'état » et « selon disponibilité » sans aucune garantie d'aucune sorte, expresse ou implicite. Nous ne garantissons pas que les outils seront exempts d'erreurs, précis ou disponibles en permanence.",
    liabilityTitle: "Limitation de Responsabilité",
    liabilityP1: "Dans toute la mesure permise par la loi, ToolOrbit et ses opérateurs ne pourront être tenus responsables de tout dommage résultant de l'utilisation ou de l'impossibilité d'utiliser nos outils. Cela inclut, sans s'y limiter, les dommages directs, indirects, accessoires, consécutifs ou punitifs.",
    ipTitle: "Propriété Intellectuelle",
    ipP1: "Le contenu, le design et le code de ToolOrbit sont protégés par le droit d'auteur et d'autres lois sur la propriété intellectuelle. Vous ne pouvez pas reproduire, distribuer ou créer des œuvres dérivées du site sans autorisation.",
    changesTitle: "Modifications des Conditions",
    changesP1: "Nous nous réservons le droit de modifier les présentes Conditions d'Utilisation à tout moment. Les modifications seront publiées sur cette page avec une date d'entrée en vigueur mise à jour. L'utilisation continue du Site après les modifications constitue l'acceptation des conditions révisées.",
    contactTitle: "Contact",
    contactP1: "Des questions sur ces conditions ? Visitez notre",
    contactLinkText: "page de contact",
  },
  de: {
    metaTitle: "Nutzungsbedingungen | ToolOrbit",
    metaDescription: "Lesen Sie die Nutzungsbedingungen von ToolOrbit. Erfahren Sie, welche Bedingungen für die Nutzung unserer kostenlosen Online-Tools gelten.",
    title: "Nutzungsbedingungen",
    lastUpdated: "Zuletzt aktualisiert: März 2026",
    acceptanceTitle: "Annahme der Bedingungen",
    acceptanceP1: "Durch den Zugriff auf und die Nutzung von ToolOrbit (die \u201EWebsite\u201C) erklären Sie sich mit diesen Nutzungsbedingungen einverstanden. Wenn Sie diesen Bedingungen nicht zustimmen, nutzen Sie die Website bitte nicht.",
    descriptionTitle: "Beschreibung des Dienstes",
    descriptionP1: "ToolOrbit stellt kostenlose Online-Dienstprogramme bereit, die in Ihrem Webbrowser ausgeführt werden. Diese Tools umfassen Texteditoren, Code-Formatierer, Rechner, Konverter und Generatoren. Die Tools werden ohne Gewährleistung \u201Ewie besehen\u201C bereitgestellt.",
    useTitle: "Nutzung der Tools",
    useP1: "Sie dürfen unsere Tools für jeden rechtmäßigen Zweck nutzen. Sie verpflichten sich, Folgendes zu unterlassen:",
    useItems: [
      "Die Tools für illegale oder unbefugte Zwecke zu verwenden",
      "Zu versuchen, den Dienst zu stören oder zu überlasten",
      "Den Code der Website ohne Genehmigung zu kopieren oder weiterzuverbreiten",
      "Automatisierte Systeme zu verwenden, um auf die Website in einer Weise zuzugreifen, die mehr Anfragen erzeugt, als ein Mensch vernünftigerweise produzieren könnte",
    ],
    warrantyTitle: "Gewährleistungsausschluss",
    warrantyP1: "Die Tools auf ToolOrbit werden \u201Ewie besehen\u201C und \u201Enach Verfügbarkeit\u201C ohne jegliche ausdrückliche oder stillschweigende Gewährleistung bereitgestellt. Wir garantieren nicht, dass die Tools fehlerfrei, genau oder jederzeit verfügbar sind.",
    liabilityTitle: "Haftungsbeschränkung",
    liabilityP1: "Im größtmöglichen gesetzlich zulässigen Umfang haften ToolOrbit und seine Betreiber nicht für Schäden, die aus der Nutzung oder der Unmöglichkeit der Nutzung unserer Tools entstehen. Dies umfasst unter anderem direkte, indirekte, beiläufige, Folge- oder Strafschäden.",
    ipTitle: "Geistiges Eigentum",
    ipP1: "Der Inhalt, das Design und der Code von ToolOrbit sind durch das Urheberrecht und andere Gesetze zum Schutz geistigen Eigentums geschützt. Sie dürfen die Website ohne Genehmigung nicht vervielfältigen, verbreiten oder abgeleitete Werke davon erstellen.",
    changesTitle: "Änderungen der Bedingungen",
    changesP1: "Wir behalten uns das Recht vor, diese Nutzungsbedingungen jederzeit zu ändern. Änderungen werden auf dieser Seite mit einem aktualisierten Gültigkeitsdatum veröffentlicht. Die fortgesetzte Nutzung der Website nach Änderungen gilt als Annahme der geänderten Bedingungen.",
    contactTitle: "Kontakt",
    contactP1: "Fragen zu diesen Bedingungen? Besuchen Sie unsere",
    contactLinkText: "Kontaktseite",
  },
  pt: {
    metaTitle: "Termos de Serviço | ToolOrbit",
    metaDescription: "Leia os termos de serviço do ToolOrbit. Entenda os termos que regem o uso de nossas ferramentas online gratuitas.",
    title: "Termos de Serviço",
    lastUpdated: "Última atualização: março de 2026",
    acceptanceTitle: "Aceitação dos Termos",
    acceptanceP1: "Ao acessar e utilizar o ToolOrbit (\"o Site\"), você concorda em ficar vinculado a estes Termos de Serviço. Se você não concordar com estes termos, por favor, não utilize o Site.",
    descriptionTitle: "Descrição do Serviço",
    descriptionP1: "O ToolOrbit fornece ferramentas utilitárias online gratuitas que funcionam no seu navegador web. Essas ferramentas incluem editores de texto, formatadores de código, calculadoras, conversores e geradores. As ferramentas são fornecidas \"no estado em que se encontram\" sem garantia.",
    useTitle: "Uso das Ferramentas",
    useP1: "Você pode utilizar nossas ferramentas para qualquer finalidade lícita. Você concorda em não:",
    useItems: [
      "Utilizar as ferramentas para qualquer finalidade ilegal ou não autorizada",
      "Tentar interromper ou sobrecarregar o serviço",
      "Copiar ou redistribuir o código do site sem permissão",
      "Utilizar sistemas automatizados para acessar o site de forma que gere mais solicitações do que uma pessoa poderia razoavelmente produzir",
    ],
    warrantyTitle: "Isenção de Garantia",
    warrantyP1: "As ferramentas do ToolOrbit são fornecidas \"no estado em que se encontram\" e \"conforme disponibilidade\" sem garantias de qualquer tipo, expressas ou implícitas. Não garantimos que as ferramentas estarão livres de erros, serão precisas ou estarão disponíveis o tempo todo.",
    liabilityTitle: "Limitação de Responsabilidade",
    liabilityP1: "Na máxima extensão permitida por lei, o ToolOrbit e seus operadores não serão responsáveis por quaisquer danos decorrentes do uso ou da impossibilidade de uso de nossas ferramentas. Isso inclui, mas não se limita a, danos diretos, indiretos, incidentais, consequenciais ou punitivos.",
    ipTitle: "Propriedade Intelectual",
    ipP1: "O conteúdo, o design e o código do ToolOrbit são protegidos por direitos autorais e outras leis de propriedade intelectual. Você não pode reproduzir, distribuir ou criar obras derivadas do site sem permissão.",
    changesTitle: "Alterações nos Termos",
    changesP1: "Reservamo-nos o direito de modificar estes Termos de Serviço a qualquer momento. As alterações serão publicadas nesta página com uma data de vigência atualizada. O uso continuado do Site após as alterações constitui aceitação dos termos revisados.",
    contactTitle: "Contato",
    contactP1: "Dúvidas sobre estes termos? Visite nossa",
    contactLinkText: "página de contato",
  },
  ja: {
    metaTitle: "利用規約 | ToolOrbit",
    metaDescription: "ToolOrbitの利用規約をお読みください。無料オンラインツールのご利用に適用される条件をご確認いただけます。",
    title: "利用規約",
    lastUpdated: "最終更新日：2026年3月",
    acceptanceTitle: "規約への同意",
    acceptanceP1: "ToolOrbit（以下「本サイト」）にアクセスし利用することにより、お客様は本利用規約に拘束されることに同意したものとみなされます。本規約に同意されない場合は、本サイトをご利用にならないでください。",
    descriptionTitle: "サービスの説明",
    descriptionP1: "ToolOrbitは、Webブラウザ上で動作する無料のオンラインユーティリティツールを提供しています。これらのツールには、テキストエディタ、コードフォーマッタ、計算機、変換ツール、ジェネレーターが含まれます。ツールは保証なしの「現状有姿」で提供されます。",
    useTitle: "ツールの使用",
    useP1: "当社のツールは、合法的な目的であればご自由にお使いいただけます。以下の行為を行わないことに同意するものとします：",
    useItems: [
      "違法または無許可の目的でツールを使用すること",
      "サービスの妨害または過負荷を試みること",
      "許可なくサイトのコードをコピーまたは再配布すること",
      "人間が合理的に生成できる量を超えるリクエストを送信する方法で、自動化されたシステムを使用してサイトにアクセスすること",
    ],
    warrantyTitle: "保証の免責",
    warrantyP1: "ToolOrbitのツールは、明示的または黙示的を問わず、いかなる種類の保証もなく「現状有姿」および「利用可能な状態」で提供されます。ツールにエラーがないこと、正確であること、または常に利用可能であることを保証するものではありません。",
    liabilityTitle: "責任の制限",
    liabilityP1: "法律で許容される最大限の範囲において、ToolOrbitおよびその運営者は、当社のツールの使用または使用不能から生じるいかなる損害についても責任を負いません。これには、直接的、間接的、付随的、結果的、または懲罰的損害が含まれますが、これらに限定されません。",
    ipTitle: "知的財産権",
    ipP1: "ToolOrbitのコンテンツ、デザイン、およびコードは、著作権法およびその他の知的財産権法によって保護されています。許可なくサイトを複製、配布、または二次的著作物を作成することはできません。",
    changesTitle: "規約の変更",
    changesP1: "当社は、本利用規約をいつでも変更する権利を留保します。変更は、更新された発効日とともにこのページに掲載されます。変更後も本サイトを継続してご利用になった場合、改定された規約に同意したものとみなされます。",
    contactTitle: "お問い合わせ",
    contactP1: "本規約についてご質問がありますか？",
    contactLinkText: "お問い合わせページ",
  },
  zh: {
    metaTitle: "服务条款 | ToolOrbit",
    metaDescription: "阅读 ToolOrbit 的服务条款。了解使用我们免费在线工具的相关条款。",
    title: "服务条款",
    lastUpdated: "最后更新：2026年3月",
    acceptanceTitle: "条款的接受",
    acceptanceP1: "通过访问和使用 ToolOrbit（以下简称\u201C本站\u201D），您同意受本服务条款的约束。如果您不同意这些条款，请勿使用本站。",
    descriptionTitle: "服务说明",
    descriptionP1: "ToolOrbit 提供在您的网络浏览器中运行的免费在线实用工具。这些工具包括文本编辑器、代码格式化工具、计算器、转换器和生成器。这些工具按\u201C原样\u201D提供，不附带任何保证。",
    useTitle: "工具的使用",
    useP1: "您可以将我们的工具用于任何合法目的。您同意不会：",
    useItems: [
      "将工具用于任何非法或未经授权的目的",
      "试图中断或使服务过载",
      "未经许可复制或再分发本站的代码",
      "使用自动化系统以超出正常人类合理范围的请求量来访问本站",
    ],
    warrantyTitle: "免责声明",
    warrantyP1: "ToolOrbit 上的工具按\u201C原样\u201D和\u201C可用状态\u201D提供，不附带任何明示或暗示的保证。我们不保证工具没有错误、准确无误或随时可用。",
    liabilityTitle: "责任限制",
    liabilityP1: "在法律允许的最大范围内，ToolOrbit 及其运营者不对因使用或无法使用我们的工具而产生的任何损害承担责任。这包括但不限于直接、间接、附带、后果性或惩罚性损害。",
    ipTitle: "知识产权",
    ipP1: "ToolOrbit 的内容、设计和代码受版权法和其他知识产权法的保护。未经许可，您不得复制、分发或基于本站创建衍生作品。",
    changesTitle: "条款变更",
    changesP1: "我们保留随时修改本服务条款的权利。变更将在本页面发布，并附有更新后的生效日期。变更后继续使用本站即表示您接受修订后的条款。",
    contactTitle: "联系我们",
    contactP1: "对这些条款有疑问？请访问我们的",
    contactLinkText: "联系页面",
  },
  ko: {
    metaTitle: "이용약관 | ToolOrbit",
    metaDescription: "ToolOrbit 이용약관을 읽어보세요. 무료 온라인 도구 사용에 적용되는 조건을 확인하실 수 있습니다.",
    title: "이용약관",
    lastUpdated: "최종 업데이트: 2026년 3월",
    acceptanceTitle: "약관 동의",
    acceptanceP1: "ToolOrbit(이하 \"본 사이트\")에 접속하고 사용함으로써, 귀하는 본 이용약관에 구속되는 것에 동의하게 됩니다. 본 약관에 동의하지 않으시면, 본 사이트를 사용하지 마시기 바랍니다.",
    descriptionTitle: "서비스 설명",
    descriptionP1: "ToolOrbit은 웹 브라우저에서 실행되는 무료 온라인 유틸리티 도구를 제공합니다. 이러한 도구에는 텍스트 편집기, 코드 포맷터, 계산기, 변환기 및 생성기가 포함됩니다. 도구는 보증 없이 \"있는 그대로\" 제공됩니다.",
    useTitle: "도구 사용",
    useP1: "당사의 도구는 합법적인 목적으로 사용하실 수 있습니다. 다음 행위를 하지 않을 것에 동의합니다:",
    useItems: [
      "불법적이거나 승인되지 않은 목적으로 도구를 사용하는 행위",
      "서비스를 방해하거나 과부하를 시도하는 행위",
      "허가 없이 사이트의 코드를 복사하거나 재배포하는 행위",
      "사람이 합리적으로 생성할 수 있는 양을 초과하는 요청을 보내는 방식으로 자동화된 시스템을 사용하여 사이트에 접속하는 행위",
    ],
    warrantyTitle: "보증 면책",
    warrantyP1: "ToolOrbit의 도구는 명시적이든 묵시적이든 어떠한 종류의 보증도 없이 \"있는 그대로\" 및 \"이용 가능한 상태로\" 제공됩니다. 도구에 오류가 없거나, 정확하거나, 항상 이용 가능하다는 것을 보장하지 않습니다.",
    liabilityTitle: "책임 제한",
    liabilityP1: "법률이 허용하는 최대 범위 내에서, ToolOrbit 및 그 운영자는 당사 도구의 사용 또는 사용 불능으로 인해 발생하는 어떠한 손해에 대해서도 책임을 지지 않습니다. 여기에는 직접적, 간접적, 부수적, 결과적 또는 징벌적 손해가 포함되나 이에 국한되지 않습니다.",
    ipTitle: "지적 재산권",
    ipP1: "ToolOrbit의 콘텐츠, 디자인 및 코드는 저작권법 및 기타 지적 재산권법에 의해 보호됩니다. 허가 없이 사이트를 복제, 배포하거나 파생 저작물을 생성할 수 없습니다.",
    changesTitle: "약관 변경",
    changesP1: "당사는 언제든지 본 이용약관을 수정할 권리를 보유합니다. 변경 사항은 업데이트된 시행일과 함께 이 페이지에 게시됩니다. 변경 후 본 사이트를 계속 사용하면 수정된 약관에 동의한 것으로 간주됩니다.",
    contactTitle: "문의",
    contactP1: "본 약관에 대해 궁금한 점이 있으신가요?",
    contactLinkText: "문의 페이지",
  },
  it: {
    metaTitle: "Termini di Servizio | ToolOrbit",
    metaDescription: "Leggi i termini di servizio di ToolOrbit. Scopri le condizioni che regolano l'utilizzo dei nostri strumenti online gratuiti.",
    title: "Termini di Servizio",
    lastUpdated: "Ultimo aggiornamento: marzo 2026",
    acceptanceTitle: "Accettazione dei Termini",
    acceptanceP1: "Accedendo e utilizzando ToolOrbit (il \"Sito\"), l'utente accetta di essere vincolato dai presenti Termini di Servizio. Se non si accettano questi termini, si prega di non utilizzare il Sito.",
    descriptionTitle: "Descrizione del Servizio",
    descriptionP1: "ToolOrbit fornisce strumenti di utilità online gratuiti che funzionano nel browser web. Questi strumenti includono editor di testo, formattatori di codice, calcolatrici, convertitori e generatori. Gli strumenti sono forniti \"così come sono\" senza garanzia.",
    useTitle: "Utilizzo degli Strumenti",
    useP1: "È possibile utilizzare i nostri strumenti per qualsiasi scopo lecito. L'utente si impegna a non:",
    useItems: [
      "Utilizzare gli strumenti per scopi illegali o non autorizzati",
      "Tentare di interrompere o sovraccaricare il servizio",
      "Copiare o ridistribuire il codice del sito senza autorizzazione",
      "Utilizzare sistemi automatizzati per accedere al sito in modo da generare più richieste di quante un essere umano potrebbe ragionevolmente produrre",
    ],
    warrantyTitle: "Esclusione di Garanzia",
    warrantyP1: "Gli strumenti su ToolOrbit sono forniti \"così come sono\" e \"secondo disponibilità\" senza garanzie di alcun tipo, esplicite o implicite. Non garantiamo che gli strumenti siano privi di errori, accurati o disponibili in ogni momento.",
    liabilityTitle: "Limitazione di Responsabilità",
    liabilityP1: "Nella misura massima consentita dalla legge, ToolOrbit e i suoi operatori non saranno responsabili per eventuali danni derivanti dall'uso o dall'impossibilità di utilizzare i nostri strumenti. Ciò include, a titolo esemplificativo ma non esaustivo, danni diretti, indiretti, incidentali, consequenziali o punitivi.",
    ipTitle: "Proprietà Intellettuale",
    ipP1: "Il contenuto, il design e il codice di ToolOrbit sono protetti dal diritto d'autore e da altre leggi sulla proprietà intellettuale. Non è consentito riprodurre, distribuire o creare opere derivate dal sito senza autorizzazione.",
    changesTitle: "Modifiche ai Termini",
    changesP1: "Ci riserviamo il diritto di modificare i presenti Termini di Servizio in qualsiasi momento. Le modifiche saranno pubblicate su questa pagina con una data di decorrenza aggiornata. L'uso continuato del Sito dopo le modifiche costituisce accettazione dei termini rivisti.",
    contactTitle: "Contatti",
    contactP1: "Domande su questi termini? Visita la nostra",
    contactLinkText: "pagina di contatto",
  },
  hi: {
    metaTitle: "सेवा की शर्तें | ToolOrbit",
    metaDescription: "ToolOrbit की सेवा की शर्तें पढ़ें। हमारे मुफ्त ऑनलाइन टूल्स के उपयोग को नियंत्रित करने वाली शर्तों को समझें।",
    title: "सेवा की शर्तें",
    lastUpdated: "अंतिम अपडेट: मार्च 2026",
    acceptanceTitle: "शर्तों की स्वीकृति",
    acceptanceP1: "ToolOrbit (\"साइट\") को एक्सेस और उपयोग करके, आप इन सेवा की शर्तों से बाध्य होने के लिए सहमत होते हैं। यदि आप इन शर्तों से सहमत नहीं हैं, तो कृपया साइट का उपयोग न करें।",
    descriptionTitle: "सेवा का विवरण",
    descriptionP1: "ToolOrbit मुफ्त ऑनलाइन यूटिलिटी टूल्स प्रदान करता है जो आपके वेब ब्राउज़र में चलते हैं। इन टूल्स में टेक्स्ट एडिटर, कोड फॉर्मेटर, कैलकुलेटर, कनवर्टर और जनरेटर शामिल हैं। टूल्स बिना किसी वारंटी के \"जैसे हैं\" प्रदान किए जाते हैं।",
    useTitle: "टूल्स का उपयोग",
    useP1: "आप हमारे टूल्स का उपयोग किसी भी वैध उद्देश्य के लिए कर सकते हैं। आप निम्नलिखित न करने के लिए सहमत हैं:",
    useItems: [
      "किसी भी अवैध या अनधिकृत उद्देश्य के लिए टूल्स का उपयोग करना",
      "सेवा को बाधित या ओवरलोड करने का प्रयास करना",
      "बिना अनुमति के साइट के कोड को कॉपी या पुनर्वितरित करना",
      "स्वचालित प्रणालियों का उपयोग करके साइट को इस तरह एक्सेस करना जिससे सामान्य मानव उपयोग से अधिक अनुरोध उत्पन्न हों",
    ],
    warrantyTitle: "कोई वारंटी नहीं",
    warrantyP1: "ToolOrbit पर उपलब्ध टूल्स किसी भी प्रकार की स्पष्ट या निहित वारंटी के बिना \"जैसे हैं\" और \"जैसे उपलब्ध हैं\" के आधार पर प्रदान किए जाते हैं। हम इस बात की गारंटी नहीं देते कि टूल्स त्रुटि-मुक्त, सटीक या हर समय उपलब्ध होंगे।",
    liabilityTitle: "दायित्व की सीमा",
    liabilityP1: "कानून द्वारा अनुमत अधिकतम सीमा तक, ToolOrbit और इसके संचालक हमारे टूल्स के उपयोग या उपयोग करने में असमर्थता से उत्पन्न किसी भी क्षति के लिए उत्तरदायी नहीं होंगे। इसमें प्रत्यक्ष, अप्रत्यक्ष, आकस्मिक, परिणामी या दंडात्मक क्षति शामिल है, लेकिन यह इन्हीं तक सीमित नहीं है।",
    ipTitle: "बौद्धिक संपदा",
    ipP1: "ToolOrbit की सामग्री, डिज़ाइन और कोड कॉपीराइट और अन्य बौद्धिक संपदा कानूनों द्वारा संरक्षित हैं। बिना अनुमति के आप साइट का पुनरुत्पादन, वितरण या व्युत्पन्न कार्य नहीं बना सकते।",
    changesTitle: "शर्तों में परिवर्तन",
    changesP1: "हम किसी भी समय इन सेवा की शर्तों को संशोधित करने का अधिकार सुरक्षित रखते हैं। परिवर्तन इस पृष्ठ पर अपडेट की गई प्रभावी तिथि के साथ प्रकाशित किए जाएंगे। परिवर्तनों के बाद साइट का निरंतर उपयोग संशोधित शर्तों की स्वीकृति माना जाएगा।",
    contactTitle: "संपर्क",
    contactP1: "इन शर्तों के बारे में प्रश्न हैं? हमारे",
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
    `/${locale}/terms/`
  );
}

export default async function TermsPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">
        {t.title}
      </h1>
      <p className="mb-6 text-sm text-gray-500">
        {t.lastUpdated}
      </p>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <h2 className="text-xl font-semibold text-gray-900">
          {t.acceptanceTitle}
        </h2>
        <p>{t.acceptanceP1}</p>

        <h2 className="text-xl font-semibold text-gray-900">
          {t.descriptionTitle}
        </h2>
        <p>{t.descriptionP1}</p>

        <h2 className="text-xl font-semibold text-gray-900">{t.useTitle}</h2>
        <p>{t.useP1}</p>
        <ul className="list-inside list-disc space-y-1">
          {t.useItems.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold text-gray-900">
          {t.warrantyTitle}
        </h2>
        <p>{t.warrantyP1}</p>

        <h2 className="text-xl font-semibold text-gray-900">
          {t.liabilityTitle}
        </h2>
        <p>{t.liabilityP1}</p>

        <h2 className="text-xl font-semibold text-gray-900">
          {t.ipTitle}
        </h2>
        <p>{t.ipP1}</p>

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
