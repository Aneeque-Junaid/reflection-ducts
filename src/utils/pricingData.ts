export const Packages = {
  Ontario: [
    {
      name: "Basic",
      price: "$99",
      color: "primary",
      description: "Perfect for regular maintenance",
      borderColor: "gray-200",
      features: [
        "Unlimited Duct Cleaning",
        "Unlimited Vents Cleaning",
        "Main Line Cleaning",
        "Herbal Sanitizer Spray",
        "Inspection of Furnace, Dryervent, AC etc.",
      ],
      buttonClass: "btn-primary",
    },
    {
      name: "Premium",
      price: "$199",
      color: "secondary",
      description: "Comprehensive cleaning solution",
      borderColor: "secondary-500",
      isPopular: true,
      features: [
        "Unlimited Duct Cleaning",
        "Unlimited Vents Cleaning",
        "DryerVent Cleaning",
        "Natural Disinfectant Spray",
        "Furnace Cleaning.",
        "Inspection of AC Coil, Exhaust fan etc.",
      ],
      buttonClass: "btn-secondary",
    },
    {
      name: "Deluxe",
      price: "$399",
      color: "accent",
      description: "Complete premium service",
      borderColor: "gray-200",
      features: [
        "Unlimited Duct Cleaning",
        "Unlimited Vents Cleaning",
        "DryerVent/Exhaust Fan Cleaning",
        "Brushing Service",
        "Furnace/AC Coil Cleaning",
        "Natural Disinfectant Spray",
      ],
      buttonClass: "btn-accent",
    },
  ],

  Alberta: [
    {
      name: "Basic",
      price: "$89",
      color: "primary",
      description: "Essential cleaning for Alberta homes",
      borderColor: "gray-200",
      features: [
        "Unlimited Duct Cleaning",
        "Unlimited Vent Cleaning",
        "Main Line Cleaning",
        "Herbal Sanitizer Spray",
        "System Inspection",
      ],
      buttonClass: "btn-primary",
    },
    {
      name: "Premium",
      price: "$179",
      color: "secondary",
      description: "Deep cleaning ideal for larger homes",
      borderColor: "secondary-500",
      isPopular: true,
      features: [
        "Unlimited Duct Cleaning",
        "Unlimited Vent Cleaning",
        "Dryer Vent Cleaning",
        "Disinfectant Spray",
        "Furnace Cleaning",
        "AC Coil Check",
      ],
      buttonClass: "btn-secondary",
    },
    {
      name: "Deluxe",
      price: "$349",
      color: "accent",
      description: "Full premium package for complete home care",
      borderColor: "gray-200",
      features: [
        "Unlimited Duct Cleaning",
        "Unlimited Vent Cleaning",
        "DryerVent/Exhaust Fan Cleaning",
        "Full Brushing Service",
        "Furnace + AC Coil Cleaning",
        "Natural Disinfectant Spray",
      ],
      buttonClass: "btn-accent",
    },
  ],
}


export const Deals = {
  Ontario: [
    {
      dealTitle: "Starter Clean",
      services: ["Ducts", "Dryer Vent"],
      price: "$115",
      savings: "Save $30"
    },
    {
      dealTitle: "Essential Care",
      services: ["Ducts", "Furnace", "Dryer Vent"],
      price: "$169",
      savings: "Save $50"
    },
    {
      dealTitle: "Complete Home",
      services: ["Ducts", "Furnace", "Dryer Vent", "Return Line"],
      price: "$199",
      savings: "Save $75"
    },
    {
      dealTitle: "Premium Service",
      services: ["Ducts", "Dryer Vent", "Furnace", "Return Line", "Brushing Service"],
      price: "$259",
      savings: "Save $100",
      popular: true
    },
    {
      dealTitle: "Ultimate Package",
      services: ["Ducts", "Dryer Vent", "Furnace", "Return Line", "Brushing Service", "AC Coil Cleaning"],
      price: "$319",
      savings: "Save $130"
    }
  ],

  Alberta: [
    {
      dealTitle: "Starter Clean",
      services: ["Ducts", "Dryer Vent"],
      price: "$105",
      savings: "Save $25"
    },
    {
      dealTitle: "Essential Care",
      services: ["Ducts", "Furnace", "Dryer Vent"],
      price: "$159",
      savings: "Save $45"
    },
    {
      dealTitle: "Complete Home",
      services: ["Ducts", "Furnace", "Dryer Vent", "Return Line"],
      price: "$185",
      savings: "Save $70"
    },
    {
      dealTitle: "Premium Service",
      services: ["Ducts", "Dryer Vent", "Furnace", "Return Line", "Brushing Service"],
      price: "$239",
      savings: "Save $95",
      popular: true
    },
    {
      dealTitle: "Ultimate Package",
      services: ["Ducts", "Dryer Vent", "Furnace", "Return Line", "Brushing Service", "AC Coil Cleaning"],
      price: "$299",
      savings: "Save $120"
    }
  ]
}


export const pricingData = {
  ontario: [
    { service: 'Duct & Vents Cleaning', price: '$99' },
    { service: 'Brushing Service', price: '$99' },
    { service: 'Furnace', price: '$49' },
    { service: 'Dryer Vent', price: '$15' },
    { service: 'Return Line', price: '$25' },
    { service: 'AC Coil Cleaning', price: '$49' },
    { service: 'Complimentary Herbal Sanitization Spray', price: 'Included FREE' },
    { service: 'Main Line Cleaning', price: 'Included in packages' },
  ],
  alberta: [
    { service: 'Duct & Vents Cleaning', price: '$99' },
    { service: 'Brushing Service', price: '$99' },
    { service: 'Furnace', price: '$49' },
    { service: 'Dryer Vent', price: '$15' },
    { service: 'Return Line', price: '$25' },
    { service: 'AC Coil Cleaning', price: '$49' },
    { service: 'Complimentary Herbal Sanitization Spray', price: 'Included FREE' },
    { service: 'Main Line Cleaning', price: 'Included in packages' },
  ],
};