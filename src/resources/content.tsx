import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Sara",
  lastName: "Londreira",
  name: `Sara Londreira`,
  role: "Software Engineering Student",
  avatar: "/images/avatar.jpg",
  email: "saralondreira@gmail.com",
  location: "Europe/Lisbon",
  languages: ["Portuguese", "English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>My weekly newsletter about creativity and engineering</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/saralondreira",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/saralondreira",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: <>Transitioning to tech with a passion for software engineering</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Pedagogical Platform</strong>
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Featured work (In Development)
        </Text>
      </Row>
    ),
    href: "/work/pedagogical-platform",
  },
  subline: (
    <>
      I'm Sara, a Software Engineering student based in Aveiro, Portugal. Leveraging my excellent communication and diagnostic skills from tech retail, I am currently building robust applications and transitioning into software development with a strong focus on Agile methodologies.
    </>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Meet ${person.name}, ${person.role} from Aveiro, Portugal`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false, 
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Passionate about technology and currently transitioning my career path into software engineering. I bring excellent soft skills in communication, problem-solving, and teamwork from my extensive experience in technology retail. I am currently consolidating strong transversal programming foundations, heavily focused on Agile Development, and actively looking to integrate a challenging project where I can continuously learn.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Worten Portugal",
        timeframe: "Sep 2024 - Sep 2025",
        role: "IT Sales Consultant",
        achievements: [
          <>
            Provided specialized technical advice in the sale of IT equipment including Hardware, Peripherals, and Software.
          </>,
          <>
            Analyzed technical specifications to recommend the right solutions tailored to clients' specific needs.
          </>,
        ],
        images: [],
      },
      {
        company: "iStore - Apple Premium Reseller",
        timeframe: "May 2023 - Apr 2024",
        role: "Apple Specialist",
        achievements: [
          <>
            Delivered premium customer service focused on the client experience and maintaining high-quality standards.
          </>,
          <>
            Provided Tier 1 technical support for iOS/macOS, configured Apple ecosystems, and diagnosed technical needs.
          </>,
        ],
        images: [],
      },
      {
        company: "MO Fashion | Normal",
        timeframe: "2021 - 2024",
        role: "Sales Assistant",
        achievements: [
          <>
            Managed visual merchandising and store organization to ensure an optimal shopping environment.
          </>,
          <>
            Delivered customer service heavily focused on achieving and exceeding commercial goals.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education & Certifications",
    institutions: [
      {
        name: "Instituto Superior de Engenharia do Porto (ISEP)",
        description: <>CTESP in Agile Software Development (2025 - 2027). Practical focus on Software Engineering, intensive emphasis on Agile Methodologies (Scrum), software development lifecycle, and collaborative teamwork.</>,
      },
      {
        name: "IEFP | Instituto Emprego e Formação Profissional",
        description: <>Specialization (CET Level 5) in Information Systems Technology and Programming (Nov 2025 - Nov 2026). Focus on Algorithms (C#, Python), Databases, Security, and Mobile Development (Android).</>,
      },
      {
        name: "42 Porto",
        description: <>Piscine Programming Bootcamp (Feb 2025 - Mar 2025). Intensive immersion in C and Shell. Developed autonomy, resilience, and peer-to-peer problem solving.</>,
      },
      {
        name: "Escola Secundária Soares Basto",
        description: <>Professional Course in Multimedia Technician (2015 - 2018). Final Grade: 16. Highlight: 18 out of 20 in Information Systems discipline.</>,
      },
      {
        name: "Método Consultoria",
        description: <>Certification in Customer Service and Teambuilding (Oct 2023).</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Hard Skills",
    skills: [
      {
        title: "Programming Languages",
        description: (
          <>Solid foundation in software development, logic, and object-oriented programming.</>
        ),
        tags: [
          { name: "C", icon: "code" },
          { name: "C++", icon: "code" },
          { name: "C#", icon: "code" },
          { name: "Java", icon: "code" },
          { name: "Python", icon: "code" },
          { name: "JavaScript", icon: "javascript" },
        ],
        images: [
          {
            src: "/images/projects/projects/hospital-code.png",
            alt: "Java Code Example",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Web, Mobile & Data",
        description: (
          <>Experience building user interfaces, mobile applications, and managing databases.</>
        ),
        tags: [
          { name: "HTML/CSS", icon: "code" },
          { name: "Android", icon: "mobile" },
          { name: "SQL", icon: "database" },
        ],
        images: [],
      },
      {
        title: "Systems & Methodologies",
        description: (
          <>Proficient in version control, system administration, and modern development practices.</>
        ),
        tags: [
          { name: "Git", icon: "git" },
          { name: "Linux/Shell", icon: "terminal" },
          { name: "Agile Development", icon: "cpu" },
          { name: "Scrum", icon: "cpu" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about software engineering...",
  description: `Read what ${person.name} has been up to recently`,
};

const work: Work = {
  path: "/work",
  label: "Projects",
  title: `Projects – ${person.name}`,
  description: `Software development projects by ${person.name}`,
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  images: [], 
};

export { person, social, newsletter, home, about, blog, work, gallery };