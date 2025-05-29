import {
  CN,
  ES,
  US,
  IN,
  SA,
  BD,
  BR,
  RU,
  JP,
  DE,
  FR,
  PK,
  ID,
  TR,
  VN,
} from "country-flag-icons/react/3x2";
import {
  LuBookOpen,
  LuCircleHelp,
  LuClipboardList,
  LuMonitor,
  LuSettings,
  LuAtSign,
  LuPhone,
  LuMapPin,
  LuBriefcaseBusiness,
  LuGraduationCap,
  LuUsers,
  LuLandmark
} from "react-icons/lu";



export const TOTAL_CREDIT=800
export const TOTAL_HOURS=267

// helper constants 
export const LANGUAGES = [
  { label: "Chinese", emoji: <CN width={24} height={24} /> },
  { label: "Spanish", emoji: <ES width={24} height={24} /> },
  { label: "English", emoji: <US width={24} height={24} /> },
  { label: "Hindi", emoji: <IN width={24} height={24} /> },
  { label: "Arabic", emoji: <SA width={24} height={24} /> },
  { label: "Bengali", emoji: <BD width={24} height={24} /> },
  { label: "Portuguese", emoji: <BR width={24} height={24} /> },
  { label: "Russian", emoji: <RU width={24} height={24} /> },
  { label: "Japanese", emoji: <JP width={24} height={24} /> },
  { label: "German", emoji: <DE width={24} height={24} /> },
  { label: "French", emoji: <FR width={24} height={24} /> },
  { label: "Urdu", emoji: <PK width={24} height={24} /> },
  { label: "Indonesian", emoji: <ID width={24} height={24} /> },
  { label: "Turkish", emoji: <TR width={24} height={24} /> },
  { label: "Vietnamese", emoji: <VN width={24} height={24} /> },
];

export const LANGUAGES_LEVELS = [
  { label: "Beginner A1", emoji: "🫣" },
  { label: "Elementary A2", emoji: "🙂" },
  { label: "Intermediate B1", emoji: "😊" },
  { label: "Med B2", emoji: "😎" },
  { label: "Advanced C1", emoji: "🤓" },
  { label: "Proficient C2", emoji: "🧠" },
];

export const INTERESTS = [
  { label: "Reading", emoji: "📚" },
  { label: "Writing", emoji: "✍️" },
  { label: "Traveling", emoji: "✈️" },
  { label: "Photography", emoji: "📸" },
  { label: "Cooking", emoji: "🍳" },
  { label: "Baking", emoji: "🧁" },
  { label: "Drawing", emoji: "🎨" },
  { label: "Painting", emoji: "🖌️" },
  { label: "Gaming", emoji: "🎮" },
  { label: "Music", emoji: "🎵" },
  { label: "Singing", emoji: "🎤" },
  { label: "Dancing", emoji: "💃" },
  { label: "Fitness", emoji: "🏋️" },
  { label: "Yoga", emoji: "🧘" },
  { label: "Cycling", emoji: "🚴" },
  { label: "Hiking", emoji: "🥾" },
  { label: "Fishing", emoji: "🎣" },
  { label: "Gardening", emoji: "🪴" },
  { label: "Watching Movies", emoji: "🎬" },
  { label: "Playing Instruments", emoji: "🎸" },
  { label: "Crafting", emoji: "✂️" },
  { label: "Board Games", emoji: "🎲" },
  { label: "Collecting", emoji: "🧩" },
  { label: "Volunteering", emoji: "🤝" },
  { label: "Blogging", emoji: "📝" },
];


// dashboard constants 
export const TOTALS_CARDS = [
  {
    label: "Total learners",
    value: 12,
    icon: <LuUsers size={30} color="#000000"></LuUsers>,
  },
  {
    label: "Total Language Buddies",
    value: 12,
    icon: <LuUsers size={30} color="#000000"></LuUsers>,
  },
  {
    label: "Total Organizations",
    value: 12,
    icon: <LuLandmark size={30} color="#000000"></LuLandmark>,
  },
  {
    label: "Total Projects",
    value: 12,
    icon: <LuGraduationCap size={30} color="#000000"></LuGraduationCap>,
  },
];
export const LEARNERS_TABLE_TABS = [
  { label: "", width: 7 },
  { label: "Name", width: 20 },
  { label: "Level", width: 15 },
  { label: "Program", width: 12 },
  { label: "Organization", width: 15 },
  { label: "Rating", width: 7 },
  { label: "Hours spent", width: 12 },
  { label: "", width: 5 },
];
export const ORGANIZATIONS_CARDS_COLORS = [
  {
    svgColor: "#C3E763",
    backGroundColor: "#B4E13C",
    buttonColor: "#637C21",
  },
  {
    svgColor: "#F3DCB0",
    backGroundColor: "#FFE155",
    buttonColor: "#D88E00",
  },
  {
    svgColor: "#FCE6E6",
    backGroundColor: "#FFC8C8",
    buttonColor: "#EC5454",
  },
];

