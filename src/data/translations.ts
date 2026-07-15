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
            title: "React",
            label: "Frontend Systems",
            icon: "react",
            summary:
              "Expressive interfaces with reusable component systems, motion, and clean product architecture.",
            highlights: ["Design Systems", "Interactive UI", "Reusable Components"],
            theme: "ember",
          },
          {
            title: "Next.js",
            label: "Product Delivery",
            icon: "next",
            summary:
              "Fast app delivery with server rendering, routing, and production-ready architecture for web products.",
            highlights: ["SSR", "Routing", "Performance"],
            theme: "graphite",
          },
          {
            title: "Node.js",
            label: "Backend Runtime",
            icon: "node",
            summary:
              "Reliable services, APIs, and async flows designed to keep business operations responsive and scalable.",
            highlights: ["APIs", "Async Flows", "Scalability"],
            theme: "ash",
          },
          {
            title: "TypeScript",
            label: "Engineering Quality",
            icon: "typescript",
            summary:
              "Typed contracts and predictable codebases that reduce regressions and keep teams shipping with confidence.",
            highlights: ["Contracts", "Refactoring", "Safety"],
            theme: "cinder",
          },
          {
            title: "Docker",
            label: "Operational Consistency",
            icon: "docker",
            summary:
              "Containerized environments that keep delivery stable from local development to CI/CD and deployment.",
            highlights: ["Containers", "CI/CD", "Deployment"],
            theme: "ember",
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
        {
          slug: "sylo-sso",
          title: "Sylo SSO",
          excerpt:
            "Authentication and single sign-on foundation for modern multi-app ecosystems.",
          cover: "/projects/pulse.svg",
          problem:
            "Products that grow across multiple apps need a central identity layer to avoid duplicated login flows and scattered access rules.",
          overview:
            "SSO-oriented service designed around identity, authentication boundaries, and reusable access flows for product platforms.",
          impact: [
            "Centralized identity.",
            "Reusable auth flows.",
            "Platform-ready access.",
          ],
          tech: ["SSO", "Auth", "TypeScript", "Security"],
          github: {
            stars: "N/A",
            forks: "N/A",
            language: "TypeScript",
          },
          links: {
            live: "https://github.com/marcelomatheus/sylo-sso",
            repo: "https://github.com/marcelomatheus/sylo-sso",
          },
        },
      ],
    },
    clientProjects: {
      title: "Direct client builds.",
      subtitle:
        "Private products delivered directly for independent clients, focused on business operations, revenue control, and internal workflows.",
      cards: [
        {
          slug: "core-crm",
          title: "Core CRM",
          business:
            "CRM for the events market, built to centralize client relationships, scheduling, sales, payment records, and private media.",
          pain:
            "Event teams were losing context across spreadsheets, messaging apps, payment notes, and scattered photo delivery flows.",
          solution:
            "A private operational hub with agenda, client records, payment tracking, origins, sales management, Maps integration, and private S3 photo uploads.",
          features: ["Agenda", "Payments", "Maps", "S3 private upload"],
          gallery: ["/projects/pulse.svg", "/projects/orion.svg", "/projects/lumen.svg"],
        },
        {
          slug: "pepons",
          title: "Pepons",
          business:
            "Course platform focused on preparing candidates for applications to specific companies.",
          pain:
            "Candidates needed directed preparation instead of generic study paths that do not match the target company process.",
          solution:
            "A learning experience organized around company-specific preparation, course access, content progression, and candidate readiness.",
          features: ["Courses", "Candidate prep", "Progress", "Target companies"],
          gallery: ["/projects/orion.svg", "/projects/lumen.svg", "/projects/pulse.svg"],
        },
        {
          slug: "sp-energia-solar",
          title: "SP Energia Solar",
          business:
            "Platform for solar energy consumption monitoring and payment management.",
          pain:
            "Energy customers needed a clearer way to follow consumption and payment status without relying on manual updates.",
          solution:
            "A control panel for consumption visibility, client payment management, and operational follow-up for the solar energy business.",
          features: ["Consumption", "Payments", "Customers", "Operations"],
          gallery: ["/projects/lumen.svg", "/projects/pulse.svg", "/projects/orion.svg"],
        },
      ],
    },
    videoShowcase: {
      title: "Engineering on video.",
      subtitle:
        "A featured YouTube session with practical thinking, architecture decisions, and software delivery lessons.",
      cta: "Watch on YouTube",
      url: "https://www.youtube.com/watch?v=dqV7sI7saoM&t=206s",
    },
    articles: {
      title: "Technical writing for builders.",
      subtitle:
        "Deep dives on AI, Docker, CORS, developer positioning, and the decisions that keep software useful.",
      cards: [
        {
          title: "AI will destroy your software if you do not learn Spec-Driven Development",
          description:
            "A practical look at specifications as the control layer for building with AI.",
          category: "AI & Process",
          url: "https://medium.com/@marcelomatheusbr/a-ia-vai-destruir-o-seu-software-se-voc%C3%AA-n%C3%A3o-aprender-spec-driven-development-decfb573dd5f",
        },
        {
          title: "Docker: the manual you should have read on day one",
          description:
            "A direct guide to the Docker concepts that make containers finally click.",
          category: "DevOps",
          url: "https://medium.com/@marcelomatheusbr/docker-o-manual-que-voc%C3%AA-deveria-ter-lido-no-primeiro-dia-de-aprendizado-5ae9d29abc2e",
        },
        {
          title: "The 4 developer profiles you need to become irreplaceable",
          description:
            "A career map for combining execution, communication, ownership, and product sense.",
          category: "Career",
          url: "https://medium.com/@marcelomatheusbr/os-4-perfis-de-dev-que-voc%C3%AA-precisa-ser-para-se-tornar-insubstitu%C3%ADvel-e40860f4a422",
        },
        {
          title: "Do you really know what CORS is?",
          description:
            "A detailed theoretical analysis of browser boundaries, headers, and security tradeoffs.",
          category: "Web Security",
          url: "https://medium.com/@marcelomatheusbr/voc%C3%AA-realmente-sabe-o-que-%C3%A9-cors-uma-an%C3%A1lise-te%C3%B3rica-detalhada-fecfa78df5aa",
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
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "About", href: "#about" },
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
        "Desenvolvedor Full Stack criando produtos financeiros confiáveis com React, Python, TypeScript e engenharia orientada à escalabilidade.",
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
            title: "React",
            label: "Sistemas Frontend",
            icon: "react",
            summary:
              "Interfaces expressivas com sistemas de componentes reutilizáveis, motion e arquitetura de produto limpa.",
            highlights: ["Design Systems", "UI Interativa", "Componentes Reutilizáveis"],
            theme: "ember",
          },
          {
            title: "Next.js",
            label: "Entrega de Produto",
            icon: "next",
            summary:
              "Entrega rápida de aplicações com renderização server-side, roteamento e arquitetura pronta para produção.",
            highlights: ["SSR", "Routing", "Performance"],
            theme: "graphite",
          },
          {
            title: "Node.js",
            label: "Runtime Backend",
            icon: "node",
            summary:
              "Serviços, APIs e fluxos assíncronos confiáveis para manter operações de negócio responsivas e escaláveis.",
            highlights: ["APIs", "Fluxos Assíncronos", "Escala"],
            theme: "ash",
          },
          {
            title: "TypeScript",
            label: "Qualidade de Engenharia",
            icon: "typescript",
            summary:
              "Contratos tipados e codebases previsíveis que reduzem regressões e mantêm o time entregando com segurança.",
            highlights: ["Contratos", "Refatoração", "Segurança"],
            theme: "cinder",
          },
          {
            title: "Docker",
            label: "Consistência Operacional",
            icon: "docker",
            summary:
              "Ambientes containerizados que mantêm a entrega estável do desenvolvimento local ao CI/CD e deploy.",
            highlights: ["Containers", "CI/CD", "Deploy"],
            theme: "ember",
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
        {
          slug: "sylo-sso",
          title: "Sylo SSO",
          excerpt:
            "Base de autenticação e single sign-on para ecossistemas modernos com múltiplas aplicações.",
          cover: "/projects/pulse.svg",
          problem:
            "Produtos que crescem em múltiplos apps precisam de uma camada central de identidade para evitar fluxos de login duplicados e regras de acesso espalhadas.",
          overview:
            "Serviço orientado a SSO, projetado em torno de identidade, fronteiras de autenticação e fluxos reutilizáveis de acesso para plataformas de produto.",
          impact: [
            "Identidade centralizada.",
            "Fluxos auth reutilizáveis.",
            "Acesso pronto para plataforma.",
          ],
          tech: ["SSO", "Auth", "TypeScript", "Security"],
          github: {
            stars: "N/A",
            forks: "N/A",
            language: "TypeScript",
          },
          links: {
            live: "https://github.com/marcelomatheus/sylo-sso",
            repo: "https://github.com/marcelomatheus/sylo-sso",
          },
        },
      ],
    },
    clientProjects: {
      title: "Projetos diretos para clientes.",
      subtitle:
        "Produtos privados entregues diretamente para clientes independentes, com foco em operação, controle de receita e fluxos internos.",
      cards: [
        {
          slug: "core-crm",
          title: "Core CRM",
          business:
            "CRM para o setor de eventos, criado para centralizar clientes, agenda, vendas, registros de pagamento e entrega privada de mídia.",
          pain:
            "Equipes de eventos perdiam contexto entre planilhas, mensagens, anotações de pagamento e fluxos espalhados de entrega de fotos.",
          solution:
            "Um hub operacional privado com agenda, clientes, pagamentos, origens, vendas, integração com Maps e upload privado de fotos para S3.",
          features: ["Agenda", "Pagamentos", "Maps", "Upload privado S3"],
          gallery: ["/projects/pulse.svg", "/projects/orion.svg", "/projects/lumen.svg"],
        },
        {
          slug: "pepons",
          title: "Pepons",
          business:
            "Plataforma de cursos voltada para preparar candidatos para candidaturas em empresas específicas.",
          pain:
            "Candidatos precisavam de uma preparação direcionada, não de trilhas genéricas que ignoram o processo da empresa alvo.",
          solution:
            "Uma experiência de aprendizado organizada por preparação específica para empresas, acesso a cursos, progressão de conteúdo e prontidão do candidato.",
          features: ["Cursos", "Preparação", "Progresso", "Empresas alvo"],
          gallery: ["/projects/orion.svg", "/projects/lumen.svg", "/projects/pulse.svg"],
        },
        {
          slug: "sp-energia-solar",
          title: "SP Energia Solar",
          business:
            "Plataforma para controle de consumo de energia solar e gerenciamento de pagamentos.",
          pain:
            "Clientes de energia precisavam acompanhar consumo e pagamentos sem depender de atualizações manuais.",
          solution:
            "Um painel de controle para visibilidade de consumo, gestão de pagamentos de clientes e acompanhamento operacional do negócio de energia solar.",
          features: ["Consumo", "Pagamentos", "Clientes", "Operação"],
          gallery: ["/projects/lumen.svg", "/projects/pulse.svg", "/projects/orion.svg"],
        },
      ],
    },
    videoShowcase: {
      title: "Engenharia em vídeo.",
      subtitle:
        "Uma sessão em destaque no YouTube com visão prática, decisões de arquitetura e aprendizados de entrega de software.",
      cta: "Assistir no YouTube",
      url: "https://www.youtube.com/watch?v=dqV7sI7saoM&t=206s",
    },
    articles: {
      title: "Escrita técnica para quem constrói.",
      subtitle:
        "Análises sobre IA, Docker, CORS, posicionamento dev e decisões que mantêm software útil.",
      cards: [
        {
          title: "A IA vai destruir o seu software se você não aprender Spec-Driven Development",
          description:
            "Uma visão prática sobre especificações como camada de controle para construir com IA.",
          category: "IA & Processo",
          url: "https://medium.com/@marcelomatheusbr/a-ia-vai-destruir-o-seu-software-se-voc%C3%AA-n%C3%A3o-aprender-spec-driven-development-decfb573dd5f",
        },
        {
          title: "Docker: o manual que você deveria ter lido no primeiro dia",
          description:
            "Um guia direto dos conceitos de Docker que fazem containers finalmente encaixarem.",
          category: "DevOps",
          url: "https://medium.com/@marcelomatheusbr/docker-o-manual-que-voc%C3%AA-deveria-ter-lido-no-primeiro-dia-de-aprendizado-5ae9d29abc2e",
        },
        {
          title: "Os 4 perfis de dev que você precisa ser para se tornar insubstituível",
          description:
            "Um mapa de carreira para combinar execução, comunicação, ownership e visão de produto.",
          category: "Carreira",
          url: "https://medium.com/@marcelomatheusbr/os-4-perfis-de-dev-que-voc%C3%AA-precisa-ser-para-se-tornar-insubstitu%C3%ADvel-e40860f4a422",
        },
        {
          title: "Você realmente sabe o que é CORS?",
          description:
            "Uma análise teórica detalhada sobre limites do navegador, headers e segurança.",
          category: "Web Security",
          url: "https://medium.com/@marcelomatheusbr/voc%C3%AA-realmente-sabe-o-que-%C3%A9-cors-uma-an%C3%A1lise-te%C3%B3rica-detalhada-fecfa78df5aa",
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
        { label: "Projetos", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Sobre", href: "#about" },
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
