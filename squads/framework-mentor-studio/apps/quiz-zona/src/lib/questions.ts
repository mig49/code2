export interface Option {
  id: string;
  text: string;
  zone: "incompetencia" | "competencia" | "excelencia" | "genialidade";
  weight: number;
}

export interface Question {
  id: number;
  text: string;
  subtext: string;
  options: Option[];
}

export const questions: Question[] = [
  {
    id: 1,
    text: "Quando alguem elogia seu trabalho, voce sente...",
    subtext: "Pense na sua reacao mais honesta, nao na que voce gostaria de ter.",
    options: [
      {
        id: "1a",
        text: "Orgulho genuino — sei que fiz bem feito e estou no lugar certo",
        zone: "genialidade",
        weight: 3,
      },
      {
        id: "1b",
        text: 'Um vazio — "ok, mas nao era exatamente isso que queria estar fazendo"',
        zone: "excelencia",
        weight: 3,
      },
      {
        id: "1c",
        text: '"Obrigado, mas nao era isso" — funciona, mas parece errado',
        zone: "competencia",
        weight: 2,
      },
      {
        id: "1d",
        text: "Motivacao para fazer mais — e como combustivel puro",
        zone: "genialidade",
        weight: 2,
      },
    ],
  },
  {
    id: 2,
    text: "Numa semana tipica, quanto do seu tempo voce gasta em coisas que ama fazer de verdade?",
    subtext: "Considere todas as atividades profissionais relevantes.",
    options: [
      {
        id: "2a",
        text: "Menos de 10%",
        zone: "competencia",
        weight: 3,
      },
      {
        id: "2b",
        text: "Entre 10% e 30%",
        zone: "excelencia",
        weight: 3,
      },
      {
        id: "2c",
        text: "Entre 30% e 60%",
        zone: "excelencia",
        weight: 2,
      },
      {
        id: "2d",
        text: "Mais de 60%",
        zone: "genialidade",
        weight: 3,
      },
    ],
  },
  {
    id: 3,
    text: "Se dinheiro nao importasse, voce continuaria fazendo o que faz hoje?",
    subtext: "Responda com a primeira reacao, sem pensar demais.",
    options: [
      {
        id: "3a",
        text: "Sim, exatamente como faco",
        zone: "genialidade",
        weight: 3,
      },
      {
        id: "3b",
        text: "Sim, mas de forma bem diferente",
        zone: "excelencia",
        weight: 3,
      },
      {
        id: "3c",
        text: "Nao — faria algo completamente diferente",
        zone: "competencia",
        weight: 3,
      },
      {
        id: "3d",
        text: "Honestamente, nao sei",
        zone: "excelencia",
        weight: 2,
      },
    ],
  },
  {
    id: 4,
    text: "Voce ja tentou ensinar o que sabe para outras pessoas?",
    subtext: "Pode ser formal ou informal — treinar colegas, mentorar, criar conteudo.",
    options: [
      {
        id: "4a",
        text: "Nunca tentei — nao me vejo como alguem que ensina",
        zone: "competencia",
        weight: 3,
      },
      {
        id: "4b",
        text: "Ja tentei, mas foi dificil transmitir o que sei",
        zone: "excelencia",
        weight: 2,
      },
      {
        id: "4c",
        text: "Funciona, mas ainda e improvisado — sem metodo claro",
        zone: "excelencia",
        weight: 3,
      },
      {
        id: "4d",
        text: "Tenho um jeito de ensinar que funciona — ja virou sistema",
        zone: "genialidade",
        weight: 3,
      },
    ],
  },
  {
    id: 5,
    text: "Como voce define o valor do que entrega?",
    subtext: "Pense em como voce precifica ou gostaria de precificar.",
    options: [
      {
        id: "5a",
        text: "Por hora trabalhada",
        zone: "competencia",
        weight: 2,
      },
      {
        id: "5b",
        text: "Por projeto ou escopo definido",
        zone: "excelencia",
        weight: 2,
      },
      {
        id: "5c",
        text: "Pelo resultado ou transformacao que gero no cliente",
        zone: "genialidade",
        weight: 3,
      },
      {
        id: "5d",
        text: "Ainda nao sei como precificar o que faco",
        zone: "competencia",
        weight: 3,
      },
    ],
  },
];
