import { Metadata } from "next";
import { generatePageMetadata } from "@/lib/seo/metadata";
import { getDict, Locale } from "@/lib/i18n";
import SearchPageClient from "./SearchPageClient";

const translations = {
  en: {
    metaTitle: "Search Tools | ToolOrbit",
    metaDescription:
      "Search across all free online tools on ToolOrbit. Find text tools, developer tools, calculators, converters, and more.",
    subtitle:
      "Find the perfect tool for your task. Search across all tools and categories.",
  },
  es: {
    metaTitle: "Buscar herramientas | ToolOrbit",
    metaDescription:
      "Busca entre todas las herramientas en línea gratuitas de ToolOrbit. Encuentra herramientas de texto, herramientas para desarrolladores, calculadoras, conversores y más.",
    subtitle:
      "Encuentra la herramienta perfecta para tu tarea. Busca entre todas las herramientas y categorías.",
  },
  fr: {
    metaTitle: "Rechercher des outils | ToolOrbit",
    metaDescription:
      "Recherchez parmi tous les outils en ligne gratuits sur ToolOrbit. Trouvez des outils de texte, des outils pour développeurs, des calculatrices, des convertisseurs et plus encore.",
    subtitle:
      "Trouvez l\u2019outil parfait pour votre tâche. Recherchez parmi tous les outils et catégories.",
  },
  de: {
    metaTitle: "Werkzeuge suchen | ToolOrbit",
    metaDescription:
      "Durchsuchen Sie alle kostenlosen Online-Tools auf ToolOrbit. Finden Sie Textwerkzeuge, Entwicklertools, Rechner, Konverter und mehr.",
    subtitle:
      "Finden Sie das perfekte Werkzeug für Ihre Aufgabe. Durchsuchen Sie alle Werkzeuge und Kategorien.",
  },
  pt: {
    metaTitle: "Pesquisar ferramentas | ToolOrbit",
    metaDescription:
      "Pesquise entre todas as ferramentas online gratuitas no ToolOrbit. Encontre ferramentas de texto, ferramentas para desenvolvedores, calculadoras, conversores e muito mais.",
    subtitle:
      "Encontre a ferramenta perfeita para a sua tarefa. Pesquise entre todas as ferramentas e categorias.",
  },
  ja: {
    metaTitle: "ツールを検索 | ToolOrbit",
    metaDescription:
      "ToolOrbitのすべての無料オンラインツールを検索できます。テキストツール、開発者ツール、計算機、変換ツールなどが見つかります。",
    subtitle:
      "あなたのタスクに最適なツールを見つけましょう。すべてのツールとカテゴリを検索できます。",
  },
  zh: {
    metaTitle: "搜索工具 | ToolOrbit",
    metaDescription:
      "在ToolOrbit上搜索所有免费在线工具。查找文本工具、开发者工具、计算器、转换器等。",
    subtitle:
      "找到适合您任务的完美工具。搜索所有工具和分类。",
  },
  ko: {
    metaTitle: "도구 검색 | ToolOrbit",
    metaDescription:
      "ToolOrbit에서 모든 무료 온라인 도구를 검색하세요. 텍스트 도구, 개발자 도구, 계산기, 변환기 등을 찾아보세요.",
    subtitle:
      "작업에 완벽한 도구를 찾아보세요. 모든 도구와 카테고리를 검색할 수 있습니다.",
  },
  it: {
    metaTitle: "Cerca strumenti | ToolOrbit",
    metaDescription:
      "Cerca tra tutti gli strumenti online gratuiti su ToolOrbit. Trova strumenti di testo, strumenti per sviluppatori, calcolatrici, convertitori e altro ancora.",
    subtitle:
      "Trova lo strumento perfetto per il tuo compito. Cerca tra tutti gli strumenti e le categorie.",
  },
  hi: {
    metaTitle: "उपकरण खोजें | ToolOrbit",
    metaDescription:
      "ToolOrbit पर सभी मुफ़्त ऑनलाइन उपकरणों में खोजें। टेक्स्ट टूल, डेवलपर टूल, कैलकुलेटर, कन्वर्टर और बहुत कुछ खोजें।",
    subtitle:
      "अपने कार्य के लिए सही उपकरण खोजें। सभी उपकरणों और श्रेणियों में खोजें।",
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
  return generatePageMetadata(t.metaTitle, t.metaDescription, `/${locale}/search/`, locale);
}

export default async function SearchPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const dict = await getDict(locale as Locale);
  const t =
    translations[locale as keyof typeof translations] || translations.en;
  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="mb-2 text-2xl font-extrabold tracking-tight text-surface-900 sm:text-3xl">
        {dict.searchTitle}
      </h1>
      <p className="mb-8 text-base leading-relaxed text-surface-500">
        {t.subtitle}
      </p>
      <SearchPageClient locale={locale} labels={{ placeholder: dict.searchPlaceholder, browseAll: dict.browseTools, tool: dict.tool, category: dict.category, results: dict.searchResults, noResults: dict.searchNoResults, tryKeywords: dict.searchTryKeywords }} />
    </div>
  );
}
