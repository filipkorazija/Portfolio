export const categories = ['Systems', 'Games', 'Enterprise', 'AI & Mobile', 'Academic'] as const;
export type ProjectCategory = typeof categories[number];

export type Project = {
  id: string;
  title: string;
  category: ProjectCategory;
  kind: string;
  status: string;
  role: string;
  description: string;
  image: string;
  imageLabel: string;
  background: string;
  placeholder: boolean;
  featured?: boolean;
  gallery?: string[];
  tags: string[];
  highlights?: string[];
  relatedWork?: string[];
  links?: { label: string; url: string }[];
};

// Source: the project inventory supplied by Filip. Unconfirmed stages remain labeled. Gemma and Foldra are grounded in their local project documentation.
export const projects: Project[] = [
  {
    "id": "prismac",
    "title": "PrismAC",
    "category": "Systems",
    "kind": "Cloud anti-cheat SaaS",
    "status": "Beta",
    "role": "Architecture & development",
    "description": "A cloud-based Minecraft anti-cheat system combining lightweight server sensors, remote detection engines, licensing, and an administration dashboard.",
    "tags": [
      "Java",
      "TypeScript",
      "Fastify",
      "PostgreSQL"
    ],
    "image": "/project-placeholders/prismac.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true,
    "featured": true,
    "highlights": [
      "50+ detection checks across six categories",
      "Approximately 1,200 automated tests and three beta servers, per the project inventory",
      "Packet analysis, profiler, and configuration studio"
    ],
    "relatedWork": [
      "Signed loader and server sensors",
      "Verification, encryption, and secure cloud communication"
    ]
  },
  {
    "id": "projectice",
    "title": "ProjectIce",
    "category": "Systems",
    "kind": "Minecraft network",
    "status": "Past operating experience",
    "role": "Founder & developer",
    "description": "A Minecraft network I owned and developed over approximately three years, reaching 150 concurrent players at peak times and a daily community of 50+.",
    "tags": [
      "Minecraft",
      "Server operations",
      "Community"
    ],
    "image": "/minecraft5.png",
    "imageLabel": "ProjectIce identity",
    "background": "#252235",
    "placeholder": false,
    "featured": true,
    "gallery": [
      "/minecraft-gallery/minecraft1.png",
      "/minecraft-gallery/minecraft2.png",
      "/minecraft-gallery/minecraft3.png",
      "/minecraft-gallery/minecraft4.png"
    ],
    "links": [
      {
        "label": "Watch video",
        "url": "https://www.youtube.com/watch?v=eZKA4ho3-ao"
      }
    ],
    "highlights": [
      "Long-term multiplayer service maintenance",
      "Infrastructure scaling, debugging, and community operations"
    ]
  },
  {
    "id": "archive",
    "title": "Archive",
    "category": "Enterprise",
    "kind": "Company records platform",
    "status": "Client project",
    "role": "Development",
    "description": "A commissioned application for managing workers, assignments, workplaces, projects, accommodation, and historical records.",
    "tags": [
      "Business software",
      "Databases",
      "Web development"
    ],
    "image": "/archive.png",
    "imageLabel": "Archive source repository",
    "background": "#e5e8ed",
    "placeholder": false,
    "featured": true,
    "highlights": [
      "Connected employee, assignment, and accommodation histories",
      "Built around a real client's record-management needs"
    ]
  },
  {
    "id": "petrovic-app",
    "title": "PetrovicAPP",
    "category": "Enterprise",
    "kind": "Internal Android application",
    "status": "Ongoing workplace project",
    "role": "Workplace development",
    "description": "An internal Android application I work on at my workplace, built with Kotlin and Jetpack Compose. It supports day-to-day business operations through a native mobile interface. Project details are kept private.",
    "tags": [
      "Kotlin",
      "Android",
      "Jetpack Compose"
    ],
    "image": "/project-placeholders/petrovic-app.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true
  },
  {
    "id": "petrovic-system",
    "title": "PetrovicSystem",
    "category": "Enterprise",
    "kind": "Enterprise web platform",
    "status": "Ongoing workplace project",
    "role": "Workplace development",
    "description": "An enterprise web platform I work on at my workplace, built with C#, ASP.NET Core, and React. It brings internal business tools into a shared application. Project details are kept private.",
    "tags": [
      "C#",
      "ASP.NET Core",
      "React",
      "TypeScript"
    ],
    "image": "/project-placeholders/petrovic-system.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true
  },
  {
    "id": "riftcore",
    "title": "RiftCore Network",
    "category": "Systems",
    "kind": "Multiplayer infrastructure",
    "status": "In development",
    "role": "Development",
    "description": "A Minecraft network featuring SkyPvP, with Lifesteal, Prison, and additional modes planned. Work includes custom gameplay systems and multiplayer server operations.",
    "tags": [
      "Java",
      "Paper / Spigot",
      "Linux",
      "Pterodactyl",
      "Cloudflare",
      "MySQL"
    ],
    "image": "/project-placeholders/riftcore.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true,
    "featured": true,
    "highlights": [
      "Custom plugins, economies, ranks, and progression",
      "Anti-cheat integration, network operations, and monetization systems"
    ],
    "relatedWork": [
      "RiftCore custom plugins",
      "SkyPvP, Lifesteal, Prison, Mines, and Dungeons work"
    ]
  },
  {
    "id": "timberline",
    "title": "Timberline",
    "category": "Games",
    "kind": "Mobile tycoon & automation game",
    "status": "Playable vertical slice",
    "role": "Development",
    "description": "A mobile lumber tycoon game where players chop trees, process logs, deliver products, hire staff, and expand an automated operation.",
    "tags": [
      "Unity 6",
      "C#",
      "Mobile",
      "Procedural assets"
    ],
    "image": "/project-placeholders/timberline.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true,
    "featured": true,
    "highlights": [
      "Worker automation, resource logistics, and progression",
      "Weather, day/night cycles, forest fires, and offline earnings",
      "Automated tests for game systems"
    ]
  },
  {
    "id": "zebra-updater",
    "title": "Zebra TC27 Updater",
    "category": "Enterprise",
    "kind": "Native Android updater",
    "status": "Implementation",
    "role": "Development",
    "description": "A native Android application that checks application versions, downloads APK updates, and handles the update process on enterprise handheld devices.",
    "tags": [
      "Kotlin",
      "Android",
      "REST APIs",
      "APK management"
    ],
    "image": "/project-placeholders/zebra-updater.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true,
    "featured": true,
    "highlights": [
      "Version checking and APK download workflow",
      "Update handling for Zebra TC27 enterprise devices"
    ]
  },
  {
    "id": "color-conquest",
    "title": "Color Conquest",
    "category": "Games",
    "kind": "Multiplayer territory shooter",
    "status": "In development",
    "role": "Development",
    "description": "A lightweight territory-control shooter with colorful arenas, PvP, character upgrades, and additional modes planned.",
    "tags": [
      "Unity 6",
      "C#",
      "Netcode for GameObjects",
      "Unity Transport",
      "Docker"
    ],
    "image": "/project-placeholders/color-conquest.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true,
    "featured": true,
    "highlights": [
      "Real-time multiplayer and dedicated-server architecture",
      "Territory-control gameplay and character progression",
      "Matchmaking and hosting research involving Fastify and PostgreSQL"
    ]
  },
  {
    "id": "shortpilot",
    "title": "ShortPilot",
    "category": "AI & Mobile",
    "kind": "AI content workflow platform",
    "status": "Work in progress",
    "role": "Development",
    "description": "An AI-assisted short-form content platform for topic generation, scripts, captions, hashtags, voiceovers, and content scheduling. Publishing automation is planned.",
    "tags": [
      "Supabase",
      "Redis Cloud",
      "Cloudflare R2",
      "Linux",
      "PM2"
    ],
    "image": "/project-placeholders/shortpilot.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true,
    "featured": true,
    "highlights": [
      "AI-assisted content generation workflows",
      "Backend infrastructure and scheduling work"
    ],
    "relatedWork": [
      "Planned publishing automation"
    ]
  },
  {
    "id": "day-one",
    "title": "Day One",
    "category": "AI & Mobile",
    "kind": "Fitness & AI coaching app",
    "status": "Work in progress",
    "role": "Development",
    "description": "A fitness application bringing together workout tracking, nutrition, AI coaching, and visual progress tracking.",
    "tags": [
      "Flutter",
      "Mobile development",
      "AI integrations"
    ],
    "image": "/project-placeholders/day-one.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true,
    "highlights": [
      "Gym and home workout tracking",
      "Meal-photo nutrition analysis and body-progress timeline",
      "Muscle selection and AI body-potential visualization work"
    ]
  },
  {
    "id": "toolbox",
    "title": "ToolBox",
    "category": "AI & Mobile",
    "kind": "Collaborative AI developer tools",
    "status": "Concept & architecture",
    "role": "Concept & architecture",
    "description": "A proposed collaborative development platform for planning, generating, testing, and deploying applications with multiple AI models.",
    "tags": [
      "AI orchestration",
      "Developer tooling",
      "CI / CD architecture"
    ],
    "image": "/project-placeholders/toolbox.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true,
    "highlights": [
      "Planned collaborative IDE, model selection, and tool connectors",
      "Planned credits, autonomous code generation, and deployment integrations"
    ],
    "relatedWork": [
      "AI model orchestration experiments",
      "Tool integrations and credit-based usage research"
    ]
  },
  {
    "id": "gemma",
    "title": "Gemma",
    "category": "AI & Mobile",
    "kind": "Prediction-market research workbench",
    "status": "Research prototype with paper trading",
    "role": "Development & research",
    "description": "A private, local workbench for researching Kalshi prediction markets and testing strategies through simulated trading. An interactive character crew explains its decisions, while recorded market data, execution checks, and separate paper accounts make experiments traceable.",
    "tags": [
      "Python",
      "JavaScript",
      "SQLite",
      "Kalshi API",
      "Paper trading"
    ],
    "image": "/project-placeholders/gemma.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true,
    "highlights": [
      "Settlement-price modelling and an official-index connection",
      "Execution simulations account for fees, depth, partial fills, and delays",
      "Algorithmic agent council with risk checks; profitability remains unproven"
    ]
  },
  {
    "id": "foldra",
    "title": "Foldra",
    "category": "Enterprise",
    "kind": "Catalogue, geometry & production workflows",
    "status": "Local prototype in development",
    "role": "Application development & architecture",
    "description": "A native Windows application exploring catalogue management, sheet-metal profile drawing, and Shop-to-Production workflows. It combines a C# desktop interface with a modular .NET backend, revision-aware editing, audit history, and explicit catalogue publication.",
    "tags": [
      "C#",
      "WPF",
      ".NET 10",
      "PostgreSQL",
      "React",
      "TypeScript",
      "2D / 3D geometry"
    ],
    "image": "/project-placeholders/foldra.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true,
    "highlights": [
      "Catalogue authoring with stale-edit protection and published snapshots",
      "2D profile editing with a synchronized 3D preview",
      "Local Shop, orders, and production-workflow prototypes; production readiness and manufacturing compatibility remain ongoing work"
    ]
  },
  {
    "id": "nexusloader",
    "title": "NexusLoader",
    "category": "Enterprise",
    "kind": "Enterprise device launcher",
    "status": "Architecture; implementation unconfirmed",
    "role": "Architecture & development work",
    "description": "An enterprise launcher and management architecture for Zebra handhelds, covering kiosk mode, app assignment, remote configuration, and update control.",
    "tags": [
      "Kotlin",
      "Zebra MX",
      "EMDK",
      "Device management"
    ],
    "image": "/project-placeholders/nexusloader.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true,
    "highlights": [
      "Implementation extent needs confirmation",
      "Kiosk mode and remote application configuration design"
    ]
  },
  {
    "id": "helpscout",
    "title": "HelpScout Sidebar App",
    "category": "Enterprise",
    "kind": "Customer-support integration",
    "status": "Development work",
    "role": "Development",
    "description": "A custom helpdesk sidebar integration for displaying additional customer data and streamlining support workflows.",
    "tags": [
      "JavaScript",
      "API integration",
      "Helpdesk extensions"
    ],
    "image": "/project-placeholders/helpscout.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true,
    "highlights": [
      "Customer context within the support interface",
      "Integration with external data and support workflows"
    ]
  },
  {
    "id": "kjg",
    "title": "KJG Integration",
    "category": "Enterprise",
    "kind": "Business data integration",
    "status": "Development work",
    "role": "Development",
    "description": "Business data integration work involving table identifiers, GTIN values, external identifiers, and record mapping.",
    "tags": [
      "Enterprise integration",
      "Databases",
      "Record mapping"
    ],
    "image": "/project-placeholders/kjg.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true,
    "highlights": [
      "Identifier mapping across business records",
      "GTIN and external-identifier handling"
    ]
  },
  {
    "id": "zebra-platform",
    "title": "Zebra Device Management",
    "category": "Enterprise",
    "kind": "Central device-management platform",
    "status": "Proposed architecture",
    "role": "Architecture",
    "description": "A proposed backend and dashboard for device configuration, status reporting, deployments, logs, and remote commands.",
    "tags": [
      "React",
      "ASP.NET",
      "PostgreSQL",
      "Supabase"
    ],
    "image": "/project-placeholders/zebra-platform.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true,
    "highlights": [
      "Proposed central configuration and deployment control",
      "Device reporting, logs, and command workflows"
    ]
  },
  {
    "id": "pulseac",
    "title": "PulseAC",
    "category": "Systems",
    "kind": "Minecraft anti-cheat fork",
    "status": "Development & testing",
    "role": "Fork development & testing",
    "description": "A custom fork of GrimAC with detection modifications, movement and combat work, and cheat-client testing.",
    "tags": [
      "Java",
      "GrimAC",
      "Packet analysis",
      "Testing"
    ],
    "image": "/project-placeholders/pulseac.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true,
    "highlights": [
      "Movement and combat detection modifications",
      "Cheat-client testing and detection research"
    ]
  },
  {
    "id": "quantify",
    "title": "Quantify",
    "category": "AI & Mobile",
    "kind": "Market-analysis experiment",
    "status": "Experimental concept",
    "role": "Research & concept",
    "description": "An experimental Polymarket analysis and NO-side aggregation concept, with strategy research and results still to be established.",
    "tags": [
      "Market analysis",
      "Automation",
      "Research"
    ],
    "image": "/project-placeholders/quantify.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true,
    "highlights": [
      "Exploration of market aggregation and analysis",
      "No performance or trading results presented"
    ]
  },
  {
    "id": "faceless-video",
    "title": "Faceless YouTube Automation",
    "category": "AI & Mobile",
    "kind": "AI video production workflow",
    "status": "Concept & workflow design",
    "role": "Automation design",
    "description": "A workflow concept for researching, scripting, voicing, and assembling short- and long-form videos with AI services.",
    "tags": [
      "AI services",
      "Content automation",
      "Workflow design"
    ],
    "image": "/project-placeholders/faceless-video.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true,
    "highlights": [
      "Research-to-script-to-voice production flow",
      "Short- and long-form content workflow exploration"
    ]
  },
  {
    "id": "bendex",
    "title": "Bendex",
    "category": "AI & Mobile",
    "kind": "AI workflow automation",
    "status": "Research; prototype extent unconfirmed",
    "role": "Research & concept",
    "description": "An AI automation concept focused on autonomous interactions and workflow execution. The current prototype extent is not yet documented.",
    "tags": [
      "AI automation",
      "Agents",
      "Workflow research"
    ],
    "image": "/project-placeholders/bendex.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true
  },
  {
    "id": "seeds",
    "title": "Seeds",
    "category": "Games",
    "kind": "Farming simulation",
    "status": "Game concept",
    "role": "Game systems design",
    "description": "A farming simulation concept with storms, droughts, fires, and economy and cash-out mechanics.",
    "tags": [
      "Simulation design",
      "Game economy",
      "Environmental systems"
    ],
    "image": "/project-placeholders/seeds.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true,
    "highlights": [
      "Environmental events and farming economy design",
      "Cash-out mechanics explored at concept level"
    ]
  },
  {
    "id": "nao",
    "title": "NAO Fitness Robot",
    "category": "Academic",
    "kind": "Interactive robotics project",
    "status": "Collaborative university project",
    "role": "Collaborative development",
    "description": "A collaborative project using a NAO robot to guide exercises with speech, animated motions, and repetition counting.",
    "tags": [
      "Python 2.7",
      "NAOqi",
      "Choregraphe"
    ],
    "image": "/project-placeholders/nao.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true,
    "highlights": [
      "Robot-guided exercise interaction",
      "Speech, motion sequences, and repetition counting"
    ]
  },
  {
    "id": "unity-vr",
    "title": "Unity VR Project",
    "category": "Games",
    "kind": "VR interaction coursework",
    "status": "Coursework",
    "role": "Coursework development",
    "description": "Virtual reality coursework exploring XR locomotion, interaction, and climbing mechanics.",
    "tags": [
      "Unity",
      "C#",
      "XR"
    ],
    "image": "/project-placeholders/unity-vr.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true,
    "highlights": [
      "XR locomotion and object interaction",
      "Climbing mechanics"
    ]
  },
  {
    "id": "noodle",
    "title": "Noodle E-Classroom",
    "category": "Academic",
    "kind": "Educational web platform",
    "status": "Collaborative university project",
    "role": "Co-creator",
    "description": "A group-developed platform supporting classrooms, teacher-managed tasks and exams, and student enrollment.",
    "tags": [
      "Web development",
      "Databases",
      "Teamwork"
    ],
    "image": "/eclassroom-gallery/eclassroom2.png",
    "imageLabel": "Classroom management interface",
    "background": "#e5e8ed",
    "placeholder": false,
    "gallery": [
      "/eclassroom.png",
      "/eclassroom-gallery/eclassroom1.png",
      "/eclassroom-gallery/eclassroom3.png",
      "/eclassroom-gallery/eclassroom4.png"
    ]
  },
  {
    "id": "portfolio",
    "title": "Developer Portfolio",
    "category": "Academic",
    "kind": "Personal website",
    "status": "Running locally",
    "role": "Design & development",
    "description": "My personal portfolio, built with Next.js, TypeScript, and CSS. The image shows the original source; the site you are browsing is its redesign.",
    "tags": [
      "Next.js",
      "TypeScript",
      "CSS"
    ],
    "image": "/portfolio.png",
    "imageLabel": "Original portfolio source code",
    "background": "#1c1c1c",
    "placeholder": false,
    "links": [
      {
        "label": "View source",
        "url": "https://github.com/filipkorazija/Portfolio"
      }
    ]
  },
  {
    "id": "real-estate",
    "title": "Real Estate Agency App",
    "category": "Academic",
    "kind": "Desktop business application",
    "status": "Coursework",
    "role": "Coursework development",
    "description": "A C# Windows Forms coursework application focused on managing real-estate agency data.",
    "tags": [
      "C#",
      "Windows Forms",
      "Data management"
    ],
    "image": "/project-placeholders/real-estate.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true
  },
  {
    "id": "uwuweb",
    "title": "UwuWeb",
    "category": "Academic",
    "kind": "Windows Forms application",
    "status": "Coursework",
    "role": "Coursework development",
    "description": "A C# Windows Forms application from university coursework. Detailed functionality is still to be documented.",
    "tags": [
      "C#",
      "Windows Forms"
    ],
    "image": "/project-placeholders/uwuweb.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true
  },
  {
    "id": "movies",
    "title": "Movie Database Frontend",
    "category": "Academic",
    "kind": "Movie browsing frontend",
    "status": "Coursework",
    "role": "Coursework development",
    "description": "A web application using The Movie Database API, with frontend work involving JavaScript, TypeScript, jQuery, and Bootstrap.",
    "tags": [
      "JavaScript",
      "TypeScript",
      "jQuery",
      "Bootstrap",
      "TMDB API"
    ],
    "image": "/project-placeholders/movies.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true
  },
  {
    "id": "vehicle-oop",
    "title": "Vehicle / Truck OOP",
    "category": "Academic",
    "kind": "Object-oriented programming exercise",
    "status": "Coursework",
    "role": "Coursework development",
    "description": "A C# project demonstrating class inheritance and object-oriented programming with vehicle and truck models.",
    "tags": [
      "C#",
      "Inheritance",
      "Object-oriented programming"
    ],
    "image": "/project-placeholders/vehicle-oop.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true
  },
  {
    "id": "linkedlist",
    "title": "LinkedList Student Project",
    "category": "Academic",
    "kind": "Data structures exercise",
    "status": "Coursework",
    "role": "Coursework development",
    "description": "A C# linked-list implementation and exercise focused on data structures.",
    "tags": [
      "C#",
      "Linked lists",
      "Data structures"
    ],
    "image": "/project-placeholders/linkedlist.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true
  },
  {
    "id": "linux-labs",
    "title": "Linux Administration Labs",
    "category": "Academic",
    "kind": "Infrastructure labs",
    "status": "Coursework & labs",
    "role": "Lab work",
    "description": "Practical server-administration work covering Ubuntu, SSH hardening, FTP, backups, MySQL, containers, and Azure virtual machines.",
    "tags": [
      "Ubuntu",
      "SSH",
      "MySQL",
      "Containers",
      "Azure"
    ],
    "image": "/project-placeholders/linux-labs.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true
  },
  {
    "id": "dev-exercises",
    "title": "Docker / Git / SQL",
    "category": "Academic",
    "kind": "Development workflow exercises",
    "status": "Coursework & exercises",
    "role": "Lab work",
    "description": "Exercises in database modeling, containerization, version control, and development workflows.",
    "tags": [
      "Docker",
      "Git",
      "SQL",
      "Database modeling"
    ],
    "image": "/project-placeholders/dev-exercises.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true
  },
  {
    "id": "project-planning",
    "title": "Project Planning Application",
    "category": "Academic",
    "kind": "Software planning assignment",
    "status": "Coursework",
    "role": "Coursework development",
    "description": "A university assignment involving project requirements, feature specifications, and software design.",
    "tags": [
      "Requirements",
      "Feature specifications",
      "Software design"
    ],
    "image": "/project-placeholders/project-planning.svg",
    "imageLabel": "Placeholder artwork",
    "background": "#11151c",
    "placeholder": true
  }
];
