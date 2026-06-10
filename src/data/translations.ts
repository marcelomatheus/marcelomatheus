import { FooterIconId, SkillIconId, type Language, type PortfolioCopy } from "./interfaces/translations";

export * from "./interfaces/translations";

export const translations: Record<Language, PortfolioCopy> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      skills: "Problems I Solve",
      projects: "Projects",
      contact: "Contact",
    },
    hero: {
      eyebrow: "Junior Software Engineer",
      title: "Software systems with sharp execution and durable design.",
      subtitle:
        "Full Stack Developer building reliable products with React, Python, TypeScript, and infrastructure-minded engineering.",
      primaryCta: "View Projects",
      secondaryCta: "Let’s Talk",
      trustedBy: "Building fintech, platform, and product experiences end to end.",
      stats: [
        { label: "Years coding", value: "2+" },
        { label: "Projects delivered", value: "8+" },
        { label: "Community impact", value: "Unicoder" },
      ],
      carousel: {
        instruction: "Drag or use the arrows to explore the stack.",
        slides: [
          {
            title: "React + Next.js",
            label: "Frontend Systems",
            summary:
              "Interfaces with strong motion, responsive composition, and clean product structure for fast navigation.",
            highlights: ["Design Systems", "SSR", "Interactive UI"],
            theme: "ember",
          },
          {
            title: "Python",
            label: "Business Logic",
            summary:
              "Reliable backend flows and maintainable services focused on business rules, integrations, and secure delivery.",
            highlights: ["APIs", "Automation", "Maintainability"],
            theme: "graphite",
          },
          {
            title: "MongoDB",
            label: "Data Layer",
            summary:
              "Flexible schemas and optimized persistence strategies for product evolution without losing operational clarity.",
            highlights: ["Modeling", "Performance", "Scalability"],
            theme: "ash",
          },
          {
            title: "TypeScript",
            label: "Engineering Quality",
            summary:
              "Typed contracts and predictable codebases that reduce regressions and keep teams shipping with confidence.",
            highlights: ["Contracts", "Refactoring", "Safety"],
            theme: "cinder",
          },
        ],
      },
    },
    about: {
      title: "About",
      subtitle:
        "Junior Software Engineer passionate about DevOps, SOLID, and Agile.",
      timeline: [
        {
          period: "May 2026 - Present",
          role: "Software Developer",
          company: "Blips Ativos",
          location: "Uberlandia, Minas Gerais, Brazil · Remote",
          description:
            "I work on the development and continuous evolution of the Blips Ativos platform, a credit fintech that finances and rents equipment for small and micro-entrepreneurs. My work includes end-to-end improvement, development, and maintenance using React, Python, and MongoDB, ensuring a scalable, secure platform with excellent usability for users.",
          badges: ["React.js", "Python", "MongoDB"],
        },
        {
          period: "2025",
          role: "Junior Software Engineer",
          company: "NOCORP LTDA",
          description:
            "System dev and CI/CD pipelines with GitHub Actions/AWS. Optimized sales processing by 4x.",
          badges: ["Nest.js", "CI/CD", "AWS"],
        },
        {
          period: "2024",
          role: "Full Stack Trainee",
          company: "NOCORP LTDA",
          description:
            "Web apps with React/Node.js for global clients, focusing on marketplaces.",
          badges: ["React", "TS", "Marketplace"],
        },
        {
          period: "2023",
          role: "B.S. Information Systems",
          company: "Unimontes",
          description:
            "ICPC competitor and founder of the Unicoder event.",
          badges: ["Algorithms", "Leadership", "Events"],
        },
      ],
      caption:
        "Delivering value through efficient code and continuous improvement.",
    },
    skills: {
      title: "Problems I Solve",
      subtitle:
        "Engineering and product mindset for secure, scalable software.",
      cards: [
        {
          title: "Backend & Architecture",
          description:
            "RESTful APIs, database modeling, and scalable services with NestJS/Node.js.",
          icon: SkillIconId.Server,
        },
        {
          title: "AI Solutions",
          description:
            "Integration of AI models for intelligent functionalities and automation. MCP consumption and creation of powerful agents.",
          icon: SkillIconId.Sparkles,
        },
        {
          title: "DevOps & Reliability",
          description:
            "CI/CD pipelines, Docker, and AWS cloud deployment for reliable delivery.",
          icon: SkillIconId.Activity,
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "Selected technical solutions and commercial apps.",
      modal: {
        what: "Overview",
        problem: "Problem",
        stack: "Stack",
        metrics: "Impact",
        repoCta: "Code",
        liveCta: "View",
      },
      cards: [
        {
          slug: "falacomigo",
          title: "FalaComigo: AI Chat",
          excerpt:
            "Real-time language learning platform with Groq AI translation.",
          cover: "/falacomigo.png",
          problem:
            "Learners face anxiety and barriers practicing with native speakers.",
          overview:
            "NestJS/Next.js chat using BullMQ queues to handle AI inference asynchronously without blocking.",
          impact: [
            "Inference <200ms.",
            "Scalable queues.",
            "Seamless chat.",
          ],
          tech: ["NestJS", "BullMQ", "Groq AI", "Socket.io", "MongoDB"],
          github: {
            stars: "N/A",
            forks: "N/A",
            language: "TypeScript",
          },
          links: {
            live: "https://github.com/marcelomatheus/falacomigo-chat-server",
            repo: "https://github.com/marcelomatheus/falacomigo-chat-server",
          },
        },
        {
          slug: "dezapeguei",
          title: "Dezapeguei Marketplace",
          excerpt:
            "P2P marketplace app inspired by OLX (Flutter/NestJS).",
          cover: "/dezapeguei.png",
          problem:
            "Users needed a secure, mobile-first trading environment.",
          overview:
            "Complete marketplace with Supabase auth and modular Flutter architecture. Includes real-time chat.",
          impact: [
            "Native performance.",
            "Secure Auth.",
            "Instant negotiation.",
          ],
          tech: ["Flutter", "NestJS", "Supabase", "WebSockets"],
          github: {
            stars: "N/A",
            forks: "N/A",
            language: "Dart/TS",
          },
          links: {
            live: "https://github.com/marcelomatheus/dezapeguei-server",
            repo: "https://github.com/marcelomatheus/dezapeguei-server",
          },
        },
        {
          slug: "crm-system",
          title: "SME CRM System",
          excerpt:
            "Clean-architecture CRM for micro-businesses.",
          cover: "/crm.png",
          problem:
            "Inefficiency and context loss due to spreadsheet management.",
          overview:
            "Node.js backend with Zod validation, Prisma ORM, and Swagger documentation.",
          impact: [
            "No manual errors.",
            "Centralized data.",
            "Automated tracking.",
          ],
          tech: ["Node.js", "Zod", "Prisma", "Clean Arch"],
          github: {
            stars: "N/A",
            forks: "N/A",
            language: "TypeScript",
          },
          links: {
            live: "https://github.com/marcelomatheus/crm-micro-business-server",
            repo: "https://github.com/marcelomatheus/crm-micro-business-server",
          },
        },
      ],
    },
    common: {
      close: "Close",
      comingSoon: "Soon",
    },
    footer: {
      role: "Junior Software Engineer",
      description:
        "High-performance solutions with quality and security.",
      location: "Montes Claros, MG",
      phoneLabel: "00",
      phoneHref: "00",
      navTitle: "Navigation",
      navLinks: [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projects", href: "#projects" },
        { label: "Contact", href: "#contact" },
      ],
      resourcesTitle: "Resources",
      resourceLinks: [
        { label: "Medium", href: "https://medium.com/@marcelomatheusbr", icon: FooterIconId.External },
       ],
      socialTitle: "Connect",
      socialLinks: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/marcelooliveiradev/", icon: FooterIconId.Linkedin },
        { label: "GitHub", href: "https://github.com/marcelomatheus", icon: FooterIconId.Github },
        { label: "E-mail", href: "mailto:contact@marcelomatheus.tech", icon: FooterIconId.Mail },
      ],
      note: "Marcelo Matheus Silva de Oliveira. All rights reserved.",
    },
  },
  pt: {
    nav: {
      home: "Início",
      about: "Sobre",
      skills: "O que resolvo",
      projects: "Projetos",
      contact: "Contato",
    },
    hero: {
      eyebrow: "Engenheiro de Software Jr",
      title: "Sistemas de software com execução precisa e design durável.",
      subtitle:
        "Desenvolvedor Full Stack criando produtos confiáveis com React, Python, TypeScript e engenharia orientada à escalabilidade.",
      primaryCta: "Ver projetos",
      secondaryCta: "Conversar",
      trustedBy: "Construindo experiências de produto, plataforma e fintech de ponta a ponta.",
      stats: [
        { label: "Anos programando", value: "2+" },
        { label: "Projetos entregues", value: "8+" },
        { label: "Impacto comunidade", value: "Unicoder" },
      ],
      carousel: {
        instruction: "Arraste ou use as setas para explorar a stack.",
        slides: [
          {
            title: "React + Next.js",
            label: "Sistemas Frontend",
            summary:
              "Interfaces com motion forte, composição responsiva e estrutura de produto limpa para navegação rápida.",
            highlights: ["Design Systems", "SSR", "UI Interativa"],
            theme: "ember",
          },
          {
            title: "Python",
            label: "Lógica de Negócio",
            summary:
              "Fluxos backend confiáveis e serviços manuteníveis focados em regras de negócio, integrações e entrega segura.",
            highlights: ["APIs", "Automação", "Manutenibilidade"],
            theme: "graphite",
          },
          {
            title: "MongoDB",
            label: "Camada de Dados",
            summary:
              "Schemas flexíveis e estratégias de persistência otimizadas para evolução de produto sem perder clareza operacional.",
            highlights: ["Modelagem", "Performance", "Escala"],
            theme: "ash",
          },
          {
            title: "TypeScript",
            label: "Qualidade de Engenharia",
            summary:
              "Contratos tipados e codebases previsíveis que reduzem regressões e mantêm o time entregando com segurança.",
            highlights: ["Contratos", "Refatoração", "Segurança"],
            theme: "cinder",
          },
        ],
      },
    },
    about: {
      title: "Sobre",
      subtitle:
        "Engenheiro de Software Jr focado em DevOps, SOLID e Agile.",
      timeline: [
        {
          period: "mai de 2026 - o momento",
          role: "Desenvolvedor de Software",
          company: "Blips Ativos",
          location: "Uberlândia, Minas Gerais, Brasil · Remoto",
          description:
            "Atuo na evolução contínua da plataforma Blips Ativos, fintech de crédito que financia e aluga equipamentos para pequenos e microempreendedores.",
          badges: ["React.js", "Python", "MongoDB"],
        },
        {
          period: "2025",
          role: "Engenheiro de Software Jr",
          company: "NOCORP LTDA",
          description:
            "Sistemas e pipelines CI/CD com GitHub Actions/AWS. Aumentei processamento de vendas em 4x.",
          badges: ["Nest.js", "CI/CD", "AWS"],
        },
        {
          period: "2024",
          role: "Desenvolvedor Trainee",
          company: "NOCORP LTDA",
          description:
            "Apps web React/Node.js para clientes globais, com foco em marketplace.",
          badges: ["React", "TS", "Marketplace"],
        },
        {
          period: "2023",
          role: "Bacharelando em Sistemas",
          company: "Unimontes",
          description:
            "Maratona ICPC e fundador do evento Unicoder.",
          badges: ["Algoritmos", "Liderança", "Eventos"],
        },
      ],
      caption:
        "Entregando valor real com código eficiente e melhoria contínua.",
    },
    skills: {
      title: "Problemas que Resolvo",
      subtitle:
        "Engenharia e visão de produto para software seguro e escalável.",
      cards: [
        {
          title: "Back-end & Arquitetura",
          description:
            "APIs RESTful, modelagem de dados e serviços escaláveis com NestJS/Node.js.",
          icon: SkillIconId.Server,
        },
        {
          title: "Soluções de IA",
          description:
            "Integração de modelos de IA para funcionalidades inteligentes e automação. Consumo de MCP e criação de agentes poderosos.",
          icon: SkillIconId.Sparkles,
        },
        {
          title: "DevOps & Confiabilidade",
          description:
            "Pipelines CI/CD, Docker e deploy AWS para entregas seguras.",
          icon: SkillIconId.Activity,
        },
      ],
    },
    projects: {
      title: "Projetos",
      subtitle: "Soluções técnicas complexas e aplicações comerciais.",
      modal: {
        what: "Visão Geral",
        problem: "Problema",
        stack: "Stack",
        metrics: "Impacto",
        repoCta: "Código",
        liveCta: "Ver",
      },
      cards: [
        {
          slug: "falacomigo",
          title: "FalaComigo: Chat IA",
          excerpt:
            "Plataforma de idiomas com chat real-time e tradução via Groq IA.",
          cover: "/falacomigo.png",
          problem:
            "Barreiras e ansiedade ao praticar idiomas com nativos.",
          overview:
            "Chat NestJS/Next.js com filas BullMQ para inferência IA assíncrona sem travar o servidor.",
          impact: [
            "Inferência <200ms.",
            "Filas resilientes.",
            "Chat fluído.",
          ],
          tech: ["NestJS", "BullMQ", "Groq AI", "Socket.io", "MongoDB"],
          github: {
            stars: "N/A",
            forks: "N/A",
            language: "TypeScript",
          },
          links: {
            live: "https://github.com/marcelomatheus/falacomigo-chat-server",
            repo: "https://github.com/marcelomatheus/falacomigo-chat-server",
          },
        },
        {
          slug: "dezapeguei",
          title: "Dezapeguei Marketplace",
          excerpt:
            "Marketplace P2P estilo OLX (Flutter/NestJS).",
          cover: "/dezapeguei.png",
          problem:
            "Necessidade de ambiente seguro e mobile para negociações.",
          overview:
            "Marketplace completo com Auth Supabase e Flutter modular. Inclui chat real-time.",
          impact: [
            "Performance nativa.",
            "Auth Segura.",
            "Negociação rápida.",
          ],
          tech: ["Flutter", "NestJS", "Supabase", "WebSockets"],
          github: {
            stars: "N/A",
            forks: "N/A",
            language: "Dart/TS",
          },
          links: {
            live: "https://github.com/marcelomatheus/dezapeguei-server",
            repo: "https://github.com/marcelomatheus/dezapeguei-server",
          },
        },
        {
          slug: "crm-system",
          title: "CRM Pequenos Negócios",
          excerpt:
            "CRM Clean Architecture para microempresas.",
          cover: "/crm.png",
          problem:
            "Perda de eficiência ao usar planilhas descentralizadas.",
          overview:
            "Backend Node.js com validação Zod, Prisma ORM e documentação Swagger.",
          impact: [
            "Zero erros manuais.",
            "Dados centralizados.",
            "Rastreamento auto.",
          ],
          tech: ["Node.js", "Zod", "Prisma", "Clean Arch"],
          github: {
            stars: "N/A",
            forks: "N/A",
            language: "TypeScript",
          },
          links: {
            live: "https://github.com/marcelomatheus/crm-micro-business-server",
            repo: "https://github.com/marcelomatheus/crm-micro-business-server",
          },
        },
      ],
    },
    common: {
      close: "Fechar",
      comingSoon: "Em breve",
    },
    footer: {
      role: "Engenheiro de Software Jr",
      description:
        "Soluções de alto desempenho com qualidade e segurança.",
      location: "Montes Claros, MG",
      phoneLabel: "00",
      phoneHref: "00",
      navTitle: "Navegação",
      navLinks: [
        { label: "Sobre", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Projetos", href: "#projects" },
        { label: "Contato", href: "#contact" },
      ],
      resourcesTitle: "Recursos",
      resourceLinks: [
        { label: "Medium", href: "https://medium.com/@marcelomatheusbr", icon: FooterIconId.External },
        ],
      socialTitle: "Conecte-se",
      socialLinks: [
        { label: "LinkedIn", href: "https://www.linkedin.com/in/marcelooliveiradev/", icon: FooterIconId.Linkedin },
        { label: "GitHub", href: "https://github.com/marcelomatheus", icon: FooterIconId.Github },
        { label: "E-mail", href: "mailto:contact@marcelomatheus.tech", icon: FooterIconId.Mail },
      ],
      note: "Marcelo Matheus Silva de Oliveira. Todos os direitos reservados.",
    },
  },
};
