export interface MissionVisionData {
    mission: {
      label: string;
      number: string;
      title: string;
      text: string;
      icon: string;
    };
    vision: {
      label: string;
      number: string;
      title: string;
      text: string;
      icon: string;
    };
  }
  
  export const missionVisionContent: MissionVisionData = {
    mission: {
      label: "OUR MISSION",
      number: "01",
      title: "Empowering Financial Freedom Through Innovation",
      text: "We are committed to revolutionizing financial services by combining cutting-edge technology with expert guidance. Our mission is to democratize wealth creation, providing every client with personalized investment strategies that transform aspirations into achievements.",
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>'
    },
    vision: {
      label: "OUR VISION",
      number: "02",
      title: "Shaping the Future of Global Finance",
      text: "We envision a world where financial success is accessible to all, powered by innovative technology and guided by expertise. Our goal is to become the global standard for personalized investment solutions, creating lasting prosperity for generations to come.",
      icon: '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/>'
    }
  };