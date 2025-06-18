import {
  GraduationCap,
  CreditCard,
  Plane,
  Users,
  FileText,
} from "lucide-react";

export const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Services", href: "#services" },
  { name: "Success Stories", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export const trustIndicators = [
  "100+ Successful Cases",
  "5+ Years Experience",
  "Friendly, Transparent Process",
];

export const services = [
  {
    icon: GraduationCap,
    title: "Student Admissions",
    description:
      "Get accepted to top Canadian universities with our expert guidance on applications, requirements, and documentation.",
    features: [
      "University Selection",
      "Application Support",
      "Document Preparation",
      "Program Matching",
    ],
  },
  {
    icon: CreditCard,
    title: "Student Loans",
    description:
      "Secure financing for your education with our comprehensive student loan assistance and financial planning services.",
    features: [
      "No Collateral Required",
      "Loan Applications",
      "Financial Planning Assistance",
      "Scholarship Guidance",
    ],
  },
  {
    icon: Plane,
    title: "Student Visa",
    description:
      "Navigate the complex visa application process with confidence. We ensure all documentation is perfect for approval.",
    features: [
      "Visa Applications",
      "Document Review",
      "SOP Writing",
      "Status Tracking",
    ],
  },
  {
    icon: FileText,
    title: "Visitor Visa",
    description:
      "Whether for tourism, business, or family visits, we help you obtain visitor visas quickly and efficiently.",
    features: [
      "Application Processing",
      "Supporting Documents",
      "Travel Planning",
      "Extension Services",
    ],
  },
  {
    icon: Users,
    title: "Skilled Worker Programs",
    description:
      "Immigrate to Canada through various skilled worker programs. We guide you through Express Entry/Provincial Nominee Programs.",
    features: [
      "Express Entry",
      "Provincial Nominees",
      "Skills Assessment",
      "Job Market Guidance",
    ],
  },
];
