import React from "react";
import close from "../assets/close.jpg";
import { Link } from "react-router-dom";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import VerifiedIcon from "@mui/icons-material/Verified";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="section flex justify-center items-center" id="home">
      <div className="grid md:grid-cols-2 place-items-center gap-8">
        <div className="w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden shadow-heroSadow border-[20px] border-solid border-ghostWhite">
          <img
            src={close}
            alt="PP-img"
            className="w-full h-full object-cover"
          />
        </div>
        <motion.div>
          <div className="font-fourth text-grey sm:text-[1.25rem] mb-4">
            <div>Dancer</div>
            <div>Photographer</div>
            <div>Software Engineer</div>
          </div>
          <h2 className="font-primary text-[2rem] sm:text-[2rem] mb-4">
            Delvin Reyes{" "}
            <VerifiedIcon
              fontSize="small"
              sx={{ fontSize: 15 }}
              className="mb-2 text-[#63a9ff]"
            />{" "}
            <p className="opacity-80 text-[1rem] font-fourth">
              Follow me Vero @DelvinReyes
            </p>
          </h2>

          <p className="opacity-80 text-[0.9rem] font-fourth">
            Welcome to my portfolio, let me tell you about my journey.
            <br /> As a dancer, I have a unique ability to express myself
            through movement, bringing style, and storytelling to life on stage
            or wherever I perform. I have spent years training my body and mind
            to execute precise and intricate movements with grace and fluidity,
            often pushing myself to the limits of my physical and artistic
            abilities. Throughout my dance career, I've won many dance
            competitions, performed at a half time show at the Barclays Center
            in Brooklyn, and was featured on BET's 106 & Park for winning their
            contest for best "Instagram dancer of the week".
            <br />
            <br />
            As a photographer, my goal is to capture memories that last a
            lifetime. With a keen eye for detail and a passion for capturing the
            essence of my subjects, I strive to provide clients with a truly
            unique and personal experience. My style is a blend of portraits,
            streets, boudoir, and products, creating timeless images that tell a
            story. I am dedicated to customer satisfaction and take pride in
            delivering high-quality images that truly reflect my clients'
            vision. If you're looking for a photographer who will go the extra
            mile to make your special moments unforgettable, I would love to be
            your choice.
            <br />
            <br />
            As a software engineer, the journey started when I attended The
            Marcy Lab School in 2022. The Marcy Lab School is a one year free
            program on web development to become a full stack developer. I have
            honed my skills in JavasSript, React, CSS3, HTML5, Bootstrap,
            Node.js, Express, PostgreSQL, OOP, Git, Figma, TailWind.CSS, and
            have demonstrated my ability to effectively design, develop, and
            maintain complex software systems such as this application you're
            currenlty visiting ( thank you 😉). I have also worked on projects
            that required collaboration with cross-functional teams and have
            been successful in delivering results within tight deadlines.
          </p>

          <div className="flex mt-4">
            <Link
              to={"https://www.instagram.com/delvinreyesofficial/"}
              className="py-2 px-4 text-[2rem]"
            >
              <AiFillInstagram />
            </Link>
            <Link
              to={"https://twitter.com/delvinreyez"}
              className="py-2 px-4 text-[2rem]"
            >
              <AiFillTwitterCircle />
            </Link>
            <Link
              to={"https://www.linkedin.com/in/delvinreyes/"}
              className="py-2 px-4 text-[2rem]"
            >
              <AiFillLinkedin />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
