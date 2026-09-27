export type EcosystemProduct = {
  id: string;
  name: string;
};

export type EcosystemNode = {
  id: string;
  name: string;
  tagline: string;
  color: string;
  products: EcosystemProduct[];
};

export const ecosystemNodes: EcosystemNode[] = [
  {
    id: "haven",
    name: "Haven",
    tagline: "Independent Living Technology",
    color: "#c49a6c",
    products: [
      { id: "adam", name: "ADAM" },
      { id: "adromeda", name: "ADROMEDA" },
      { id: "haven-ai", name: "HAVEN AI" },
    ],
  },
  {
    id: "terra",
    name: "Terra",
    tagline: "Environmental Intelligence",
    color: "#22c55e",
    products: [
      { id: "swarm", name: "SWARM" },
      { id: "seismo", name: "SEISMO" },
      { id: "vulcan", name: "VULCAN" },
      { id: "wildfire", name: "WILDFIRE" },
      { id: "oceanus", name: "OCEANUS" },
      { id: "avalanche", name: "AVALANCHE" },
      { id: "atmos", name: "ATMOS" },
    ],
  },
  {
    id: "atlas",
    name: "Atlas",
    tagline: "Navigation & Property Intelligence",
    color: "#38bdf8",
    products: [
      { id: "navigate", name: "NAVIGATE" },
      { id: "directory", name: "DIRECTORY" },
      { id: "insights", name: "INSIGHTS" },
    ],
  },
  {
    id: "orbit",
    name: "Orbit",
    tagline: "Space & Aerospace Technologies",
    color: "#a855f7",
    products: [
      { id: "sentinel", name: "SENTINEL" },
      { id: "relay", name: "RELAY" },
      { id: "vision", name: "VISION" },
      { id: "weather", name: "WEATHER" },
      { id: "guardian", name: "GUARDIAN" },
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Business Systems & Software",
    color: "#94a3b8",
    products: [
      { id: "command", name: "COMMAND" },
      { id: "projects", name: "PROJECTS" },
      { id: "service-desk", name: "SERVICE DESK" },
      { id: "assets", name: "ASSETS" },
      { id: "identity", name: "IDENTITY" },
      { id: "analytics", name: "ANALYTICS" },
    ],
  },
  {
    id: "medical",
    name: "Medical",
    tagline: "AI Healthcare & Clinical Intelligence",
    color: "#dc2626",
    products: [
      { id: "scribe", name: "SCRIBE" },
      { id: "triage", name: "TRIAGE" },
      { id: "pulse", name: "PULSE" },
      { id: "chart", name: "CHART" },
      { id: "rounds", name: "ROUNDS" },
      { id: "medsync", name: "MEDSYNC" },
    ],
  },
];