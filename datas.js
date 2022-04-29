// Assets
import JohnDoe from "./public/images/john-doe.jpg";
import LindsayWalton from "./public/images/lindsay-walton.jpg";
import CourtneyHenry from "./public/images/courtney-henry.jpg";
import KristinWatson from "./public/images/kristin-watson.jpg";
import HectorGibbons from "./public/images/hector-gibbons.jpg";
import JillianSteward from "./public/images/jillian-steward.jpg";

const pricePlans = [
  {
    id: 1,
    name: "Freelancer",
    price: 30,
    description: "The essentials to provide your best work for clients",
    features: [
      "5 products",
      "Up to 1,000 subscibers",
      "Basic analytics",
      "48-hour support response time",
    ],
  },
  {
    id: 2,
    name: "Startup",
    price: 43,
    description: "A plan that scales with your rapidly growing business",
    features: [
      "25 products",
      "Up to 5,000 subscibers",
      "Advanced analytics",
      "24-hour support response time",
      "Marketing automation",
    ],
  },
  {
    id: 3,
    name: "Enterprise",
    price: 65,
    description: "Dedicated support and infrastructure for your company",
    features: [
      "Unlimited products",
      "Unlimited subscibers",
      "Advance analitics",
      "1-hour, dedicated support response time",
      "Marketing automation",
      "Custom integrations",
    ],
  },
];

const ourTeam = [
  {
    id: 1,
    name: "John Doe",
    position: "Founder & CEO",
    image: JohnDoe,
    media: {
      twitter: "/",
      facebook: "/",
    },
  },
  {
    id: 2,
    name: "Lindsay Walton",
    position: "Front-end Developer",
    image: LindsayWalton,
    media: {
      twitter: "/",
      facebook: "/",
    },
  },
  {
    id: 3,
    name: "Courtney Henry",
    position: "Designer",
    image: CourtneyHenry,
    media: {
      twitter: "/",
      facebook: "/",
    },
  },
  {
    id: 4,
    name: "Kristin Watson",
    position: "Senior Designer",
    image: KristinWatson,
    media: {
      twitter: "/",
      facebook: "/",
    },
  },
  {
    id: 5,
    name: "Hector Gibbons",
    position: "Marketing",
    image: HectorGibbons,
    media: {
      twitter: "/",
      facebook: "/",
    },
  },
  {
    id: 6,
    name: "Jillian Steward",
    position: "Back-end Developer",
    image: JillianSteward,
    media: {
      twitter: "/",
      facebook: "/",
    },
  },
];

const footerLinks = [
  {
    solutions: ["Products", "Pricing", "Solutions", "Contact"],
    about: ["About", "Team", "Careers", "Press"],
    legal: ["Privacy", "Terms", "Cookies", "Advertise"],
    contact: ["Contact", "Support", "FAQ", "Blog"],
  },
];

export { pricePlans, ourTeam, footerLinks };
