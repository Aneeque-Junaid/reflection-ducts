export const packages = [
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
]

export const deals = [
  {
    title: "Ducts + Dryer Vent",
    price: "$115",
  },
  {
    title: "Duct + Furnace + Dryer Vent",
    price: "$169",
  },
  {
    title: "Duct + Furnace + Dryer Vent + Return Line",
    price: "$199",
  },
  {
    title: "Duct + Dryer Vent + Furnace + Return Line + Brushing Service",
    price: "$259",
  },
  {
    title: "Duct + Dryer Vent + Furnace + Return Line + Brushing Service + AC Coil Cleaning",
    price: "$319",
  },
]

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