import { Github, Linkedin, Mail, Phone, Code, Database, Server, Wind, Bot, BrainCircuit, Cloud, BarChart, HardHat, GraduationCap, Briefcase } from 'lucide-react';

export const personalInfo = {
  name: "Ketan Nag",
  title: "Full-Stack Developer & AI Enthusiast",
  location: "Gandhinagar, Gujarat, India",
  email: "ketannag6677email@gmail.com",
  phone: "+917991423664",
  socials: [
    { name: "GitHub", url: "https://github.com/KetanNag", icon: Github },
    { name: "LinkedIn", url: "https://linkedin.com/in/ketannag", icon: Linkedin },
  ],
  contact: [
     { name: "ketannag6677email@gmail.com", url: "mailto:ketannag6677email@gmail.com", icon: Mail },
     { name: "+91 79914 23664", url: "tel:+917991423664", icon: Phone },
  ],
  bio: "I am a passionate Computer Science and Engineering student at Pandit Deendayal Energy University, graduating in May 2025. With a strong foundation in software development and a keen interest in artificial intelligence, I thrive on building elegant, efficient, and scalable solutions to complex problems. My experience spans across the full stack, from crafting responsive user interfaces with React to designing robust backend services with Node.js and managing databases. I am always eager to learn new technologies and apply my skills to create impactful applications."
};

export const education = {
    icon: GraduationCap,
    title: "Education",
    items: [
        {
            institution: "Pandit Deendayal Energy University",
            degree: "Bachelor of Technology in Computer Science & Engineering",
            duration: "Expected May 2025",
            description: "Relevant Coursework: Data Structures, Algorithms Analysis, Software Methodology, Database Management, Artificial Intelligence, Internet of Things, Cloud Computing."
        }
    ]
};

export const experience = {
    icon: Briefcase,
    title: "Experience",
    items: [
        {
            company: "Zidio Development",
            role: "Web Developer Intern",
            duration: "May 2024 - July 2024",
            location: "Bangalore, Karnataka (Remote)",
            description: "Developed a full-stack Resume Builder application. Key responsibilities included designing responsive UI components with React, building RESTful APIs with Node.js and Express for data management in MongoDB, and collaborating with mentors to enhance features and performance."
        },
        {
            company: "College Major Project",
            role: "Full Stack Developer",
            duration: "Jan 2025 - May 2025",
            location: "Gandhinagar, Gujarat",
            description: "Led the development of a complex web application using the MERN stack (React, Node.js, Express) and MySQL. Implemented features like user authentication, protected routes, CRUD operations, data filtering, and an admin dashboard. Integrated Mailtrap for email automation and utilized PrimeReact for UI components."
        }
    ]
};

export const projects = [
  {
    title: "Face Recognition Attendance System",
    description: "Developed a real-time attendance system using Python, Flask, and OpenCV. Implemented Haar Cascade for face detection and a KNN model for recognition with high accuracy. Features include user registration and automated attendance logging.",
    tags: ["Python", "Flask", "OpenCV", "KNN", "HTML/CSS"],
    link: "https://github.com/KetanNag"
  },
  {
    title: "Movie Recommendation System",
    description: "Designed a KNN-based collaborative filtering model for personalized movie recommendations. Engineered a user-item matrix and applied cosine similarity to predict ratings, evaluated using MSE.",
    tags: ["Python", "NumPy", "Pandas", "Scikit-learn", "Google Colab"],
    link: "https://github.com/KetanNag"
  },
  {
    title: "Climate Change Modeling",
    description: "Developed machine learning models (LSTM, CNN, Conv-LSTM) to forecast temperature trends. Built interactive Power BI dashboards for visualizing climate data and model predictions.",
    tags: ["Python", "Power BI", "Scikit-learn", "Deep Learning"],
    link: "https://github.com/KetanNag"
  },
   {
    title: "Resume Builder",
    description: "A full-stack web application enabling users to create, customize, and download professional resumes. Built with React for the frontend and Node.js/Express for the backend API.",
    tags: ["React", "Node.js", "Express", "MongoDB", "REST API"],
    link: "https://github.com/KetanNag"
  }
];

export const skills = [
  {
    category: "Languages",
    icon: Code,
    items: ["Python", "JavaScript", "TypeScript", "C", "Java", "SQL", "HTML/CSS"]
  },
  {
    category: "Backend & Databases",
    icon: Server,
    items: ["Node.js", "Express.js", "Flask", "MongoDB", "MySQL", "Firebase"]
  },
  {
    category: "Frontend",
    icon: Wind,
    items: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "PrimeReact"]
  },
  {
    category: "AI & Machine Learning",
    icon: BrainCircuit,
    items: ["Scikit-learn", "OpenCV", "Pandas", "NumPy", "Deep Learning"]
  },
  {
    category: "Developer Tools & Platforms",
    icon: HardHat,
    items: ["VS Code", "Docker", "Git & GitHub", "Figma", "Google Colab", "WordPress"]
  },
  {
    category: "Cloud & DevOps",
    icon: Cloud,
    items: ["Cloud Computing Fundamentals", "CI/CD Concepts"]
  }
];

export const leadership = {
    icon: BarChart,
    title: "Leadership & Extracurricular",
    items: [
        {
            organization: "JCI Club, PDEU",
            role: "Member",
            duration: "Spring 2022 - Present",
            description: "Collaborated with a team to organize technical and cultural events for over 300 students. Contributed to logistics, planning, and execution, enhancing teamwork and organizational skills."
        }
    ]
};
