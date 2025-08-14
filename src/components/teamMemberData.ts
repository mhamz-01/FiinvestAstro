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
        image: "https://ik.imagekit.io/a6bzcaqbn/images/ceoFinvest.jpg?updatedAt=1749752504634",
        modalId: "ceo"
      },
      {
        role: "Wealth Manager",
        name: "Saleem Chaudhry",
        image: "https://ik.imagekit.io/a6bzcaqbn/images/logo/fiinvestTransparentLOgo.png?updatedAt=1749752511517",
        modalId: "Wealth Manager"
      },
      {
        role: "Financial Advisor",
        name: "Dr Abdul Wahab",
        image: "https://ik.imagekit.io/a6bzcaqbn/images/logo/fiinvestTransparentLOgo.png?updatedAt=1749752511517",
        modalId: "Financial Advisor"
      },
      {
        role: "Financial Advisor",
        name: "Ahtisham Mehsud",
        image: "https://ik.imagekit.io/a6bzcaqbn/images/logo/fiinvestTransparentLOgo.png?updatedAt=1749752511517",
        modalId: "Financial Advisor2"
      }
    ]
  };