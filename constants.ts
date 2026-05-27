import { Service, Project, Testimonial, NavItem, SectionId, TechDomain, ProcessStep, ServiceItem, PortfolioItem } from './types';

export const COMPANY_NAME = "OITS Dhaka";
export const TAGLINE = "Digital Mastery Engineered for Performance";
export const CONTACT_EMAIL = "info@oitsdhaka.com";
export const ADDRESS = "House # 42, Road # 2/A, Block # Z, Dhaka 1209, Bangladesh";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: `#${SectionId.HOME}` },
  { label: 'Services', href: `#${SectionId.SERVICES}` },
  { label: 'Workflow', href: `#${SectionId.PROCESS}` },
  { label: 'Portfolio', href: `#${SectionId.PORTFOLIO}` },
  { label: 'About', href: `#${SectionId.ABOUT}` },
  { label: 'Contact', href: `#${SectionId.CONTACT}` },
];

export const NAVIGATION_LINKS = [
  { label: "Home", path: "/" },
  { label: "Services", path: "/services" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "About", path: "/about" },
  { label: "Careers", path: "/careers" },
  { label: "Editorial Edition", path: "/editorial-showcase", isFooterOnly: true }
];

export const TRUSTED_PARTNERS = [
  { name: 'TECHFLOW', icon: 'TF' },
  { name: 'CLOUDSCALE', icon: 'CS' },
  { name: 'INNOVATE', icon: 'IN' },
  { name: 'NEXUS', icon: 'NX' },
  { name: 'VANTAGE', icon: 'VT' },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    id: 'discovery',
    number: '01',
    title: 'Discovery & Strategy',
    description: 'We dive deep into your business goals, target audience, and market landscape to define a clear roadmap.',
    icon: 'Search',
  },
  {
    id: 'design',
    number: '02',
    title: 'Design & Prototyping',
    description: 'Our design team creates intuitive, user-centric interfaces and interactive prototypes for early validation.',
    icon: 'Layers',
  },
  {
    id: 'development',
    number: '03',
    title: 'Agile Development',
    description: 'Using high-performance tech stacks, we build your solution in sprints, ensuring transparency and quality.',
    icon: 'Code',
  },
  {
    id: 'testing',
    number: '04',
    title: 'Quality Assurance',
    description: 'Rigorous manual and automated testing ensures your product is bug-free, secure, and ready for scale.',
    icon: 'ShieldCheck',
  },
  {
    id: 'deployment',
    number: '05',
    title: 'Launch & Evolution',
    description: 'We handle the deployment and provide ongoing support to scale your product based on user feedback.',
    icon: 'Rocket',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Enterprise Web Solutions',
    description: 'Scalable, high-performance web applications built for business logic and seamless integration.',
    icon: 'Globe',
    features: ['React & Next.js Core Optimization', 'Cloud-Native SaaS Architecture', 'High-Conversion E-commerce', 'Headless CMS & API Orchestration'],
  },
  {
    id: 'mobile-dev',
    title: 'Native Mobile Apps',
    description: 'High-fidelity iOS and Android applications that deliver native-grade performance and fluid UX.',
    icon: 'Smartphone',
    features: ['Swift & Kotlin Architecture', 'React Native & Flutter Mastery', 'Offline-First Functionality', 'Sensors & Device API Integration'],
  },
  {
    id: 'dedicated-teams',
    title: 'Dedicated Teams',
    description: 'Expand your engineering capacity seamlessly with our fully managed teams of experts, meticulously selected to align with your project’s agile workflows.',
    icon: 'Users',
    features: ['Expert Staff Augmentation', 'Agile Project Management', 'Full-stack Technical Leads', 'Seamless Team Integration'],
  },
  {
    id: 'cloud',
    title: 'Cloud Solutions & Infrastructure',
    description: 'Aligning enterprise setups with AWS, Azure, and Google Cloud optimization patterns to yield dynamic scaling.',
    icon: 'Cloud',
    features: ['Serverless & Microservices', 'Kubernetes Cluster Management', 'Automated CI/CD Pipelines', 'Automated Database Backups'],
  },
  {
    id: 'tech-frontiers',
    title: 'Solutions for Technology Frontiers',
    description: 'Cutting-edge development in AI, ML, AR/VR, Blockchain, and IoT to stay ahead of the curve.',
    icon: 'Terminal',
    features: ['AI/ML Predictive Analytics', 'Immersive AR/VR Apps', 'Blockchain & Web-3 (DApps)', 'IoT & Edge Computing'],
  },
  {
    id: 'cross-platform',
    title: 'Cross-platform Solutions',
    description: 'Unified experiences across devices using modern cross-platform frameworks.',
    icon: 'Smartphone',
    features: ['Progressive Web App (PWA)', 'React Native Frameworks', 'Flutter Application Development', 'Unified OS Experience'],
  },
];

