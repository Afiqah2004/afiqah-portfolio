import profile from '../assets/profile.jpg'

import ukmateImage from '../assets/ukmate.png'
import ss1 from '../assets/ss1.png'
import ss2 from '../assets/ss2.png'
import ss3 from '../assets/ss3.png'

import plantiImage from '../assets/planti.png'
import ss4 from '../assets/ss4.png'
import ss5 from '../assets/ss5.png'

import watanImage from '../assets/watan.png'
import ss6 from '../assets/ss6.png'
import ss7 from '../assets/ss7.png'

export const projects = [
  {
    id: 'ukmate',
    title: 'UKMate',
    category: 'Final Year Project · Android Application',
    featured: true,

    description:
      'UKMate is a mobile learning planner and study tracker designed to help university students plan, manage, and track their study sessions more systematically. The application combines study planning, session tracking, a Pomodoro focus timer, gamification, learning analytics, reflections, and progress tracking to encourage consistent study habits.',

    technologies: [
      'Kotlin',
      'Jetpack Compose',
      'Firebase Authentication',
      'Cloud Firestore',
      'Supabase Storage',
      'MVVM',
      'Kotlin Coroutines'
    ],

    image: ukmateImage,

    screenshots: [
      {
        src: ss1,
        alt: 'UKMate dashboard interface'
      },
      {
        src: ss2,
        alt: 'UKMate study session interface'
      },
      {
        src: ss3,
        alt: 'UKMate progress and gamification interface'
      },
    ],

    demoVideo: {
      type: 'Youtube',
      url: 'https://youtu.be/u9RhowrUpPE?si=7X28MBaB__wrTgOZ',
      label: 'Demo video of UKMate Android application',
    },

    github: 'https://github.com/Afiqah2004/UKMate',
    

    problem:
      'University students often struggle to maintain consistent study habits, manage their study time effectively, and track their learning progress. Existing study and habit-tracking applications often provide isolated features such as timers, task lists, or rewards without combining study planning, session tracking, structured focus sessions, and academic progress monitoring in one platform.',

    solution:
      'UKMate provides an integrated learning management experience that allows students to plan study sessions, record completed sessions, use a Pomodoro-based focus timer, write learning reflections, monitor progress through visual analytics, and maintain motivation through streaks, rewards, badges, daily tasks, and virtual items.',

    features: [
      'Study planning and session tracking',
      'Pomodoro focus timer',
      'Learning reflections and progress analytics',
      'Gamification with XP, coins, streaks, badges, and rewards',
      'Daily learning tasks and achievements',
      'Student profile and learning analytics',
      'Firebase authentication and cloud data storage',
      'Admin dashboard and feedback management',
    ],

    contribution:
      'Designed and developed the UKMate Android application using Kotlin and Jetpack Compose. Implemented the application architecture using MVVM, developed core study planning and tracking functionality, integrated Firebase Authentication and Cloud Firestore, implemented the Pomodoro timer and gamification system, developed progress and analytics screens, and contributed to system testing and usability evaluation.',

    challenges:
      'One of the main challenges was integrating multiple learning-related features into a single application while maintaining a simple and user-friendly interface. Additional challenges included managing study session data, implementing real-time progress and streak calculations, integrating cloud services, and ensuring that the application remained stable across different user flows.',

    learning:
      'This project strengthened my skills in Android development, Kotlin, Jetpack Compose, Firebase, cloud database integration, MVVM architecture, UI/UX design, and software testing. I also gained practical experience in applying Agile development, designing a complete software system, debugging complex application flows, and evaluating the usability of a real application with target users.',
  },

 {
  id: 'plantiverse',
  title: 'Plantiverse - Planting @ UKM Botanical Garden',
  category: 'VR / Multimedia Project',
  featured: false,

  description:
    'PlantiVerse: Planting @ UKM Botanical Garden is a VR-based interactive planting game designed around a virtual botanical garden environment. Players learn to identify different plant seeds through interactive challenges, hints, and planting activities while earning points for correct answers.',

  technologies: [
    'Unity 6',
    'C#',
    'XR Interaction Toolkit',
    'Visual Studio 2022'
  ],

  image: plantiImage,

  screenshots: [
    {
      src: ss4,
      alt: 'PlantiVerse VR environment preview'
    },
    {
      src: ss5,
      alt: 'PlantiVerse planting gameplay preview'
    },
  ],

  demoVideo: {
    type: 'Youtube',
    url: 'https://youtu.be/Re92trmzbxM',
    label: 'Demo video of PlantiVerse VR',
  },

  github: 'https://github.com/Afiqah2004/PlantiVerse',

  problem:
    'Learning about plants and identifying different plant species can be less engaging when presented through traditional learning methods. The project aims to provide an interactive environment where users can learn about plants through exploration, interaction, and game-based challenges.',

  solution:
    'PlantiVerse provides an interactive VR planting experience where players select seeds from mystery boxes, use hints to identify the correct seed, and plant it in the corresponding planting area. Correct selections display the associated plant and information while awarding points to the player.',

  features: [
    'Interactive VR botanical garden environment',
    'Seed selection and grabbable objects',
    'Planting challenges',
    'Mystery boxes and hint system',
    'Correct and incorrect answer feedback',
    'Plant information display',
    'Scoring and final performance screen'
  ],

  contribution:
    'Contributed to the development of the PlantiVerse VR application, including the interactive planting mechanics, seed identification, scoring system, and hint/checkpoint functionality. Worked with Unity and XR Interaction Toolkit to implement interactive VR gameplay elements.',

  challenges:
    'One of the main challenges was creating reliable VR interactions for grabbing and releasing seeds into planting areas while ensuring that the system correctly detected the selected seed. The project also required coordinating the planting, scoring, hint, and feedback systems into a consistent gameplay flow.',

  learning:
    'This project strengthened my skills in Unity and C# development, VR interaction design, game mechanics, and multimedia application development. I gained practical experience implementing interactive objects, collision-based gameplay logic, scoring systems, hint mechanisms, and user feedback in a VR environment.',
},
  {
  id: 'watan-freelance',
  title: 'Watan Freelance',
  category: 'Web Application',
  featured: false,

  description:
    'Watan Freelance is a web-based freelance platform developed for Universiti Kebangsaan Malaysia (UKM) students. The platform allows students to showcase their skills, offer services, find project-based work, manage freelance tasks, and communicate with clients within the UKM community.',

  technologies: [
    'HTML',
    'CSS',
    'JavaScript',
    'PHP',
    'MySQL',
    'PDO',
    'Bootstrap'
  ],

  image: watanImage,

  screenshots: [
    {
      src: ss6,
      alt: 'Watan Freelance platform preview'
    },
    {
      src: ss7,
      alt: 'Watan Freelance dashboard preview'
    },
  ],

  demoVideo: {
    type: 'Youtube',
    url: 'https://youtu.be/_20FqNFaiaM',
    label: 'Demo video of Watan Freelance web application',
  },

  github: '[GITHUB LINK]',

  problem:
    'UKM students often face difficulties finding flexible freelance or part-time work that matches their academic schedules, skills, and level of experience. They also have to compete with experienced external freelancers, while there is no dedicated freelance platform specifically designed for the UKM community.',

  solution:
    'Watan Freelance provides a dedicated online marketplace for UKM students where freelancers can showcase their skills and services while clients can browse, book, and manage freelance services. The platform also provides task management, communication, payment proof submission, and feedback functionality to support the complete freelance workflow.',

  features: [
    'User registration and authentication',
    'Freelancer profiles and service listings',
    'Freelance task management',
    'Job posting, acceptance, and submission',
    'Client and freelancer communication',
    'Payment proof upload',
    'Feedback and review mechanism',
    'Administrator management'
  ],

  contribution:
    'Contributed to the design and development of the Watan Freelance web application, including frontend interface development and backend functionality using PHP and MySQL. Contributed to implementing system features, database operations, user workflows, testing, and improving the usability of the platform.',

  challenges:
    'One of the main challenges was integrating different user roles and system modules into a single freelance workflow. The system needed to support interactions between freelancers, clients, and administrators while maintaining consistent data flow across features such as task management, communication, payment proof submission, and feedback.',

  learning:
    'This project strengthened my understanding of full-stack web development, PHP backend development, MySQL database management, CRUD operations, user authentication, system architecture, and Agile Scrum development. I also gained experience in usability testing and developing a system based on feedback from real target users.',
},
]

