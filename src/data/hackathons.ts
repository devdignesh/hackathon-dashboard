import dayjs from "dayjs";

// Demo hackathons data
export const hackathonsData = [
  {
    id: 1725516580499,
    name: "AI Challenge",
    description: "A hackathon focused on solving AI-related problems.",
    startDate: dayjs(new Date(2024, 8, 1)),  
    endDate: dayjs(new Date(2024, 8, 7)),    
    level: "Medium",
    image: "/images/hackathon1.png",
  },
  {
    id: 1725516580500,
    name: "Blockchain Hack",
    description: "Build blockchain-based solutions for real-world problems.",
    startDate: dayjs(new Date(2024, 7, 28)),  
    endDate: dayjs(new Date(2024, 8, 3)),    
    level: "Hard",
    image: "/images/hackathon2.png",
  },
  {
    id: 1725516580501,
    name: "Climate Tech Sprint",
    description: "Hackathon for creating solutions to combat climate change.",
    startDate: dayjs(new Date(2024, 8, 5)),  
    endDate: dayjs(new Date(2024, 8, 10)), 
    level: "Easy",
    image: "/images/hackathon3.png",
  },
  {
    id: 1725516580502,
    name: "EdTech Innovators",
    description: "Hackathon to revolutionize education through technology.",
    startDate: dayjs(new Date(2024, 7, 20)), 
    endDate: dayjs(new Date(2024, 8, 1)),   
    level: "Medium",
    image: "/images/hackathon4.png",
  },
  {
    id: 1725516580503,
    name: "FinTech Revolution",
    description: "Create innovative FinTech solutions to transform finance.",
    startDate: dayjs(new Date(2024, 7, 15)), 
    endDate: dayjs(new Date(2024, 7, 25)),  
    level: "Hard",
    image: "/images/hackathon5.png",
  },
];
