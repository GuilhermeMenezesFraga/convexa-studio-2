import { 
  Rocket, 
  Smartphone, 
  Target, 
  CheckCircle, 
  Zap,
  Code,
  PenTool,
  Layout
} from 'lucide-react';
import { Benefit, Step, FaqItem, PortfolioItem } from './types';

export const WHATSAPP_LINK = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20vim%20pela%20landing%20page%20da%20Convexa%20e%20quero%20escalar%20meus%20resultados.";

export const HERO_CONTENT = {
  headline: "Design que Converte. Estratégia que Vende.",
  subheadline: "Somos o Convexa Studio. Criamos ecossistemas digitais de alta performance para marcas que não aceitam o básico.",
  ctaText: "Iniciar Projeto Exclusivo",
  microCopy: "Consultoria gratuita inicial via WhatsApp.",
  bullets: [
    "Design Autoral & Cinemático",
    "Carregamento Instantâneo",
    "Copywriting Neural",
    "Infraestrutura Pronta para Escala"
  ]
};

// Reimagined as "Services/Deliverables" for Bento Grid
export const SERVICES: Benefit[] = [
  {
    title: "Landing Pages de Alta Conversão",
    description: "Páginas desenhadas pixel a pixel para guiar seu visitante até a compra. Sem templates prontos, apenas estratégia pura.",
    icon: Layout
  },
  {
    title: "Copywriting Persuasivo",
    description: "Não escrevemos apenas textos. Criamos narrativas que quebram objeções e tocam no desejo profundo do seu cliente.",
    icon: PenTool
  },
  {
    title: "Otimização Mobile-First",
    description: "Sua página voando baixo em qualquer dispositivo. Fluidez total para garantir que você não perca nenhum lead.",
    icon: Smartphone
  },
  {
    title: "Tecnologia de Ponta",
    description: "Código limpo e moderno. Garantimos pontuação máxima em performance no Google para reduzir seu custo por clique.",
    icon: Code
  }
];

export const PROCESS_STEPS: Step[] = [
  {
    number: "01",
    title: "Imersão & Diagnóstico",
    description: "Mergulhamos no seu modelo de negócio. Não iniciamos nada sem entender quem é o seu cliente e qual sua meta de faturamento."
  },
  {
    number: "02",
    title: "Arquitetura & Design",
    description: "Nossa equipe desenha a estrutura visual e textual. Você acompanha a criação de uma página única, feita sob medida."
  },
  {
    number: "03",
    title: "Refinamento & Launch",
    description: "Ajustes finais, testes de carga e publicação. Entregamos sua máquina de vendas pronta para receber tráfego massivo."
  }
];

export const PORTFOLIO_ITEMS: PortfolioItem[] = [
  {
    title: "Clínica Royal Face",
    category: "Estética & Saúde",
    imageUrl: "https://picsum.photos/id/106/800/600" 
  },
  {
    title: "Investidor Pro",
    category: "Finanças & High Ticket",
    imageUrl: "https://picsum.photos/id/160/800/600"
  },
  {
    title: "Método Inglês Fluente",
    category: "Lançamento de Infoproduto",
    imageUrl: "https://picsum.photos/id/180/800/600"
  }
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "Por que contratar o Convexa Studio e não um freelancer?",
    answer: "Freelancers vendem horas. Nós vendemos performance. O Convexa Studio entrega uma equipe multidisciplinar (Designer, Copywriter, Dev) pelo preço de uma contratação única."
  },
  {
    question: "Vocês entregam o texto pronto?",
    answer: "Absolutamente. A copy (texto persuasivo) é 80% da venda. Nós estruturamos toda a narrativa baseada no seu público-alvo."
  },
  {
    question: "Qual o prazo de entrega?",
    answer: "Valorizamos a agilidade sem perder a excelência. Projetos padrão são entregues entre 5 a 7 dias úteis após a imersão."
  },
  {
    question: "Eu terei acesso para editar depois?",
    answer: "Sim. Entregamos a página sua. Você terá total autonomia, mas nossa estrutura é tão sólida que você raramente precisará mexer."
  }
];

export const COMPARISON_DATA = [
  {
    feature: "Design",
    others: "Templates genéricos e repetitivos",
    us: "Design autoral, cinemático e único"
  },
  {
    feature: "Texto (Copy)",
    others: "Você precisa escrever tudo",
    us: "Nós criamos a estratégia persuasiva"
  },
  {
    feature: "Performance",
    others: "Lento, pesado e com bugs",
    us: "Otimização extrema (Core Web Vitals)"
  },
  {
    feature: "Foco",
    others: "Entregar o serviço",
    us: "Aumentar o seu faturamento"
  }
];