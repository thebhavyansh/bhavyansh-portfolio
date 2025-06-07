import { Project } from "@/types";


export const projects: Project[] = [
    {
        title: 'ExpensX',
        description: 'An AI-enhanced finance management platform that automates transaction tracking and delivers comprehensive financial analysis.',
        technologies: ["Next.js", "TailwindCSS", "Node.js", "Postgresql", "Clerk", "React.js"],
        githubLink: "https://github.com/thebhavyansh/ExpensX",
        demoLink: 'https://expensx.vercel.app/',
        image: '/travel.png',
      },
      {
        title: 'Fshare',
        description: 'A password protected file-sharing application with robust security features and intuitive user experience.',
        technologies: ["Next.js", "Firebase","Tailwind CSS", "React.js", "Node.js"],
        githubLink: "https://github.com/thebhavyansh/Fshare",
        demoLink: 'https://fshare-psi.vercel.app/',
        image:"/FShare.png"
      },
      {
        title: 'Ai-mock-interview',
        description: 'A full-stack AI mock interview platform with real-time audio/video recording and speech-to-text conversion.',
        technologies:["Next.js", "Drizzle-orm", "Postgrsql","Tailwind CSS", "Clerk", "React.js", "Node.js"],
        githubLink: 'https://github.com/thebhavyansh/Mock-Interview-App',
        demoLink: 'https://mock-interview-app-azure.vercel.app/dashboard',
        image: "/ai.png",
      },
     
   
  ];