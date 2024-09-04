import "./Services.scss";
import { motion } from "framer-motion";
import Skills from "../Skills/Skills";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};
const Services = () => {
  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"\
      animate="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br /> and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>What I Do?</button>
        </div>
      </motion.div>
      <motion.div variants={variants}>
        <Skills />
      </motion.div>
    </motion.div>
  );
};

export default Services;
