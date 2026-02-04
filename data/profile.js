import cvPdf from "../assets/Curriculum Juan Diego Rodriguez Villamizar.pdf";

export const profile = {
  name: "Juan Diego Rodríguez Villamizar",
  headline: "Soporte Técnico Nivel 2 | SysAdmin Jr. | Desarrollo Web | Analista SOC Nivel 1 | Infraestructura",
  location: "Caracas, Venezuela",
 summary:
  "Perfil técnico híbrido con experiencia en Soporte Técnico Nivel 2, administración de sistemas junior e infraestructura. Complemento mi perfil con desarrollo web frontend y fundamentos de análisis SOC Nivel 1, enfocado en la resolución eficiente de incidentes, automatización de tareas, fortalecimiento de la seguridad y creación de interfaces administrativas claras, rápidas y funcionales.",
  contact: {
    emailPrimary: "jdvillamizar1702@gmail.com",
    emailSecondary: "juanrobyte@gmail.com",
    whatsapp: "+58 422 2802 251",
    linkedin: "https://www.linkedin.com/in/juanrobyte/?locale=es_ES",
    github: "https://github.com/juanrobyte",
  },
  cta: {
    primary: { label: "Ver proyectos", href: "#proyectos" },
    secondary: { label: "Contactar", href: "#contacto" },
    cv: {
      label: "Ver CV",
      href: cvPdf,
    },
  },
};

export const highlights = [
  {
    title: "Programación Web",
    desc: "React + Vite. Backend con Express y base de datos SQL (MariaDB).",
  },
  {
    title: "Infraestructura",
    desc: "Implementación de oficina: puestos, red, CCTV, control de acceso, Fortigate/VPN.",
  },
  {
    title: "Soporte Técnico",
    desc: "Atención L1–L2: troubleshooting, escalamiento, documentación y continuidad operativa.",
  },
];

export const experience = [
  {
    role: "Analista de Soporte Técnico (Nivel 2 / Infraestructura y Sistemas)",
    company: "Quantico Servicios de Asistencia S.A",
    place: "Caracas, Venezuela",
    period: "Abr 2020 – Sep 2021",
    bullets: [
      "Soporte N2 en hardware, software y redes.",
      "Implementación de oficina: servidores, puestos de trabajo y configuración inicial.",
      "Cableado/puesta en marcha (operativo) y conectividad interna.",
      "Control de acceso: huella y tarjeta NFC para ingreso.",
      "Cámaras de vigilancia inalámbricas (CCTV) y configuración básica.",
      "Firewall Fortigate + FortiClient VPN (accesos, monitoreo de logs).",
      "Backups y restauración de bases de datos; continuidad operativa.",
      "Automatización: script en Python para carga de datos desde CSV.",
    ],
  },
  {
    role: "Desarrollador Web Frontend (Proyecto)",
    company: "Distribuidora FC Ferre Construye 2035, C.A",
    place: "Venezuela",
    period: "12 semanas (3 meses)",
    bullets: [
      "Participación como frontend en interfaz administrativa (dashboard/gestión).",
      "Mejoras de UI/UX, componentes y consistencia visual.",
      "Trabajo colaborativo para integrar pantallas con flujos internos.",
    ],
  },
  {
    role: "Compara Seguro — Proyecto personal (Asistencia al viajero)",
    company: "Compara Seguro",
    place: "Online",
    period: "Actual",
    bullets: [
      "Desarrollo de producto web: UI responsive, secciones de cotización y navegación.",
      "Iteración continua y despliegue en producción.",
    ],
    link: { label: "Ver sitio", href: "https://comparaseguro.auraux.dev/" },
  },
  {
    role: "Desarrollador Web — Freelance",
    company: "Freelance",
    place: "Remoto",
    period: "Oct 2021 – May 2022 / Feb 2025",
    bullets: [
      "Optimización visual y resolución de bugs en sitios corporativos (CSS/WordPress).",
      "Scraping con Python + Selenium para recolección estructurada de datos.",
      "Integración con CakePHP (formulario de cotización conectado a CRM).",
    ],
  },
  {
    role: "Técnico Multiskill (L1-L2)",
    company: "Atento — Campaña VTR",
    place: "Pereira, Colombia",
    period: "Jul 2025 – Oct 2025",
    bullets: [
      "Soporte remoto para móviles/TV/internet, resolución L1-L2.",
      "Manejo de KPIs: FCR, TMO, NPS y escalamientos.",
    ],
  },
  {
    role: "Instructor de Computación Básica",
    company: "Clases presenciales y remotas",
    place: "Caracas, Venezuela / Online",
    period: "Actual",
    bullets: [
      "Clases a adultos y niños: manejo básico de PC, internet, herramientas ofimáticas y seguridad básica.",
      "Acompañamiento práctico y material didáctico para diferentes niveles.",
    ],
  },
];