export const UNIFIED_SERVICES: ServiceItem[] = [
  {
    id: "custom-software",
    title: "Custom Software Development",
    description: "We orchestrate robust client systems designed to automate internal team workflows, integrate legacy APIs, and resolve complex scaling bottlenecks.",
    extendedFeatures: [
      "Workflow Automation Engines",
      "Legacy Core Migration",
      "SaaS Multi-tenant Control",
      "Enterprise Risk Mitigations"
    ],
    category: "core",
    iconName: "Users",
    slug: "custom-software-development"
  },
  {
    id: "web-dev",
    title: "Enterprise Web Solutions",
    description: "Scalable, high-performance web applications built for business logic and seamless integration.",
    extendedFeatures: [
      "React & Next.js Core Optimization",
      "Cloud-Native SaaS Architecture",
      "High-Conversion E-commerce",
      "Headless CMS & API Orchestration"
    ],
    category: "web",
    iconName: "Globe",
    slug: "enterprise-web-solutions"
  },
  {
    id: "mobile-dev",
    title: "Native Mobile Apps",
    description: "High-fidelity iOS and Android applications that deliver native-grade performance and fluid UX.",
    extendedFeatures: [
      "Swift & Kotlin Architecture",
      "React Native & Flutter Mastery",
      "Offline-First Functionality",
      "Sensors & Device API Integration"
    ],
    category: "mobile",
    iconName: "Smartphone",
    slug: "native-mobile-apps"
  },
  {
    id: "cloud",
    title: "Cloud Solutions & Infrastructure",
    description: "Robust AWS/GCP infrastructure with automated CI/CD pipelines and high availability.",
    extendedFeatures: [
      "Serverless & Microservices",
      "Kubernetes Cluster Management",
      "Automated CI/CD Pipelines",
      "Automated Database Backups"
    ],
    category: "infra",
    iconName: "Cloud",
    slug: "cloud-infrastructure"
  },
  {
    id: "tech-frontiers",
    title: "Solutions for Technology Frontiers",
    description: "Cutting-edge development in AI, ML, AR/VR, Blockchain, and IoT to stay ahead of the curve.",
    extendedFeatures: [
      "AI/ML Predictive Analytics",
      "Immersive AR/VR Apps",
      "Blockchain & Web-3 (DApps)",
      "IoT & Edge Computing"
    ],
    category: "frontiers",
    iconName: "Terminal",
    slug: "technology-frontiers"
  },
  {
    id: "cross-platform",
    title: "Cross-platform Solutions",
    description: "Unified experiences across devices using modern cross-platform frameworks.",
    extendedFeatures: [
      "Progressive Web App (PWA)",
      "React Native Frameworks",
      "Flutter Application Development",
      "Unified OS Experience"
    ],
    category: "cross-platform",
    iconName: "Smartphone",
    slug: "cross-platform-solutions"
  }
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'FinTech Analytics Hub',
    category: 'Enterprise Software',
    imageUrl: 'https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=1200',
    description: 'Real-time crypto-to-fiat processing with high-performance visualization.',
    fullDescription: 'We developed a high-frequency data ingestion engine paired with a real-time visualization layer to help financial analysts make split-second decisions with confidence.',
    problemStatement: 'The client faced significant lag in data processing from global stock exchanges, leading to delayed decision-making and missed opportunities.',
    technicalApproach: 'Implemented a microservices architecture using Node.js for high-concurrency ingestion and React with D3.js for granular, low-latency data rendering.',
    results: 'Reduced data latency from 5 seconds to under 200ms and increased user retention by 45% within the first quarter.',
    technologies: ['React', 'D3.js', 'Node.js', 'PostgreSQL'],
    demoVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4',
    duration: '4-5 Months',
    status: 'Completed'
  },
  {
    id: '2',
    title: 'Luma Healthcare App',
    category: 'Mobile Application',
    imageUrl: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200',
    description: 'HIPAA-compliant telemedicine platform with EHR synchronization.',
    fullDescription: 'Luma bridges the gap between patients and providers by offering a seamless, secure, and intuitive digital clinic experience accessible from any device.',
    problemStatement: 'Rural patients struggled with access to specialists, and existing telemedicine tools were non-compliant with strict HIPAA privacy regulations.',
    technicalApproach: 'Utilized Flutter for cross-platform efficiency and WebRTC for peer-to-peer encrypted video, backed by a Firebase infrastructure for real-time updates.',
    results: 'Successfully facilitated over 50,000 virtual consultations in the first 6 months with 99.9% uptime for video calls.',
    technologies: ['Flutter', 'Firebase', 'WebRTC'],
    demoVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
    duration: '3-4 Months',
    status: 'Maintenance'
  },
  {
    id: '3',
    title: 'Global Logistics Engine',
    category: 'Supply Chain',
    imageUrl: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200',
    description: 'AI-driven ERP specialized in global freight and ML routing.',
    fullDescription: 'An enterprise-grade ERP specialized in global freight, leveraging machine learning to predict shipping delays and optimize routing.',
    problemStatement: 'Manual tracking of thousands of containers across various carriers led to a 15% error rate in estimated arrival times.',
    technicalApproach: 'Integrated Python-based ML models on AWS SageMaker to analyze historical traffic and weather patterns for smarter predictive routing.',
    results: 'Improved ETD/ETA accuracy by 35% and reduced operational overhead by $1.2M annually through automation.',
    technologies: ['Next.js', 'Python', 'AWS SageMaker'],
    demoVideoUrl: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
    duration: '6 Months',
    status: 'In Progress'
  }
];

