import type { StaticImageData } from "next/image";

import crud from "../../../public/projects/crud-produtos.png";
import drum from "../../../public/projects/drum-machine.png";
import mario from "../../../public/projects/mario.png";
import quote from "../../../public/projects/quote-machine.png";
import paltier from "../../../public/projects/paltier.png";
import riddle from "../../../public/projects/riddle-game.png";
import investalkBb from "../../../public/projects/investalk-bb.png";

export type Locale = "pt" | "en";

export type Project = {
  title: string;
  description: string;
  impact: string;
  stack: string[];
  status: string;
  githubLink?: string;
  publicLink?: string;
  image?: StaticImageData;
  privateCase?: boolean;
  featured?: boolean;
  visualTone: "amber" | "emerald" | "cyan" | "rose" | "slate" | "violet";
};

export type ProjectSection = {
  id: string;
  title: string;
  intro: string;
  projects: Project[];
};

export const portfolioCopy = {
  pt: {
    heroEyebrow: "Portfólio de engenharia",
    heroTitle: "Software Engineer: Fullstack, Backend, Cloud & DevOps",
    heroBody:
      "Construo produtos web e serviços de backend com atenção a arquitetura, operação, automação e experiências reais de uso. Meu foco atual une cloud, DevOps, IA aplicada e sistemas prontos para evoluir em produção.",
    primaryCta: "Projetos",
    githubCta: "GitHub",
    linkedinCta: "LinkedIn",
    cardLinks: {
      github: "GitHub",
      public: "Ver projeto",
      private: "Case privado",
    },
    contactTitle: "Contato",
    contactBody:
      "Aberta a conversas sobre backend, cloud, DevOps, IA aplicada e produtos digitais que precisam sair do protótipo e ganhar operação.",
  },
  en: {
    heroEyebrow: "Engineering portfolio",
    heroTitle: "Software Engineer: Fullstack, Backend, Cloud & DevOps",
    heroBody:
      "I build web products and backend services with care for architecture, operations, automation, and real user workflows. My current focus connects cloud, DevOps, applied AI, and systems that can keep evolving in production.",
    primaryCta: "Projects",
    githubCta: "GitHub",
    linkedinCta: "LinkedIn",
    cardLinks: {
      github: "GitHub",
      public: "View project",
      private: "Private case",
    },
    contactTitle: "Contact",
    contactBody:
      "Open to conversations about backend, cloud, DevOps, applied AI, and digital products that need to move from prototype to operation.",
  },
} satisfies Record<Locale, Record<string, unknown>>;

