const withBase = (assetPath) => `${import.meta.env.BASE_URL}${assetPath.replace(/^\//, '')}`;

export const personalInfo = {
    name: "Adepu Sri Charan",
    roles: [
        "AI Engineer",
        "Java Backend Engineer",
        "Distributed Systems Engineer",
        "Generative AI Developer",
        "Open Source Contributor"
    ],
    tagline: "Java and Spring backend systems, and the AI layer on top of them.",
    location: "Hyderabad, India",
    email: "sricharan.adepu36@gmail.com",
    phone: "+91-8297057873",
    github: "https://github.com/AdepuSriCharan",
    linkedin: "https://www.linkedin.com/in/adepu-sri-charan-b6b0b2298/",
    leetcode: "https://leetcode.com/u/Adepu_Sri_Charan/",
    medium: "https://medium.com/@sricharan.adepu36",
    siteUrl: "https://adepusricharan.github.io/portfolio/",
    coreStack: ["Java", "Spring Boot", "Microservices", "Kafka", "PostgreSQL", "Redis", "Docker", "AWS", "OCI"],
    aiKeywords: ["LLMs", "RAG", "Agentic AI", "Spring AI", "LangChain", "Vector Search", "Agent Evaluation", "MCP"],
    atsKeywords: ["Java", "Spring Boot", "Spring Security", "Spring AI", "Microservices", "Kafka", "PostgreSQL", "pgvector", "Redis", "Docker", "AWS", "Oracle Cloud", "Generative AI", "LLMs", "RAG", "LangChain", "Vector Databases", "Agentic AI", "Prompt Engineering", "Embeddings", "MCP", "Python", "FastAPI", "React Native", "Distributed Systems", "Event-Driven Architecture"],
    // Google Drive link, deliberately: the resume can be updated in Drive
    // without rebuilding or redeploying the site.
    resumeLink: "https://drive.google.com/file/d/16nK8gC0k-0p51Y0H6cAZWpWyK_f1cbxX/view?usp=drive_link",
    profileImage: withBase("/Profile_1.png"),
    allCertificatesLink: "https://drive.google.com/drive/folders/1S_Az2zSxklRcdhTOYgDD-cATXJ7_UbE9?usp=sharing"
};

export const heroStats = [
    { value: "1st", label: "SIH Hackathon 2K26" },
    { value: "200+", label: "LeetCode Problems" }
];

export const aboutMe = {
    summary: `Backend and AI engineer. I build distributed services with Java and Spring Boot, and the AI systems that sit on top of them — retrieval pipelines, agent workflows, and evaluation harnesses.

Currently a freelance engineer on Shipd Olympus, turning unsolved issues from real open-source repositories into benchmarks for AI coding agents. To write a task you first have to solve the problem yourself the way a maintainer would, prove the fix with tests, then containerise it so an agent's run is reproducible — it has made me a much sharper reader of unfamiliar codebases.

I also contribute upstream to CNCF Dapr and the Spring AI Community, and maintain a Spring Security starter on Maven Central.`,
    highlights: [
        "Freelance engineer at Shipd Olympus, building benchmarks for AI coding agents",
        "Merged pull requests in CNCF Dapr Quickstarts and Spring AI Session",
        "Spring Security starter on Maven Central — 4.1K+ downloads",
        "LifeLink: 11 microservices, 188 REST endpoints, 15 Kafka topics",
        "AR Car Showcase: live platform, 1.6K+ visitors and 27K+ requests per month",
        "1st place, Smart Innovation Hackathon 2K26 (60+ teams)",
        "RAG systems using hybrid search, multi-query and parent-child retrieval",
        "Oracle Cloud Infrastructure certified: Foundations, Developer, DevOps, AI",
        "200+ LeetCode problems solved"
    ]
};

export const experience = [
    {
        role: "Freelance Software Engineer",
        company: "Shipd — Olympus",
        period: "Aug 2026 – Present",
        current: true,
        locationType: "Remote · Freelance",
        summary: "I turn unsolved issues from real open-source repositories into benchmark tasks that measure how well AI coding agents handle genuine software engineering.",
        highlights: [
            "Solve real open-source issues end to end: reproduce the failure, write the reference patch a maintainer would ship, and derive fail-to-pass tests",
            "Author benchmark tasks and evaluation environments for assessing AI coding agents on multi-file repository work",
            "Containerise evaluation environments with Docker so every agent run is reproducible and deterministic",
            "Work across Java, Python, JavaScript, and Rust codebases"
        ],
        techStack: ["Java", "Python", "JavaScript", "Rust", "Docker", "Git", "AI Agent Evaluation"]
    }
];

