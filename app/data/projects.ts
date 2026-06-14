export type Region = "Noida" | "Gurugram";

export interface Project {
  id: string;
  region: Region;
  name: string;
  type: string;
  location: string;
  image: string;
  detail: string;
  metric: string;
  status: string;
  configuration: string;
  address: string;
  highlights: string[];
  images: string[];
}

export const projects: Project[] = [
  {
    id: "ivory-county",
    region: "Noida",
    name: "Ivory County",
    type: "Premium Residential Development",
    location: "Noida",
    image: "/optimized/apartment-elevation.webp",
    detail:
      "Ivory County is positioned as a refined residential address in Noida with premium planning, landscaped community spaces, and a comfortable urban lifestyle.",
    metric: "Noida",
    status: "Ongoing / Select Inventory",
    configuration: "Luxury Apartments",
    address: "Noida, Uttar Pradesh",
    highlights: [
      "Premium residential towers",
      "Landscaped central greens",
      "Clubhouse lifestyle",
      "Secure gated community",
    ],
    images: [
      "/optimized/apartment-elevation.webp",
      "/optimized/centercourt-upscale.webp",
      "/optimized/gym.webp",
      "/optimized/yoga.webp",
    ],
  },
  {
    id: "jade-county",
    region: "Noida",
    name: "Jade County",
    type: "Luxury Residential Community",
    location: "Noida",
    image: "/optimized/centercourt-upscale.webp",
    detail:
      "Jade County brings a clean, amenity-rich residential experience to Noida with well-planned residences, leisure facilities, and strong urban connectivity.",
    metric: "Noida",
    status: "Ongoing / Enquire Now",
    configuration: "Premium Residences",
    address: "Noida, Uttar Pradesh",
    highlights: [
      "Modern residences",
      "Lifestyle clubhouse",
      "Fitness and wellness zones",
      "Family-focused community planning",
    ],
    images: [
      "/optimized/centercourt-upscale.webp",
      "/optimized/outdoor-pool.webp",
      "/optimized/yoga.webp",
      "/optimized/apartment-elevation.webp",
    ],
  },
  {
    id: "central-court",
    region: "Gurugram",
    name: "The Central Court",
    type: "Flagship Luxury Residential Project",
    location: "Gurugram",
    image: "/optimized/skyline-tower.webp",
    detail:
      "A landmark residential address in Gurugram with high-rise residences, a premium clubhouse, pool deck, wellness zones, and lifestyle amenities.",
    metric: "Gurugram",
    status: "Delivered / Ready Lifestyle",
    configuration: "Luxury High-Rise Residences",
    address: "The Central Court, Gurugram, Haryana",
    highlights: [
      "High-rise residences",
      "Premium clubhouse",
      "Pool and wellness deck",
      "Fitness, yoga, and leisure amenities",
    ],
    images: [
      "/optimized/skyline-tower.webp",
      "/optimized/centercourt-upscale.webp",
      "/optimized/outdoor-pool.webp",
      "/optimized/gym.webp",
      "/optimized/yoga.webp",
      "/optimized/apartment-elevation.webp",
    ],
  },
];
