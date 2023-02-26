import React, { useEffect, useState } from "react";
import { btns } from "../Data";
import { photoshoots } from "../Data";
import { motion, AnimatePresence } from "framer-motion";

const Photoshoots = () => {
  const [filterImages, setFilterImages] = useState(null);
  useEffect(() => {
    setFilterImages(photoshoots);
  }, []);

  const handleClick = (e) => {
    let btnType = e.target.value;
    const newFilterImages = photoshoots.filter(
      (photoshoot) => photoshoot.value === btnType
    );
    btnType !== "all"
      ? setFilterImages(newFilterImages)
      : setFilterImages(photoshoots);
  };

  return (
    <div className="section" id="photoshoots">
      <div className="mb-8">
        <h2 className="text-[1.5rem] font-bold"> My Work</h2>
        <div className="w-14 h-[3px] rounded-sm bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
      </div>
      <div className="flex flex-wrap gap-8">
        {btns.map((btn) => {
          return (
            <button key={btn.id} value={btn.value} onClick={handleClick}>
              {btn.name}
            </button>
          );
        })}
      </div>
      <AnimatePresence>
      <motion.div className="grid sm:grid-cols-2 md:grid-cols-3 mt-12 gap-3">
        {filterImages &&
          filterImages.map((filterImage) => {
            return(
                <motion.div layout initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity: 0, transition: {duration: 0.3}}} key={filterImage.id}>
                    <motion.img src={filterImage.image} alt=""/>
            </motion.div>
            );
          })}
      </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Photoshoots;