export const projects = [
  {
    title: "Compara Seguro",
    tag: "Proyecto personal · Producción",
    desc: "Plataforma web para asistencia al viajero: UI responsive, cotización, pagos y flujo completo.",
    tech: ["React", "Vite", "Express", "MariaDB", "SQL"],
    links: [{ label: "Live", href: "https://comparaseguro.auraux.dev/" }],
  },
  {
    title: "Dashboard Admin — Distribuidora FC Ferre Construye 2035, C.A",
    tag: "Proyecto · 12 semanas",
    desc: "Interfaz administrativa para gestión interna: pantallas, componentes y mejoras UI/UX.",
    tech: ["Frontend", "UI", "Componentes"],
    links: [],
  },
  {
    title: "Freelance: UI fixes & optimización visual",
    tag: "Clientes corporativos",
    desc: "Mejoras visuales y corrección de bugs de alto tráfico (CSS/WordPress).",
    tech: ["CSS", "WordPress"],
    links: [
      { label: "jobs.hp.com", href: "https://jobs.hp.com/" },
      { label: "careers.asurion.com", href: "https://careers.asurion.com/" },
      { label: "cooperstandard.com", href: "https://www.cooperstandard.com/" },
      { label: "apexsystems.com", href: "https://www.apexsystems.com/" },
    ],
  },
];

export const skillGroups = [
  {
    title: "Programación Web",
    desc: "Frontend + backend básico para productos reales.",
    items: [
      "React",
      "Vite",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Node.js (básico)",
      "Express.js",
      "SQL (consultas)",
      "MariaDB",
      "Git/GitHub",
      "Figma",
    ],
  },
  {
    title: "Infraestructura / Redes",
    desc: "Implementación y soporte de oficinas y entornos reales.",
    items: [
      "Linux Fundamentals",
      "Windows Fundamentals",
      "Firewalls (Fortigate/FortiClient VPN)",
      "Cableado estructurado (básico)",
      "Instalación de puestos de trabajo",
      "Control de acceso (huella / NFC)",
      "CCTV / cámaras inalámbricas",
      "Backups/Restore (operativo)",
    ],
  },
  {
    title: "Soporte Técnico",
    desc: "Atención L1–L2, troubleshooting y continuidad operativa.",
    items: [
      "Soporte N2 (hardware/software/red)",
      "Diagnóstico y resolución de incidencias",
      "Monitoreo de logs",
      "Atención al usuario y escalamiento",
      "KPIs: FCR, TMO, NPS",
      "Documentación y procedimientos",
    ],
  },
  {
    title: "Ciberseguridad",
    desc: "Bases y formación práctica orientada a entornos reales.",
    items: [
      "Monitoreo y Detección",
      "Protección de la Red",
      "Seguridad en la Nube",
      "Educación",
    ],
  },
];

// --- Formación (estudios + cursos + plataformas) ---
export const education = [
  {
    title: "UNEXPO — Ingeniería en Computación",
    place: "Caracas, Venezuela",
    period: "2019 – 2021",
    note: "4 semestres completados",
  },
  {
    title: "Cisco Networking Academy — Analista en Ciberseguridad (CCST)",
    place: "Online",
    period: "2025 – Presente",
    note: "En curso",
  },
  {
    title: "TryHackMe",
    place: "Online",
    period: "2025 – Presente",
    note: "Formación práctica (labs)",
  },
  {
    title: "Hack The Box",
    place: "Online",
    period: "2025 – Presente",
    note: "Formación práctica (labs)",
  },
];

export const courses = [
  {
    provider: "Platzi",
    label: "Curso Básico de JavaScript",
    href: "https://platzi.com/p/_.dvill/curso/1814-course/diploma/detalle/",
  },
  {
    provider: "Platzi",
    label: "Curso Básico de Python",
    href: "https://platzi.com/p/_.dvill/curso/1937-course/diploma/detalle/",
  },
  {
    provider: "Platzi",
    label: "Curso de Computación Básica",
    href: "https://platzi.com/p/_.dvill/curso/1741-course/diploma/detalle/",
  },
  {
    provider: "Platzi",
    label: "Curso de Introducción a la Terminal y Línea de Comandos",
    href: "https://platzi.com/p/_.dvill/curso/2292-course/diploma/detalle/",
  },
  {
    provider: "Platzi",
    label: "Curso de Introducción al Desarrollo Backend",
    href: "https://platzi.com/p/_.dvill/curso/2508-course/diploma/detalle/",
  },
  {
    provider: "Platzi",
    label:
      "Curso de Prework: Configuración de Entorno de Desarrollo en Windows",
    href: "https://platzi.com/p/_.dvill/curso/2042-course/diploma/detalle/",
  },
  {
    provider: "Platzi",
    label:
      "Curso de Python Intermedio: Comprehensions, Lambdas y Manejo de Errores",
    href: "https://platzi.com/p/_.dvill/curso/2255-course/diploma/detalle/",
  },
  {
    provider: "Platzi",
    label: "Curso de Frontend Developer",
    href: "https://platzi.com/p/_.dvill/curso/2467-course/diploma/detalle/",
  },
];

export const badges = [
  {
    title: "Computer Hardware Basics",
    href: "https://www.credly.com/badges/9db2c658-acdc-4879-a712-a2004747ec2c/public_url",
  },
  {
    title: "Introduction to Cybersecurity",
    href: "https://www.credly.com/badges/04c4b332-5a7e-4bff-b7b1-0a3b77d82556/public_url",
  },
];

// Para certificados en PDF:
// 1) Crea: /public/certs/
// 2) Mete ahí tus PDFs
// 3) Enlázalos acá con href: "/certs/tu-archivo.pdf"
export const pdfCertificates = [
  // { label: "Certificado Platzi — React", href: "/certs/platzi-react.pdf" },
];