export const UNIFIED_PORTFOLIO: PortfolioItem[] = [
  {
    id: "fintech-hub",
    title: "FinTech Analytics Hub",
    description: "Real-time crypto-to-fiat processing with high-performance visualization dashboard.",
    category: "ENTERPRISE SOFTWARE",
    status: "COMPLETED",
    duration: "4-5 MONTHS",
    tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
    media: {
      webm: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      mp4: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      poster: "https://images.unsplash.com/photo-1621416894569-0f39ed31d247?auto=format&fit=crop&q=80&w=1200"
    },
    links: {
      demo: "https://demo.oitsdhaka.com/fintech",
      caseStudy: "/portfolio/fintech-analytics-hub"
    }
  },
  {
    id: "luma-health",
    title: "Luma Healthcare App",
    description: "HIPAA-compliant telemedicine platform with synchronized electronic health records.",
    category: "MOBILE APPLICATION",
    status: "MAINTENANCE",
    duration: "3-4 MONTHS",
    tags: ["Flutter", "Firebase", "WebRTC"],
    media: {
      webm: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      mp4: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
      poster: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200"
    },
    links: {
      demo: "https://demo.oitsdhaka.com/luma",
      caseStudy: "/portfolio/luma-healthcare"
    }
  },
  {
    id: "global-logistics",
    title: "Global Logistics Engine",
    description: "AI-driven ERP for shipping dispatching and predictive routing computations.",
    category: "SUPPLY CHAIN",
    status: "IN_PROGRESS",
    duration: "6 MONTHS",
    tags: ["Next.js", "Python", "AWS SageMaker"],
    media: {
      webm: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      mp4: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
      poster: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1200"
    },
    links: {
      demo: "https://demo.oitsdhaka.com/logistics",
      caseStudy: "/portfolio/global-logistics"
    }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechFlow Global',
    content: "OITS Dhaka is not just a vendor; they are our technology partners. Their ability to translate complex requirements into clean code is exceptional.",
    avatar: 'https://i.pravatar.cc/150?u=sarah',
  },
  {
    id: 't2',
    name: 'Rahat Ahmed',
    role: 'Founder',
    company: 'Pathao (Demo)',
    content: "The engineering discipline and communication standard maintained by OITS Dhaka helped us ship our MVP weeks ahead of schedule.",
    avatar: 'https://i.pravatar.cc/150?u=rahat',
  },
];

export const TECH_STACK = [
  "React", "Next.js", "Node.js", "TypeScript", "Python", "AWS", "Docker", "Flutter", "PostgreSQL", "Rust", "Kubernetes"
];

export const TECH_DOMAINS: TechDomain[] = [
  {
    id: 'frontend',
    label: 'Frontend',
    skills: [
      'React',
      'Next.js',
      'Vue.js',
      'TypeScript',
      'Tailwind CSS',
      'Three.js'
    ]
  },
  {
    id: 'backend',
    label: 'Backend',
    skills: [
      'Node.js',
      'Python',
      'Rust',
      'NestJS',
      'PostgreSQL',
      'GraphQL'
    ]
  },
  {
    id: 'cloud',
    label: 'Infrastructure',
    skills: [
      'AWS',
      'Google Cloud (GCP)',
      'Docker',
      'Kubernetes',
      'Terraform',
      'CI/CD'
    ]
  },
  {
    id: 'specialized',
    label: 'Specialized',
    skills: [
      'AI & Machine Learning',
      'Internet of Things (IoT)',
      'AR & VR Solutions',
      'Blockchain, Web-3 & DApp',
      'Intelligent Features Augmentation',
      'Cross-Platform Solutions',
      'Progressive Web Apps (PWA)'
    ]
  }
];
