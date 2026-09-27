import { ecosystemNodes } from "@/lib/ecosystem";

export type ProductDetail = {
  divisionId: string;
  divisionName: string;
  productId: string;
  productName: string;
  tagline: string;
  accent: string;
  accentSoft: string;
  heroImage?: string;
  status: string;
  overview: string;
  problem: string;
  solution: string;
  capabilities: {
    title: string;
    description: string;
  }[];
  whyAuris: string;
  roadmap: {
    phase: string;
    title: string;
    description: string;
  }[];
};

export const productCatalog: ProductDetail[] = [
  // =========================
  // HAVEN
  // =========================
  {
    divisionId: "haven",
    divisionName: "Haven",
    productId: "adam",
    productName: "ADAM",
    tagline: "Autonomous Medical Assistance for Independent Living",
    accent: "#c49a6c",
    accentSoft: "#e3c7a3",
    heroImage: "/images/haven/adam-concept.png",
    status: "Concept Development",

    overview:
      "ADAM is an intelligent medical-assistance concept designed to help elderly and disabled individuals manage daily health routines while remaining independent.",

    problem:
      "Many individuals wish to remain independent but require support with medications, wellness, communication, and emergencies.",

    solution:
      "ADAM combines AI assistance, reminders, caregiver communication, and future robotic interaction into one connected platform.",

    capabilities: [
      {
        title: "Medication Support",
        description: "Intelligent medication reminders and tracking.",
      },
      {
        title: "Wellness Monitoring",
        description: "Daily health check-ins and caregiver notifications.",
      },
    ],

    whyAuris:
      "AURIS believes technology should extend independence while preserving dignity.",

    roadmap: [
      {
        phase: "Phase 01",
        title: "AI Foundation",
        description: "Develop Haven AI and wellness assistance.",
      },
      {
        phase: "Phase 02",
        title: "Connected Care",
        description: "Integrate devices and caregiver services.",
      },
      {
        phase: "Phase 03",
        title: "Physical Robotics",
        description: "Develop the ADAM robotic platform.",
      },
    ],
  },

  // =========================
  // TERRA
  // =========================
  {
    divisionId: "terra",
    divisionName: "Terra",
    productId: "swarm",
    productName: "Swarm",
    tagline: "Advanced Tornado Sensor Deployment System",
    accent: "#22c55e",
    accentSoft: "#86efac",
    heroImage: "/images/terra/swarm-concept.png",
    status: "Concept Development",

    overview:
      "Swarm is a rapid-deployment tornado sensing platform designed to collect atmospheric data from within severe weather events.",

    problem:
      "Meteorologists lack direct measurements from inside tornadoes.",

    solution:
      "Deploy intelligent sensor pods into developing tornadoes to improve forecasting and research.",

    capabilities: [
  {
    title: "Rapid Sensor Deployment",
    description:
      "Deploy multiple intelligent sensor pods into severe weather environments where traditional equipment cannot safely operate.",
  },
  {
    title: "Atmospheric Data Collection",
    description:
      "Capture pressure, temperature, wind velocity, humidity, and other critical measurements from within active storm systems.",
  },
  {
    title: "Live Telemetry",
    description:
      "Transmit field data back to the Terra base platform for monitoring, analysis, and future forecasting integrations.",
  },
  {
    title: "Swarm Coordination",
    description:
      "Coordinate multiple distributed pods to collect data across different positions inside and around the storm.",
  },
],
    whyAuris:
      "Understanding severe weather can save lives and improve forecasting.",

    roadmap: [
  {
    phase: "Phase 01",
    title: "Sensor Research",
    description:
      "Define the core atmospheric measurements, pod requirements, communications architecture, and deployment strategy.",
  },
  {
    phase: "Phase 02",
    title: "Prototype Development",
    description:
      "Build and test the Terra base unit, deployment mechanism, sensor pods, and live telemetry system.",
  },
  {
    phase: "Phase 03",
    title: "Controlled Field Testing",
    description:
      "Evaluate durability, communications, sensor accuracy, pod recovery, and deployment performance in controlled environments.",
  },
  {
    phase: "Phase 04",
    title: "Severe Weather Trials",
    description:
      "Partner with meteorological and emergency-management organizations for supervised real-world storm testing.",
  },
],
  },

  // =========================
  // ATLAS
  // =========================
  {
    divisionId: "atlas",
    divisionName: "Atlas",
    productId: "navigate",
    productName: "Navigate",
    tagline: "Smart Indoor Navigation",
    accent: "#38bdf8",
    accentSoft: "#7dd3fc",
    status: "Concept Development",

    overview:
      "Atlas Maps provides intelligent indoor navigation for malls, hospitals, campuses, airports, and public facilities.",

    problem:
      "Visitors often struggle to locate destinations inside large buildings.",

    solution:
      "Interactive QR-powered navigation with turn-by-turn guidance.",

    capabilities: [],
    whyAuris:
      "Navigation should be effortless for everyone.",

    roadmap: [],
  },

  // =========================
  // ORBIT
  // =========================
  {
    divisionId: "orbit",
    divisionName: "Orbit",
    productId: "satellites",
    productName: "Satellites",
    tagline: "Earth Observation & Space Systems",
    accent: "#8b5cf6",
    accentSoft: "#c4b5fd",
    heroImage: "/images/orbit/satellite-concept.png",
    status: "Concept Development",

    overview:
      "Orbit Satellites explores future Earth observation and orbital technologies.",

    problem:
      "Global monitoring requires reliable space-based sensing.",

    solution:
      "Develop future satellite technologies for monitoring and research.",

    capabilities: [],
    whyAuris:
      "Space technology expands humanity's understanding of Earth.",

    roadmap: [],
  },

  // =========================
  // ENTERPRISE
  // =========================
  {
    divisionId: "enterprise",
    divisionName: "Enterprise",
    productId: "websites",
    productName: "Websites",
    tagline: "Professional Digital Experiences",
    accent: "#94a3b8",
    accentSoft: "#cbd5e1",
    status: "Available",

    overview:
      "Enterprise Websites delivers modern business websites designed around performance, accessibility, and growth.",

    problem:
      "Many organizations rely on outdated websites that fail to engage customers.",

    solution:
      "Create fast, modern, responsive digital experiences tailored to every client.",

    capabilities: [],
    whyAuris:
      "Every business deserves a website that reflects its mission.",

    roadmap: [],
  },

  // =========================
  // NEXUS
  // =========================
  {
    divisionId: "nexus",
    divisionName: "Nexus",
    productId: "ai-core",
    productName: "AI Core",
    tagline: "Connected Artificial Intelligence Platform",
    accent: "#06b6d4",
    accentSoft: "#67e8f9",
    heroImage: "/images/nexus/ai-core-concept.png",
    status: "Concept Development",

    overview:
      "AI Core serves as the intelligence platform connecting products throughout the AURIS ecosystem.",

    problem:
      "Organizations often use disconnected AI systems with limited interoperability.",

    solution:
      "Provide a unified intelligence layer powering every AURIS division.",

    capabilities: [],
    whyAuris:
      "AI should unify technology rather than fragment it.",

    roadmap: [],
  },
 // =========================
  // MEDICAL
  // =========================
  {
    divisionId: "medical",
    divisionName: "Medical",
    productId: "scribe",
    productName: "SCRIBE",
    tagline: "AI Clinical Documentation & Medical Transcription",
    accent: "#dc2626",
    accentSoft: "#fca5a5",
    heroImage: "/images/medical/scribe-concept.png",
    status: "Concept Development",

    overview:
      "SCRIBE is an AI-powered clinical documentation platform designed to reduce administrative workload while improving the speed, accuracy, and consistency of patient documentation.",

    problem:
      "Healthcare providers spend significant time documenting patient encounters, reducing the time available for direct patient care.",

    solution:
      "SCRIBE assists clinicians by generating structured medical documentation, organizing encounter information, and streamlining clinical workflows.",

    capabilities: [
      {
        title: "AI Clinical Documentation",
        description:
          "Generate structured clinical notes from patient encounters.",
      },
      {
        title: "Voice Transcription",
        description:
          "Convert physician dictation into organized medical documentation.",
      },
      {
        title: "SOAP Note Generation",
        description:
          "Automatically organize documentation into Subjective, Objective, Assessment, and Plan formats.",
      },
      {
        title: "Clinical Workflow Integration",
        description:
          "Designed for future integration with electronic health record systems and medical platforms.",
      },
    ],

    whyAuris:
      "AURIS believes clinicians should spend more time caring for patients and less time completing paperwork.",

    roadmap: [
      {
        phase: "Phase 01",
        title: "Documentation Engine",
        description:
          "Develop AI-assisted clinical documentation and transcription capabilities.",
      },
      {
        phase: "Phase 02",
        title: "Medical Workflow Integration",
        description:
          "Integrate patient records, documentation workflows, and provider tools.",
      },
      {
        phase: "Phase 03",
        title: "Healthcare Ecosystem",
        description:
          "Expand into intelligent clinical assistance across the AURIS Medical platform.",
      },
    ],
  },

];

