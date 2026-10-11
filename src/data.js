export const GITHUB_USER = "CoderHere07";

export const profile = {
  name: "Adnan Shahzad",
  role: "Full-stack engineer, backend first",
  location: "Gujranwala, Pakistan",
  summary:
    "Full-stack engineer specializing in the MERN stack, with a focus on backend architecture, scalable REST APIs, and MongoDB performance. I build clean, testable, production-ready systems and responsive React interfaces. Seeking backend and full-stack roles.",
  email: "adnanshahzad2003@gmail.com",
  linkedin: "https://www.linkedin.com/in/adnan-shahzad-6429362a9/",
  github: `https://github.com/${GITHUB_USER}`,
};

export const skills = {
  Languages: "JavaScript, TypeScript, PHP, Java, Python, SQL",
  Backend: "Node.js, Express.js, REST APIs",
  Frontend: "React, Redux, React Native, HTML5, CSS3",
  Databases: "MongoDB, MySQL",
  Architecture: "OOP, MVC, Design Patterns",
  Testing: "Unit Testing, Performance Testing",
  "DevOps and Tools": "Git, GitHub Actions, CI/CD",
  "Cloud & Authentication": "AWS, Firebase, JWT"
};

// video: "/videos/your-file.mp4" (file in public/videos) or a YouTube link.
// Leave video "" and set demoLink to show a "Watch demo" button instead.
export const projects = [
  {
    title: "Hand-drawn shape recognition",
    stack: "Python, NumPy, OpenCV, MediaPipe",
    summary:
      "A CNN written from scratch in NumPy (convolution, pooling, backpropagation) reaching about 76% accuracy on 8 shape classes. A real-time OpenCV app tracks your finger and classifies shapes drawn in the air.",
    video: "",
    demoLink: "https://lnkd.in/p/dCxU4NEq",
    live: "",
  },
  {
    title: "Semester Survival",
    stack: "React, Redux, Node.js, MongoDB",
    summary:
      "A browser RPG where you manage Energy, Stress and GPA across 8 levels. Custom game engine, JWT accounts, saved progress and a global leaderboard.",
    video: "",
    live: "http://semester-survivor-client-1788013720.s3-website.ap-south-1.amazonaws.com/",
  },
  {
    title: "Good Muslim",
    stack: "JavaScript, Firebase, REST API",
    summary:
      "Quran reading and listening app using the Al Quran Cloud API, with Firebase login, ayah bookmarks and a real-time admin dashboard for engagement metrics.",
    video: "",
    live: "https://main.d2l1lhtdil1kih.amplifyapp.com/html/home.html",
  },
  {
    title: "Pass the Card",
    stack: "React Native, Expo, Firebase, Reanimated",
    summary:
      "Cross-platform multiplayer card game with synchronized state on Firebase Realtime Database, player stats and 60fps animated suit-aware themes.",
    video: "",
    live: "https://main.d2i0p7t07oqpbp.amplifyapp.com/Login/",
  },
];

export const PINNED_REPOS = [
  {
    name: "Real-Time-Hand-Drawn-Shape-Recognition-System",
    description: "A machine learning project comparing a custom NumPy CNN, KNN, and Logistic Regression for classifying geometric shapes, complete with real-time inference via webcam finger tracking.",
    language: "Python"
  },
  {
    name: "RAG-poweredBusinessTool",
    description: "RAG-powered document Q&A tool — upload PDFs/docs, ask questions, get streamed answers with inline source citations. Built with React + Node + FastAPI + OpenRouter.",
    language: "JavaScript"
  },
  {
    name: "Semester-Survivor-2",
    description: "Welcome to Semester Survival 2, a high-stakes MERN stack RPG where your goal is to survive 8 brutal semesters of academic warfare. Balance your GPA, manage your stress, and throw pencils at your problems.",
    language: "JavaScript"
  },
  {
    name: "Chesse-Steal",
    description: "A fast-paced, first-person 3D maze survival game built in Unity. Navigate procedurally generated labyrinths, dodge deadly dynamic traps, and find the cheese before time runs out! 🧀",
    language: "C#"
  },
  {
    name: "Ultimate-Bhabi",
    description: "Bhabhi Ultimate is a professionally crafted, immersion-focused mobile card game implementation of the popular South Asian game 'Bhabhi'. Built with Expo & Firebase with real-time state management.",
    language: "JavaScript"
  },
  {
    name: "Good-Muslim",
    description: "A professional, interactive, and spiritually uplifting Quran platform designed for modern accessibility. Built with a focus on beauty, usability, and real-time user engagement.",
    language: "JavaScript"
  }
];
