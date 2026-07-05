const withBase = (assetPath) => `${import.meta.env.BASE_URL}${assetPath.replace(/^\//, '')}`;

export const personalInfo = {
    name: "Adepu Sri Charan",
    roles: [
        "AI Engineer",
        "Java Backend Engineer",
        "Generative AI Developer",
        "Microservices Engineer",
        "Full-Stack Developer"
    ],
    tagline: "Building scalable distributed systems and production-ready Generative AI applications.",
    email: "sricharan.adepu36@gmail.com",
    phone: "+91-8297057873",
    github: "https://github.com/AdepuSriCharan",
    linkedin: "https://www.linkedin.com/in/adepu-sri-charan-b6b0b2298/",
    leetcode: "https://leetcode.com/u/Adepu_Sri_Charan/",
    coreStack: ["Java", "Spring Boot", "Microservices", "Kafka", "PostgreSQL", "Redis", "Docker", "AWS", "OCI"],
    aiKeywords: ["LLMs", "RAG", "LangChain", "Vector Databases", "Agentic AI", "MCP"],
    atsKeywords: ["Java", "Spring Boot", "Microservices", "Kafka", "PostgreSQL", "Redis", "Docker", "AWS", "Generative AI", "LLMs", "RAG", "LangChain", "Vector Databases", "Agentic AI", "Prompt Engineering", "Embeddings", "OpenAI", "Spring AI", "MCP"],
    resumeLink: "https://drive.google.com/file/d/16nK8gC0k-0p51Y0H6cAZWpWyK_f1cbxX/view?usp=drive_link",
    profileImage: withBase("/Profile_1.png"),
    allCertificatesLink: "https://drive.google.com/drive/folders/1S_Az2zSxklRcdhTOYgDD-cATXJ7_UbE9?usp=sharing"
};

export const aboutMe = {
    summary: `Full-stack engineer specializing in Java backend development, modern frontend applications, distributed systems, and AI-powered products. Experienced in building scalable microservices with Spring Boot, Kafka, PostgreSQL, and Redis, while also developing web and immersive applications using React, Next.js, React Native, Expo, Viro React, and React Three Fiber.

Beyond backend and frontend engineering, I build production-ready Generative AI solutions using Large Language Models (LLMs), Retrieval-Augmented Generation (RAG), vector databases, and agentic AI workflows.

Passionate about combining modern software engineering with Generative AI to build intelligent, scalable, and reliable products. Currently focused on multi-agent systems, MCP-based architectures, AI orchestration frameworks, and enterprise-grade LLM applications.`,
    highlights: [
        "Winner (1st Place) at Smart Innovation Hackathon 2K26 with an SIH-aligned health-tech solution",
        "Team Lead for hackathon and major project implementations",
        "Built complete end-to-end systems across backend, mobile, and data layers",
        "Experienced with Spring Boot, Spring Security, Spring Cloud, and microservices patterns",
        "Developed event-driven services using Kafka, Redis, and gRPC communication",
        "Built and experimented with advanced RAG architectures including Hybrid Search, Multi-Query Retrieval, Parent-Child Retrieval, and Contextual Compression",
        "Developed LLM-powered applications using vector search, embeddings, prompt engineering, and retrieval orchestration",
        "Exploring Agentic AI, MCP servers, multi-agent systems, AI workflows, and enterprise GenAI architectures",
        "Experienced in integrating Generative AI features into production-ready applications",
        "Oracle Cloud Infrastructure certified across Foundations, Developer, DevOps, and AI"
    ]
};

