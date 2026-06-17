export type Region = "Noida" | "Greater Noida" | "Ghaziabad" | "Gurugram";

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

const gallerySet = [
  "/optimized/apartment-elevation.webp",
  "/optimized/centercourt-upscale.webp",
  "/optimized/outdoor-pool.webp",
  "/optimized/gym.webp",
  "/optimized/yoga.webp",
];

export const projects: Project[] = [
  {
    id: "orange-county",
    region: "Ghaziabad",
    name: "Orange County",
    type: "Premium Residential Community",
    location: "Indirapuram, Ghaziabad",
    image: "/optimized/apartment-elevation.webp",
    detail:
      "Orange County is a well-established premium residential address in Indirapuram, offering strong city connectivity, mature neighborhood infrastructure, landscaped open spaces, and a comfortable community lifestyle for families.",
    metric: "Ghaziabad",
    status: "Enquire Now",
    configuration: "Premium Apartments",
    address: "Ahinsa Khand 1, Indirapuram, Ghaziabad, Uttar Pradesh 201014",
    highlights: [
      "Established Indirapuram address",
      "Close to daily retail and schools",
      "Landscaped community environment",
      "Strong Ghaziabad and Delhi-NCR connectivity",
    ],
    images: gallerySet,
  },
  {
    id: "cherry-county",
    region: "Greater Noida",
    name: "Cherry County",
    type: "Modern Residential Development",
    location: "Tech Zone IV, Greater Noida",
    image: "/optimized/centercourt-upscale.webp",
    detail:
      "Cherry County is placed in the fast-growing Tech Zone IV belt of Greater Noida, combining residential comfort with access to employment hubs, wide sector roads, and planned neighborhood conveniences.",
    metric: "Greater Noida",
    status: "Enquire Now",
    configuration: "Premium Residences",
    address: "GH-5B, Tech Zone IV, Amrapali Dream Valley, Greater Noida, Uttar Pradesh 201306",
    highlights: [
      "Tech Zone IV micro-market",
      "Planned residential surroundings",
      "Convenient access to Greater Noida West",
      "Lifestyle amenities for families",
    ],
    images: [
      "/optimized/centercourt-upscale.webp",
      "/optimized/outdoor-pool.webp",
      "/optimized/apartment-elevation.webp",
      "/optimized/gym.webp",
    ],
  },
  {
    id: "cleo-county",
    region: "Noida",
    name: "Cleo County",
    type: "Luxury Residential Community",
    location: "Sector 121, Noida",
    image: "/optimized/outdoor-pool.webp",
    detail:
      "Cleo County is a premium residential community in Sector 121, Noida, known for resort-inspired planning, wellness-led amenities, and a location that connects smoothly to key Noida sectors.",
    metric: "Noida",
    status: "Enquire Now",
    configuration: "Luxury Apartments",
    address: "Sector 121, Noida, Basi Bahuddin Nagar, Uttar Pradesh 201316",
    highlights: [
      "Sector 121 Noida location",
      "Resort-style lifestyle planning",
      "Wellness and recreation amenities",
      "Convenient access to central Noida",
    ],
    images: [
      "/optimized/outdoor-pool.webp",
      "/optimized/centercourt-upscale.webp",
      "/optimized/gym.webp",
      "/optimized/yoga.webp",
    ],
  },
  {
    id: "county-107",
    region: "Noida",
    name: "County 107 by County Group",
    type: "Luxury High-Rise Residences",
    location: "Sector 107, Noida",
    image: "/optimized/skyline-tower.webp",
    detail:
      "County 107 by County Group is a luxury residential address in Sector 107, Noida, shaped for refined high-rise living with elegant residences, curated amenities, and strong access across the Noida expressway corridor.",
    metric: "Noida",
    status: "Enquire Now",
    configuration: "Luxury High-Rise Apartments",
    address: "GH-1A, Sector 107, Noida, Uttar Pradesh 201304",
    highlights: [
      "Located in Sector 107, Noida",
      "Luxury high-rise residences",
      "Premium clubhouse and leisure spaces",
      "Excellent access to Noida city routes",
    ],
    images: [
      "/optimized/skyline-tower.webp",
      "/optimized/centercourt-upscale.webp",
      "/optimized/outdoor-pool.webp",
      "/optimized/apartment-elevation.webp",
    ],
  },
  {
    id: "clove-county",
    region: "Noida",
    name: "Clove County",
    type: "Premium Expressway Residences",
    location: "Sector 151, Noida",
    image: "/optimized/apartment-elevation.webp",
    detail:
      "Clove County sits along the Sector 151 expressway belt, offering a quieter residential setting with quick access to emerging infrastructure, green surroundings, and Noida's growth corridor.",
    metric: "Noida",
    status: "Enquire Now",
    configuration: "Premium Apartments",
    address: "Expressway, Sector 151, Noida, Aurangabad, Uttar Pradesh 201304",
    highlights: [
      "Sector 151 expressway location",
      "Calmer low-density surroundings",
      "Connected to Noida growth corridors",
      "Planned community lifestyle",
    ],
    images: [
      "/optimized/apartment-elevation.webp",
      "/optimized/outdoor-pool.webp",
      "/optimized/yoga.webp",
      "/optimized/gym.webp",
    ],
  },
  {
    id: "ivory-county",
    region: "Noida",
    name: "Ivory County by County Group",
    type: "Premium Residential Development",
    location: "Sector 115, Noida",
    image: "/optimized/apartment-elevation.webp",
    detail:
      "Ivory County by County Group is positioned in Sector 115, Noida, with premium residences, landscaped community spaces, and a practical location near Sorkha Village Road for everyday urban convenience.",
    metric: "Noida",
    status: "Ongoing / Select Inventory",
    configuration: "Luxury Apartments",
    address: "HCG4+5Q3, Plot no. GH-1, Sorkha Village Rd, Sector 115, Sorkha, Noida, Uttar Pradesh 201305",
    highlights: [
      "Sector 115 Noida address",
      "Premium residential towers",
      "Landscaped central greens",
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
    region: "Ghaziabad",
    name: "Jade County by County Group",
    type: "Luxury Residential Community",
    location: "Wave City, Ghaziabad",
    image: "/optimized/centercourt-upscale.webp",
    detail:
      "Jade County by County Group brings an amenity-rich residential experience to Wave City, Ghaziabad, with premium homes, family-focused planning, and convenient access from NH-24.",
    metric: "Ghaziabad",
    status: "Ongoing / Enquire Now",
    configuration: "Premium Residences",
    address: "Cherrywood Enclave, Plot No. GH-10, Wave City Marg, near NH-24, Ghaziabad, Uttar Pradesh 203207",
    highlights: [
      "Wave City Ghaziabad location",
      "Near NH-24 connectivity",
      "Lifestyle clubhouse",
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
    id: "ivy-county",
    region: "Noida",
    name: "Ivy County by County Group",
    type: "Premium Urban Residences",
    location: "Sector 75, Noida",
    image: "/optimized/skyline-tower.webp",
    detail:
      "Ivy County by County Group is located in Sector 75, Noida, offering premium urban residences with metro-side convenience, everyday retail access, and a polished community lifestyle.",
    metric: "Noida",
    status: "Enquire Now",
    configuration: "Premium Apartments",
    address: "GH 15, Eco City Rd, Sector 75, Noida, Uttar Pradesh 201316",
    highlights: [
      "Sector 75 Noida location",
      "Urban residential convenience",
      "Close to established sector amenities",
      "Premium community living",
    ],
    images: [
      "/optimized/skyline-tower.webp",
      "/optimized/apartment-elevation.webp",
      "/optimized/centercourt-upscale.webp",
      "/optimized/gym.webp",
    ],
  },
  {
    id: "coco-county",
    region: "Greater Noida",
    name: "Coco County by County Group",
    type: "Contemporary Residential Project",
    location: "Greater Noida West",
    image: "/optimized/outdoor-pool.webp",
    detail:
      "Coco County by County Group is a contemporary residential project in Greater Noida West, planned for comfortable apartment living with good access to Vaidpura, sector roads, and neighborhood conveniences.",
    metric: "Greater Noida",
    status: "Enquire Now",
    configuration: "Modern Apartments",
    address: "GH-03C, Greater Noida W Rd, Vaidpura, Greater Noida, Uttar Pradesh 203207",
    highlights: [
      "Greater Noida West address",
      "Connected sector-road location",
      "Modern residential planning",
      "Community amenities for daily life",
    ],
    images: [
      "/optimized/outdoor-pool.webp",
      "/optimized/centercourt-upscale.webp",
      "/optimized/apartment-elevation.webp",
      "/optimized/yoga.webp",
    ],
  },
  {
    id: "olive-county",
    region: "Ghaziabad",
    name: "Olive County",
    type: "Established Residential Address",
    location: "Vasundhara, Ghaziabad",
    image: "/optimized/centercourt-upscale.webp",
    detail:
      "Olive County is an established residential address in Vasundhara, Ghaziabad, offering a settled neighborhood environment, access to daily conveniences, and practical connectivity across the Ghaziabad-Delhi NCR belt.",
    metric: "Ghaziabad",
    status: "Enquire Now",
    configuration: "Premium Apartments",
    address: "Shaheed Captain Manoj Pandey Marg, Sector 5, Vasundhara, Ghaziabad, Uttar Pradesh 201012",
    highlights: [
      "Vasundhara Sector 5 location",
      "Established residential neighborhood",
      "Daily conveniences nearby",
      "Good Ghaziabad and Delhi-NCR access",
    ],
    images: [
      "/optimized/centercourt-upscale.webp",
      "/optimized/apartment-elevation.webp",
      "/optimized/outdoor-pool.webp",
      "/optimized/gym.webp",
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
