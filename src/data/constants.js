export const personalInfo = {
    name: "Adepu Sri Charan",
    roles: [
        "Java Backend Engineer",
        "Full Stack Developer",
        "Microservices Architect",
        "Cloud Engineer",
        "Mobile App Developer"
    ],
    tagline: "Building robust backend systems & distributed architectures",
    email: "sricharan.adepu36@gmail.com",
    phone: "+91-8297057873",
    github: "https://github.com/AdepuSriCharan",
    linkedin: "https://www.linkedin.com/in/adepu-sri-charan-b6b0b2298/",
    resumeLink: "https://drive.google.com/file/d/16nK8gC0k-0p51Y0H6cAZWpWyK_f1cbxX/view?usp=drive_link",
    profileImage: "https://lh3.googleusercontent.com/d/12WTG2HL182cr5nou6e8aR4npjYjqMMyz"
};

export const aboutMe = {
    summary: `Full-stack engineer with deep expertise in backend systems, microservices architecture, and cloud-native applications. 
I specialize in designing scalable APIs, secure authentication flows, and event-driven distributed systems using Spring Boot, Kafka, and gRPC.

I build end-to-end solutions from database modeling and inter-service communication to mobile experiences with React Native and Expo ensuring performance, reliability, and real-world scalability. 
Currently exploring ML/AI with Python, TensorFlow, and PyTorch to integrate intelligent, data-driven features into backend-driven systems.`,
    highlights: [
        "Built complete end-to-end systems: backend, database design, frontend, and ML pipelines",
        "Experienced with Spring Boot, Spring Security, Spring Cloud, and microservices patterns",
        "Developed mobile applications using React Native with Expo for cross-platform deployment",
        "Deployed applications on AWS and experimented with ngrok and Cloudflare tunnels for local development",
        "Built event-driven systems using Apache Kafka for real-time data processing",
        "Exploring Python, TensorFlow, and PyTorch for machine learning applications",
        "Oracle Cloud Infrastructure certified professional (4 certifications)"
    ]
};

export const projects = [
    {
        name: "LifeLink",
        featured: true,
        description: "A comprehensive health-tech platform connecting blood, organ, stem cell, and tissue donors with recipients. Single-handedly architected and developed the entire system from scratch—backend microservices, database design, mobile frontend, and ML-powered matching algorithms.",
        techStack: ["Java", "Spring Boot", "Microservices", "PostgreSQL", "Kafka", "Docker", "React Native", "Expo", "Python", "TensorFlow"],
        highlights: [
            "Sole developer: Built complete backend, frontend, database, and ML components",
            "Architected 6+ microservices with event-driven Kafka communication",
            "Implemented ML-based donor-recipient matching with 90%+ accuracy",
            "Designed secure workflows with role-based access control and JWT authentication",
            "Implemented high-performance inter-service communication using gRPC for low-latency, strongly-typed microservice interactions",
            "Built real-time notifications using WebSockets",
            "Containerized all services with Docker for consistent deployment"
        ],
        github: "https://github.com/LifeLink-The-Digital-Bridge",
        architectureType: "Full-Stack Microservices"
    },
    {
        name: "AR Car Showcase",
        featured: true,
        isMajorProject: true,
        description: "Major college project: A full-stack AR application for visualizing interactive 3D car models in augmented reality. Led a team as Team Lead, coordinating development and delivering a production-ready application.",
        techStack: ["Spring Boot", "React Native", "Expo", "Viro React", "PostgreSQL", "AR/VR"],
        highlights: [
            "Team Lead: Coordinated development and architecture decisions",
            "Developed backend APIs for car specifications and AR asset management",
            "Implemented immersive AR experience for 3D car visualization",
            "Built search-based workflows for retrieving vehicle data and specifications"
        ],
        github: "https://github.com/AdepuSriCharan/AR-Car-Showcase",
        architectureType: "Full-Stack AR"
    },
    {
        name: "MusicBoxd",
        featured: false,
        description: "A music discovery platform enabling users to rate, review, and discover albums. Integrated with Spotify and Last.fm APIs for comprehensive music metadata and recommendations.",
        techStack: ["Java", "Spring Boot", "MySQL", "HTML", "CSS", "JavaScript", "AWS"],
        highlights: [
            "Designed RESTful APIs with Spring Boot for album and user management",
            "Integrated Spotify and Last.fm APIs for rich music metadata",
            "Secured backend with JWT-based authentication",
            "Deployed application on AWS EC2 with production configuration",
            "Collaborated with Saketh Pathike who built the Android app using Kotlin & Jetpack Compose"
        ],
        github: "https://github.com/MusicBoxd",
        androidRepo: "https://github.com/MusicBoxd/android",
        collaborator: {
            name: "Saketh Pathike",
            link: "https://sakethpathike.github.io/"
        },
        architectureType: "Monolithic"
    },
    {
        name: "AI-Based Crop Management System",
        featured: false,
        isHackathon: true,
        description: "Hackathon project: Agricultural intelligence platform combining Spring Boot backend services with ML models for crop disease prediction and management recommendations.",
        techStack: ["Spring Boot", "Python", "TensorFlow", "scikit-learn", "Machine Learning"],
        highlights: [
            "Hackathon-built system integrating backend APIs with ML prediction pipelines",
            "Built Spring Boot services for crop data management and API layer",
            "Trained ML models achieving 90%+ prediction accuracy",
            "Implemented disease detection using image classification"
        ],
        github: "https://code.swecha.org/AdepuSricharan/ai-based-crop-management-system",
        isGitLab: true,
        architectureType: "Backend + ML"
    },
    {
        name: "Dragon Fruit Disease Prediction",
        featured: false,
        isHackathon: true,
        description: "Machine learning project focused on detecting and classifying dragon fruit diseases using image-based models.",
        techStack: ["Python", "TensorFlow", "CNN", "Image Classification"],
        highlights: [
            "Built CNN-based image classification models for plant disease detection",
            "Performed data preprocessing, augmentation, and model evaluation",
            "Achieved high accuracy on test datasets for disease classification"
        ],
        architectureType: "ML Project"
        //   github:false
    }



];