export const projects = [
    {
        name: "LifeLink",
        featured: true,
        description: "A health-tech platform connecting blood, organ, stem cell, and tissue donors with recipients through secure and scalable digital workflows.",
        techStack: ["Java", "Spring Boot", "Spring Cloud", "PostgreSQL", "Kafka", "Redis", "Docker", "React Native", "Expo", "Python"],
        highlights: [
            "Designed and deployed a distributed microservices system handling real-time donor-recipient matching with Kafka-based event streaming",
            "Implemented secure authentication and role-based authorization using JWT and Spring Security",
            "Built event-driven communication with Kafka and caching with Redis",
            "Developed React Native mobile workflows with notifications and map-enabled discovery",
            "Enabled low-latency inter-service communication using gRPC"
        ],
        github: "https://github.com/LifeLink-The-Digital-Bridge",
        architectureType: "Full-Stack Microservices"
    },
    {
        name: "SIH 2026: Digital Health Record Management System for Migrant Workers in Kerala aligned with sustainable development goals.",
        featured: true,
        isHackathon: true,
        isMajorProject: true,
        description: "Dedicated Smart Innovation Hackathon 2K26 winning project based on the SIH-aligned problem statement for Kerala migrant workers, extended and integrated with LifeLink for continuity of care and emergency donor support.",
        techStack: ["React Native", "Expo", "Java", "Spring Boot", "PostgreSQL", "Kafka", "LifeLink Integration"],
        highlights: [
            "Won 1st Place at Smart Innovation Hackathon 2K26 (JBIET)",
            "Served as Team Lead, driving architecture decisions, delivery planning, and demo execution",
            "Selected and implemented the SIH-aligned theme: digital health records for migrant workers in Kerala",
            "Designed dedicated role-based workflows and screens for Migrant, Doctor, and NGO users",
            "Integrated health records flow with LifeLink modules to support emergency and referral scenarios"
        ],
        externalLinks: [
            {
                label: "LinkedIn Post",
                url: "https://www.linkedin.com/feed/update/urn:li:activity:7445754810794094592/"
            },
            {
                label: "Winner Certificate",
                url: "https://drive.google.com/file/d/1gjv55Ak9qw59XMKMvFCSv08lTkMA9_gv/view?usp=drive_link"
            }
        ],
        architectureType: "Hackathon Winner"
    },
    {
        name: "Spring Security Starter",
        featured: true,
        description: "A zero-configuration Spring Boot starter published to Maven Central for plug-and-play JWT authentication, authorization, and token lifecycle management.",
        techStack: ["Java", "Spring Boot", "Spring Security", "Maven", "JWT"],
        highlights: [
            "Published reusable starter on Maven Central for rapid API security adoption",
            "Implemented role, permission, and ownership-based authorization patterns",
            "Supported multi-mode authentication including Internal, OAuth2, and Keycloak-ready design"
        ],
        github: "https://github.com/AdepuSriCharan/spring-security-starter",
        externalLinks: [
            {
                label: "Maven Central",
                url: "https://central.sonatype.com/artifact/io.github.adepusricharan/security-starter"
            }
        ],
        architectureType: "Developer Tools"
    },
    {
        name: "AR Car Showcase",
        featured: true,
        isMajorProject: true,
        description: "Production-ready Augmented Reality platform enabling users to explore, visualize, and customize life-sized 3D vehicles in real-world environments. Led the project from architecture and development to cloud deployment, public releases, and platform operations.",
        techStack: ["Spring Boot", "React Native", "Expo", "Viro React", "PostgreSQL", "AR/VR", "Cloudflare", "Oracle Cloud"],
        highlights: [
            "Led a multidisciplinary team and drove architecture, development workflows, release management, and technical decision-making",
            "Transformed an academic AR concept into a publicly accessible platform with live deployments, custom domain, mobile distribution, and production infrastructure",
            "Engineered Spring Boot APIs for vehicle catalog management, specifications retrieval, search, recommendations, and 3D asset delivery",
            "Built immersive AR experiences using React Native, Expo, and Viro React for life-sized 3D vehicle visualization and interaction",
            "Deployed and operated cloud infrastructure on Oracle Cloud with Cloudflare CDN, DNS, SSL, caching, and security controls for reliable public access"
        ],
        github: "https://github.com/AR-Car-Showcase",
        externalLinks: [
            {
                label: "Live Site",
                url: "https://arcarshowcase.com/"
            },
            {
                label: "Latest Release",
                url: "https://github.com/AR-Car-Showcase/mobile-app/releases/latest"
            }
        ],
        architectureType: "Production AR Platform"
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
        items: ["Spring Boot", "Spring Security", "Spring Cloud", "Microservices", "REST APIs", "gRPC", "WebSockets", "Kafka", "JWT", "Feign Client"],
        color: "#6db33f"
    },
    databases: {
        title: "Databases",
        items: [
            "PostgreSQL", "MySQL", "Redis", "Spring Data JPA"
        ],
        color: "#336791"
    },
    mobile: {
        title: "Mobile Development",
        items: [
            "React Native",
            "Expo",
            "Viro React",
            "React Three Fiber",
            "Android Development"
        ],
        color: "#61dafb"
    },
    devops: {
        title: "DevOps & Cloud",
        items: [
            "Docker",
            "Oracle Cloud",
            "AWS (EC2, S3)",
            "Cloudflare",
            "Nginx",
            "GitHub Actions",
            "Git",
        ],
        color: "#2496ed"
    },
    frontend: {
        title: "Frontend",
        items: [
            "React",
            "Next.js",
            "HTML5",
            "CSS3",
            "JavaScript",
            "TypeScript"
        ],
        color: "#61dafb"
    },
    aiml: {
        title: "Generative AI & AI Engineering",
        items: [
            "LLMs",
            "RAG",
            "Vector Databases",
            "Embeddings",
            "Semantic Search",
            "Hybrid Search",
            "Prompt Engineering",
            "Spring AI",
            "LangChain",
            "Agentic AI",
            "Multi-Agent Systems",
            "MCP",
            "AI Workflows",
            "OpenAI APIs"
        ],
        color: "#ff6f00"
    }
};

