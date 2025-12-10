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
      title: "Delivering high-performance solutions focused on quality.",
      subtitle:
        "Full Stack Developer specialized in JavaScript/TypeScript. I build scalable architectures, implement CI/CD pipelines, and optimize systems for performance and security.",
      primaryCta: "View Projects",
      secondaryCta: "Let’s Talk",
      trustedBy: "Trusted by innovative companies and academic communities",
      stats: [
        { label: "Years coding", value: "1.5+" },
        { label: "Projects delivered", value: "5+" },
        { label: "Community impact", value: "Unicoder" },
      ],
      techOrbit: {
        instruction: "Drag to rotate or tap the arrows",
        items: [
          {
            id: TechIconId.React,
            name: "React",
            focus: "Frontend Engineering",
            summary:
              "High-quality interfaces with reusable components and predictable state management using modern hooks.",
            highlights: ["Design Patterns", "Hooks Architecture", "Reusable UI"],
          },
          {
            id: TechIconId.Next,
            name: "Next.js",
            focus: "Fullstack React",
            summary:
              "Development of web applications with focus on marketplace features and performance optimization.",
            highlights: ["SSR", "API Routes", "Optimized DX"],
          },
          {
            id: TechIconId.Node,
            name: "Node.js",
            focus: "Backend & APIs",
            summary:
              "Robust server-side logic with Nest.js, clean architecture, and efficient database modeling.",
            highlights: ["NestJS", "Express", "RESTful APIs"],
          },
          {
            id: TechIconId.Docker,
            name: "Docker",
            focus: "DevOps",
            summary:
              "Containerization for consistent environments and implementation of CI/CD pipelines.",
            highlights: ["Containers", "CI/CD", "GitHub Actions"],
          },
          {
            id: TechIconId.Aws,
            name: "AWS",
            focus: "Cloud & Scale",
            summary:
              "Cloud infrastructure management using AWS ECS to optimize delivery flows.",
            highlights: ["ECS", "Cloud", "Deploy"],
          },
          {
            id: TechIconId.Framer,
            name: "Tailwind CSS", // Adapted text content to match stack
            focus: "Styling",
            summary:
              "Rapid UI development with utility-first classes ensuring consistent design systems.",
            highlights: ["Responsive", "Modern UI", "Efficiency"],
          },
          {
            id: TechIconId.TypeScript,
            name: "TypeScript",
            focus: "Type Safety",
            summary:
              "Strict typing and contracts that ensure safer codebases and better developer experience.",
            highlights: ["Generics", "Interfaces", "DX"],
          },
          {
            id: TechIconId.Postgres,
            name: "PostgreSQL",
            focus: "Data & Persistence",
            summary:
              "Relational modeling and database optimization for high-performance applications.",
            highlights: ["SQL", "Prisma", "Modeling"],
          },
        ],
      },
    },
    about: {
      title: "About",
      subtitle:
        "Junior Software Engineer with a passion for modern DevOps practices, SOLID principles, and Agile methodologies.",
      timeline: [
        {
          year: "2025",
          role: "Junior Software Engineer",
          company: "NOCORP LTDA",
          description:
            "Developing information systems and implementing complete CI/CD pipelines with GitHub Actions and AWS ECS. Optimized sales processing capacity by 4x.",
          badges: ["Nest.js", "CI/CD", "AWS ECS"],
        },
        {
          year: "2024",
          role: "Full Stack Trainee",
          company: "NOCORP LTDA",
          description:
            "Collaborated on web apps using React, Next.js, and Node.js for national and international clients, focusing on marketplace solutions.",
          badges: ["React", "TypeScript", "Marketplace"],
        },
        {
          year: "2023",
          role: "B.S. Information Systems",
          company: "Unimontes",
          description:
            "Academic representative in ICPC Programming Contests and founder of the Unicoder event.",
          badges: ["Algorithms", "Leadership", "Event Ops"],
        },
      ],
      caption:
        "Focused on delivering real value through efficient code, system modeling, and continuous improvement.",
    },
    skills: {
      title: "Problems I Solve",
      subtitle:
        "I combine technical expertise in JS/TS with a product mindset to build secure and scalable software.",
      cards: [
        {
          title: "Backend & Architecture",
          description:
            "I design RESTful APIs, model databases (SQL/NoSQL), and build scalable services using Node.js and Nest.js.",
          icon: SkillIconId.Server,
        },
        {
          title: "Frontend & Experience",
          description:
            "Responsive and performant interfaces built with React, Next.js, and Tailwind, focusing on user experience.",
          icon: SkillIconId.Sparkles,
        },
        {
          title: "DevOps & Reliability",
          description:
            "Implementation of CI/CD pipelines, Docker containerization, and cloud deployment (AWS) for reliable delivery.",
          icon: SkillIconId.Activity,
        },
      ],
    },
    projects: {
      title: "Projects",
      subtitle: "A selection of professional work and community initiatives.",
      modal: {
        what: "Project Overview",
        problem: "Problem Space",
        stack: "Tech Stack",
        metrics: "Impact Snapshot",
        repoCta: "Access repository",
        liveCta: "Launch product",
      },
      cards: [
        {
          slug: "unicoder",
          title: "Unicoder",
          excerpt:
            "Founder of Unicoder - Developer Week in Montes Claros, fostering the local tech community.",
          cover: "/projects/unicoder.svg",
          problem:
            "The academic community needed a centralized event to connect students with modern development practices.",
          overview:
            "Organized the event and developed digital assets to manage the developer week at Unimontes.",
          impact: [
            "Founded a key regional tech event.",
            "Connected students and professionals.",
          ],
          tech: ["Leadership", "Community", "Event Management"],
          github: {
            stars: "N/A",
            forks: "N/A",
            language: "N/A",
          },
          links: {
            live: "https://unicoder.app", // Placeholder based on context
            repo: "https://github.com/marcelomatheus",
          },
        },
        {
          slug: "crm-api",
          title: "CRM & Messaging System",
          excerpt:
            "A messaging system implementation that increased batch sales processing capacity by 4x.",
          cover: "/projects/crm.svg",
          problem:
            "The legacy process for batch sales was slow and limited the company's operational throughput.",
          overview:
            "Implemented a robust messaging system within a CRM, optimizing database interactions and processing logic.",
          impact: [
            "Increased processing capacity by 4x.",
            "Optimized delivery flow for sales.",
          ],
          tech: ["NestJS", "Node.js", "Messaging", "SQL"],
          github: {
            stars: "N/A",
            forks: "N/A",
            language: "TypeScript",
          },
          links: {
            live: "#",
            repo: "#",
          },
        },
        {
          slug: "student-ms",
          title: "Marketplace Platforms",
          excerpt:
            "Development of web applications and RESTful APIs for national and international marketplace clients.",
          cover: "/projects/student.svg",
          problem:
            "Clients required scalable platforms with continuous feature delivery and high availability.",
          overview:
            "Collaborated on full-stack development using React, Next.js, and Node.js, implementing new features and bug fixes.",
          impact: [
            "Continuous improvement of products.",
            "Delivery of high-performance web apps.",
          ],
          tech: ["React", "Next.js", "Node.js", "TypeScript"],
          github: {
            stars: "N/A",
            forks: "N/A",
            language: "TypeScript",
          },
          links: {
            live: "#",
            repo: "#",
          },
        },
      ],
    },
    common: {
      close: "Close",
      comingSoon: "Coming soon",
    },
    footer: {
      role: "Junior Software Engineer",
      description:
        "Building high-performance solutions with a focus on quality, security, and user experience.",
      location: "Montes Claros, MG · Remote-friendly",
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
        { label: "Resume", href: "https://drive.google.com", icon: FooterIconId.External },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/marcelooliveiradev/", icon: FooterIconId.External },
        { label: "GitHub", href: "https://github.com/marcelomatheus", icon: FooterIconId.External },
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
      title: "Entrego soluções de alto desempenho com foco em qualidade.",
      subtitle:
        "Desenvolvedor Full Stack especializado em JavaScript e TypeScript. Construo arquiteturas escaláveis, pipelines de CI/CD e aplico práticas modernas de Engenharia de Software.",
      primaryCta: "Ver projetos",
      secondaryCta: "Conversar",
      trustedBy: "Experiência em projetos nacionais e internacionais",
      stats: [
        { label: "Anos programando", value: "1.5+" },
        { label: "Projetos entregues", value: "5+" },
        { label: "Impacto comunidade", value: "Unicoder" },
      ],
      techOrbit: {
        instruction: "Arraste ou use as setas para girar",
        items: [
          {
            id: TechIconId.React,
            name: "React",
            focus: "Frontend",
            summary:
              "Interfaces de alta qualidade com componentes reutilizáveis e gerenciamento de estado previsível.",
            highlights: ["Design Patterns", "Hooks", "UI Reutilizável"],
          },
          {
            id: TechIconId.Next,
            name: "Next.js",
            focus: "Fullstack React",
            summary:
              "Desenvolvimento de aplicações web focadas em marketplace, performance e integração de APIs.",
            highlights: ["SSR", "API Routes", "DX"],
          },
          {
            id: TechIconId.Node,
            name: "Node.js",
            focus: "Back-end & APIs",
            summary:
              "Serviços robustos com Nest.js, arquitetura limpa e modelagem de banco de dados eficiente.",
            highlights: ["NestJS", "Express", "RESTful APIs"],
          },
          {
            id: TechIconId.Docker,
            name: "Docker",
            focus: "DevOps",
            summary:
              "Containerização para ambientes consistentes e implementação de pipelines de CI/CD.",
            highlights: ["Containers", "CI/CD", "Github Actions"],
          },
          {
            id: TechIconId.Aws,
            name: "AWS",
            focus: "Infra & Escala",
            summary:
              "Gerenciamento de infraestrutura em nuvem utilizando AWS ECS para otimizar fluxos de entrega.",
            highlights: ["ECS", "Cloud", "Deploy"],
          },
          {
            id: TechIconId.Framer,
            name: "Tailwind CSS", // Adapted text
            focus: "Estilização",
            summary:
              "Desenvolvimento ágil de interfaces responsivas e sistemas de design consistentes.",
            highlights: ["Responsivo", "UI Moderna", "Eficiência"],
          },
          {
            id: TechIconId.TypeScript,
            name: "TypeScript",
            focus: "Tipagem & Robustez",
            summary:
              "Código seguro com tipagem estrita e contratos claros que garantem manutenibilidade.",
            highlights: ["Generics", "Interfaces", "DX"],
          },
          {
            id: TechIconId.Postgres,
            name: "PostgreSQL",
            focus: "Dados & Persistência",
            summary:
              "Modelagem relacional confiável e estratégias de indexação para aplicações de alto desempenho.",
            highlights: ["SQL", "Prisma", "Modelagem"],
          },
        ],
      },
    },
    about: {
      title: "Sobre",
      subtitle:
        "Engenheiro de Software Jr interessado em DevOps, SOLID e Agile, focado em alinhar soluções aos objetivos do cliente.",
      timeline: [
        {
          year: "2025",
          role: "Engenheiro de Software Jr",
          company: "NOCORP LTDA",
          description:
            "Desenvolvimento de sistemas e implementação de pipelines CI/CD com GitHub Actions e AWS ECS. Aumentei em 4x a capacidade de processamento de vendas.",
          badges: ["Nest.js", "CI/CD", "AWS ECS"],
        },
        {
          year: "2024",
          role: "Desenvolvedor Trainee",
          company: "NOCORP LTDA",
          description:
            "Colaboração em apps web com React e Node.js para clientes nacionais e internacionais, com foco em marketplace e resolução de problemas.",
          badges: ["React", "TypeScript", "Marketplace"],
        },
        {
          year: "2023",
          role: "Bacharelando em Sistemas",
          company: "Unimontes",
          description:
            "Representante na Maratona de Programação ICPC e fundador do evento Unicoder.",
          badges: ["Algoritmos", "Liderança", "Eventos"],
        },
      ],
      caption:
        "Apaixonado por entregar valor real, eficiência e boas práticas de desenvolvimento.",
    },
    skills: {
      title: "Problemas que Resolvo",
      subtitle:
        "Combino engenharia de software e visão de produto para construir sistemas seguros, rápidos e escaláveis.",
      cards: [
        {
          title: "Back-end & Arquitetura",
          description:
            "Projeto APIs RESTful com redução de tempo de resposta, modelagem de dados e arquiteturas em Node.js/Nest.js.",
          icon: SkillIconId.Server,
        },
        {
          title: "Frontend & Experiência",
          description:
            "Interfaces responsivas e de alto desempenho construídas com React, Next.js e Tailwind, focadas no usuário.",
          icon: SkillIconId.Sparkles,
        },
        {
          title: "DevOps & Confiabilidade",
          description:
            "Implementação de pipelines CI/CD, Docker e orquestração em nuvem (AWS) para entregas contínuas e seguras.",
          icon: SkillIconId.Activity,
        },
      ],
    },
    projects: {
      title: "Projetos",
      subtitle: "Meus trabalhos profissionais e iniciativas na comunidade.",
      modal: {
        what: "Visão Geral",
        problem: "Problema",
        stack: "Stack",
        metrics: "Impacto",
        repoCta: "Abrir repositório",
        liveCta: "Ver produto",
      },
      cards: [
        {
          slug: "unicoder",
          title: "Unicoder",
          excerpt:
            "Fundador do Unicoder - Semana do Desenvolvedor em Montes Claros, fomentando a tecnologia local.",
          cover: "/projects/unicoder.svg",
          problem:
            "A comunidade acadêmica precisava de um evento centralizado para conectar alunos e mercado.",
          overview:
            "Organizei o evento e desenvolvi ativos digitais para gerenciar a semana do desenvolvedor na Unimontes.",
          impact: [
            "Fundação de evento regional.",
            "Conexão entre alunos e mercado.",
          ],
          tech: ["Liderança", "Comunidade", "Gestão de Eventos"],
          github: {
            stars: "N/A",
            forks: "N/A",
            language: "N/A",
          },
          links: {
            live: "https://unicoder.app",
            repo: "https://github.com/marcelomatheus",
          },
        },
        {
          slug: "crm-api",
          title: "CRM & Mensageria",
          excerpt:
            "Implementação de sistema de mensageria que aumentou em 4x a capacidade de processamento.",
          cover: "/projects/crm.svg",
          problem:
            "O processamento de vendas em lote era um gargalo operacional para o cliente.",
          overview:
            "Implementei um sistema robusto de mensageria dentro de um CRM, otimizando a interação com o banco de dados.",
          impact: ["Aumento de 4x no processamento", "Fluxo de entrega otimizado"],
          tech: ["NestJS", "Node.js", "Mensageria", "SQL"],
          github: {
            stars: "N/A",
            forks: "N/A",
            language: "TypeScript",
          },
          links: {
            live: "",
            repo: "",
          },
        },
        {
          slug: "student-ms",
          title: "Plataformas Marketplace",
          excerpt:
            "Desenvolvimento e evolução de sistemas web e APIs para clientes de marketplace.",
          cover: "/projects/student.svg",
          problem:
            "Clientes necessitavam de plataformas escaláveis com entrega contínua de novas funcionalidades.",
          overview:
            "Atuei no desenvolvimento full stack com React, Next.js e Node.js, garantindo alinhamento aos objetivos do cliente.",
          impact: ["Melhoria contínua de produtos", "Sistemas de alta performance"],
          tech: ["React", "Next.js", "Node.js", "TypeScript"],
          github: {
            stars: "N/A",
            forks: "N/A",
            language: "TypeScript",
          },
          links: {
            live: "",
            repo: "",
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
        "Construindo experiências digitais que combinam desempenho, qualidade e foco no usuário.",
      location: "Montes Claros, MG · Remote-friendly",
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
        { label: "Currículo", href: "https://drive.google.com", icon: FooterIconId.External },
        { label: "LinkedIn", href: "https://www.linkedin.com/in/marcelooliveiradev/", icon: FooterIconId.External },
        { label: "GitHub", href: "https://github.com/marcelomatheus", icon: FooterIconId.External },
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