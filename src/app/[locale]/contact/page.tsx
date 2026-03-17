import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { siteConfig } from "@/lib/data/site";

const translations = {
  en: {
    metaTitle: "Contact Us | ToolOrbit",
    metaDescription: "Get in touch with the ToolOrbit team. Report bugs, request features, or send feedback about our free online tools.",
    title: "Contact Us",
    intro: "We'd love to hear from you. Whether you have a feature request, found a bug, or just want to say hello, here's how to reach us.",
    getInTouch: "Get in Touch",
    featureRequests: "Feature Requests",
    featureRequestsDesc: `Want to see a new tool on ${siteConfig.name}? We're always looking to add useful tools. A contact form is coming soon.`,
    bugReports: "Bug Reports",
    bugReportsDesc: "Found something broken? Please note the tool name, your browser, and what happened. We're working on adding a proper feedback form.",
    generalInquiries: "General Inquiries",
    generalInquiriesDesc: "For business inquiries, partnerships, or other questions, a contact form will be available here shortly.",
    responseTime: "We aim to respond to all inquiries within 48 hours. Please be patient as we are a small team.",
  },
  es: {
    metaTitle: "Contáctanos | ToolOrbit",
    metaDescription: "Ponte en contacto con el equipo de ToolOrbit. Reporta errores, solicita funciones o envía comentarios sobre nuestras herramientas en línea gratuitas.",
    title: "Contáctanos",
    intro: "Nos encantaría saber de ti. Ya sea que tengas una solicitud de función, hayas encontrado un error o simplemente quieras saludar, aquí te explicamos cómo contactarnos.",
    getInTouch: "Ponte en Contacto",
    featureRequests: "Solicitudes de Funciones",
    featureRequestsDesc: `¿Quieres ver una nueva herramienta en ${siteConfig.name}? Siempre estamos buscando agregar herramientas útiles. Pronto estará disponible un formulario de contacto.`,
    bugReports: "Reportes de Errores",
    bugReportsDesc: "¿Encontraste algo que no funciona? Por favor indica el nombre de la herramienta, tu navegador y lo que sucedió. Estamos trabajando en agregar un formulario de comentarios adecuado.",
    generalInquiries: "Consultas Generales",
    generalInquiriesDesc: "Para consultas comerciales, asociaciones u otras preguntas, un formulario de contacto estará disponible aquí en breve.",
    responseTime: "Nuestro objetivo es responder a todas las consultas en un plazo de 48 horas. Ten paciencia, ya que somos un equipo pequeño.",
  },
  fr: {
    metaTitle: "Contactez-nous | ToolOrbit",
    metaDescription: "Contactez l'équipe ToolOrbit. Signalez des bugs, demandez des fonctionnalités ou envoyez vos commentaires sur nos outils en ligne gratuits.",
    title: "Contactez-nous",
    intro: "Nous serions ravis d'avoir de vos nouvelles. Que vous ayez une demande de fonctionnalité, trouvé un bug ou que vous souhaitiez simplement nous dire bonjour, voici comment nous contacter.",
    getInTouch: "Nous Contacter",
    featureRequests: "Demandes de Fonctionnalités",
    featureRequestsDesc: `Vous souhaitez voir un nouvel outil sur ${siteConfig.name} ? Nous cherchons toujours à ajouter des outils utiles. Un formulaire de contact sera bientôt disponible.`,
    bugReports: "Signalements de Bugs",
    bugReportsDesc: "Vous avez trouvé quelque chose de cassé ? Veuillez noter le nom de l'outil, votre navigateur et ce qui s'est passé. Nous travaillons à l'ajout d'un formulaire de retour approprié.",
    generalInquiries: "Demandes Générales",
    generalInquiriesDesc: "Pour les demandes commerciales, les partenariats ou d'autres questions, un formulaire de contact sera disponible ici prochainement.",
    responseTime: "Nous nous efforçons de répondre à toutes les demandes dans un délai de 48 heures. Merci de votre patience, nous sommes une petite équipe.",
  },
  de: {
    metaTitle: "Kontakt | ToolOrbit",
    metaDescription: "Nehmen Sie Kontakt mit dem ToolOrbit-Team auf. Melden Sie Fehler, wünschen Sie neue Funktionen oder senden Sie Feedback zu unseren kostenlosen Online-Tools.",
    title: "Kontakt",
    intro: "Wir freuen uns, von Ihnen zu hören. Ob Sie einen Funktionswunsch haben, einen Fehler gefunden haben oder einfach nur Hallo sagen möchten – so erreichen Sie uns.",
    getInTouch: "Kontakt aufnehmen",
    featureRequests: "Funktionswünsche",
    featureRequestsDesc: `Möchten Sie ein neues Tool auf ${siteConfig.name} sehen? Wir sind stets bemüht, nützliche Tools hinzuzufügen. Ein Kontaktformular wird in Kürze verfügbar sein.`,
    bugReports: "Fehlermeldungen",
    bugReportsDesc: "Haben Sie etwas Fehlerhaftes gefunden? Bitte notieren Sie den Tool-Namen, Ihren Browser und was passiert ist. Wir arbeiten daran, ein geeignetes Feedback-Formular hinzuzufügen.",
    generalInquiries: "Allgemeine Anfragen",
    generalInquiriesDesc: "Für geschäftliche Anfragen, Partnerschaften oder andere Fragen wird hier in Kürze ein Kontaktformular verfügbar sein.",
    responseTime: "Wir bemühen uns, alle Anfragen innerhalb von 48 Stunden zu beantworten. Bitte haben Sie Geduld, da wir ein kleines Team sind.",
  },
  pt: {
    metaTitle: "Fale Conosco | ToolOrbit",
    metaDescription: "Entre em contato com a equipe do ToolOrbit. Reporte bugs, solicite recursos ou envie feedback sobre nossas ferramentas online gratuitas.",
    title: "Fale Conosco",
    intro: "Adoraríamos ouvir você. Seja para solicitar um recurso, reportar um bug ou apenas dizer olá, veja como entrar em contato conosco.",
    getInTouch: "Entre em Contato",
    featureRequests: "Solicitações de Recursos",
    featureRequestsDesc: `Quer ver uma nova ferramenta no ${siteConfig.name}? Estamos sempre buscando adicionar ferramentas úteis. Em breve, um formulário de contato estará disponível.`,
    bugReports: "Relatórios de Bugs",
    bugReportsDesc: "Encontrou algo quebrado? Por favor, informe o nome da ferramenta, seu navegador e o que aconteceu. Estamos trabalhando para adicionar um formulário de feedback adequado.",
    generalInquiries: "Consultas Gerais",
    generalInquiriesDesc: "Para consultas comerciais, parcerias ou outras perguntas, um formulário de contato estará disponível aqui em breve.",
    responseTime: "Nosso objetivo é responder a todas as consultas em até 48 horas. Por favor, tenha paciência, pois somos uma equipe pequena.",
  },
  ja: {
    metaTitle: "お問い合わせ | ToolOrbit",
    metaDescription: "ToolOrbitチームにお問い合わせください。バグの報告、機能のリクエスト、無料オンラインツールへのフィードバックをお待ちしております。",
    title: "お問い合わせ",
    intro: "皆様からのご連絡をお待ちしております。機能のリクエスト、バグの報告、またはちょっとしたご挨拶など、以下の方法でお問い合わせください。",
    getInTouch: "ご連絡方法",
    featureRequests: "機能リクエスト",
    featureRequestsDesc: `${siteConfig.name}に新しいツールを追加してほしいですか？便利なツールの追加を常に検討しています。お問い合わせフォームは近日公開予定です。`,
    bugReports: "バグ報告",
    bugReportsDesc: "不具合を見つけましたか？ツール名、ご使用のブラウザ、発生した問題をお知らせください。適切なフィードバックフォームの追加に取り組んでいます。",
    generalInquiries: "一般的なお問い合わせ",
    generalInquiriesDesc: "ビジネスに関するお問い合わせ、パートナーシップ、その他のご質問については、近日中にお問い合わせフォームをご利用いただけるようになります。",
    responseTime: "すべてのお問い合わせに48時間以内の返信を目指しております。少人数のチームのため、ご了承ください。",
  },
  zh: {
    metaTitle: "联系我们 | ToolOrbit",
    metaDescription: "联系ToolOrbit团队。报告错误、请求功能或发送关于我们免费在线工具的反馈。",
    title: "联系我们",
    intro: "我们很乐意听到您的声音。无论您有功能请求、发现了错误，还是只想打个招呼，以下是联系我们的方式。",
    getInTouch: "与我们联系",
    featureRequests: "功能请求",
    featureRequestsDesc: `想在${siteConfig.name}上看到新工具吗？我们一直在寻找添加实用工具的机会。联系表单即将推出。`,
    bugReports: "错误报告",
    bugReportsDesc: "发现了问题？请注明工具名称、您的浏览器以及发生了什么。我们正在努力添加合适的反馈表单。",
    generalInquiries: "一般咨询",
    generalInquiriesDesc: "如有商务咨询、合作伙伴关系或其他问题，联系表单将很快在此提供。",
    responseTime: "我们的目标是在48小时内回复所有咨询。由于我们是一个小团队，请耐心等待。",
  },
  ko: {
    metaTitle: "문의하기 | ToolOrbit",
    metaDescription: "ToolOrbit 팀에 문의하세요. 버그 신고, 기능 요청 또는 무료 온라인 도구에 대한 피드백을 보내주세요.",
    title: "문의하기",
    intro: "여러분의 의견을 듣고 싶습니다. 기능 요청, 버그 신고 또는 간단한 인사 등 아래 방법으로 연락해 주세요.",
    getInTouch: "연락처",
    featureRequests: "기능 요청",
    featureRequestsDesc: `${siteConfig.name}에서 새로운 도구를 보고 싶으신가요? 항상 유용한 도구를 추가하고자 합니다. 문의 양식이 곧 제공될 예정입니다.`,
    bugReports: "버그 신고",
    bugReportsDesc: "문제를 발견하셨나요? 도구 이름, 사용 중인 브라우저, 발생한 상황을 알려주세요. 적절한 피드백 양식 추가를 준비 중입니다.",
    generalInquiries: "일반 문의",
    generalInquiriesDesc: "비즈니스 문의, 파트너십 또는 기타 질문은 곧 여기에서 문의 양식을 이용하실 수 있습니다.",
    responseTime: "모든 문의에 48시간 이내에 답변하는 것을 목표로 하고 있습니다. 소규모 팀이므로 양해 부탁드립니다.",
  },
  it: {
    metaTitle: "Contattaci | ToolOrbit",
    metaDescription: "Mettiti in contatto con il team di ToolOrbit. Segnala bug, richiedi funzionalità o invia feedback sui nostri strumenti online gratuiti.",
    title: "Contattaci",
    intro: "Ci piacerebbe sentire la tua opinione. Che tu abbia una richiesta di funzionalità, abbia trovato un bug o voglia semplicemente salutarci, ecco come raggiungerci.",
    getInTouch: "Mettiti in Contatto",
    featureRequests: "Richieste di Funzionalità",
    featureRequestsDesc: `Vuoi vedere un nuovo strumento su ${siteConfig.name}? Siamo sempre alla ricerca di strumenti utili da aggiungere. Un modulo di contatto sarà disponibile a breve.`,
    bugReports: "Segnalazioni di Bug",
    bugReportsDesc: "Hai trovato qualcosa che non funziona? Indica il nome dello strumento, il tuo browser e cosa è successo. Stiamo lavorando per aggiungere un modulo di feedback adeguato.",
    generalInquiries: "Richieste Generali",
    generalInquiriesDesc: "Per richieste commerciali, partnership o altre domande, un modulo di contatto sarà disponibile qui a breve.",
    responseTime: "Il nostro obiettivo è rispondere a tutte le richieste entro 48 ore. Ti preghiamo di avere pazienza poiché siamo un piccolo team.",
  },
  hi: {
    metaTitle: "संपर्क करें | ToolOrbit",
    metaDescription: "ToolOrbit टीम से संपर्क करें। बग रिपोर्ट करें, सुविधाओं का अनुरोध करें या हमारे मुफ़्त ऑनलाइन टूल्स के बारे में फ़ीडबैक भेजें।",
    title: "संपर्क करें",
    intro: "हमें आपसे सुनकर खुशी होगी। चाहे आपके पास कोई सुविधा अनुरोध हो, कोई बग मिला हो, या बस नमस्ते कहना हो, यहाँ हमसे संपर्क करने का तरीका बताया गया है।",
    getInTouch: "संपर्क में रहें",
    featureRequests: "सुविधा अनुरोध",
    featureRequestsDesc: `${siteConfig.name} पर एक नया टूल देखना चाहते हैं? हम हमेशा उपयोगी टूल्स जोड़ने की कोशिश करते हैं। संपर्क फ़ॉर्म जल्द ही उपलब्ध होगा।`,
    bugReports: "बग रिपोर्ट",
    bugReportsDesc: "कुछ टूटा हुआ मिला? कृपया टूल का नाम, अपना ब्राउज़र और क्या हुआ यह बताएं। हम एक उचित फ़ीडबैक फ़ॉर्म जोड़ने पर काम कर रहे हैं।",
    generalInquiries: "सामान्य पूछताछ",
    generalInquiriesDesc: "व्यावसायिक पूछताछ, साझेदारी या अन्य प्रश्नों के लिए, यहाँ जल्द ही एक संपर्क फ़ॉर्म उपलब्ध होगा।",
    responseTime: "हमारा लक्ष्य सभी पूछताछ का 48 घंटों के भीतर जवाब देना है। कृपया धैर्य रखें क्योंकि हम एक छोटी टीम हैं।",
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
    `/${locale}/contact/`
  );
}

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = translations[locale as keyof typeof translations] || translations.en;
  return (
    <div className="mx-auto max-w-3xl px-4 py-12">
      <h1 className="mb-6 text-3xl font-bold text-gray-900">{t.title}</h1>

      <div className="space-y-6 text-gray-600 leading-relaxed">
        <p>{t.intro}</p>

        <div className="rounded-xl bg-white p-6 shadow-sm">
          <h2 className="mb-4 text-lg font-semibold text-gray-900">
            {t.getInTouch}
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-medium text-gray-800">{t.featureRequests}</h3>
              <p className="text-gray-600">
                {t.featureRequestsDesc}
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">{t.bugReports}</h3>
              <p className="text-gray-600">
                {t.bugReportsDesc}
              </p>
            </div>
            <div>
              <h3 className="font-medium text-gray-800">{t.generalInquiries}</h3>
              <p className="text-gray-600">
                {t.generalInquiriesDesc}
              </p>
            </div>
          </div>
        </div>

        <p className="text-sm text-gray-500">
          {t.responseTime}
        </p>
      </div>
    </div>
  );
}
