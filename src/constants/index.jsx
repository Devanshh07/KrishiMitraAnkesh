import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "About us", href: "#" },
  { label: "Products", href: "#" },
  { label: "Gallary", href: "#" },
  { label: "Reviews", href: "#" },
  { label: "Farmers", href: "#" },
  
];
export const testimonials = [
  {
    user: "Rajesh Kumar",
    company: "Farmer, Madhya Pradesh",
    image: user1,
    text: "KrishiMitraAnkesh ke beej aur khaad ki quality bahut achhi hai. Fasal pehle se zyada achhi hui aur samay par delivery bhi milti hai. Bahut khush hoon.",
  },
  {
    user: "Suman Devi",
    company: "Farmer, Uttar Pradesh",
    image: user2,
    text: "Inki seva aur samarthan lajawab hai. Har season ke liye sahi products suggest karte hain. Mere kheton ka utpaadan kaafi badh gaya hai.",
  },
  {
    user: "Mohit Sharma",
    company: "Farmer, Rajasthan",
    image: user3,
    text: "KrishiMitraAnkesh ke tools ne mere kaam ka time aadha kar diya. Majboot aur aasani se use hone wale tools ki wajah se kaam bahut easy ho gaya.",
  },
  {
    user: "Kamla Bai",
    company: "Farmer, Chhattisgarh",
    image: user4,
    text: "Yeh log sirf products hi nahi dete, balki behtareen salaah bhi dete hain. Meri fasal ki quality ab shahar ke market mein sabse achhi bikti hai.",
  },
  {
    user: "Ravi Patel",
    company: "Farmer, Gujarat",
    image: user5,
    text: "Beej, khaad, aur tools sabhi ek jagah mil jate hain. Quality top-class hai aur daam bhi sahi. Main hamesha yahi se saman kharidta hoon.",
  },
  {
    user: "Neha Yadav",
    company: "Farmer, Haryana",
    image: user6,
    text: "KrishiMitraAnkesh ki service bahut tez hai. Order jaldi deliver hota hai aur product ki quality hamesha ummeed se zyada achhi hoti hai.",
  },
];

export const features = [
  {
    icon: <BotMessageSquare />,
    text: "Easy Selection & Ordering",
    description:
     "Quickly choose and arrange your farming essentials — seeds, fertilizers, and tools — with our simple, farmer-friendly interface."},
  {
    icon: <Fingerprint />,
    text: "Farming Made Accessible",
    description:
      "Whether you’re in the field or at home, access KrishiMitraAnkesh from any device with ease." },
  {
    icon: <ShieldHalf />,
    text: "Pre-Made Crop Plans",
    description:
      "Get instant access to curated product bundles designed for specific crops and climates" },
  {
    icon: <BatteryCharging />,
    text: "Farming Made Accessible",
    description:
      "Whether youre in the field or at home, access KrishiMitraAnkesh from any device with ease."},
  {
    icon: <PlugZap />,
    text: "Real-Time Farming Network ",
    description:
      "Collaborate with experts and peers instantly to solve challenges and boost productivity." },
  {
    icon: <GlobeLock />,
    text: "Harvest Intelligence",
    description:
      "Analyze your farming journey with easy-to-read reports for better planning and results"},
];

export const checklistItems = [
  {
    title: "Track, Learn, and Grow",
    description:
      "Monitor your crop performance and gain valuable insights to improve your harvest.",
  },
  {
    title: "Shop with Confidence",
    description:
      "Easily find the right seeds, fertilizers, and tools with detailed product information.",
  },
  {
    title: "Expert Help at Your Side",
    description:
      "Get guidance from our farming experts to choose the best products for your needs and season.",
  },
  {
    title: "Share and Collaborate",
    description:
      "Connect with other farmers and share your farming plans in just minutes.",
  },
];

export const pricingOptions = [
  {
    title: "Free",
    price: "$0",
    features: [
      "Private board sharing",
      "5 Gb Storage",
      "Web Analytics",
      "Private Mode",
    ],
  },
  {
    title: "Pro",
    price: "$10",
    features: [
      "Private board sharing",
      "10 Gb Storage",
      "Web Analytics (Advance)",
      "Private Mode",
    ],
  },
  {
    title: "Enterprise",
    price: "$200",
    features: [
      "Private board sharing",
      "Unlimited Storage",
      "High Performance Network",
      "Private Mode",
    ],
  },
];

export const resourcesLinks = [
  { href: "#", text: "Getting Started" },
  { href: "#", text: "Product Documentation" },
  { href: "#", text: "Farming Tutorials" },
  { href: "#", text: "Service Guide" },
  { href: "#", text: "Farmer Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
  { href: "#", text: "System Requirements" },
  { href: "#", text: "Downloads" },
  { href: "#", text: "Release Notes" },
];

export const communityLinks = [
  { href: "#", text: "Farmer Gatherings" },
  { href: "#", text: "Agriculture Fairs" },
  { href: "#", text: "Workshops & Training" },
  { href: "#", text: "Crop Competitions" },
  { href: "#", text: "Farming Job Opportunities" },
];