export const skills = {
    languages: {
        title: "Languages",
        items: ["Java", "Python", "JavaScript", "TypeScript", "C"],
        color: "#f7df1e"
    },
    backend: {
        title: "Backend & APIs",
        items: ["Spring Boot", "Spring Security", "Spring Cloud", "Microservices", "REST APIs", "gRPC", "WebSockets", "Kafka"],
        color: "#6db33f"
    },
    databases: {
        title: "Databases",
        items: ["PostgreSQL", "MySQL", "Redis", "MongoDB"],
        color: "#336791"
    },
    mobile: {
        title: "Mobile Development",
        items: ["React Native", "Expo", "Viro React (AR)"],
        color: "#61dafb"
    },
    devops: {
        title: "DevOps & Cloud",
        items: ["Docker", "AWS (EC2, S3)", "Git", "GitHub Actions", "ngrok", "Cloudflare Tunnel"],
        color: "#2496ed"
    },
    frontend: {
        title: "Frontend",
        items: ["React", "HTML5", "CSS3", "JavaScript"],
        color: "#61dafb"
    },
    aiml: {
        title: "AI/ML (Exploring)",
        items: ["TensorFlow", "PyTorch", "scikit-learn", "Python ML"],
        color: "#ff6f00"
    }
};

export const certifications = [
    {
        name: "Oracle Cloud Infrastructure Foundations Associate",
        issuer: "Oracle",
        credential: "https://drive.google.com/file/d/1etL5o8uW3qpXQ668eshl9p59_x15juOt/view"
    },
    {
        name: "Oracle Cloud Infrastructure Developer Professional",
        issuer: "Oracle",
        credential: "https://drive.google.com/file/d/11ebxxkvop0obuv1Rtpk0gpi0y1a5bpxi/view"
    },
    {
        name: "Oracle Cloud Infrastructure DevOps Professional",
        issuer: "Oracle",
        credential: "https://drive.google.com/file/d/1a3xf0_VnjJfHxmM_EAYl7sP_IhuE8B-Z/view"
    },
    {
        name: "Oracle Cloud Infrastructure AI Foundations Associate",
        issuer: "Oracle",
        credential: "https://drive.google.com/file/d/1QIzGlICVEmp-tsXCiXezZKaIoyZQVUWa/view"
    },
    {
        name: "Programming in Java",
        issuer: "NPTEL",
        credential: "https://drive.google.com/file/d/1S4Y582nPmiCt8KtXOahd6ctIPwlXj8nW/view"
    },
    {
        name: "Data Structures and Algorithms using Java",
        issuer: "NPTEL",
        credential: "https://drive.google.com/file/d/18WKHDBj2Lqj_mb3L6siNN19HIbe7zP35/view"
    },
    {
        name: "The Joy of Computing using Python",
        issuer: "NPTEL",
        credential: "https://drive.google.com/file/d/1Zo-XrGEZqDEJnkYy9pNv2Sgx30pwqDm6/view"
    }
];

export const education = [
    {
        institution: "JB Institute of Engineering & Technology",
        location: "Moinabad Mandal, Hyderabad",
        degree: "B.Tech in Computer Science and Engineering",
        duration: "October 2022 – Present",
        grade: "CGPA: 8.4",
        type: "college"
    },
    {
        institution: "Sri Chaitanya Junior College",
        location: "Hyderguda, Rajendra Nagar",
        degree: "MPC Intermediate",
        duration: "June 2020 – May 2022",
        grade: "Percentage: 92%",
        type: "intermediate"
    },
    {
        institution: "Bhashyam Public School",
        location: "Hyderguda, Rajendra Nagar",
        degree: "Secondary School (SSC)",
        duration: "June 2015 – March 2020",
        grade: "GPA: 9.5",
        type: "school"
    }
];

export const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
];
