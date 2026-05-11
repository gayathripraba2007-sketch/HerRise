import education from "@/assets/program-education.jpg";
import entrepreneurship from "@/assets/program-entrepreneurship.jpg";
import healthcare from "@/assets/program-healthcare.jpg";
import skills from "@/assets/program-skills.jpg";
import rural from "@/assets/program-rural.jpg";

export type Program = {
  slug: string;
  title: string;
  category: string;
  short: string;
  description: string;
  image: string;
  raised: number;
  goal: number;
  beneficiaries: number;
  mission: string;
  goals: string[];
  metrics: { label: string; value: string }[];
};

export const programs: Program[] = [
  {
    slug: "girls-education",
    title: "Girls Education",
    category: "Education",
    short: "Scholarships, books and safe classrooms for girls who would otherwise drop out.",
    description:
      "We partner with local schools to fund tuition, uniforms, mentorship and transport so girls can stay in school through secondary education.",
    image: education,
    raised: 720000,
    goal: 1000000,
    beneficiaries: 4200,
    mission:
      "Every girl deserves a classroom. We remove the financial and social barriers that pull girls out of school before they can finish.",
    goals: [
      "Fund 5,000 scholarships by 2026",
      "Equip 60 schools with libraries",
      "Train 300 women as community teachers",
    ],
    metrics: [
      { label: "Girls in school", value: "4,200+" },
      { label: "Schools partnered", value: "62" },
      { label: "Graduation rate", value: "94%" },
    ],
  },
  {
    slug: "women-entrepreneurship",
    title: "Women Entrepreneurship",
    category: "Livelihood",
    short: "Microloans, mentorship and market access for women launching their first business.",
    description:
      "From idea to first sale: we offer seed capital, business coaching and digital tools so women can build resilient enterprises.",
    image: entrepreneurship,
    raised: 980000,
    goal: 1500000,
    beneficiaries: 1850,
    mission:
      "When women run businesses, families rise. We give first-time founders the capital, skills and confidence to succeed.",
    goals: [
      "Fund 3,000 women-led businesses",
      "Reach $5M in cumulative revenue generated",
      "Build a peer mentor network of 500",
    ],
    metrics: [
      { label: "Businesses launched", value: "1,850" },
      { label: "Avg. income lift", value: "+184%" },
      { label: "Loan repayment", value: "98%" },
    ],
  },
  {
    slug: "healthcare-access",
    title: "Healthcare Access",
    category: "Health",
    short: "Mobile clinics and maternal care for women in underserved communities.",
    description:
      "Free check-ups, prenatal care, mental health support and reproductive health education delivered where it’s needed most.",
    image: healthcare,
    raised: 540000,
    goal: 900000,
    beneficiaries: 12000,
    mission:
      "Healthcare is dignity. We bring trusted, judgment-free care directly to women who have been overlooked by the system.",
    goals: [
      "Operate 25 mobile clinics",
      "Train 1,000 community health workers",
      "Provide care to 50,000 women",
    ],
    metrics: [
      { label: "Women served", value: "12,000+" },
      { label: "Mobile clinics", value: "14" },
      { label: "Health workers trained", value: "420" },
    ],
  },
  {
    slug: "skill-development",
    title: "Skill Development",
    category: "Training",
    short: "Tailoring, coding, and trade skills that translate directly into employment.",
    description:
      "Industry-aligned courses with placement partners — so every certificate leads to a real income.",
    image: skills,
    raised: 410000,
    goal: 750000,
    beneficiaries: 3100,
    mission:
      "A skill is freedom. We design hands-on programs that move women from training to paycheck within months.",
    goals: [
      "Train 10,000 women by 2027",
      "85% job placement rate",
      "Open 8 new training hubs",
    ],
    metrics: [
      { label: "Graduates", value: "3,100" },
      { label: "Job placement", value: "82%" },
      { label: "Training hubs", value: "5" },
    ],
  },
  {
    slug: "rural-women-support",
    title: "Rural Women Support",
    category: "Community",
    short: "Tools, cooperatives and clean energy for women in remote villages.",
    description:
      "Solar lighting, irrigation kits and cooperative formation that turn smallholdings into thriving family businesses.",
    image: rural,
    raised: 320000,
    goal: 600000,
    beneficiaries: 5400,
    mission:
      "Rural women feed nations. We invest in the tools and cooperatives that turn their labor into lasting prosperity.",
    goals: [
      "Form 200 women cooperatives",
      "Distribute 10,000 solar units",
      "Reach 100 villages",
    ],
    metrics: [
      { label: "Women supported", value: "5,400" },
      { label: "Cooperatives", value: "84" },
      { label: "Villages reached", value: "47" },
    ],
  },
];

export const getProgram = (slug: string) => programs.find((p) => p.slug === slug);
