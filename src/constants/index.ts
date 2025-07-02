// src/constants/index.ts
import {
    examic,
    leucine,
    athena,
    genius
} from "@/assets"; // Create an index.ts in /assets to export all images

export const navLinks = [
    { id: "about", title: "About" },
    { id: "work", title: "Work" },
    { id: "projects", title: "Projects" },
    { id: "contact", title: "Contact" },
];

const services = [
    { title: "Full Stack Developer", icon: "path/to/web_icon.png" },
    { title: "AI/ML Innovator", icon: "path/to/ai_icon.png" },
    { title: "Community Builder", icon: "path/to/community_icon.png" },
    { title: "Open Source Advocate", icon: "path/to/opensource_icon.png" },
];

const technologies = [
    // Populate with your skills:
    { name: "React JS", icon: "..." },
    { name: "Next.js", icon: "..." },
    { name: "Node.js", icon: "..." },
    { name: "TypeScript", icon: "..." },
    { name: "Python", icon: "..." },
    { name: "MongoDB", icon: "..." },
    { name: "Docker", icon: "..." },
    { name: "Three.js", icon: "..." },
];

const experiences = [
    {
        title: "Software Development Engineer",
        company_name: "Examic EdTech",
        icon: examic, // path to icon
        iconBg: "#383E56",
        date: "Aug 2024 - Present",
        points: [
            "Developing an end-to-end on-screen evaluation system with advanced grading algorithms.",
            "Engineering internal tools with RAG workflows using LLMs (GPT, Gemini), improving content creation efficiency by 40%.",
            "Leading development of real-time analytics and reporting modules using Next.js, Express, and MongoDB.",
        ],
    },
    {
        title: "Full-Stack Developer",
        company_name: "Leucine, Inc.",
        icon: leucine,
        iconBg: "#E6DEDD",
        date: "Dec 2023 - Aug 2024",
        points: [
            "Orchestrated development of FDATracker, integrating Java and React for a scalable architecture.",
            "Implemented advanced GPT models for deep analysis of FDA documents, enhancing interpretive accuracy.",
            "Led the frontend for an AI-based application builder, automating design generation.",
        ],
    },
    {
        title: "Software Development Engineer Intern",
        company_name: "Athena Square Private Limited",
        icon: athena,
        iconBg: "#383E56",
        date: "Sept 2023 - Dec 2023",
        points: [
            "Developed high-performance interface components using NextJS.",
            "Translated UI/UX wireframes into functional, responsive components.",
            "Integrated RESTful APIs and optimized applications for maximum speed and scalability."
        ],
    },
];

const projects = [
    {
        name: "Genius: AI SASS Platform",
        description:
            "A full-fledged SAAS app with AI tools for image, video, and music generation, leveraging OpenAI and ReplicateAI, with secure Stripe subscription management.",
        tags: [
            { name: "nextjs", color: "blue-text-gradient" },
            { name: "prisma", color: "green-text-gradient" },
            { name: "tailwind", color: "pink-text-gradient" },
            { name: "openai", color: "orange-text-gradient" },
        ],
        image: genius, // path to project image
        source_code_link: "https://github.com/...",
    },
    // ... Add your other projects here
];

const achievements = [
    //... Add your achievements here
];

export { services, technologies, experiences, projects, achievements };