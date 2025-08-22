import { BotMessageSquare } from "lucide-react";
import { BatteryCharging } from "lucide-react";
import { Fingerprint } from "lucide-react";
import { ShieldHalf } from "lucide-react";
import { PlugZap } from "lucide-react";
import { GlobeLock } from "lucide-react";

import fert from '../assets/fert-1.webp'
import fert1 from '../assets/fert2.webp'
import fert2 from '../assets/fert3.webp'
import fert5 from '../assets/fert5.webp'
import fert4 from '../assets/rt4.webp'

import user1 from "../assets/profile-pictures/user1.jpg";
import user2 from "../assets/profile-pictures/user2.jpg";
import user3 from "../assets/profile-pictures/user3.jpg";
import user4 from "../assets/profile-pictures/user4.jpg";
import user5 from "../assets/profile-pictures/user5.jpg";
import user6 from "../assets/profile-pictures/user6.jpg";

export const navItems = [
  { label: "Plants", href: "/plants" },
  { label: "Natural Farming", href: "/natural-farming" },
  { label: "Products", href: "/products" },
  { label: "Gallery", href: "/gallery" },
  { label: "Farmers", href: "/farmers" },
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
    image: fert1,
    price: "₹499",
  },
  {
    image: fert
    ,price: "₹899",
  },
  {
    image: fert2,
    price: "₹499",
  },,
  {
    image: fert5,
    price: "₹1,299",
  },
  {
    image: fert4,
    price: "₹199",
  }
];
export const farmersData = [
  {
    name: "Ravi Kumar",
    title: "Organic Farmer",
    location: "Madhya Pradesh, India",
    image: "https://randomuser.me/api/portraits/men/32.jpg"
  },
  {
    name: "Sneha Patel",
    title: "Dairy Farmer",
    location: "Gujarat, India",
    image: "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    name: "Ajay Singh",
    title: "Rice Farmer",
    location: "Punjab, India",
    image: "https://randomuser.me/api/portraits/men/67.jpg"
  },
  {
    name: "Priya Sharma",
    title: "Vegetable Grower",
    location: "Kerala, India",
    image: "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    name: "Manoj Verma",
    title: "Fruit Farmer",
    location: "Himachal Pradesh, India",
    image: "https://randomuser.me/api/portraits/men/8.jpg"
  },
  {
    name: "Aarti Joshi",
    title: "Floriculturist",
    location: "Uttarakhand, India",
    image: "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    name: "Karan Mehta",
    title: "Livestock Farmer",
    location: "Rajasthan, India",
    image: "https://randomuser.me/api/portraits/men/41.jpg"
  },
  {
    name: "Neha Gupta",
    title: "Poultry Farmer",
    location: "Tamil Nadu, India",
    image: "https://randomuser.me/api/portraits/women/33.jpg"
  },
  {
    name: "Rajesh Yadav",
    title: "Sugarcane Farmer",
    location: "Bihar, India",
    image: "https://randomuser.me/api/portraits/men/13.jpg"
  },
  {
    name: "Sonal Kapoor",
    title: "Tea Plantation Farmer",
    location: "Assam, India",
    image: "https://randomuser.me/api/portraits/women/52.jpg"
  },
  {
    name: "Vikram Sethi",
    title: "Wheat Farmer",
    location: "Haryana, India",
    image: "https://randomuser.me/api/portraits/men/25.jpg"
  },
  {
    name: "Divya Reddy",
    title: "Aquaculture Farmer",
    location: "Andhra Pradesh, India",
    image: "https://randomuser.me/api/portraits/women/16.jpg"
  },
  {
    name: "Anil Deshmukh",
    title: "Cotton Farmer",
    location: "Maharashtra, India",
    image: "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    name: "Pooja Nair",
    title: "Spice Farmer",
    location: "Kerala, India",
    image: "https://randomuser.me/api/portraits/women/24.jpg"
  },
  {
    name: "Suresh Babu",
    title: "Vegetable Farmer",
    location: "Karnataka, India",
    image: "https://randomuser.me/api/portraits/men/19.jpg"
  }
];
export const plantsData = [
  {
    name: "G9 Banana",
    title: "Tissue Culture Fruit",
    description: "Highly disease-resistant and fast-growing banana variety, micropropagated for superior yields.",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Bananas.jpg/320px-Bananas.jpg"
  },
  {
    name: "Grand Nain Potato",
    title: "Lab-Enhanced Vegetable",
    description: "A genetically uniform potato developed via tissue culture, ideal for robust productivity.",
    image: "https://images.unsplash.com/photo-1501870190088-cd3e92ae0ea3?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Jatropha curcas",
    title: "Medicinal Plant",
    description: "Lab-grown for biofuel and medicinal uses, propagated for uniformity and virus-free stocks.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Jatropha_curcas_01.JPG"
  },
  {
    name: "Gladiolus Hybrid",
    title: "Ornamental Flower",
    description: "Bred in Indian labs for vibrant colors and longer shelf-life, popular in landscaping and floriculture.",
    image: "https://images.unsplash.com/photo-1519864607721-c1e1b6d83d56?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Teak (Tectona grandis)",
    title: "Forestry Crop",
    description: "Tissue culture teak grown for top-grade timber and rapid, disease-resistant growth.",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Orchid Varieties",
    title: "Lab-Grown Exotic",
    description: "Indian labs produce disease-free, vibrant orchids for home and commercial use.",
    image: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Philodendron",
    title: "Interior Plant",
    description: "Micropropagated plant selected for ornamental beauty, air purification, and resilience.",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  }
  
];



export const resourcesLinks = [

  { href: "#", text: "Farming Tutorials" },
  { href: "#", text: "Farmer Community Forums" },
];

export const platformLinks = [
  { href: "#", text: "Features" },
  { href: "#", text: "Supported Devices" },
];

export const communityLinks = [
  { href: "#", text: "Farmer Gatherings" },
  { href: "#", text: "Agriculture Fairs" },

];
