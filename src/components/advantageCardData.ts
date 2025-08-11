export interface CardData {
    icon: string;
    title: string;
    description: string;
  }
  
  export interface AdvantageCardsData {
    sectionTitle: string;
    sectionSubtitle: string;
    description: string;
    cards: CardData[];
  }
  
  export const advantageCardsContent: AdvantageCardsData = {
    sectionTitle: "WHY CHOOSE US",
    sectionSubtitle: "The Fiinvest Advantage",
    description: "Experience excellence in financial services with our expert team and proven track record of success",
    cards: [
      {
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />`,
        title: "Expert Guidance",
        description: "Professional financial advisors with years of industry experience"
      },
      {
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />`,
        title: "Proven Track Record",
        description: "Consistent performance and returns for our valued clients"
      },
      {
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />`,
        title: "Tailored Solutions",
        description: "Customized investment strategies for your unique goals"
      },
      {
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />`,
        title: "Portfolio Diversity",
        description: "Access to a wide range of investment opportunities"
      },
      {
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />`,
        title: "Secure Investments",
        description: "Risk management and security measures for your peace of mind"
      },
      {
        icon: `<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />`,
        title: "24/7 Support",
        description: "Dedicated assistance whenever you need it"
      }
    ]
  };