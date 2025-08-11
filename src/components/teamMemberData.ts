export interface TeamMember {
    role: string;
    name: string;
    image: string;
    modalId: string;
  }
  
  export interface TeamSectionData {
    sectionTitle: string;
    sectionSubtitle: string;
    description: string;
    teamMembers: TeamMember[];
  }
  
  export const teamContent: TeamSectionData = {
    sectionTitle: "OUR TEAM",
    sectionSubtitle: "Meet the Experts Behind Our Success",
    description: "A team of dedicated professionals working to deliver excellence in financial services",
    teamMembers: [
      {
        role: "CEO",
        name: "Fahad Imran",
        image: "images/ceoFinvest.jpg",
        modalId: "ceo"
      },
      {
        role: "Wealth Manager",
        name: "Saleem Chaudhry",
        image: "images/logo/fiinvestTransparentLOgo.png",
        modalId: "Wealth Manager"
      },
      {
        role: "Financial Advisor",
        name: "Dr Abdul Wahab",
        image: "images/logo/fiinvestTransparentLOgo.png",
        modalId: "Financial Advisor"
      },
      {
        role: "Financial Advisor",
        name: "Ahtisham Mehsud",
        image: "images/logo/fiinvestTransparentLOgo.png",
        modalId: "Financial Advisor2"
      }
    ]
  };