import React, { useState } from "react";
import { navLinks } from "../Data.js";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import CloseIcon from '@mui/icons-material/Close';
import { motion } from "framer-motion"
import NavLinks from "./NavLinks.js";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="fixed w-full top-0 left-0 z-20">
      <div className="container mix-auto flex items-center justify-between py-4 px-2">
        <div className="flex items-center gap-2">
          <div className="rounded-full w-8 h-8 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white flex items-center justify-center font-bold">
            D
          </div>
          <p className="text-xl">
            Delvin <span className="opacity-80">"Zomo"</span> Reyes
          </p>
        </div>
        <div className="md:flex hidden items-center gap-6">
          {navLinks.map((navLink) => {
            return (
              <a href={`#${navLink.href}`} className="text-[0.95rem]">
                  {navLink.text}
                </a>
            );
          })}
        </div>
        <MenuBookIcon  className="cursor-pointer text-3xl md:hidden"
          onClick={() => setToggle(!toggle)}
        />
      </div>
      {toggle && (
        <motion.div initial={{x:500}} 
        animate={{x:0}} 
        className="fixed right-0 top-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 text-white h-screen w-80">
          <div className="flex flex-col gap-8 mt-[40%] ml-[30%]">
            {navLinks.map(navLink => {
                return <NavLinks key={navLink.id} {...navLink} setToggle={setToggle}/>
            })}
          </div>
          <CloseIcon className="absolute right-4 text-3xl top-8 cursor-pointer" onClick={() => setToggle(!toggle)}/>
        </motion.div>
      )}
    </div>
  );
};

export default Navbar;