export const projectSections: Record<Locale, ProjectSection[]> = {
  pt: [
    {
      id: "featured",
      title: "Featured Engineering Projects",
      intro:
        "Projetos que mostram arquitetura, produto, automação e operação como partes do mesmo sistema.",
      projects: [
        {
          title: "python-tts",
          description:
            "Plataforma de text-to-speech estruturada como produto técnico completo, com bot Discord, app desktop, API HTTP e pipelines de entrega.",
          impact:
            "Projeto principal para demonstrar Clean Architecture, filas, Docker, Kubernetes, OpenTofu, CI/CD, observabilidade, rollback e segurança.",
          stack: [
            "Python",
            "Clean Architecture",
            "Discord Bot",
            "Desktop App",
            "HTTP API",
            "Queues",
            "Docker",
            "Kubernetes",
            "OpenTofu",
            "CI/CD",
          ],
          status: "Projeto principal",
          githubLink: "https://github.com/erikalira/python-tts",
          featured: true,
          visualTone: "amber",
        },
        {
          title: "Perio DX",
          description:
            "Case privado de IA clínica que une uma interface Next.js a um serviço Python para apoiar fluxos periodontais com regras explicáveis.",
          impact:
            "Foco em produto de IA com TypeScript, i18n, arquitetura modular, validação de entrada e safety boundary para decisões clínicas.",
          stack: [
            "Next.js",
            "TypeScript",
            "Python",
            "Clinical AI",
            "i18n",
            "Validation",
          ],
          status: "Privado / em desenvolvimento",
          privateCase: true,
          featured: true,
          visualTone: "emerald",
        },
        {
          title: "Investalk",
          description:
            "Case corporativo público em produção, desenvolvido para experiência responsiva, acessível e orientada a conteúdo.",
          impact:
            "Trabalho com Next.js, TypeScript, SEO, acessibilidade, CMS/Strapi e entrega em ambiente produtivo.",
          stack: [
            "Next.js",
            "TypeScript",
            "Accessibility",
            "SEO",
            "Strapi",
            "Production",
          ],
          status: "Case corporativo público",
          publicLink: "https://investalk.bb.com.br/",
          image: investalkBb,
          featured: true,
          visualTone: "cyan",
        },
      ],
    },
    {
      id: "cloud-labs",
      title: "Production & Cloud Labs",
      intro:
        "Laboratórios técnicos que registram a evolução de observabilidade, CI/CD e GitOps.",
      projects: [
        {
          title: "monitor-prometheus-grafana",
          description:
            "Base para laboratório de observabilidade com Prometheus e Grafana, planejado para ganhar dashboards, alertas e narrativa conectada a serviços reais.",
          impact:
            "Entra como evolução planejada, sem competir com o projeto principal enquanto o README e os artefatos amadurecem.",
          stack: ["Prometheus", "Grafana", "Docker", "Observability"],
          status: "Planned upgrade",
          githubLink: "https://github.com/erikalira/monitor-prometheus-grafana",
          visualTone: "rose",
        },
        {
          title: "node-docker-jenkins-argo",
          description:
            "Repositório de laboratório para aplicação Node com Docker e expansão planejada para Jenkins, Argo CD e GitOps.",
          impact:
            "Mantido como trilha de evolução para pipeline, manifests, instruções locais e checklist de CI/CD.",
          stack: ["Node.js", "Docker", "Jenkins", "Argo CD", "GitOps"],
          status: "A evoluir",
          githubLink: "https://github.com/erikalira/node-docker-jenkins-argo",
          visualTone: "slate",
        },
        {
          title: "ai-project-guidance-kit",
          description:
            "Kit público em preparação para boas práticas em projetos com IA, Codex e Copilot.",
          impact:
            "Roadmap técnico para templates, checklists e exemplos antes de entrar no portfólio principal.",
          stack: ["AI", "Codex", "Copilot", "Templates", "Checklists"],
          status: "Roadmap interno",
          githubLink: "https://github.com/erikalira/ai-project-guidance-kit",
          visualTone: "violet",
        },
      ],
    },
    {
      id: "fullstack-web",
      title: "Fullstack & Web Projects",
      intro:
        "Projetos web menores, úteis para mostrar interfaces, dados e entrega fullstack.",
      projects: [
        {
          title: "Products CRUD Fullstack",
          description:
            "Aplicação CRUD fullstack para produtos, mantida como projeto secundário de interface e fluxo de dados.",
          impact:
            "Mostra fundamentos de aplicação web, listagem, edição e experiência responsiva.",
          stack: ["Fullstack", "CRUD", "Web UI"],
          status: "Projeto secundário",
          publicLink: "https://erikalira.github.io/CRUDFullStack",
          image: crud,
          visualTone: "cyan",
        },
        {
          title: "Palworld Tier List",
          description:
            "Ferramenta interativa e data-driven para explorar e organizar dados de Palworld.",
          impact:
            "Mantida com menor peso até ganhar README, screenshots e descrição técnica mais forte.",
          stack: ["React", "Data UI", "Interactive Tool"],
          status: "Projeto web",
          publicLink: "https://paltier.netlify.app/",
          image: paltier,
          visualTone: "emerald",
        },
      ],
    },
    {
      id: "archive",
      title: "Early Projects & Learning Archive",
      intro:
        "Arquivo discreto de evolução técnica, experimentos e primeiros projetos interativos.",
      projects: [
        {
          title: "Drum Machine",
          description: "Interface musical interativa criada como prática de UI.",
          impact: "Marco inicial de componentização e interação no navegador.",
          stack: ["React", "Audio", "UI"],
          status: "Arquivo",
          publicLink: "https://erikalira.github.io/drum-machine/",
          image: drum,
          visualTone: "amber",
        },
        {
          title: "Quote Machine",
          description: "Gerador de citações com interface simples e responsiva.",
          impact: "Projeto de aprendizado focado em estado e consumo de dados.",
          stack: ["React", "API", "UI"],
          status: "Arquivo",
          publicLink: "https://erikalira.github.io/quote-machine/",
          image: quote,
          visualTone: "slate",
        },
        {
          title: "Mario Game",
          description: "Experimento de jogo web inspirado em plataforma 2D.",
          impact: "Prática de movimento, colisão e feedback visual.",
          stack: ["JavaScript", "Game UI", "CSS"],
          status: "Arquivo",
          publicLink: "https://lilmario.netlify.app/",
          image: mario,
          visualTone: "rose",
        },
        {
          title: "Riddle Game",
          description: "Jogo de enigmas publicado como experimento interativo.",
          impact: "Exercício de fluxo, interação e estado em aplicação web.",
          stack: ["React", "Game UI", "State"],
          status: "Arquivo",
          publicLink: "https://amzriddle.netlify.app/",
          image: riddle,
          visualTone: "violet",
        },
      ],
    },
  ],
  en: [
    {
      id: "featured",
      title: "Featured Engineering Projects",
      intro:
        "Projects that connect architecture, product, automation, and operations as one system.",
      projects: [
        {
          title: "python-tts",
          description:
            "A text-to-speech platform shaped as a complete technical product, with a Discord bot, desktop app, HTTP API, and delivery pipelines.",
          impact:
            "Primary project for Clean Architecture, queues, Docker, Kubernetes, OpenTofu, CI/CD, observability, rollback, and security.",
          stack: [
            "Python",
            "Clean Architecture",
            "Discord Bot",
            "Desktop App",
            "HTTP API",
            "Queues",
            "Docker",
            "Kubernetes",
            "OpenTofu",
            "CI/CD",
          ],
          status: "Primary project",
          githubLink: "https://github.com/erikalira/python-tts",
          featured: true,
          visualTone: "amber",
        },
        {
          title: "Perio DX",
          description:
            "Private clinical AI case connecting a Next.js interface with a Python service for explainable periodontal workflows.",
          impact:
            "Focused on applied AI product work with TypeScript, i18n, modular architecture, input validation, and a clinical safety boundary.",
          stack: [
            "Next.js",
            "TypeScript",
            "Python",
            "Clinical AI",
            "i18n",
            "Validation",
          ],
          status: "Private / in development",
          privateCase: true,
          featured: true,
          visualTone: "emerald",
        },
        {
          title: "Investalk",
          description:
            "Public corporate production case built for a responsive, accessible, content-driven experience.",
          impact:
            "Work across Next.js, TypeScript, SEO, accessibility, CMS/Strapi, and production delivery.",
          stack: [
            "Next.js",
            "TypeScript",
            "Accessibility",
            "SEO",
            "Strapi",
            "Production",
          ],
          status: "Public corporate case",
          publicLink: "https://investalk.bb.com.br/",
          image: investalkBb,
          featured: true,
          visualTone: "cyan",
        },
      ],
    },
    {
      id: "cloud-labs",
      title: "Production & Cloud Labs",
      intro:
        "Technical labs tracking progress in observability, CI/CD, and GitOps.",
      projects: [
        {
          title: "monitor-prometheus-grafana",
          description:
            "Observability lab foundation with Prometheus and Grafana, planned for dashboards, alerts, and a stronger connection to real services.",
          impact:
            "Presented as a planned upgrade while README, screenshots, and artifacts mature.",
          stack: ["Prometheus", "Grafana", "Docker", "Observability"],
          status: "Planned upgrade",
          githubLink: "https://github.com/erikalira/monitor-prometheus-grafana",
          visualTone: "rose",
        },
        {
          title: "node-docker-jenkins-argo",
          description:
            "Lab repository for a Node application with Docker and planned expansion into Jenkins, Argo CD, and GitOps.",
          impact:
            "Kept as an evolution track for pipeline diagrams, manifests, local instructions, and CI/CD checklisting.",
          stack: ["Node.js", "Docker", "Jenkins", "Argo CD", "GitOps"],
          status: "To evolve",
          githubLink: "https://github.com/erikalira/node-docker-jenkins-argo",
          visualTone: "slate",
        },
        {
          title: "ai-project-guidance-kit",
          description:
            "Public kit in preparation for AI, Codex, and Copilot project practices.",
          impact:
            "Technical roadmap for templates, checklists, and examples before it becomes a main portfolio piece.",
          stack: ["AI", "Codex", "Copilot", "Templates", "Checklists"],
          status: "Internal roadmap",
          githubLink: "https://github.com/erikalira/ai-project-guidance-kit",
          visualTone: "violet",
        },
      ],
    },
    {
      id: "fullstack-web",
      title: "Fullstack & Web Projects",
      intro:
        "Smaller web projects that show interface work, data flows, and fullstack delivery.",
      projects: [
        {
          title: "Products CRUD Fullstack",
          description:
            "Fullstack CRUD application for products, kept as a secondary project for UI and data workflow.",
          impact:
            "Shows web application fundamentals, listing, editing, and responsive interaction.",
          stack: ["Fullstack", "CRUD", "Web UI"],
          status: "Secondary project",
          publicLink: "https://erikalira.github.io/CRUDFullStack",
          image: crud,
          visualTone: "cyan",
        },
        {
          title: "Palworld Tier List",
          description:
            "Interactive, data-driven tool for exploring and organizing Palworld data.",
          impact:
            "Kept at a lighter weight until README, screenshots, and technical framing are improved.",
          stack: ["React", "Data UI", "Interactive Tool"],
          status: "Web project",
          publicLink: "https://paltier.netlify.app/",
          image: paltier,
          visualTone: "emerald",
        },
      ],
    },
    {
      id: "archive",
      title: "Early Projects & Learning Archive",
      intro:
        "A quiet archive of technical growth, experiments, and early interactive projects.",
      projects: [
        {
          title: "Drum Machine",
          description:
            "Interactive music interface created as UI practice.",
          impact: "Early milestone for browser interaction and components.",
          stack: ["React", "Audio", "UI"],
          status: "Archive",
          publicLink: "https://erikalira.github.io/drum-machine/",
          image: drum,
          visualTone: "amber",
        },
        {
          title: "Quote Machine",
          description: "Quote generator with a simple responsive interface.",
          impact: "Learning project focused on state and data consumption.",
          stack: ["React", "API", "UI"],
          status: "Archive",
          publicLink: "https://erikalira.github.io/quote-machine/",
          image: quote,
          visualTone: "slate",
        },
        {
          title: "Mario Game",
          description: "Web game experiment inspired by 2D platformers.",
          impact: "Practice with movement, collision, and visual feedback.",
          stack: ["JavaScript", "Game UI", "CSS"],
          status: "Archive",
          publicLink: "https://lilmario.netlify.app/",
          image: mario,
          visualTone: "rose",
        },
        {
          title: "Riddle Game",
          description: "Riddle game published as an interactive experiment.",
          impact: "Exercise in flow, interaction, and web application state.",
          stack: ["React", "Game UI", "State"],
          status: "Archive",
          publicLink: "https://amzriddle.netlify.app/",
          image: riddle,
          visualTone: "violet",
        },
      ],
    },
  ],
};
