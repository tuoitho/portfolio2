// Mock data for portfolio content

export const mockProjects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Nền tảng thương mại điện tử hiện đại với React và Node.js",
    image: "https://picsum.photos/400/250?random=1",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "Web Development",
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2024"
  },
  {
    id: 2,
    title: "Mobile Banking App",
    description: "Ứng dụng ngân hàng di động với React Native",
    image: "https://picsum.photos/400/250?random=2",
    technologies: ["React Native", "Firebase", "Redux", "Expo"],
    category: "Mobile Development",
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2024"
  },
  {
    id: 3,
    title: "AI Chatbot Dashboard",
    description: "Dashboard quản lý chatbot AI với machine learning",
    image: "https://picsum.photos/400/250?random=3",
    technologies: ["Python", "TensorFlow", "Flask", "React"],
    category: "AI/ML",
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2023"
  },
  {
    id: 4,
    title: "Social Media Analytics",
    description: "Công cụ phân tích mạng xã hội với data visualization",
    image: "https://picsum.photos/400/250?random=4",
    technologies: ["Vue.js", "D3.js", "Python", "PostgreSQL"],
    category: "Data Analytics",
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2023"
  },
  {
    id: 5,
    title: "Task Management System",
    description: "Hệ thống quản lý công việc nhóm với real-time collaboration",
    image: "https://picsum.photos/400/250?random=5",
    technologies: ["Next.js", "Socket.io", "PostgreSQL", "Prisma"],
    category: "Productivity",
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2023"
  },
  {
    id: 6,
    title: "Cryptocurrency Tracker",
    description: "Ứng dụng theo dõi giá cryptocurrency với chart analysis",
    image: "https://picsum.photos/400/250?random=6",
    technologies: ["React", "Chart.js", "API Integration", "Tailwind"],
    category: "FinTech",
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2023"
  },
  {
    id: 7,
    title: "Video Streaming Platform",
    description: "Nền tảng streaming video như Netflix với HLS",
    image: "https://picsum.photos/400/250?random=7",
    technologies: ["React", "HLS.js", "AWS S3", "CloudFront"],
    category: "Media",
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2022"
  },
  {
    id: 8,
    title: "IoT Dashboard",
    description: "Dashboard điều khiển thiết bị IoT thông minh",
    image: "https://picsum.photos/400/250?random=8",
    technologies: ["Angular", "MQTT", "InfluxDB", "Grafana"],
    category: "IoT",
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2022"
  },
  {
    id: 9,
    title: "Blockchain Voting System",
    description: "Hệ thống bỏ phiếu phi tập trung sử dụng blockchain",
    image: "https://picsum.photos/400/250?random=9",
    technologies: ["Solidity", "Web3.js", "React", "Ethereum"],
    category: "Blockchain",
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2022"
  },
  {
    id: 10,
    title: "Recipe Sharing App",
    description: "Ứng dụng chia sẻ công thức nấu ăn với cộng đồng",
    image: "https://picsum.photos/400/250?random=10",
    technologies: ["Flutter", "Firebase", "Cloud Functions", "Algolia"],
    category: "Social",
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2022"
  },
  {
    id: 11,
    title: "Weather Forecast App",
    description: "Ứng dụng dự báo thời tiết với maps và radar",
    image: "https://picsum.photos/400/250?random=11",
    technologies: ["React", "Mapbox", "Weather API", "PWA"],
    category: "Utility",
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2021"
  },
  {
    id: 12,
    title: "Portfolio Website",
    description: "Website portfolio cá nhân với animations đẹp mắt",
    image: "https://picsum.photos/400/250?random=12",
    technologies: ["React", "Framer Motion", "Tailwind CSS", "Vite"],
    category: "Portfolio",
    github: "https://github.com",
    demo: "https://demo.com",
    year: "2024"
  }
];

export const mockSkills = [
  {
    id: 1,
    category: "Frontend",
    skills: [
      { name: "React.js", level: 95, color: "bg-blue-500" },
      { name: "Vue.js", level: 85, color: "bg-green-500" },
      { name: "Angular", level: 80, color: "bg-red-500" },
      { name: "TypeScript", level: 90, color: "bg-blue-600" },
      { name: "Tailwind CSS", level: 92, color: "bg-cyan-500" },
      { name: "SASS/SCSS", level: 88, color: "bg-pink-500" }
    ]
  },
  {
    id: 2,
    category: "Backend",
    skills: [
      { name: "Node.js", level: 90, color: "bg-green-600" },
      { name: "Python", level: 85, color: "bg-yellow-500" },
      { name: "PostgreSQL", level: 82, color: "bg-blue-700" },
      { name: "MongoDB", level: 88, color: "bg-green-700" },
      { name: "Redis", level: 75, color: "bg-red-600" },
      { name: "GraphQL", level: 78, color: "bg-purple-500" }
    ]
  },
  {
    id: 3,
    category: "Mobile",
    skills: [
      { name: "React Native", level: 88, color: "bg-blue-500" },
      { name: "Flutter", level: 82, color: "bg-blue-400" },
      { name: "iOS Development", level: 75, color: "bg-gray-700" },
      { name: "Android Development", level: 78, color: "bg-green-500" }
    ]
  },
  {
    id: 4,
    category: "DevOps & Cloud",
    skills: [
      { name: "AWS", level: 85, color: "bg-orange-500" },
      { name: "Docker", level: 88, color: "bg-blue-600" },
      { name: "Kubernetes", level: 75, color: "bg-blue-700" },
      { name: "CI/CD", level: 80, color: "bg-green-600" },
      { name: "Terraform", level: 70, color: "bg-purple-600" }
    ]
  }
];

export const mockAboutData = {
  description: `Tôi là một Full Stack Developer với hơn 5 năm kinh nghiệm trong việc phát triển 
  các ứng dụng web và mobile hiện đại. Đam mê công nghệ và luôn tìm hiểu các xu hướng mới 
  trong ngành IT để mang lại những giải pháp tối ưu nhất cho khách hàng.`,
  
  highlights: [
    "🚀 Hơn 5 năm kinh nghiệm phát triển phần mềm",
    "💻 Chuyên môn về React, Node.js, và các công nghệ modern",
    "🎯 Đã hoàn thành 50+ dự án thành công",
    "🏆 Contributor cho nhiều dự án open source",
    "📚 Mentor cho các developer junior",
    "🌟 Passionate về UX/UI design và performance optimization"
  ],
  
  stats: [
    { label: "Dự án hoàn thành", value: "50+", icon: "📊" },
    { label: "Khách hàng hài lòng", value: "98%", icon: "😊" },
    { label: "Năm kinh nghiệm", value: "5+", icon: "⏰" },
    { label: "Công nghệ thành thạo", value: "20+", icon: "🛠️" }
  ]
};

export const mockContactInfo = {
  email: "your.email@gmail.com",
  phone: "+84 123 456 789",
  location: "Hồ Chí Minh, Việt Nam",
  linkedIn: "https://linkedin.com/in/yourprofile",
  github: "https://github.com/yourusername",
  twitter: "https://twitter.com/yourusername",
  availability: "Sẵn sàng cho các dự án mới"
};
