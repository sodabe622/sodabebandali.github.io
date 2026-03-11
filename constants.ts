import { ResumeData } from './types';

export const RESUME_DATA: ResumeData = {
  name: "Sodabe Bandali",
  title: "Professional Portfolio",
  summary: "Welcome to my professional portfolio. I am passionate about building impactful solutions and exploring new technologies. This site showcases my journey, projects, and skills.\n\nI am currently focused on leveraging AI and modern web technologies to solve real-world problems. Feel free to explore my work or chat with my AI assistant to learn more about my background.",
  email: "sodabebandali02@gmail.com",
  location: "Global",
  socials: [
    { platform: "GitHub", url: "https://github.com", icon: "github" },
    { platform: "LinkedIn", url: "https://linkedin.com", icon: "linkedin" },
    { platform: "Twitter", url: "https://twitter.com", icon: "twitter" },
  ],
  news: [
    { date: "May 2025", content: "Speaking at React Summit about 'AI-Driven UI Components'." },
    { date: "Dec 2024", content: "Launched the new design system for TechNova Solutions.", link: "#", linkText: "View Case Study" },
    { date: "Aug 2024", content: "Contributed to the Open Source project 'Gemini-Tools'." },
    { date: "Mar 2024", content: "Published an article on 'Optimizing React Performance' in Frontend Weekly." },
  ],
  experience: [
    {
      id: "1",
      company: "TechNova Solutions",
      role: "Senior Frontend Engineer",
      period: "2021 - Present",
      description: [
        "Led a team of 5 developers to rebuild the core customer dashboard, improving load times by 40%.",
        "Implemented a modern design system using Tailwind CSS and React, reducing UI development time by 30%.",
        "Mentored junior developers and conducted code reviews to ensure high-quality standards."
      ]
    },
    {
      id: "2",
      company: "Creative Pulse Agency",
      role: "Full Stack Developer",
      period: "2018 - 2021",
      description: [
        "Developed and maintained multiple client e-commerce sites using Next.js and Shopify API.",
        "Integrated third-party payment gateways and complex shipping logic.",
        "Collaborated with designers to translate Figma prototypes into pixel-perfect responsive web pages."
      ]
    }
  ],
  projects: [
    {
      id: "p1",
      title: "AI Resume Assistant",
      description: "A smart portfolio website that lets recruiters chat with an AI representation of the candidate to learn more about their skills.",
      technologies: ["React", "Gemini API", "Tailwind CSS", "TypeScript"],
      imageUrl: "https://picsum.photos/600/400?random=1",
      github: "#",
      link: "#"
    },
    {
      id: "p2",
      title: "EcoTrack Analytics",
      description: "A real-time dashboard for tracking carbon footprint metrics for small businesses using data visualization.",
      technologies: ["D3.js", "Node.js", "Firebase", "Recharts"],
      imageUrl: "https://picsum.photos/600/400?random=2",
      github: "#",
      link: "#"
    },
    {
      id: "p3",
      title: "TaskFlow Pro",
      description: "Collaborative project management tool with real-time updates and drag-and-drop Kanban boards.",
      technologies: ["Vue.js", "Socket.io", "MongoDB", "Express"],
      imageUrl: "https://picsum.photos/600/400?random=3",
      github: "#"
    },
    {
      id: "p4",
      title: "Nebula UI Kit",
      description: "An open-source React component library focused on accessibility and dark mode support.",
      technologies: ["React", "Storybook", "A11y"],
      imageUrl: "https://picsum.photos/600/400?random=4",
      github: "#",
      link: "#"
    }
  ],
  skills: [
    {
      category: "Frontend",
      items: ["React", "TypeScript", "Tailwind CSS", "Next.js", "Vue.js", "HTML5/CSS3"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Python", "PostgreSQL", "GraphQL", "Firebase", "AWS"]
    },
    {
      category: "Tools & DevOps",
      items: ["Git", "Docker", "CI/CD", "Jest", "Figma", "Webpack"]
    }
  ]
};

export const SYSTEM_INSTRUCTION = `
You are an AI assistant for ${RESUME_DATA.name}'s professional portfolio website.
Your role is to answer questions from recruiters or visitors about ${RESUME_DATA.name}'s background, skills, and projects in a professional, engaging, and concise manner.

Here is the context about ${RESUME_DATA.name}:
${JSON.stringify(RESUME_DATA, null, 2)}

Guidelines:
1. Be helpful and enthusiastic but professional.
2. If asked about contact info, provide the email.
3. If asked about a specific project, describe it using the details provided.
4. If asked about something not in the resume, politely say you don't have that information but suggest contacting ${RESUME_DATA.name} directly.
5. Keep answers relatively short (under 3-4 sentences) unless asked for a detailed explanation.
`;