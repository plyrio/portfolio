import { Layout, Globe, Code2, Search, type LucideIcon, Zap, Sparkles } from "lucide-react";

export interface Service {
  id: number;
  color: string;
  bgColor: string;
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: 1,
    color: "text-cyan-400",
    bgColor: "bg-cyan-500/10 border border-cyan-500/30",
    icon: Layout,
    title: "Landing Pages de Alta Conversão",
    description:
      "Páginas estratégicas projetadas para transformar visitantes em clientes. Design persuasivo, botão direto para o WhatsApp e carregamento instantâneo.",
    features: [
      "Foco total em captura de leads",
      "Integração com WhatsApp & Formulários",
    ],
  },
  {
    id: 2,
    color: "text-emerald-400",
    bgColor: "bg-emerald-500/10 border border-emerald-500/30",
    icon: Globe,
    title: "Sites Institucionais",
    description:
      "Apresente sua empresa com elegância e credibilidade no mundo digital. Estrutura completa com páginas de serviços, sobre, blog e contato.",
    features: [
      "Design exclusivo e profissional",
      "Adaptável a qualquer tamanho de tela",
    ],
  },
  {
    id: 3,
    color: "text-violet-400",
    bgColor: "bg-violet-500/10 border border-violet-500/30",
    icon: Code2,
    title: "Sistemas Web Sob Medida",
    description:
      "Aplicações web completas com Next.js e Node.js para automatizar seu negócio: dashboards, painéis administrativos e portais de agendamento.",
    features: [
      "Arquitetura escalável & banco de dados",
      "Integração com APIs externas",
    ],
  },
  {
    id: 4,
    color: "text-amber-400",
    bgColor: "bg-amber-500/10 border border-amber-500/30 ",
    icon: Search,
    title: "Otimização SEO para o Google",
    description:
      "Otimização técnica para fazer seu site aparecer nas pesquisas do Google, garantindo tráfego orgânico e novos clientes continuamente.",
    features: [
      "Otimização de palavras-chave & meta tags",
      "Indexação no Google Search Console",
    ],
  },
  {
    id: 5,
    color: "text-pink-400",
    bgColor: "bg-pink-500/10 border border-pink-500/30",
    icon: Zap,
    title: "Redesign & Alta Performance",
    description:
      "Seu site atual está lento ou desatualizado? Reformulo completamente o visual e a velocidade do site para padrões modernos.",
    features: [
      "Melhoria radical nas notas do Google PageSpeed",
      "Visual moderno e atrativo",
    ],
  },
  {
    id: 6,
    color: "text-slate-900 font-bold",
    bgColor: "bg-gradient-to-r from-cyan-400 to-emerald-400",
    icon: Sparkles,
    title: "Precisa de algo sob medida?",
    description:
      "Vamos conversar sobre as necessidades específicas do seu projeto e criar a solução ideal.",
    features: [],
  },
];