export const openSource = [
    {
        project: "Spring AI Session",
        org: "Spring AI Community",
        repo: "https://github.com/spring-ai-community/spring-ai-session",
        summary: "Conversation memory and session management for Spring AI.",
        techStack: ["Java", "Spring AI", "JDBC", "Multi-Agent Systems"],
        contributions: [
            "Implemented runtime branch isolation for branch-specific memory in multi-agent LLM workflows",
            "Added scope-aware compaction to keep context windows small without dropping memory other branches depend on",
            "Optimised JDBC session compaction to reduce database I/O"
        ],
        prs: [
            { label: "#29", url: "https://github.com/spring-ai-community/spring-ai-session/pull/29" },
            { label: "#33", url: "https://github.com/spring-ai-community/spring-ai-session/pull/33" },
            { label: "#36", url: "https://github.com/spring-ai-community/spring-ai-session/pull/36" },
            { label: "#37", url: "https://github.com/spring-ai-community/spring-ai-session/pull/37" },
            { label: "#38", url: "https://github.com/spring-ai-community/spring-ai-session/pull/38" }
        ]
    },
    {
        project: "Dapr Quickstarts",
        org: "CNCF Dapr",
        repo: "https://github.com/dapr/quickstarts",
        summary: "Official getting-started examples for Dapr, a CNCF-graduated distributed application runtime.",
        techStack: ["Java", "Node.js", "Python", "Dapr", "YAML"],
        contributions: [
            "Implemented Multi-App Run for the Java, Node.js, and Python quickstarts using declarative dapr.yaml",
            "Reduced multi-service startup to a single command: dapr run -f .",
            "Aligned all three language tracks for a consistent quickstart experience"
        ],
        prs: [
            { label: "#1290", url: "https://github.com/dapr/quickstarts/pull/1290" },
            { label: "#1292", url: "https://github.com/dapr/quickstarts/pull/1292" },
            { label: "#1297", url: "https://github.com/dapr/quickstarts/pull/1297" }
        ]
    }
];

