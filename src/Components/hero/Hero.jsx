import React from 'react'
import "./hero.scss"
import { motion } from 'framer-motion';

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const scrollButtonVariant = {
  animate: {
    opacity: [0, 1],
    y: [0, 10],
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};

const silderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    opacity: 1,
    transition: {
      repeat:Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div className="textContainer" variants={textVariants} initial="initial" animate="animate">
          <motion.h2 variants={textVariants}>HARVEY TYLER</motion.h2>
          <motion.h1 variants={textVariants}>Web developer and UI designer</motion.h1>
          <motion.div variants={textVariants} className="buttons">
            <motion.button variants={textVariants}>See the Latest Works</motion.button>
            <motion.button variants={textVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img variants={scrollButtonVariant} animate="animate" src="/scroll.png" alt="scroll down" />
        </motion.div>
      </div>
      <motion.div className="slidingTextContainer" variants={silderVariants} initial="initial" animate="animate">
        Writer Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="hero" />
      </div>
    </div>
  );
};

export default Hero;
