import { Search, Wrench, CheckCircle, Sparkles } from "lucide-vue-next";

export const Reviews = {
  Ontario: [
    {
      name: "Sarah M.",
      location: "Toronto, ON",
      rating: 5,
      text: "I booked Reflection Duct for a full duct cleaning before winter, and I couldn’t be happier. The technician arrived on time, was very professional, and explained everything clearly. My home feels so much fresher, and I can actually breathe better!"
    },
    {
      name: "Daniel Criston",
      location: "Mississauga, ON",
      rating: 4,
      text: "Good experience overall. The team was friendly and worked efficiently. Only issue was a small delay in confirming the appointment, but the service itself was great."
    },
    {
      name: "Priya K.",
      location: "Ottawa, ON",
      rating: 5,
      text: "Amazing service! Didn’t realize how dirty our ducts were before. Proper equipment, professional team, and great tips for maintaining clean air."
    },
    {
      name: "Michael Roger",
      location: "Hamilton, ON",
      rating: 3,
      text: "Service was okay. Team was polite, but pricing felt a bit higher compared to other quotes."
    },
    {
      name: "Emily",
      location: "London, ON",
      rating: 5,
      text: "Highly professional. They arrived on time, worked quietly, and left no mess. My allergies have improved noticeably."
    }
  ],

  Alberta: [
    {
      name: "Jason Hardt",
      location: "Calgary, AB",
      rating: 5,
      text: "Fantastic job! The team was on time, professional, and thorough. Air quality improved instantly."
    },
    {
      name: "Lauren Hampton",
      location: "Edmonton, AB",
      rating: 4,
      text: "Good service. Quick and friendly staff. Appointment scheduling took a bit longer, but overall very solid work."
    },
    {
      name: "Kevin Butcher",
      location: "Calgary, AB",
      rating: 3,
      text: "Cleaning was okay but expected more detail. Pricing felt slightly high, though the team was polite."
    },
    {
      name: "Aisha R.",
      location: "Edmonton, AB",
      rating: 5,
      text: "Excellent experience! They explained the whole process and left everything spotless. AC airflow improved a lot."
    },
    {
      name: "Brad Sid",
      location: "Calgary, AB",
      rating: 4,
      text: "Professional and friendly technicians. Ducts are noticeably cleaner. Slight delay in appointment confirmation."
    }
  ]
}

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