export const projects = [
    {
        name: "Spring Security Starter",
        featured: true,
        description: "A zero-configuration Spring Boot starter on Maven Central providing authentication and token lifecycle management through a single dependency.",
        techStack: ["Java", "Spring Boot", "Spring Security", "OAuth2", "Keycloak", "JWT", "Redis", "Maven Central"],
        highlights: [
            "Published to Maven Central with JWT, OAuth2 Resource Server, and Keycloak support — 4.1K+ downloads",
            "Refresh-token rotation with replay detection, JWT key rotation, and token revocation",
            "Rate limiting and brute-force protection on pluggable Redis or in-memory stores",
            "Role, permission, and ownership-based authorization"
        ],
        github: "https://github.com/AdepuSriCharan/spring-security-starter",
        externalLinks: [
            {
                label: "Maven Central",
                url: "https://central.sonatype.com/artifact/io.github.adepusricharan/security-starter"
            }
        ],
        architectureType: "Open Source Library"
    },
    {
        name: "LifeLink",
        featured: true,
        description: "A health-tech platform connecting blood, organ, stem cell, and tissue donors with recipients.",
        techStack: ["Java", "Spring Boot", "Spring Cloud", "FastAPI", "Kafka", "gRPC", "Redis", "PostgreSQL", "Docker", "React Native"],
        highlights: [
            "11 microservices (9 Spring Boot, 2 FastAPI) exposing 188 REST endpoints via Eureka service discovery",
            "Event-driven communication across 15 Kafka topics, with gRPC and STOMP WebSockets",
            "57-screen React Native app with ML-based donor matching and map-enabled discovery",
            "JWT and Spring Security with role-based authorization across all services",
            "Redis caching on donor-recipient matching hot paths"
        ],
        github: "https://github.com/LifeLink-The-Digital-Bridge",
        architectureType: "Distributed Microservices"
    },
    {
        name: "AR Car Showcase",
        featured: true,
        isMajorProject: true,
        description: "A public Augmented Reality platform for exploring and customising life-sized 3D vehicles, deployed on a custom domain with mobile releases.",
        techStack: ["Spring Boot", "FastAPI", "Flask", "React Native", "Viro React", "PostgreSQL", "Blender", "Oracle Cloud", "Cloudflare"],
        highlights: [
            "3 backend services (Spring Boot, FastAPI, Flask) exposing 70+ REST endpoints on Oracle Cloud",
            "Recommendation engine combining cosine similarity with Thompson sampling",
            "Headless-Blender pipeline generating customised GLB models on demand",
            "19-screen React Native AR app built with Viro React",
            "1.6K+ unique visitors and 27K+ requests in the last 30 days, served via Cloudflare CDN"
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
        name: "Digital Health Records for Migrant Workers",
        subtitle: "Smart Innovation Hackathon 2K26 — Winner",
        featured: true,
        isHackathon: true,
        isMajorProject: true,
        description: "An SIH-aligned digital health record system for migrant workers in Kerala, integrated with LifeLink for continuity of care.",
        techStack: ["React Native", "Expo", "Java", "Spring Boot", "PostgreSQL", "Kafka"],
        highlights: [
            "1st place at Smart Innovation Hackathon 2K26 (JBIET) against 60+ teams",
            "Led architecture decisions, delivery planning, and demo execution",
            "Role-based workflows for Migrant, Doctor, and NGO users",
            "Integrated with LifeLink for emergency and referral scenarios"
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
        name: "MusicBoxd",
        featured: false,
        description: "A music discovery platform for rating and reviewing albums, backed by Spotify and Last.fm metadata.",
        techStack: ["Java", "Spring Boot", "MySQL", "JavaScript", "AWS"],
        highlights: [
            "RESTful Spring Boot APIs for album, review, and user management",
            "Spotify and Last.fm API integration",
            "JWT-based authentication, deployed on AWS EC2"
        ],
        github: "https://github.com/MusicBoxd",
        androidRepo: "https://github.com/MusicBoxd/android",
        collaborator: {
            name: "Saketh Pathike",
            link: "https://sakethpathike.github.io/"
        },
        architectureType: "Monolithic Backend"
    },
    {
        name: "AI-Based Crop Management System",
        featured: false,
        isHackathon: true,
        description: "Agricultural platform pairing Spring Boot services with ML models for crop disease prediction.",
        techStack: ["Spring Boot", "Python", "TensorFlow", "scikit-learn"],
        highlights: [
            "Spring Boot services and API layer over the ML pipeline",
            "Models reaching 90%+ prediction accuracy",
            "Disease detection via image classification"
        ],
        github: "https://code.swecha.org/AdepuSricharan/ai-based-crop-management-system",
        isGitLab: true,
        architectureType: "Backend + ML"
    },
    {
        name: "Dragon Fruit Disease Prediction",
        featured: false,
        isHackathon: true,
        description: "CNN-based detection and classification of dragon fruit diseases from images.",
        techStack: ["Python", "TensorFlow", "CNN"],
        highlights: [
            "CNN image classification models for plant disease detection",
            "Data preprocessing, augmentation, and model evaluation"
        ],
        architectureType: "Machine Learning"
    }
];

export const skills = {
    languages: {
        title: "Languages",
        items: ["Java", "Python", "JavaScript", "TypeScript", "C", "SQL"],
        color: "#f7df1e"
    },
    backend: {
        title: "Backend & APIs",
        items: ["Spring Boot", "Spring Security", "Spring Cloud", "FastAPI", "Flask", "Microservices", "REST APIs", "gRPC", "WebSockets", "Apache Kafka", "OAuth2", "JWT"],
        color: "#6db33f"
    },
    aiml: {
        title: "AI Engineering & GenAI",
        items: ["LLM Integration", "RAG", "Hybrid Search", "Vector Search", "Embeddings", "Prompt Engineering", "Spring AI", "LangChain", "Agentic AI", "Multi-Agent Systems", "MCP", "AI Agent Evaluation", "XGBoost", "TensorFlow"],
        color: "#ff6f00"
    },
    databases: {
        title: "Data & Messaging",
        items: ["PostgreSQL", "pgvector", "MySQL", "Redis", "Apache Kafka", "Spring Data JPA"],
        color: "#336791"
    },
    devops: {
        title: "Cloud & DevOps",
        items: ["Docker", "Oracle Cloud (OCI)", "AWS (EC2, S3)", "Cloudflare", "Nginx", "GitHub Actions", "Maven", "Git", "Linux"],
        color: "#2496ed"
    },
    mobile: {
        title: "Mobile & Immersive",
        items: ["React Native", "Expo", "Viro React", "React Three Fiber", "AR/VR", "Blender Pipelines"],
        color: "#61dafb"
    },
    frontend: {
        title: "Frontend",
        items: ["React", "Next.js", "Vite", "HTML5", "CSS3", "Framer Motion"],
        color: "#61dafb"
    },
    testing: {
        title: "Testing & Practices",
        items: ["JUnit", "Mockito", "Postman", "Distributed Systems", "Event-Driven Architecture", "System Design"],
        color: "#c21325"
    }
};

export const dsa = {
    count: "200+",
    platform: "LeetCode",
    link: "https://leetcode.com/u/Adepu_Sri_Charan/",
    topics: ["Arrays", "Hashing", "Two Pointers", "Sliding Window", "Trees", "Graphs", "Dynamic Programming", "Greedy", "Binary Search"]
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
        name: "Programming in Java (Top 1%)",
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
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Open Source", href: "#open-source" },
    { name: "Skills", href: "#skills" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" }
];

export const themeOptions = [
    { id: "dark-theme", label: "Dark" },
    { id: "light-theme", label: "Light" },
    { id: "midnight-theme", label: "Midnight" }
];
