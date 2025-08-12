export interface ServiceFeature {
    text: string;
  }
  
  export interface ServiceBadge {
    color: string;
    text: string;
    value: string;
  }
  
  export interface Service {
    id: string;
    number: string;
    title: string;
    heading: string;
    description: string;
    features: string[];
    image: string;
    ctaText: string;
    badges: {
      status: {
        color: string;
        text: string;
      };
      info: string;
      metric: {
        value: string;
        label: string;
      };
    };
  }
  
  export interface ServicesData {
    services: Service[];
  }
  
  export const servicesContent: ServicesData = {
    services: [
      {
        id: "private-equity",
        number: "01",
        title: "PRIVATE EQUITY",
        heading: "Strategic Private\nEquity Solutions",
        description: "Unlock exceptional growth opportunities through our comprehensive private equity consulting Team. We provide expert guidance in deal structuring, portfolio management, and value creation strategies.",
        features: [
          "Deal Structuring",
          "Portfolio Optimization",
          "Exit Strategy",
          "Value Creation"
        ],
        image: "images/privatequity.jpg",
        ctaText: "Explore Private Equity Opportunities",
        badges: {
          status: {
            color: "green",
            text: "Active Investments"
          },
          info: "$500M+ Managed",
          metric: {
            value: "95%",
            label: "Success Rate"
          }
        }
      },
      {
        id: "mutual-funds",
        number: "02",
        title: "MUTUAL FUNDS",
        heading: "Professional\nFund Management",
        description: "Access diversified investment portfolios managed by experienced professionals. Our mutual fund solutions cater to various risk appetites and investment objectives.",
        features: [
          "Diversified Portfolios",
          "Professional Management",
          "Risk Management",
          "Regular Monitoring"
        ],
        image: "images/mutualfunds.jpg",
        ctaText: "Discover Mutual Fund Options",
        badges: {
          status: {
            color: "blue",
            text: "Actively Managed"
          },
          info: "20+ Fund Options",
          metric: {
            value: "88%",
            label: "Return Rate"
          }
        }
      },
      {
        id: "stock-trading",
        number: "03",
        title: "STOCK TRADING",
        heading: "Smart Stock\nTrading Solutions",
        description: "Take advantage of market opportunities with our expert stock trading services. We provide real-time analysis, market insights, and personalized trading strategies.",
        features: [
          "Market Analysis",
          "Trading Strategy",
          "Risk Assessment",
          "Portfolio Tracking"
        ],
        image: "images/stocks.jpg",
        ctaText: "Start Trading Today",
        badges: {
          status: {
            color: "yellow",
            text: "Live Trading"
          },
          info: "24/7 Support",
          metric: {
            value: "92%",
            label: "Trade Accuracy"
          }
        }
      }
      // Add other services here (Mutual Funds, Stocks)
    ]
  };