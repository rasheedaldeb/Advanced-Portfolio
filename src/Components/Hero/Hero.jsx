import "./Hero.scss";
import { motion } from "framer-motion";
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
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType: "mirror",
      duration: 20,
    },
  },
};
const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="text-container"
          variants={textVariants}
          initial="initial"
          // animate="animate"
          animate="animate"
        >
          <motion.h2 variants={textVariants}>Rasheed Aldeb</motion.h2>
          <motion.h1 variants={textVariants}>
            Web Designer And Frontend Developer
          </motion.h1>
          <motion.div className="buttons" variants={textVariants}>
            <motion.button variants={textVariants}>
              <a href="https://t.me/rasheedaldeb">Contact Me</a>
            </motion.button>
            <motion.button variants={textVariants} className="cv">
              <a href="/images/Rasheed-Complete-cv.pdf" download>
                Download CV
              </a>
            </motion.button>
          </motion.div>
          <motion.img
            src="/scroll.png"
            alt=""
            variants={textVariants}
            animate="scrollButton"
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Write Content Creator Influencer
      </motion.div>
      <div className="imageContainer">
        <img src="/hero.png" alt="" style={{ width: "80%", height: "100%" }} />
      </div>
    </div>
  );
};

export default Hero;
