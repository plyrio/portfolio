export interface Project {
  id: number;
  category: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  githubText?: string;
  demoLink: string;
  demoText?: string;
  textAction: string;
  color: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    category: "Full Stack",

    title: "Sistema de Clínica Odontológica",
    subtitle: "SaaS & Agendamento de Consultas",

    description:
      "Aplicação web completa desenvolvida com Next.js, NestJS e Prisma ORM. Permite gestão modular de pacientes, agendamentos e serviços, com documentação Swagger, validações Zod e interface responsiva otimizada com Tailwind CSS.",

    image: "/projects/clinic.png",

    technologies: [
      "Next.js",
      "NestJS",
      "Prisma",
      "PostgreSQL",
      "Tailwind CSS"
    ],

    githubLink: "...",
    githubText: "Ver Repositório",
    demoLink: "...",
    demoText: "Ver Demonstração",
    textAction: "Solicitar Sistema Similar",
    color: true
  },

  {
    id: 2,
    category: "Frontend",

    title: "Sistema Médico",
    subtitle: "Conversão de Clientes & Atendimento WhatsApp",

    description:
      "Landing page moderna focada em conversão direta de consultas. Layout otimizado para celulares, velocidade de carregamento superior, animações suaves e direcionamento inteligente para o WhatsApp oficial.",

    image: "/projects/landing.png",

    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion"
    ],

    githubLink: "...",
    githubText: "Ver Repositório",
    demoLink: "...",
    demoText: "Ver Demonstração",
    textAction: "Quero uma Landing Page",
    color: false
  }
];