export const DASHBOARD_SIDEBARE_TABS = [
  {
    label: "Monitoring",
    icon: <LuMonitor size={28} color="#ffffff"></LuMonitor>,
  },
  {
    label: "Matching",
    icon: <LuUsers size={28} color="#000000"></LuUsers>,
  },
  {
    label: "Reporting",
    icon: <LuClipboardList size={28} color="#000000"></LuClipboardList>,
  },
  {
    label: "Organizations",
    icon: <LuLandmark size={28} color="#000000"></LuLandmark>,
  },
  {
    label: "Projects",
    icon: <LuGraduationCap size={28} color="#000000"></LuGraduationCap>,
  },
  {
    label: "Learning tracks",
    icon: <LuBookOpen size={28} color="#000000"></LuBookOpen>,
  },
  {
    label: "Settings",
    icon: <LuSettings size={28} color="#000000"></LuSettings>,
  },
  {
    label: "Help",
    icon: <LuCircleHelp size={28} color="#000000"></LuCircleHelp>,
  },
];


// user profile constants 
export const USER_INFO_FIELDS = [
  {
    label: "E-mail",
    icon: <LuAtSign size={32} color="#04001A"></LuAtSign>,
    correspondDBLabel: "email",
  },
  {
    label: "Mobile",
    icon: <LuPhone size={32} color="#04001A"></LuPhone>,
    correspondDBLabel: "phone_number",
  },
  {
    label: "Location",
    icon: <LuMapPin size={32} color="#04001A"></LuMapPin>,
    correspondDBLabel: "location",
  },
  {
    label: "Highest Education",
    icon: <LuGraduationCap size={32} color="#04001A"></LuGraduationCap>,
    correspondDBLabel: "highest_education",
  },
  {
    label: "Latest work experience",
    icon: <LuBriefcaseBusiness size={32} color="#04001A"></LuBriefcaseBusiness>,
    correspondDBLabel: "latest_work_experience",
  },
];

export const IMPACT_MEASURMENTS = [
  {
    question: "Ik versta goed nederlands",
    T0: 5,
    T1: 6,
  },
  {
    question: "Ik spreek goed nederlands",
    T0: 5,
    T1: 6,
  },
  {
    question: "Ik durf nederlands te spreken met nederlandse mensen",
    T0: 5,
    T1: 6,
  },
  {
    question: "Ik voel me goed omdat ik nederlands spreek",
    T0: 5,
    T1: 6,
  },
  {
    question:
      "Ik durf nieuwe dingen buitenshuis te doen omdat ik nederlands spreek",
    T0: 5,
    T1: 6,
  },
  {
    question:
      "Ik ben actief buitenshuis (bibliotheek, sport, bioscoop, winkelen, reizen met openbaar vervoer)",
    T0: 5,
    T1: 6,
  },
  {
    question:
      "Ik doe mee aan activiteiten in de buurt (straatfeest, koffie-ochtend, buurthuis)",
    T0: 5,
    T1: 6,
  },
  {
    question: "Ik heb vrijwilligerswerk",
    T0: 5,
    T1: 6,
  },
];

export const LANGUAGES_AND_INTERESTS_CARDS = [
  {
    cardLabel: "Mother Language",
    correspondDBLabel: "mother_language",
    correspondList: LANGUAGES,
  },
  {
    cardLabel: "Other Languages",
    correspondDBLabel: "other_languages",
    correspondList: LANGUAGES,
  },
  {
    cardLabel: "Level",
    correspondDBLabel: "level",
    correspondList: LANGUAGES_LEVELS,
  },
  {
    cardLabel: "Interests",
    correspondDBLabel: "interests",
    correspondList: INTERESTS,
  },
];

// default user data 
export const USER_SCHEMA = {
  username: "",
  password: "",
  created_At: null,
  updated_At: null,
  is_new_user: true,
  full_name: "Haitham Badran",
  phone_number: "+31 71 131 9858",
  location: "6391 Elgin St. Celina, Delaware 10299",
  highest_education: "BA Graphic Design",
  latest_work_experience: "Marketing Coordinator",
  bio: "I’m a marketing coordinator who recently moved to netherlands and i’m struggling with the dutch language",
  hours_spent: 200,
  credit_spent: 600,
  mother_language: ["Arabic"],
  other_languages: ["English", "French"],
  level: ["Med B2"],
  interests: ["Music", "Cooking"],
  impact_measurments: IMPACT_MEASURMENTS,
  program: "Adults",
  organization: "Amsterdam",
  profile_img: "/images/learner-2-image.png",
  rating: 7,
};

