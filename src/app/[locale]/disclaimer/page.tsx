import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/data/site";

const translations = {
  en: {
    metaTitle: "Disclaimer | ToolOrbit",
    metaDescription: "Read the ToolOrbit disclaimer. Understand the limitations of our free online tools and the accuracy of results.",
    title: "Disclaimer",
    lastUpdated: "Last updated: March 2026",
    generalTitle: "General Disclaimer",
    generalP1: `The tools and information provided on ${siteConfig.name} are for general informational and utility purposes only. While we strive to provide accurate and useful tools, we make no representations or warranties about the completeness, reliability, or accuracy of the results.`,
    adviceTitle: "Not Professional Advice",
    adviceP1: "The tools on this site do not constitute professional advice of any kind. Specifically:",
    adviceItems: [
      { label: "Health tools", desc: "(like the BMI Calculator) are for informational purposes only and should not replace professional medical advice." },
      { label: "Financial tools", desc: "(like loan and interest calculators) provide estimates only and should not be the sole basis for financial decisions." },
      { label: "Developer tools", desc: "are utilities for convenience. Always validate critical outputs independently." },
      { label: "Security tools", desc: "(like the password generator) use cryptographically secure methods, but we cannot guarantee the security of generated passwords in all contexts." },
    ],
    accuracyTitle: "Accuracy of Results",
    accuracyP1: "We make every effort to ensure our tools produce accurate results. However, due to the nature of browser-based computation, floating point arithmetic, and varying browser implementations, results may have minor precision differences. For critical applications, always verify results independently.",
    linksTitle: "External Links",
    linksP1: "Our site may contain links to external websites. We are not responsible for the content, privacy practices, or accuracy of external sites.",
    contactTitle: "Contact",
    contactP1: "If you have concerns about the accuracy of any tool, please contact us via our",
    contactLinkText: "contact page",
  },
  es: {
    metaTitle: "Aviso legal | ToolOrbit",
    metaDescription: "Lea el aviso legal de ToolOrbit. Conozca las limitaciones de nuestras herramientas en línea gratuitas y la precisión de los resultados.",
    title: "Aviso legal",
    lastUpdated: "Última actualización: marzo de 2026",
    generalTitle: "Aviso general",
    generalP1: "Las herramientas y la información proporcionadas en ToolOrbit son solo para fines informativos y de utilidad general. Si bien nos esforzamos por ofrecer herramientas precisas y útiles, no hacemos declaraciones ni garantías sobre la integridad, fiabilidad o exactitud de los resultados.",
    adviceTitle: "No constituye asesoramiento profesional",
    adviceP1: "Las herramientas de este sitio no constituyen asesoramiento profesional de ningún tipo. En concreto:",
    adviceItems: [
      { label: "Herramientas de salud", desc: "(como la calculadora de IMC) son solo con fines informativos y no deben reemplazar el consejo médico profesional." },
      { label: "Herramientas financieras", desc: "(como las calculadoras de préstamos e intereses) proporcionan solo estimaciones y no deben ser la única base para tomar decisiones financieras." },
      { label: "Herramientas para desarrolladores", desc: "son utilidades de conveniencia. Valide siempre los resultados críticos de forma independiente." },
      { label: "Herramientas de seguridad", desc: "(como el generador de contraseñas) utilizan métodos criptográficamente seguros, pero no podemos garantizar la seguridad de las contraseñas generadas en todos los contextos." },
    ],
    accuracyTitle: "Precisión de los resultados",
    accuracyP1: "Hacemos todo lo posible para que nuestras herramientas produzcan resultados precisos. Sin embargo, debido a la naturaleza del cálculo en el navegador, la aritmética de punto flotante y las diferentes implementaciones de los navegadores, los resultados pueden presentar pequeñas diferencias de precisión. Para aplicaciones críticas, verifique siempre los resultados de forma independiente.",
    linksTitle: "Enlaces externos",
    linksP1: "Nuestro sitio puede contener enlaces a sitios web externos. No somos responsables del contenido, las prácticas de privacidad ni la exactitud de los sitios externos.",
    contactTitle: "Contacto",
    contactP1: "Si tiene dudas sobre la precisión de alguna herramienta, contáctenos a través de nuestra",
    contactLinkText: "página de contacto",
  },
  fr: {
    metaTitle: "Avertissement | ToolOrbit",
    metaDescription: "Lisez l'avertissement de ToolOrbit. Comprenez les limites de nos outils en ligne gratuits et la précision des résultats.",
    title: "Avertissement",
    lastUpdated: "Dernière mise à jour : mars 2026",
    generalTitle: "Avertissement général",
    generalP1: "Les outils et informations fournis sur ToolOrbit sont destinés uniquement à des fins d'information générale et d'utilité. Bien que nous nous efforcions de fournir des outils précis et utiles, nous ne faisons aucune déclaration ni garantie quant à l'exhaustivité, la fiabilité ou l'exactitude des résultats.",
    adviceTitle: "Pas un avis professionnel",
    adviceP1: "Les outils de ce site ne constituent pas un avis professionnel de quelque nature que ce soit. Plus précisément :",
    adviceItems: [
      { label: "Outils de santé", desc: "(comme le calculateur d'IMC) sont fournis à titre informatif uniquement et ne doivent pas remplacer un avis médical professionnel." },
      { label: "Outils financiers", desc: "(comme les calculateurs de prêts et d'intérêts) fournissent uniquement des estimations et ne doivent pas constituer la seule base de décisions financières." },
      { label: "Outils pour développeurs", desc: "sont des utilitaires fournis par commodité. Validez toujours les résultats critiques de manière indépendante." },
      { label: "Outils de sécurité", desc: "(comme le générateur de mots de passe) utilisent des méthodes cryptographiquement sûres, mais nous ne pouvons pas garantir la sécurité des mots de passe générés dans tous les contextes." },
    ],
    accuracyTitle: "Exactitude des résultats",
    accuracyP1: "Nous mettons tout en œuvre pour que nos outils produisent des résultats précis. Cependant, en raison de la nature du calcul dans le navigateur, de l'arithmétique en virgule flottante et des différentes implémentations des navigateurs, les résultats peuvent présenter de légères différences de précision. Pour les applications critiques, vérifiez toujours les résultats de manière indépendante.",
    linksTitle: "Liens externes",
    linksP1: "Notre site peut contenir des liens vers des sites web externes. Nous ne sommes pas responsables du contenu, des pratiques de confidentialité ou de l'exactitude des sites externes.",
    contactTitle: "Contact",
    contactP1: "Si vous avez des préoccupations concernant la précision d'un outil, veuillez nous contacter via notre",
    contactLinkText: "page de contact",
  },
  de: {
    metaTitle: "Haftungsausschluss | ToolOrbit",
    metaDescription: "Lesen Sie den Haftungsausschluss von ToolOrbit. Erfahren Sie mehr über die Einschränkungen unserer kostenlosen Online-Tools und die Genauigkeit der Ergebnisse.",
    title: "Haftungsausschluss",
    lastUpdated: "Letzte Aktualisierung: März 2026",
    generalTitle: "Allgemeiner Haftungsausschluss",
    generalP1: "Die auf ToolOrbit bereitgestellten Tools und Informationen dienen ausschließlich allgemeinen Informations- und Nutzungszwecken. Obwohl wir uns bemühen, genaue und nützliche Tools bereitzustellen, geben wir keine Zusicherungen oder Garantien hinsichtlich der Vollständigkeit, Zuverlässigkeit oder Genauigkeit der Ergebnisse.",
    adviceTitle: "Keine professionelle Beratung",
    adviceP1: "Die Tools auf dieser Website stellen keine professionelle Beratung jeglicher Art dar. Im Einzelnen:",
    adviceItems: [
      { label: "Gesundheits-Tools", desc: "(wie der BMI-Rechner) dienen nur zu Informationszwecken und sollten keine professionelle medizinische Beratung ersetzen." },
      { label: "Finanz-Tools", desc: "(wie Kredit- und Zinsrechner) liefern nur Schätzungen und sollten nicht die alleinige Grundlage für finanzielle Entscheidungen sein." },
      { label: "Entwickler-Tools", desc: "sind Hilfsprogramme für den praktischen Gebrauch. Überprüfen Sie kritische Ergebnisse immer unabhängig." },
      { label: "Sicherheits-Tools", desc: "(wie der Passwort-Generator) verwenden kryptografisch sichere Methoden, wir können jedoch die Sicherheit generierter Passwörter nicht in allen Kontexten garantieren." },
    ],
    accuracyTitle: "Genauigkeit der Ergebnisse",
    accuracyP1: "Wir unternehmen alle Anstrengungen, damit unsere Tools genaue Ergebnisse liefern. Aufgrund der Natur browserbasierter Berechnungen, Gleitkommaarithmetik und unterschiedlicher Browser-Implementierungen können die Ergebnisse jedoch geringfügige Präzisionsunterschiede aufweisen. Für kritische Anwendungen überprüfen Sie die Ergebnisse immer unabhängig.",
    linksTitle: "Externe Links",
    linksP1: "Unsere Website kann Links zu externen Websites enthalten. Wir sind nicht verantwortlich für den Inhalt, die Datenschutzpraktiken oder die Genauigkeit externer Websites.",
    contactTitle: "Kontakt",
    contactP1: "Wenn Sie Bedenken hinsichtlich der Genauigkeit eines Tools haben, kontaktieren Sie uns bitte über unsere",
    contactLinkText: "Kontaktseite",
  },
  pt: {
    metaTitle: "Aviso legal | ToolOrbit",
    metaDescription: "Leia o aviso legal do ToolOrbit. Entenda as limitações de nossas ferramentas online gratuitas e a precisão dos resultados.",
    title: "Aviso legal",
    lastUpdated: "Última atualização: março de 2026",
    generalTitle: "Aviso geral",
    generalP1: "As ferramentas e informações fornecidas no ToolOrbit são apenas para fins informativos e utilitários gerais. Embora nos esforcemos para fornecer ferramentas precisas e úteis, não fazemos representações ou garantias sobre a integridade, confiabilidade ou precisão dos resultados.",
    adviceTitle: "Não constitui aconselhamento profissional",
    adviceP1: "As ferramentas deste site não constituem aconselhamento profissional de nenhum tipo. Especificamente:",
    adviceItems: [
      { label: "Ferramentas de saúde", desc: "(como a calculadora de IMC) são apenas para fins informativos e não devem substituir o aconselhamento médico profissional." },
      { label: "Ferramentas financeiras", desc: "(como calculadoras de empréstimos e juros) fornecem apenas estimativas e não devem ser a única base para decisões financeiras." },
      { label: "Ferramentas para desenvolvedores", desc: "são utilitários para conveniência. Sempre valide resultados críticos de forma independente." },
      { label: "Ferramentas de segurança", desc: "(como o gerador de senhas) utilizam métodos criptograficamente seguros, mas não podemos garantir a segurança das senhas geradas em todos os contextos." },
    ],
    accuracyTitle: "Precisão dos resultados",
    accuracyP1: "Fazemos todos os esforços para garantir que nossas ferramentas produzam resultados precisos. No entanto, devido à natureza da computação baseada em navegador, aritmética de ponto flutuante e diferentes implementações de navegadores, os resultados podem apresentar pequenas diferenças de precisão. Para aplicações críticas, sempre verifique os resultados de forma independente.",
    linksTitle: "Links externos",
    linksP1: "Nosso site pode conter links para sites externos. Não somos responsáveis pelo conteúdo, práticas de privacidade ou precisão de sites externos.",
    contactTitle: "Contato",
    contactP1: "Se você tiver dúvidas sobre a precisão de alguma ferramenta, entre em contato conosco através da nossa",
    contactLinkText: "página de contato",
  },
  ja: {
    metaTitle: "免責事項 | ToolOrbit",
    metaDescription: "ToolOrbitの免責事項をお読みください。無料オンラインツールの制限事項と結果の精度についてご確認ください。",
    title: "免責事項",
    lastUpdated: "最終更新日：2026年3月",
    generalTitle: "一般的な免責事項",
    generalP1: "ToolOrbitで提供されるツールおよび情報は、一般的な情報提供およびユーティリティ目的のみを目的としています。正確で有用なツールの提供に努めておりますが、結果の完全性、信頼性、または正確性について、いかなる表明または保証も行いません。",
    adviceTitle: "専門的なアドバイスではありません",
    adviceP1: "本サイトのツールは、いかなる種類の専門的なアドバイスも構成するものではありません。具体的には：",
    adviceItems: [
      { label: "健康ツール", desc: "（BMI計算機など）は情報提供のみを目的としており、専門的な医療アドバイスに代わるものではありません。" },
      { label: "金融ツール", desc: "（ローンや金利の計算機など）は推定値のみを提供しており、財務上の意思決定の唯一の根拠とすべきではありません。" },
      { label: "開発者ツール", desc: "は利便性のためのユーティリティです。重要な出力は必ず独自に検証してください。" },
      { label: "セキュリティツール", desc: "（パスワード生成ツールなど）は暗号学的に安全な方法を使用していますが、すべての状況において生成されたパスワードの安全性を保証することはできません。" },
    ],
    accuracyTitle: "結果の精度",
    accuracyP1: "当社のツールが正確な結果を生成するよう最善を尽くしています。ただし、ブラウザベースの計算、浮動小数点演算、およびブラウザの実装の違いにより、結果にわずかな精度の差異が生じる場合があります。重要なアプリケーションについては、常に結果を独自に検証してください。",
    linksTitle: "外部リンク",
    linksP1: "当サイトには外部ウェブサイトへのリンクが含まれている場合があります。外部サイトのコンテンツ、プライバシー慣行、または正確性について、当社は責任を負いません。",
    contactTitle: "お問い合わせ",
    contactP1: "ツールの精度についてご懸念がある場合は、",
    contactLinkText: "お問い合わせページ",
  },
  zh: {
    metaTitle: "免责声明 | ToolOrbit",
    metaDescription: "阅读ToolOrbit的免责声明。了解我们免费在线工具的局限性和结果的准确性。",
    title: "免责声明",
    lastUpdated: "最后更新：2026年3月",
    generalTitle: "一般免责声明",
    generalP1: "ToolOrbit上提供的工具和信息仅用于一般信息和实用目的。虽然我们努力提供准确和有用的工具，但我们不对结果的完整性、可靠性或准确性做出任何声明或保证。",
    adviceTitle: "非专业建议",
    adviceP1: "本网站上的工具不构成任何形式的专业建议。具体而言：",
    adviceItems: [
      { label: "健康工具", desc: "（如BMI计算器）仅供参考，不应替代专业医疗建议。" },
      { label: "金融工具", desc: "（如贷款和利息计算器）仅提供估算值，不应作为财务决策的唯一依据。" },
      { label: "开发者工具", desc: "是为方便使用而提供的实用程序。请始终独立验证关键输出。" },
      { label: "安全工具", desc: "（如密码生成器）使用加密安全的方法，但我们无法保证生成的密码在所有情况下的安全性。" },
    ],
    accuracyTitle: "结果准确性",
    accuracyP1: "我们尽一切努力确保我们的工具产生准确的结果。但是，由于基于浏览器的计算、浮点运算以及不同浏览器实现的性质，结果可能存在轻微的精度差异。对于关键应用，请始终独立验证结果。",
    linksTitle: "外部链接",
    linksP1: "我们的网站可能包含指向外部网站的链接。我们对外部网站的内容、隐私做法或准确性不承担任何责任。",
    contactTitle: "联系我们",
    contactP1: "如果您对任何工具的准确性有疑虑，请通过我们的",
    contactLinkText: "联系页面",
  },
  ko: {
    metaTitle: "면책 조항 | ToolOrbit",
    metaDescription: "ToolOrbit의 면책 조항을 읽어보세요. 무료 온라인 도구의 제한 사항과 결과의 정확성에 대해 알아보세요.",
    title: "면책 조항",
    lastUpdated: "최종 업데이트: 2026년 3월",
    generalTitle: "일반 면책 조항",
    generalP1: "ToolOrbit에서 제공하는 도구와 정보는 일반적인 정보 제공 및 유틸리티 목적으로만 사용됩니다. 정확하고 유용한 도구를 제공하기 위해 노력하고 있지만, 결과의 완전성, 신뢰성 또는 정확성에 대해 어떠한 진술이나 보증도 하지 않습니다.",
    adviceTitle: "전문적인 조언이 아닙니다",
    adviceP1: "이 사이트의 도구는 어떠한 종류의 전문적인 조언도 구성하지 않습니다. 구체적으로:",
    adviceItems: [
      { label: "건강 도구", desc: "(BMI 계산기 등)는 정보 제공 목적으로만 사용되며 전문적인 의료 조언을 대체해서는 안 됩니다." },
      { label: "금융 도구", desc: "(대출 및 이자 계산기 등)는 추정치만 제공하며 재정적 결정의 유일한 근거가 되어서는 안 됩니다." },
      { label: "개발자 도구", desc: "는 편의를 위한 유틸리티입니다. 중요한 출력은 항상 독립적으로 검증하세요." },
      { label: "보안 도구", desc: "(비밀번호 생성기 등)는 암호학적으로 안전한 방법을 사용하지만, 모든 상황에서 생성된 비밀번호의 보안을 보장할 수는 없습니다." },
    ],
    accuracyTitle: "결과의 정확성",
    accuracyP1: "우리는 도구가 정확한 결과를 생성하도록 최선을 다하고 있습니다. 그러나 브라우저 기반 계산, 부동 소수점 연산 및 다양한 브라우저 구현의 특성으로 인해 결과에 미세한 정밀도 차이가 있을 수 있습니다. 중요한 애플리케이션의 경우 항상 결과를 독립적으로 검증하세요.",
    linksTitle: "외부 링크",
    linksP1: "당사 사이트에는 외부 웹사이트로의 링크가 포함될 수 있습니다. 외부 사이트의 콘텐츠, 개인정보 보호 관행 또는 정확성에 대해 당사는 책임지지 않습니다.",
    contactTitle: "문의",
    contactP1: "도구의 정확성에 대해 우려 사항이 있으시면",
    contactLinkText: "문의 페이지",
  },
  it: {
    metaTitle: "Disclaimer | ToolOrbit",
    metaDescription: "Leggi il disclaimer di ToolOrbit. Comprendi le limitazioni dei nostri strumenti online gratuiti e l'accuratezza dei risultati.",
    title: "Disclaimer",
    lastUpdated: "Ultimo aggiornamento: marzo 2026",
    generalTitle: "Disclaimer generale",
    generalP1: "Gli strumenti e le informazioni forniti su ToolOrbit sono esclusivamente a scopo informativo e di utilità generale. Sebbene ci impegniamo a fornire strumenti accurati e utili, non rilasciamo dichiarazioni o garanzie sulla completezza, affidabilità o accuratezza dei risultati.",
    adviceTitle: "Non costituisce consulenza professionale",
    adviceP1: "Gli strumenti presenti su questo sito non costituiscono consulenza professionale di alcun tipo. Nello specifico:",
    adviceItems: [
      { label: "Strumenti per la salute", desc: "(come il calcolatore di BMI) sono solo a scopo informativo e non devono sostituire la consulenza medica professionale." },
      { label: "Strumenti finanziari", desc: "(come i calcolatori di prestiti e interessi) forniscono solo stime e non devono essere l'unica base per decisioni finanziarie." },
      { label: "Strumenti per sviluppatori", desc: "sono utilità fornite per comodità. Verificate sempre i risultati critici in modo indipendente." },
      { label: "Strumenti di sicurezza", desc: "(come il generatore di password) utilizzano metodi crittograficamente sicuri, ma non possiamo garantire la sicurezza delle password generate in tutti i contesti." },
    ],
    accuracyTitle: "Accuratezza dei risultati",
    accuracyP1: "Facciamo ogni sforzo per garantire che i nostri strumenti producano risultati accurati. Tuttavia, a causa della natura del calcolo basato su browser, dell'aritmetica in virgola mobile e delle diverse implementazioni dei browser, i risultati possono presentare lievi differenze di precisione. Per applicazioni critiche, verificate sempre i risultati in modo indipendente.",
    linksTitle: "Link esterni",
    linksP1: "Il nostro sito può contenere link a siti web esterni. Non siamo responsabili del contenuto, delle pratiche sulla privacy o dell'accuratezza dei siti esterni.",
    contactTitle: "Contatti",
    contactP1: "Se avete dubbi sull'accuratezza di uno strumento, contattateci tramite la nostra",
    contactLinkText: "pagina di contatto",
  },
  hi: {
    metaTitle: "अस्वीकरण | ToolOrbit",
    metaDescription: "ToolOrbit का अस्वीकरण पढ़ें। हमारे मुफ्त ऑनलाइन टूल्स की सीमाओं और परिणामों की सटीकता को समझें।",
    title: "अस्वीकरण",
    lastUpdated: "अंतिम अपडेट: मार्च 2026",
    generalTitle: "सामान्य अस्वीकरण",
    generalP1: "ToolOrbit पर उपलब्ध टूल्स और जानकारी केवल सामान्य सूचनात्मक और उपयोगिता उद्देश्यों के लिए हैं। हालांकि हम सटीक और उपयोगी टूल्स प्रदान करने का प्रयास करते हैं, हम परिणामों की पूर्णता, विश्वसनीयता या सटीकता के बारे में कोई प्रतिनिधित्व या वारंटी नहीं देते हैं।",
    adviceTitle: "पेशेवर सलाह नहीं",
    adviceP1: "इस साइट के टूल्स किसी भी प्रकार की पेशेवर सलाह नहीं हैं। विशेष रूप से:",
    adviceItems: [
      { label: "स्वास्थ्य टूल्स", desc: "(जैसे BMI कैलकुलेटर) केवल सूचनात्मक उद्देश्यों के लिए हैं और पेशेवर चिकित्सा सलाह का विकल्प नहीं हैं।" },
      { label: "वित्तीय टूल्स", desc: "(जैसे ऋण और ब्याज कैलकुलेटर) केवल अनुमान प्रदान करते हैं और वित्तीय निर्णयों का एकमात्र आधार नहीं होने चाहिए।" },
      { label: "डेवलपर टूल्स", desc: "सुविधा के लिए उपयोगिताएं हैं। महत्वपूर्ण आउटपुट को हमेशा स्वतंत्र रूप से सत्यापित करें।" },
      { label: "सुरक्षा टूल्स", desc: "(जैसे पासवर्ड जनरेटर) क्रिप्टोग्राफ़िक रूप से सुरक्षित विधियों का उपयोग करते हैं, लेकिन हम सभी संदर्भों में उत्पन्न पासवर्ड की सुरक्षा की गारंटी नहीं दे सकते।" },
    ],
    accuracyTitle: "परिणामों की सटीकता",
    accuracyP1: "हम यह सुनिश्चित करने के लिए हर संभव प्रयास करते हैं कि हमारे टूल्स सटीक परिणाम दें। हालांकि, ब्राउज़र-आधारित गणना, फ़्लोटिंग पॉइंट अंकगणित और विभिन्न ब्राउज़र कार्यान्वयन की प्रकृति के कारण, परिणामों में मामूली सटीकता अंतर हो सकता है। महत्वपूर्ण अनुप्रयोगों के लिए, हमेशा परिणामों को स्वतंत्र रूप से सत्यापित करें।",
    linksTitle: "बाहरी लिंक",
    linksP1: "हमारी साइट में बाहरी वेबसाइटों के लिंक हो सकते हैं। हम बाहरी साइटों की सामग्री, गोपनीयता प्रथाओं या सटीकता के लिए जिम्मेदार नहीं हैं।",
    contactTitle: "संपर्क",
    contactP1: "यदि आपको किसी टूल की सटीकता के बारे में चिंता है, तो कृपया हमारे",
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
    `/${locale}/disclaimer/`
  );
}

export default async function DisclaimerPage({
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
        <h2 className="text-xl font-semibold text-gray-900">
          {t.generalTitle}
        </h2>
        <p>{t.generalP1}</p>

        <h2 className="text-xl font-semibold text-gray-900">
          {t.adviceTitle}
        </h2>
        <p>{t.adviceP1}</p>
        <ul className="list-inside list-disc space-y-1">
          {t.adviceItems.map((item, i) => (
            <li key={i}>
              <strong>{item.label}</strong> {item.desc}
            </li>
          ))}
        </ul>

        <h2 className="text-xl font-semibold text-gray-900">
          {t.accuracyTitle}
        </h2>
        <p>{t.accuracyP1}</p>

        <h2 className="text-xl font-semibold text-gray-900">
          {t.linksTitle}
        </h2>
        <p>{t.linksP1}</p>

        <h2 className="text-xl font-semibold text-gray-900">{t.contactTitle}</h2>
        <p>
          {t.contactP1}{" "}
          <a href={`/${locale}/contact/`} className="text-primary-600 hover:underline">{t.contactLinkText}</a>.
        </p>
      </div>
    </div>
  );
}
