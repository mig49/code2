export type Zone = "competencia" | "excelencia" | "genialidade";

export interface ZoneResult {
  zone: Zone;
  score: number;
  percentage: number;
}

export interface QuizResult {
  primary: Zone;
  scores: Record<Zone, number>;
  percentages: Record<Zone, number>;
}

export function calculateResult(
  answers: string[],
  questionList: { id: number; options: { id: string; zone: string; weight: number }[] }[]
): QuizResult {
  const scores: Record<Zone, number> = {
    competencia: 0,
    excelencia: 0,
    genialidade: 0,
  };

  for (const question of questionList) {
    const selectedId = answers[question.id - 1];
    const option = question.options.find((o) => o.id === selectedId);
    if (option) {
      const zone = option.zone === "incompetencia" ? "competencia" : option.zone;
      scores[zone as Zone] += option.weight;
    }
  }

  const total = scores.competencia + scores.excelencia + scores.genialidade;
  const percentages: Record<Zone, number> = {
    competencia: total > 0 ? Math.round((scores.competencia / total) * 100) : 0,
    excelencia: total > 0 ? Math.round((scores.excelencia / total) * 100) : 0,
    genialidade: total > 0 ? Math.round((scores.genialidade / total) * 100) : 0,
  };

  let primary: Zone = "excelencia";
  if (scores.genialidade >= scores.excelencia && scores.genialidade >= scores.competencia) {
    primary = "genialidade";
  } else if (scores.competencia > scores.excelencia) {
    primary = "competencia";
  }

  return { primary, scores, percentages };
}

export const zoneData: Record<
  Zone,
  {
    title: string;
    emoji: string;
    color: string;
    colorAccent: string;
    headline: string;
    description: string;
    cta: string;
    ctaUrl: string;
    ctaSecondary?: string;
    ctaSecondaryUrl?: string;
  }
> = {
  excelencia: {
    title: "Zona de Excelencia",
    emoji: "🔒",
    color: "#F59E0B",
    colorAccent: "#D97706",
    headline: "Voce esta na prisao dourada.",
    description:
      "Performa bem, e valorizado, ganha bem — e ainda assim algo parece estar fora do lugar. Esse vazio tem nome: e a distancia entre o que voce faz bem e o que voce foi feito para fazer. A boa noticia: existe um caminho de saida. E o Metodo PONTE foi construido exatamente para profissionais como voce.",
    cta: "Agendar conversa diagnostica gratuita",
    ctaUrl: "#agendar",
  },
  genialidade: {
    title: "Zona de Genialidade",
    emoji: "✨",
    color: "#10B981",
    colorAccent: "#059669",
    headline: "Voce ja esta no caminho certo.",
    description:
      "Encontrou o que ama, sabe o que entrega, e tem clareza sobre seu valor. O proximo nivel pode ser escalar esse impacto: transformar seu metodo em algo que alcance mais pessoas, com menos do seu tempo. O Metodo PONTE pode acelerar essa transicao.",
    cta: "Agendar conversa",
    ctaUrl: "#agendar",
    ctaSecondary: "Assinar newsletter",
    ctaSecondaryUrl: "#newsletter",
  },
  competencia: {
    title: "Zona de Competencia",
    emoji: "🌱",
    color: "#6366F1",
    colorAccent: "#4F46E5",
    headline: "Voce esta construindo sua base.",
    description:
      "Esse e o trabalho necessario — sem atalhos. Pode ser cedo para uma mentoria de posicionamento, porque o que voce vai ensinar ainda esta em formacao. A recomendacao honesta: continue acumulando experiencia e expertise. Quando o momento certo chegar, voce vai saber. Por enquanto, a newsletter pode ser o proximo passo — conteudo sobre transicao de carreira e construcao de autoridade, quinzenalmente.",
    cta: "Assinar newsletter gratuita",
    ctaUrl: "#newsletter",
  },
};