export const personalInfo = {
  name: 'Afiqah Ahsan',
  title: 'Software Engineering Student',
  heroSubtitle:
    'Building practical software, mobile applications and digital solutions.',

  email: 'afiqahahsan04@gmail.com',
  phone: '011 2984 9417',
  linkedin: 'https://www.linkedin.com/in/afiqah-ahsan-231b28370/',
  github: 'https://github.com/Afiqah2004',

  resume: '/resume_afiqah.pdf',
  profileImage: profile,
}


export const skillGroups = [
  {
    title: 'Programming',
    items: [
      'Python',
      'Java',
      'Kotlin',
      'JavaScript',
      'PHP',
      'SQL',
      'HTML/CSS',
      'C#',
    ],
  },
  {
    title: 'Development',
    items: [
      'Web Application Development',
      'Mobile Application Development',
      'REST API Integration',
      'Software Testing',
      'UI/UX Design',
      'MVVM Architecture',
    ],
  },
  {
    title: 'Database & Backend',
    items: [
      'MySQL',
      'Firebase Authentication',
      'Firebase Firestore',
      'Database Design',
      'Database Management',
    ],
  },
  {
    title: 'Tools',
    items: [
      'Git',
      'GitHub',
      'Android Studio',
      'Visual Studio',
      'XAMPP',
      'Unity',
      'Jetpack Compose',
      'XR Interaction Toolkit',
    ],
  },
]


export const educationDetails = {
  institution: 'Universiti Kebangsaan Malaysia (UKM)',
  degree: 'Bachelor of Software Engineering (Multimedia Development)',
  status: 'Year 3',
  cgpa: '3.49',
  expectedGraduation: '31 August 2027',
  transcript: '/Afiqah_Ahsan_AcademicTranscript.pdf',
}


