import { Search, Wrench, CheckCircle, Sparkles } from "lucide-vue-next";

export const reviews = [
  {
    name: 'Sarah Johnson',
    location: 'Toronto, ON',
    rating: 5,
    text: 'Absolutely amazing service! The team was professional, punctual, and thorough. My home\'s air quality has improved dramatically since the duct cleaning. Highly recommend Reflection Ducts!'
  },
  {
    name: 'Mike Chen',
    location: 'Calgary, AB',
    rating: 5,
    text: 'I was impressed by the attention to detail and the before/after photos they showed me. The difference in my HVAC system\'s efficiency is noticeable. Great value for money!'
  },
  {
    name: 'Jennifer Smith',
    location: 'Mississauga, ON',
    rating: 4,
    text: 'Professional service from start to finish. They explained everything they were doing and left my home cleaner than when they arrived. The air feels so much fresher now!'
  },
  {
    name: 'David Wilson',
    location: 'Brampton, ON',
    rating: 5,
    text: 'Fast, reliable, and reasonably priced. The technicians were knowledgeable and answered all my questions. I\'ll definitely be using their services again in the future.'
  },
  {
    name: 'Lisa Rodriguez',
    location: 'Oakville, ON',
    rating: 5,
    text: 'Excellent customer service and quality work. They were able to schedule me in quickly and completed the job efficiently. My allergies have improved significantly!'
  },
  {
    name: 'Robert Taylor',
    location: 'Vaughan, ON',
    rating: 4,
    text: 'I\'ve used several duct cleaning services over the years, but Reflection Ducts is by far the best. Thorough, professional, and honest. You won\'t be disappointed!'
  }
]

export const GalleryItems = {
  Ontario: [
    {
      title: "Furnace Cleaning",
      description: "Cleaning the furnace is vital for maintaining a safe and efficient heating system.",
      before: "/images/FurnaceCleaningBefore.jpeg",
      after: "/images/FurnaceCleaningAfter.jpg"
    },
    {
      title: "Dryer Vent Cleaning",
      description: "Dryer vent cleaning ensures proper airflow and efficiency.",
      before: "/images/DryerBeforeOntario.jpeg",
      after: "/images/DryerAfterOntario.jpeg"
    },
    {
      title: "Blower Motor Cleaning",
      description: "Blower motor cleaning improves HVAC efficiency.",
      before: "/images/FurnaceBlowerBefore.jpeg",
      after: "/images/FurnaceBlowerAfter.jpeg"
    },
    {
      title: "Register and Return Vents",
      description: "Ensures efficient airflow throughout the HVAC system.",
      before: "/images/VentsBefore.jpeg",
      after: "/images/VentsAfter.jpeg"
    },
    {
      title: "Duct Deep + Brushing Cleaning",
      description: "Deep brushing removes dust, debris, and allergens.",
      before: "/images/DuctBefore.jpeg",
      after: "/images/DuctAfter.jpeg"
    },
    {
      title: "Furnace Filter Cleaning",
      description: "Cleaning furnace filters preserves indoor air quality.",
      before: "/images/FilterBeforeOntario.jpeg",
      after: "/images/FilterAfterOntario.jpeg"
    }
  ],

  Alberta: [
    {
      title: "Furnace Cleaning",
      description: "Cleaning the furnace is vital for maintaining a safe and efficient heating system.",
      before: "/images/FurnaceCleaningBefore.jpeg",
      after: "/images/FurnaceCleaningAfter.jpg"
    },
    {
      title: "Dryer Vent Cleaning",
      description: "Dryer vent cleaning ensures proper airflow and efficiency.",
      before: "/images/DryerBeforeAlberta.jpeg",
      after: "/images/DryerAfterAlberta.jpeg"
    },
    {
      title: "Blower Motor Cleaning",
      description: "Blower motor cleaning improves HVAC efficiency.",
      before: "/images/FurnaceBlowerBefore.jpeg",
      after: "/images/FurnaceBlowerAfter.jpeg"
    },
    {
      title: "Register and Return Vents",
      description: "Ensures efficient airflow throughout the HVAC system.",
      before: "/images/VentsBefore.jpeg",
      after: "/images/VentsAfter.jpeg"
    },
    {
      title: "Duct Deep + Brushing Cleaning",
      description: "Deep brushing removes dust, debris, and allergens.",
      before: "/images/DuctBefore.jpeg",
      after: "/images/DuctAfter.jpeg"
    },
    {
      title: "Furnace Filter Cleaning",
      description: "Cleaning furnace filters preserves indoor air quality.",
      before: "/images/FilterBeforeAlberta.jpeg",
      after: "/images/FilterAfterAlberta.jpeg"
    }
  ]
}


export const stepsData = [
  {
    step: 1,
    title: "Step 1 — System Inspection & Preparation",
    description:
      "Our experienced operator shuts down your air-handling unit and inspects ducts, vents, and HVAC components to understand cleaning requirements accurately.",
    icon: Search,
  },
  {
    step: 2,
    title: "Step 2 — Home Protection & Equipment Setup",
    description:
      "We protect your home with floor coverings and corner guards, then set up our equipment using either a 250–300 PSI vacuum-truck system or heavy-duty portable machinery.",
    icon: Wrench,
  },
  {
    step: 3,
    title: "Step 3 — High-Powered Suction Cleaning",
    description:
      "Technicians attach a large vacuum hose to the main duct line. Instead of blowing air, we use high-pressure suction to pull dust, debris, and contaminants directly into sealed hose bags — ensuring a mess-free process.",
    icon: CheckCircle,
  },
  {
    step: 4,
    title: "Step 4 — Deep Agitation & Final Disinfection",
    description:
      "Air-whip tools and rotary brushes remove hardened dust, mold, and debris. Everything is extracted through the vacuum system, followed by a herbal disinfectant to kill bacteria and improve indoor air freshness.",
    icon: Sparkles,
  },
];
