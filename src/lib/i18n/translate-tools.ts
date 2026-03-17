import { Locale } from "./config";
import { Tool, FAQ } from "../data/tools";
import { getToolName } from "./tool-name-translations";

// Translation patterns for tool content per locale
// These use template patterns to generate accurate translations from the English tool data

interface ToolTranslation {
  title: string;
  description: string;
  headline: string;
  intro: string;
  faqs: FAQ[];
  howToUse: string[];
}

// Template-based translations for common tool patterns
const toolPatterns: Record<
  Locale,
  {
    converterTitle: (from: string, to: string) => string;
    converterDesc: (from: string, fromAbbr: string, to: string, toAbbr: string) => string;
    converterHeadline: (from: string, to: string) => string;
    converterIntro: (from: string, to: string) => string;
    freeOnline: string;
    noSignup: string;
    instant: string;
    freeConverter: string;
    freeTool: string;
    howManyIn: (unit1: string, unit2: string, factor: string) => string;
    formulaAnswer: (formula: string) => string;
    accurateAnswer: string;
    step1Enter: string;
    step2See: string;
    step3Copy: string;
  }
> = {
  en: {
    converterTitle: (f, t) => `Convert ${f} to ${t} — Free Converter | ToolOrbit`,
    converterDesc: (f, fa, t, ta) => `Convert ${f} (${fa}) to ${t} (${ta}) instantly. Free online converter with formula and table.`,
    converterHeadline: (f, t) => `Convert ${f} to ${t}`,
    converterIntro: (f, t) => `Enter a value in ${f} to convert to ${t}. See the formula, common values, and copy your result.`,
    freeOnline: "Free Online",
    noSignup: "No signup required.",
    instant: "instantly",
    freeConverter: "Free Converter",
    freeTool: "Free Tool",
    howManyIn: (u1, u2, factor) => `1 ${u1} = ${factor} ${u2}.`,
    formulaAnswer: (formula) => `The formula is: ${formula}`,
    accurateAnswer: "Yes. Standard conversion factors are used for precise results.",
    step1Enter: "Enter a value.",
    step2See: "See the result instantly.",
    step3Copy: "Copy the result or swap direction.",
  },
  es: {
    converterTitle: (f, t) => `Convertir ${f} a ${t} — Conversor Gratis | ToolOrbit`,
    converterDesc: (f, fa, t, ta) => `Convierte ${f} (${fa}) a ${t} (${ta}) al instante. Conversor en línea gratuito con fórmula y tabla.`,
    converterHeadline: (f, t) => `Convertir ${f} a ${t}`,
    converterIntro: (f, t) => `Ingresa un valor en ${f} para convertir a ${t}. Ve la fórmula, valores comunes y copia tu resultado.`,
    freeOnline: "Gratis en Línea",
    noSignup: "Sin registro necesario.",
    instant: "al instante",
    freeConverter: "Conversor Gratis",
    freeTool: "Herramienta Gratis",
    howManyIn: (u1, u2, factor) => `1 ${u1} = ${factor} ${u2}.`,
    formulaAnswer: (formula) => `La fórmula es: ${formula}`,
    accurateAnswer: "Sí. Se utilizan factores de conversión estándar para resultados precisos.",
    step1Enter: "Ingresa un valor.",
    step2See: "Ve el resultado al instante.",
    step3Copy: "Copia el resultado o invierte la dirección.",
  },
  fr: {
    converterTitle: (f, t) => `Convertir ${f} en ${t} — Convertisseur Gratuit | ToolOrbit`,
    converterDesc: (f, fa, t, ta) => `Convertissez ${f} (${fa}) en ${t} (${ta}) instantanément. Convertisseur en ligne gratuit avec formule.`,
    converterHeadline: (f, t) => `Convertir ${f} en ${t}`,
    converterIntro: (f, t) => `Entrez une valeur en ${f} pour convertir en ${t}. Voir la formule, les valeurs courantes et copier le résultat.`,
    freeOnline: "Gratuit en Ligne",
    noSignup: "Aucune inscription requise.",
    instant: "instantanément",
    freeConverter: "Convertisseur Gratuit",
    freeTool: "Outil Gratuit",
    howManyIn: (u1, u2, factor) => `1 ${u1} = ${factor} ${u2}.`,
    formulaAnswer: (formula) => `La formule est : ${formula}`,
    accurateAnswer: "Oui. Des facteurs de conversion standard sont utilisés pour des résultats précis.",
    step1Enter: "Entrez une valeur.",
    step2See: "Voyez le résultat instantanément.",
    step3Copy: "Copiez le résultat ou inversez la direction.",
  },
  de: {
    converterTitle: (f, t) => `${f} in ${t} umrechnen — Kostenloser Rechner | ToolOrbit`,
    converterDesc: (f, fa, t, ta) => `${f} (${fa}) sofort in ${t} (${ta}) umrechnen. Kostenloser Online-Umrechner mit Formel und Tabelle.`,
    converterHeadline: (f, t) => `${f} in ${t} umrechnen`,
    converterIntro: (f, t) => `Geben Sie einen Wert in ${f} ein, um in ${t} umzurechnen. Formel, gängige Werte und Ergebnis kopieren.`,
    freeOnline: "Kostenlos Online",
    noSignup: "Keine Anmeldung erforderlich.",
    instant: "sofort",
    freeConverter: "Kostenloser Umrechner",
    freeTool: "Kostenloses Tool",
    howManyIn: (u1, u2, factor) => `1 ${u1} = ${factor} ${u2}.`,
    formulaAnswer: (formula) => `Die Formel lautet: ${formula}`,
    accurateAnswer: "Ja. Standard-Umrechnungsfaktoren werden für präzise Ergebnisse verwendet.",
    step1Enter: "Geben Sie einen Wert ein.",
    step2See: "Sehen Sie das Ergebnis sofort.",
    step3Copy: "Kopieren Sie das Ergebnis oder tauschen Sie die Richtung.",
  },
  pt: {
    converterTitle: (f, t) => `Converter ${f} para ${t} — Conversor Grátis | ToolOrbit`,
    converterDesc: (f, fa, t, ta) => `Converta ${f} (${fa}) para ${t} (${ta}) instantaneamente. Conversor online grátis com fórmula e tabela.`,
    converterHeadline: (f, t) => `Converter ${f} para ${t}`,
    converterIntro: (f, t) => `Digite um valor em ${f} para converter para ${t}. Veja a fórmula, valores comuns e copie o resultado.`,
    freeOnline: "Grátis Online",
    noSignup: "Sem cadastro necessário.",
    instant: "instantaneamente",
    freeConverter: "Conversor Grátis",
    freeTool: "Ferramenta Grátis",
    howManyIn: (u1, u2, factor) => `1 ${u1} = ${factor} ${u2}.`,
    formulaAnswer: (formula) => `A fórmula é: ${formula}`,
    accurateAnswer: "Sim. Fatores de conversão padrão são usados para resultados precisos.",
    step1Enter: "Digite um valor.",
    step2See: "Veja o resultado instantaneamente.",
    step3Copy: "Copie o resultado ou inverta a direção.",
  },
  ja: {
    converterTitle: (f, t) => `${f}から${t}に変換 — 無料変換ツール | ToolOrbit`,
    converterDesc: (f, fa, t, ta) => `${f}（${fa}）を${t}（${ta}）に即座に変換。数式と表付きの無料オンラインツール。`,
    converterHeadline: (f, t) => `${f}を${t}に変換`,
    converterIntro: (f, t) => `${f}の値を入力して${t}に変換。数式、一般的な値の表示、結果のコピーが可能です。`,
    freeOnline: "無料オンライン",
    noSignup: "登録不要。",
    instant: "即座に",
    freeConverter: "無料変換ツール",
    freeTool: "無料ツール",
    howManyIn: (u1, u2, factor) => `1 ${u1} = ${factor} ${u2}`,
    formulaAnswer: (formula) => `数式: ${formula}`,
    accurateAnswer: "はい。標準的な変換係数を使用して正確な結果を提供します。",
    step1Enter: "値を入力してください。",
    step2See: "結果が即座に表示されます。",
    step3Copy: "結果をコピーするか、方向を入れ替えてください。",
  },
  zh: {
    converterTitle: (f, t) => `${f}转换为${t} — 免费转换器 | ToolOrbit`,
    converterDesc: (f, fa, t, ta) => `即时将${f}（${fa}）转换为${t}（${ta}）。带公式和表格的免费在线转换器。`,
    converterHeadline: (f, t) => `${f}转换为${t}`,
    converterIntro: (f, t) => `输入${f}的值即可转换为${t}。查看公式、常用值并复制结果。`,
    freeOnline: "免费在线",
    noSignup: "无需注册。",
    instant: "即时",
    freeConverter: "免费转换器",
    freeTool: "免费工具",
    howManyIn: (u1, u2, factor) => `1 ${u1} = ${factor} ${u2}`,
    formulaAnswer: (formula) => `公式：${formula}`,
    accurateAnswer: "是的。使用标准转换系数以确保精确结果。",
    step1Enter: "输入一个值。",
    step2See: "立即查看结果。",
    step3Copy: "复制结果或交换方向。",
  },
  ko: {
    converterTitle: (f, t) => `${f}을(를) ${t}(으)로 변환 — 무료 변환기 | ToolOrbit`,
    converterDesc: (f, fa, t, ta) => `${f}(${fa})을(를) ${t}(${ta})(으)로 즉시 변환. 공식과 표가 포함된 무료 온라인 변환기.`,
    converterHeadline: (f, t) => `${f}을(를) ${t}(으)로 변환`,
    converterIntro: (f, t) => `${f} 값을 입력하여 ${t}(으)로 변환하세요. 공식, 일반 값 확인 및 결과 복사가 가능합니다.`,
    freeOnline: "무료 온라인",
    noSignup: "가입 불필요.",
    instant: "즉시",
    freeConverter: "무료 변환기",
    freeTool: "무료 도구",
    howManyIn: (u1, u2, factor) => `1 ${u1} = ${factor} ${u2}`,
    formulaAnswer: (formula) => `공식: ${formula}`,
    accurateAnswer: "예. 정확한 결과를 위해 표준 변환 계수를 사용합니다.",
    step1Enter: "값을 입력하세요.",
    step2See: "결과를 즉시 확인하세요.",
    step3Copy: "결과를 복사하거나 방향을 바꾸세요.",
  },
  it: {
    converterTitle: (f, t) => `Converti ${f} in ${t} — Convertitore Gratuito | ToolOrbit`,
    converterDesc: (f, fa, t, ta) => `Converti ${f} (${fa}) in ${t} (${ta}) istantaneamente. Convertitore online gratuito con formula e tabella.`,
    converterHeadline: (f, t) => `Converti ${f} in ${t}`,
    converterIntro: (f, t) => `Inserisci un valore in ${f} per convertire in ${t}. Vedi la formula, i valori comuni e copia il risultato.`,
    freeOnline: "Gratuito Online",
    noSignup: "Nessuna registrazione richiesta.",
    instant: "istantaneamente",
    freeConverter: "Convertitore Gratuito",
    freeTool: "Strumento Gratuito",
    howManyIn: (u1, u2, factor) => `1 ${u1} = ${factor} ${u2}.`,
    formulaAnswer: (formula) => `La formula è: ${formula}`,
    accurateAnswer: "Sì. Vengono utilizzati fattori di conversione standard per risultati precisi.",
    step1Enter: "Inserisci un valore.",
    step2See: "Vedi il risultato istantaneamente.",
    step3Copy: "Copia il risultato o inverti la direzione.",
  },
  hi: {
    converterTitle: (f, t) => `${f} को ${t} में बदलें — मुफ्त कनवर्टर | ToolOrbit`,
    converterDesc: (f, fa, t, ta) => `${f} (${fa}) को ${t} (${ta}) में तुरंत बदलें। सूत्र और तालिका के साथ मुफ्त ऑनलाइन कनवर्टर।`,
    converterHeadline: (f, t) => `${f} को ${t} में बदलें`,
    converterIntro: (f, t) => `${f} में मान दर्ज करें और ${t} में बदलें। सूत्र, सामान्य मान देखें और परिणाम कॉपी करें।`,
    freeOnline: "मुफ्त ऑनलाइन",
    noSignup: "साइनअप आवश्यक नहीं।",
    instant: "तुरंत",
    freeConverter: "मुफ्त कनवर्टर",
    freeTool: "मुफ्त उपकरण",
    howManyIn: (u1, u2, factor) => `1 ${u1} = ${factor} ${u2}`,
    formulaAnswer: (formula) => `सूत्र: ${formula}`,
    accurateAnswer: "हाँ। सटीक परिणामों के लिए मानक रूपांतरण कारकों का उपयोग किया जाता है।",
    step1Enter: "एक मान दर्ज करें।",
    step2See: "परिणाम तुरंत देखें।",
    step3Copy: "परिणाम कॉपी करें या दिशा बदलें।",
  },
};

