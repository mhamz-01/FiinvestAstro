export interface ValueCard {
    number: string;
    icon: string;
    title: string;
    description: string;
  }
  
  export interface ValueCardsData {
    sectionTitle: string;
    sectionSubtitle: string;
    highlightText: string;
    cards: ValueCard[];
  }
  
  export const valueCardsContent: ValueCardsData = {
    sectionTitle: "OUR CORE VALUES",
    sectionSubtitle: "Values That Define",
    highlightText: "Our Culture",
    cards: [
      {
        number: "01",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />`,
        title: "Innovation",
        description: "Embracing creative solutions and staying ahead of market trends to deliver exceptional value."
      },
      {
        number: "02",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />`,
        title: "Integrity",
        description: "Maintaining the highest standards of transparency and ethical practices in all operations."
      },
      {
        number: "03",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />`,
        title: "Client Focus",
        description: "Putting our clients' interests first and delivering personalized financial"
      },
      {
        number: "04",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />`,
        title: "Excellence",
        description: "Striving for the highest standards in every aspect of our financial services. Customer would be evident"
      },
      {
        number: "05",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />`,
        title: "Professionalism",
        description: "Maintaining the highest level of professional conduct and expertise in all interactions."
      },
      {
        number: "06",
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />`,
        title: "Growth",
        description: "Committed to continuous improvement and sustainable growth for our clients."
      },
    ]
  };