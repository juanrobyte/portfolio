import cvEs from "../assets/CV_Juan_Diego_Rodriguez_ES.pdf";
import cvEn from "../assets/CV_Juan_Diego_Rodriguez_EN.pdf";

// Nota: mantenemos SOLO experiencia web (Compara Seguro, Freelance, Distribuidora FC)
// y skills de desarrollo web.

export const CONTENT = {
  es: {
    seo: {
      title: "Juanrobyte | Portafolio | Juan Diego Rodríguez Villamizar",
    },
    ui: {
      nav: {
        experience: "Experiencia",
        projects: "Proyectos",
        skills: "Habilidades",
        education: "Formación",
        contact: "Contacto",
        resume: "Currículum",
      },
      sections: {
        experience: {
          title: "Experiencia",
          subtitle: "Roles y aportes más relevantes en desarrollo web",
        },
        projects: {
          title: "Proyectos destacados",
          subtitle: "Producto real + dashboards + contribuciones freelance",
          internal: "(Proyecto interno / sin enlace público)",
        },
        skills: {
          title: "Habilidades",
          subtitle: "Stack y herramientas de desarrollo web",
        },
        education: {
          title: "Formación",
          subtitle: "Estudios y aprendizaje continuo",
          studiesTitle: "Estudios",
          coursesTitle: "Cursos y certificados",
          coursesDesc: "Compilación de cursos + certificados.",
          viewDiploma: "Ver diploma",
          pdfs: "PDFs",
          badgesTitle: "Insignias",
          viewCredly: "Ver en Credly",
        },
        contact: {
          title: "Contacto",
          subtitle: "¿Hablamos?",
          direct: "Directo",
          whatsapp: "WhatsApp",
          github: "GitHub",
          linkedin: "LinkedIn",
          waAria: "Escríbeme por WhatsApp",
        },
      },
      cvModalTitle: "Currículum",
      whatsappMsg: "Hola Juan, vi tu portafolio y quiero hablar contigo.",
      langToggle: { es: "ES", en: "EN" },
    },
    profile: {
      name: "Juan Diego Rodríguez Villamizar",
      headline:
        "Desarrollador Web Full Stack | React | Node.js | Arquitectura Web Escalable",
      location: "Caracas, Venezuela",
      summary:
        "Desarrollador Web Full Stack enfocado en construir productos digitales escalables, optimizar performance y crear experiencias centradas en el usuario. Experiencia en React, JavaScript (ES6+), Node.js, integración de APIs REST y bases de datos relacionales.",
      contact: {
        emailPrimary: "jdvillamizar1702@gmail.com",
        emailSecondary: "juanrobyte@gmail.com",
        whatsapp: "+58 422 2802 251",
        linkedin: "https://www.linkedin.com/in/juanrobyte/?locale=es_ES",
        github: "https://github.com/juanrobyte",
      },
      cta: {
        cv: { label: "Ver CV", href: cvEs },
      },
    },
    highlights: [
      {
        title: "Frontend moderno",
        desc: "React + Vite, componentes reutilizables y UI responsive.",
      },
      {
        title: "Backend y datos",
        desc: "Node/Express, APIs REST, MariaDB/MySQL y SQL.",
      },
      {
        title: "Optimización",
        desc: "CRO, UX/UI y rendimiento web para productos reales.",
      },
    ],
    experience: [
      {
        role: "Desarrollador Web – Compara Seguro (Startup)",
        company: "Compara Seguro",
        place: "Medellín, Colombia",
        period: "Mayo 2024 – Presente",
        bullets: [
          "Desarrollo de interfaces responsive con React, HTML5 y CSS3.",
          "Modularización del backend para mejorar escalabilidad y mantenibilidad.",
          "Gestión de base de datos MariaDB (consultas, creación de tablas, optimización).",
          "Integración frontend con APIs REST y mejora del rendimiento de la aplicación.",
        ],
        link: { label: "Ver sitio", href: "https://comparaseguro.auraux.dev/" },
      },
      {
        role: "Desarrollador Web – Freelance",
        company: "Proyectos corporativos",
        place: "Remoto",
        period: "Oct 2021 – 2025",
        bullets: [
          "Optimización UI/UX y corrección de bugs en sitios de alto tráfico (HP, Asurion, Cooper Standard, Apex Systems).",
          "Desarrollo con HTML5, CSS3, JavaScript, WordPress y PHP.",
          "Automatización y scraping con Python + Selenium.",
          "Integración de formularios con CRM mediante CakePHP.",
        ],
      },
      {
        role: "Desarrollador Frontend",
        company: "Distribuidora FC Ferre Construye 2035, C.A.",
        place: "Caracas, Venezuela",
        period: "Oct 2025 – Dic 2025",
        bullets: [
          "Desarrollo de interfaz administrativa (dashboard).",
          "Mejora de consistencia visual y experiencia de usuario.",
          "Integración de flujos internos en panel administrativo.",
        ],
      },
    ],
    projects: [
      {
        title: "Compara Seguro",
        tag: "Producción",
        desc: "Plataforma web para asistencia al viajero: UI responsive, cotización y flujo de usuario.",
        tech: ["React", "Vite", "Express", "MariaDB", "SQL"],
        links: [{ label: "Live", href: "https://comparaseguro.auraux.dev/" }],
      },
      {
        title: "Dashboard Admin — Distribuidora FC",
        tag: "Proyecto",
        desc: "Interfaz administrativa para gestión interna: pantallas, componentes y mejoras UI/UX.",
        tech: ["React", "UI/UX", "Componentes"],
        links: [],
      },
      {
        title: "Freelance: UI fixes & optimización visual",
        tag: "Clientes corporativos",
        desc: "Mejoras visuales y corrección de bugs en plataformas de alto tráfico.",
        tech: ["CSS", "WordPress", "JavaScript"],
        links: [
          { label: "jobs.hp.com", href: "https://jobs.hp.com/" },
          { label: "careers.asurion.com", href: "https://careers.asurion.com/" },
          { label: "cooperstandard.com", href: "https://www.cooperstandard.com/" },
          { label: "apexsystems.com", href: "https://www.apexsystems.com/" },
        ],
      },
    ],
    skillGroups: [
      {
        title: "Skills",
        desc: "Tecnologías principales para desarrollo web.",
        items: [
          "JavaScript",
          "HTML",
          "CSS",
          "React",
          "Node.js",
          "PHP",
          "WordPress",
          "DB",
          "VPS",
          "Python",
          "Selenium",
          "Figma",
          "CRO",
          "Marketing",
        ],
      },
    ],
    education: [
      {
        title: "UNEXPO — Ingeniería en Sistemas",
        place: "Caracas, Venezuela",
        period: "2019",
      },
    ],
    // Puedes mantener los cursos/badges como estaban; por ahora los dejamos vacíos para un perfil Silicon-Valley clean.
    courses: [],
    pdfCertificates: [],
    badges: [],
  },

  en: {
    seo: {
      title: "Juanrobyte | Portfolio | Juan Diego Rodríguez Villamizar",
    },
    ui: {
      nav: {
        experience: "Experience",
        projects: "Projects",
        skills: "Skills",
        education: "Education",
        contact: "Contact",
        resume: "Resume",
      },
      sections: {
        experience: {
          title: "Experience",
          subtitle: "Most relevant web development roles and contributions",
        },
        projects: {
          title: "Featured Projects",
          subtitle: "Real product + dashboards + freelance contributions",
          internal: "(Internal project / no public link)",
        },
        skills: {
          title: "Skills",
          subtitle: "Web development stack and tools",
        },
        education: {
          title: "Education",
          subtitle: "Studies and continuous learning",
          studiesTitle: "Education",
          coursesTitle: "Courses & Certificates",
          coursesDesc: "Selected courses and certificates.",
          viewDiploma: "View certificate",
          pdfs: "PDFs",
          badgesTitle: "Badges",
          viewCredly: "View on Credly",
        },
        contact: {
          title: "Contact",
          subtitle: "Let’s talk",
          direct: "Direct",
          whatsapp: "WhatsApp",
          github: "GitHub",
          linkedin: "LinkedIn",
          waAria: "Message me on WhatsApp",
        },
      },
      footer: "Built with Vite + React.",
      cvModalTitle: "Resume",
      whatsappMsg: "Hi Juan, I saw your portfolio and I'd like to talk.",
      langToggle: { es: "ES", en: "EN" },
    },
    profile: {
      name: "Juan Diego Rodríguez Villamizar",
      headline: "Full Stack Web Developer | React | Node.js | Scalable Web Architecture",
      location: "Caracas, Venezuela",
      summary:
        "Full Stack Web Developer focused on building scalable digital products, optimizing performance, and crafting user-centered experiences. Skilled in React, JavaScript (ES6+), Node.js, REST API integrations, and relational databases.",
      contact: {
        emailPrimary: "jdvillamizar1702@gmail.com",
        emailSecondary: "juanrobyte@gmail.com",
        whatsapp: "+58 422 2802 251",
        linkedin: "https://www.linkedin.com/in/juanrobyte/",
        github: "https://github.com/juanrobyte",
      },
      cta: {
        cv: { label: "View Resume", href: cvEn },
      },
    },
    highlights: [
      {
        title: "Modern frontend",
        desc: "React + Vite, reusable components, responsive UI.",
      },
      {
        title: "Backend & data",
        desc: "Node/Express, REST APIs, MariaDB/MySQL and SQL.",
      },
      {
        title: "Optimization",
        desc: "CRO, UX/UI and web performance for real products.",
      },
    ],
    experience: [
      {
        role: "Web Developer – Compara Seguro (Startup)",
        company: "Compara Seguro",
        place: "Medellín, Colombia",
        period: "May 2024 – Present",
        bullets: [
          "Built responsive interfaces using React, HTML5, and CSS3.",
          "Modularized backend architecture to improve scalability and maintainability.",
          "Managed MariaDB database (queries, schema creation, optimization).",
          "Integrated REST APIs and improved overall application performance.",
        ],
        link: { label: "Live", href: "https://comparaseguro.auraux.dev/" },
      },
      {
        role: "Web Developer – Freelance",
        company: "Corporate projects",
        place: "Remote",
        period: "2021 – 2025",
        bullets: [
          "UI/UX optimization and bug fixes for high-traffic sites (HP, Asurion, Cooper Standard, Apex Systems).",
          "Frontend development with HTML5, CSS3, JavaScript, WordPress, and PHP.",
          "Automation and scraping with Python + Selenium.",
          "CRM form integrations via CakePHP backend solutions.",
        ],
      },
      {
        role: "Frontend Developer",
        company: "Distribuidora FC Ferre Construye 2035",
        place: "Caracas, Venezuela",
        period: "Oct 2025 – Dec 2025",
        bullets: [
          "Built an internal administrative dashboard.",
          "Improved UI consistency and user experience.",
          "Integrated internal workflows into the admin panel.",
        ],
      },
    ],
    projects: [
      {
        title: "Compara Seguro",
        tag: "Production",
        desc: "Travel assistance web platform: responsive UI, quote flow, and user experience.",
        tech: ["React", "Vite", "Express", "MariaDB", "SQL"],
        links: [{ label: "Live", href: "https://comparaseguro.auraux.dev/" }],
      },
      {
        title: "Admin Dashboard — Distribuidora FC",
        tag: "Project",
        desc: "Internal admin interface: screens, components, and UI/UX improvements.",
        tech: ["React", "UI/UX", "Components"],
        links: [],
      },
      {
        title: "Freelance: UI fixes & visual optimization",
        tag: "Corporate clients",
        desc: "Visual improvements and bug fixes for high-traffic platforms.",
        tech: ["CSS", "WordPress", "JavaScript"],
        links: [
          { label: "jobs.hp.com", href: "https://jobs.hp.com/" },
          { label: "careers.asurion.com", href: "https://careers.asurion.com/" },
          { label: "cooperstandard.com", href: "https://www.cooperstandard.com/" },
          { label: "apexsystems.com", href: "https://www.apexsystems.com/" },
        ],
      },
    ],
    skillGroups: [
      {
        title: "Skills",
        desc: "Core technologies for web development.",
        items: [
          "JavaScript",
          "HTML",
          "CSS",
          "React",
          "Node.js",
          "PHP",
          "WordPress",
          "DB",
          "VPS",
          "Python",
          "Figma",
          "CRO",
          "Marketing",
        ],
      },
    ],
    education: [
      {
        title: "UNEXPO — Systems Engineering",
        place: "Caracas, Venezuela",
        period: "2019",
      },
    ],
    courses: [],
    pdfCertificates: [],
    badges: [],
  },
};