/**
 * Translate a tool's SEO content for a given locale.
 * For converter tools, uses locale-specific patterns.
 * For other tools, keeps English content (SEO in English still ranks globally).
 * Tool UI labels are handled separately by the UI dictionary.
 */
export function translateTool(tool: Tool, locale: Locale): ToolTranslation {
  const patterns = toolPatterns[locale];

  // Converter tools: translate using patterns
  if (tool.template === "pair-converter" && tool.templateConfig) {
    const cfg = tool.templateConfig as {
      fromUnit: string;
      toUnit: string;
      fromAbbr: string;
      toAbbr: string;
      factor: number;
      formula: string;
    };
    const factorStr = cfg.factor < 0.001 || cfg.factor > 99999
      ? cfg.factor.toExponential(4)
      : String(parseFloat(cfg.factor.toPrecision(6)));

    return {
      title: patterns.converterTitle(cfg.fromUnit, cfg.toUnit),
      description: patterns.converterDesc(cfg.fromUnit, cfg.fromAbbr, cfg.toUnit, cfg.toAbbr),
      headline: patterns.converterHeadline(cfg.fromUnit, cfg.toUnit),
      intro: patterns.converterIntro(cfg.fromUnit, cfg.toUnit),
      faqs: [
        {
          question: locale === "en"
            ? `How many ${cfg.toUnit.toLowerCase()} in one ${cfg.fromUnit.toLowerCase()}?`
            : patterns.howManyIn(cfg.fromUnit, cfg.toUnit, factorStr),
          answer: patterns.howManyIn(cfg.fromUnit, cfg.toUnit, factorStr),
        },
        {
          question: locale === "en" ? "What is the conversion formula?" : patterns.formulaAnswer(cfg.formula).split(":")[0] + "?",
          answer: patterns.formulaAnswer(cfg.formula),
        },
        {
          question: locale === "en" ? "Is this converter accurate?" : patterns.accurateAnswer.split(".")[0] + "?",
          answer: patterns.accurateAnswer,
        },
      ],
      howToUse: [patterns.step1Enter, patterns.step2See, patterns.step3Copy],
    };
  }

  // For non-converter tools, use translated tool name where available
  const toolName = getToolName(tool.slug, locale) || tool.name;

  return {
    title: `${toolName} — ${patterns.freeTool} | ToolOrbit`,
    description: tool.description,
    headline: `${patterns.freeOnline} ${toolName}`,
    intro: tool.intro,
    faqs: tool.faqs,
    howToUse: tool.howToUse,
  };
}

export type { ToolTranslation };