export const certifications = [
    {
        name: "Oracle Cloud Infrastructure Foundations Associate",
        issuer: "Oracle",
        credential: "https://drive.google.com/file/d/15GOOAkdfSna4pCpVxRsmoG7D8yQ1goG1/view?usp=drive_link"
    },
    {
        name: "Oracle Cloud Infrastructure Developer Professional",
        issuer: "Oracle",
        credential: "https://drive.google.com/file/d/1237Jd1BcOSW7mvfAS3OPGp6XbA4OEDAW/view?usp=drive_link"
    },
    {
        name: "Oracle Cloud Infrastructure DevOps Professional",
        issuer: "Oracle",
        credential: "https://drive.google.com/file/d/1z3NVYmQURjaidHmSLSJt4D60a4XciJfB/view?usp=drive_link"
    },
    {
        name: "Oracle Cloud Infrastructure AI Foundations Associate",
        issuer: "Oracle",
        credential: "https://drive.google.com/file/d/1nv16lwXdeazSq84SUFbK4y5JNlDf-FFD/view?usp=drive_link"
    },
    {
        name: "Programming in Java",
        issuer: "NPTEL",
        credential: "https://drive.google.com/file/d/1zy6lXqNC6J2hpAEu03HbNP6chN-s-RhM/view?usp=drive_link"
    },
    {
        name: "Data Structures and Algorithms using Java",
        issuer: "NPTEL",
        credential: "https://drive.google.com/file/d/1Nwbajbj405FBoGFl2tLor8FKwm6nushn/view?usp=drive_link"
    },
    {
        name: "The Joy of Computing using Python",
        issuer: "NPTEL",
        credential: "https://drive.google.com/file/d/16P_Tnwqg7DvSGiaBGHSrCxGstBtzJ2O0/view?usp=drive_link"
    }
];

export const education = [
    {
        institution: "JB Institute of Engineering & Technology",
        location: "Moinabad Mandal, Hyderabad",
        degree: "B.Tech in Computer Science and Engineering",
        duration: "October 2022 – 2026",
        grade: "CGPA: 8.34",
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

export const themeOptions = [
    { id: "dark-theme", label: "Dark" },
    { id: "light-theme", label: "Light" },
    { id: "midnight-theme", label: "Midnight" }
];
