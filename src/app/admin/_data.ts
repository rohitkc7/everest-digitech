export type SubmissionStatus = "new" | "in-progress" | "closed";

export interface Submission {
  id: number;
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
  status: SubmissionStatus;
  date: string;
}

export const submissions: Submission[] = [
  {
    id: 1,
    name: "Aarav Sharma",
    email: "aarav@example.com",
    phone: "+977 9800000001",
    service: "Website Development",
    budget: "$500 – $1,500",
    message: "I need a professional website for my restaurant in Kathmandu. Looking for something clean and modern with an online menu and reservation form.",
    status: "new",
    date: "2026-04-08",
  },
  {
    id: 2,
    name: "Priya Thapa",
    email: "priya@gmail.com",
    phone: "+977 9800000002",
    service: "Digital Marketing",
    budget: "$500 – $1,500",
    message: "We want to run Google Ads for our clothing shop and also need help with social media content creation and scheduling.",
    status: "in-progress",
    date: "2026-04-07",
  },
  {
    id: 3,
    name: "Bikram Rai",
    email: "bikram@company.com",
    phone: "+977 9800000003",
    service: "Software Development",
    budget: "$5,000+",
    message: "Need a custom inventory management system for our retail chain with 8 branches. Should include real-time stock tracking, sales reports, and staff management.",
    status: "closed",
    date: "2026-04-05",
  },
  {
    id: 4,
    name: "Sunita Karki",
    email: "sunita@example.com",
    phone: "+1 555 0001",
    service: "Branding & Design",
    budget: "Let's discuss",
    message: "I am launching a new wellness brand and need a complete identity — logo, color palette, typography, and a social media kit.",
    status: "new",
    date: "2026-04-04",
  },
  {
    id: 5,
    name: "Rajesh Poudel",
    email: "rajesh@biz.np",
    phone: "+977 9800000005",
    service: "Website Development",
    budget: "$1,500 – $5,000",
    message: "E-commerce site for our clothing brand. Need product catalog, cart, and payment gateway integration with Esewa and Khalti.",
    status: "in-progress",
    date: "2026-04-03",
  },
  {
    id: 6,
    name: "Manisha Lama",
    email: "manisha@example.com",
    phone: "+977 9800000006",
    service: "Digital Marketing",
    budget: "Under $500",
    message: "I run a small bakery and want help with Instagram and Facebook content creation and management on a monthly retainer.",
    status: "closed",
    date: "2026-04-01",
  },
];
