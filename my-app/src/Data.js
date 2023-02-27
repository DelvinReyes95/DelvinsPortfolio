import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import WatchIcon from "@mui/icons-material/Watch";
// import CookieIcon from "@mui/icons-material/Cookie";
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import LocationOnIcon from "@mui/icons-material/LocationOn";
import ContactMailIcon from "@mui/icons-material/ContactMail";



import sirrea3 from "./assets/sirrea3.JPG";
import tessa from "./assets/tessa.JPG";
import RachelyP2 from "./assets/RachelyP2.jpg";
import shoniah from "./assets/shoniah.JPG";
import ZiannaP from "./assets/ZiannaP.JPG";
import cesar from "./assets/cesar.JPG";
import DevonteP from "./assets/DevonteP.JPG";
import nacier from "./assets/nacier.JPG";
import jorden from "./assets/jorden.JPG";
import jordan from "./assets/jordan.JPG";



export const navLinks = [
  {
    id: 1,
    text: "Home",
    href: "home",
  },
  {
    id: 2,
    text: "Photoshoots",
    href: "photoshoots",
  },
  {
    id: 3,
    text: "Services",
    href: "services",
  },
  //   {
  //     id: 4,
  //     text: "Blog",
  //     href: "blog",
  //   },
  {
    id: 4,
    text: "Contact",
    href: "contact",
  },
];

export const services = [
  {
    id: 1,
    icon: <AttachMoneyIcon />,
    title: "Prices",
    text: "COMING SOON"
  },
  {
    id: 2,
    icon: <WatchIcon />,
    title: "Working Hours",
    text: "ON HOLD"
  },
];

export const requirements = [  
  
  {
    id: 1,
    icon: <AccessTimeIcon />,
    text: "Time Management",
    amount: "BE ON TIME!",
  },
  {
    id: 2,
    icon: <LocalAtmIcon />,
    text: "Deposit",
    amount: 0,
  },
  // {
  //   id: 3,
  //   icon: <CookieIcon />,
  //   text: "HOLDER",
  //   amount: 0,
  // },

  // {
  //   id: 4,
  //   icon: <CookieIcon />,
  //   text: "HOLDER",
  //   amount: 0,
  // },

];
export const btns = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Portraits", value: "portraits" },
  { id: 3, name: "Street", value: "streets" },
  { id: 4, name: "Lifestyle", value: "lifestyle" },
  { id: 5, name: "Boudoir", value: "boudoir" },
];

export const photoshoots = [
  {
    id: 1,
    image: sirrea3,
    value: "lifestyle",
  },
  {
    id: 2,
    image: tessa,
    value: "lifestyle",
  },
  {
    id: 3,
    image: RachelyP2,
    value: "lifestyle",
  },
  {
    id: 4,
    image: shoniah,
    value: "lifestyle",
  },
  {
    id: 5,
    image: ZiannaP,
    value: "lifestyle",
  },
  {
    id: 6,
    image: cesar,
    value: "streets",
  },
  {
    id: 7,
    image: DevonteP,
    value: "streets",
  },
  {
    id: 8,
    image: nacier,
    value: "streets",
  },
  {
    id: 9,
    image: jorden,
    value: "lifestyle",
  },
  {
    id: 10,
    image: jordan,
    value: "streets",
  },
];

export const contacts = [
  {
    id: 1,
    icon: <LocationOnIcon />,
    text: "Brooklyn, New York, USA",
  },
  {
    id: 2,
    icon: <ContactMailIcon />,
    text: "DelvinReyes.95@gmail.com",
  },
];
