export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faq = [
  {
    id: 1,
    question: "Quanto tempo leva para o meu site ficar pronto?",

    answer:
      "O prazo varia de acordo com a complexidade do projeto. Uma Landing Page de alta conversão costuma ser entregue entre 3 a 7 dias úteis. Sites institucionais e sistemas personalizados levam entre 10 a 20 dias úteis.",
  },

  {
    id: 2,
    question: "O site vai funcionar perfeitamente no celular?",

    answer:
      "Sim! Todos os projetos são desenvolvidos utilizando o conceito Mobile-First, garantindo que a navegação em smartphones e tablets seja impecável, rápida e fluida.",
  },

  {
    id: 3,
    question: "O site já vem otimizado para o Google (SEO)?",

    answer:
      "Sim. Aplico as melhores práticas de SEO On-Page, incluindo estrutura técnica de tags HTML, imagens otimizadas e alta velocidade de carregamento para facilitar o ranqueamento no Google.",
  },

  {
    id: 4,
    question: "Como funciona a forma de pagamento?",

    answer:
      "Geralmente trabalhamos com 50% de sinal no início do projeto e os 50% restantes na entrega e aprovação final do site. O pagamento pode ser feito via Pix ou Cartão.",
  },
];
