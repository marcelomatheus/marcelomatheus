import { FooterIconId, SkillIconId, TechIconId, type Language, type PortfolioCopy } from "./interfaces/translations";

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
      title: "High-performance solutions focused on quality.",
      subtitle:
        "Full Stack Developer (JS/TS). I build scalable architectures, robust CI/CD pipelines, and secure systems.",
      primaryCta: "View Projects",
      secondaryCta: "Let’s Talk",
      trustedBy: "Trusted by innovative companies and academia",
      stats: [
        { label: "Years coding", value: "1.5+" },
        { label: "Projects delivered", value: "5+" },
        { label: "Community impact", value: "Unicoder" },
      ],
      techOrbit: {
        instruction: "Rotate the orbit to change the focus.",
        items: [
          {
            id: TechIconId.NestJS, 
            name: "NestJS",
            focus: "Backend Framework",
            summary:
              "Efficient, scalable server-side applications with modular architecture.",
            highlights: ["Modules", "Guards", "Dependency Injection"],
          },
          {
            id: TechIconId.Next,
            name: "Next.js",
            focus: "Fullstack React",
            summary:
              "Web apps focused on performance, SSR, and API integration.",
            highlights: ["SSR", "API Routes", "Performance"],
          },
          {
            id: TechIconId.Node,
            name: "Node.js",
            focus: "Runtime",
            summary:
              "Robust server-side logic and event-driven architecture.",
            highlights: ["Events", "Streams", "API"],
          },
          {
            id: TechIconId.Docker,
            name: "Docker",
            focus: "DevOps",
            summary:
              "Containers, GitHub Actions, CI/CD pipelines, deploy, and auto-tests.",
            highlights: ["CI/CD", "Actions", "Testing"],
          },
          {
            id: TechIconId.Aws,
            name: "AWS",
            focus: "Cloud & Scale",
            summary:
              "Cloud infrastructure with ECS for optimized delivery flows.",
            highlights: ["ECS", "Cloud", "Deploy"],
          },
          {
            id: TechIconId.Messaging, 
            name: "Messaging",
            focus: "Async Systems",
            summary:
              "Decoupled architecture using queues for high throughput.",
            highlights: ["BullMQ", "Kafka", "Resilience"],
          },
          {
            id: TechIconId.TypeScript,
            name: "TypeScript",
            focus: "Type Safety",
            summary:
              "Strict typing and contracts for safer, maintainable codebases.",
            highlights: ["Generics", "Interfaces", "Safety"],
          },
          {
            id: TechIconId.Postgres,
            name: "PostgreSQL",
            focus: "Data",
            summary:
              "Relational modeling and optimization for high performance.",
            highlights: ["SQL", "Prisma", "Modeling"],
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
          year: "2025",
          role: "Junior Software Engineer",
          company: "NOCORP LTDA",
          description:
            "System dev and CI/CD pipelines with GitHub Actions/AWS. Optimized sales processing by 4x.",
          badges: ["Nest.js", "CI/CD", "AWS"],
        },
        {
          year: "2024",
          role: "Full Stack Trainee",
          company: "NOCORP LTDA",
          description:
            "Web apps with React/Node.js for global clients, focusing on marketplaces.",
          badges: ["React", "TS", "Marketplace"],
        },
        {
          year: "2023",
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
      title: "Soluções de alto desempenho e qualidade.",
      subtitle:
        "Dev Full Stack (JS/TS). Construo arquiteturas escaláveis, pipelines CI/CD e sistemas seguros.",
      primaryCta: "Ver projetos",
      secondaryCta: "Conversar",
      trustedBy: "Projetos nacionais e internacionais",
      stats: [
        { label: "Anos programando", value: "1.5+" },
        { label: "Projetos entregues", value: "5+" },
        { label: "Impacto comunidade", value: "Unicoder" },
      ],
      techOrbit: {
        instruction: "Gire a órbita para mudar o foco.",
        items: [
          {
            id: TechIconId.NestJS, 
            name: "NestJS",
            focus: "Framework Backend",
            summary:
              "Aplicações server-side eficientes e escaláveis com arquitetura modular.",
            highlights: ["Módulos", "Guards", "Injeção de Dep."],
          },
          {
            id: TechIconId.Next,
            name: "Next.js",
            focus: "Fullstack React",
            summary:
              "Apps web focados em performance, SSR e integração de APIs.",
            highlights: ["SSR", "API Routes", "DX"],
          },
          {
            id: TechIconId.Node,
            name: "Node.js",
            focus: "Runtime",
            summary:
              "Lógica server-side robusta e arquitetura orientada a eventos.",
            highlights: ["Eventos", "Streams", "API"],
          },
          {
            id: TechIconId.Docker,
            name: "Docker",
            focus: "DevOps",
            summary:
              "Containers, GitHub Actions, pipelines de CI/CD, deploy e testes automatizados.",
            highlights: ["CI/CD", "Actions", "Testes"],
          },
          {
            id: TechIconId.Aws,
            name: "AWS",
            focus: "Infra & Escala",
            summary:
              "Infraestrutura cloud com ECS para fluxos de entrega otimizados.",
            highlights: ["ECS", "Cloud", "Deploy"],
          },
          {
            id: TechIconId.Messaging, 
            name: "Mensageria",
            focus: "Sistemas Assíncronos",
            summary:
              "Arquiteturas desacopladas usando filas para alto tráfego.",
            highlights: ["BullMQ", "Kafka", "Resiliência"],
          },
          {
            id: TechIconId.TypeScript,
            name: "TypeScript",
            focus: "Tipagem",
            summary:
              "Código seguro com contratos claros para maior manutenibilidade.",
            highlights: ["Generics", "Interfaces", "DX"],
          },
          {
            id: TechIconId.Postgres,
            name: "PostgreSQL",
            focus: "Dados",
            summary:
              "Modelagem relacional confiável e otimização para performance.",
            highlights: ["SQL", "Prisma", "Modelagem"],
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
          year: "2025",
          role: "Engenheiro de Software Jr",
          company: "NOCORP LTDA",
          description:
            "Sistemas e pipelines CI/CD com GitHub Actions/AWS. Aumentei processamento de vendas em 4x.",
          badges: ["Nest.js", "CI/CD", "AWS"],
        },
        {
          year: "2024",
          role: "Desenvolvedor Trainee",
          company: "NOCORP LTDA",
          description:
            "Apps web React/Node.js para clientes globais, com foco em marketplace.",
          badges: ["React", "TS", "Marketplace"],
        },
        {
          year: "2023",
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