export function createFallbackProduct(
  divisionId: string,
  productId: string,
): ProductDetail | undefined {
  const division = ecosystemNodes.find(
    (node) => node.id === divisionId,
  );

  if (!division) {
    return undefined;
  }

  const product = division.products.find(
    (item) => item.id === productId,
  );

  if (!product) {
    return undefined;
  }

  return {
    divisionId: division.id,
    divisionName: division.name,
    productId: product.id,
    productName: product.name,

    tagline: `${product.name} within the AURIS ${division.name} ecosystem`,

    accent: division.color,
    accentSoft: division.color,

    heroImage: `/images/${division.id}/${product.id}-concept.png`,

    status: "Concept Development",

    overview:
      `${product.name} is an AURIS ${division.name} concept being developed as part of our mission to create technology that helps people through thoughtful, connected, and intelligent systems.`,

    problem:
      `${product.name} is being explored to address real-world challenges within ${division.tagline.toLowerCase()} and provide users with a clearer, safer, or more efficient experience.`,

    solution:
      `AURIS is designing ${product.name} as a modular technology solution that can grow through research, prototyping, user feedback, and future integrations across the AURIS ecosystem.`,

    capabilities: [
      {
        title: "Human-Centered Design",
        description:
          "Designed around practical user needs, accessibility, clarity, and ease of use.",
      },
      {
        title: "Connected Intelligence",
        description:
          "Planned to connect with related AURIS products, services, data, and intelligent systems.",
      },
      {
        title: "Scalable Architecture",
        description:
          "Structured to evolve from an early concept into a larger and more capable technology platform.",
      },
      {
        title: "Future Integrations",
        description:
          "Designed with room for APIs, sensors, analytics, automation, AI, and connected-device support.",
      },
    ],

    whyAuris:
      `AURIS Technologies is developing ${product.name} because technology should solve meaningful problems, improve everyday experiences, and remain centered around the people who use it.`,

    roadmap: [
      {
        phase: "Phase 01",
        title: "Concept Definition",
        description:
          "Define the users, purpose, core problem, requirements, and initial product experience.",
      },
      {
        phase: "Phase 02",
        title: "Prototype Development",
        description:
          "Build and evaluate an interactive software, hardware, or connected-system prototype.",
      },
      {
        phase: "Phase 03",
        title: "Testing and Expansion",
        description:
          "Gather feedback, improve the design, add integrations, and prepare the concept for future development.",
      },
    ],
  };
}

export function getProduct(
  divisionId: string,
  productId: string,
): ProductDetail | undefined {
  const customProduct = productCatalog.find(
    (product) =>
      product.divisionId === divisionId &&
      product.productId === productId,
  );

  if (customProduct) {
    return customProduct;
  }

  return createFallbackProduct(divisionId, productId);
}