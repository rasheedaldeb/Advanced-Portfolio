import SideBar from "../SideBar/SideBar";
import "./NavBar.scss";
import { motion } from "framer-motion";
const NavBar = () => {
  return (
    <div className="Navbar">
      {/* sidebar */}
      <SideBar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Rasheed
        </motion.span>
        <div className="social">
          <a href="https://www.facebook.com/rashed.aldeb.16?mibextid=ZbWKwL">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="https://www.linkedin.com/in/rasheed-aldeb-a3aa68259">
            <img src="/LinkedIn.png" alt="" width={64} />
          </a>
          <a href="https://github.com/rasheedaldeb">
            <img src="/github.png" alt="" width={64} />
          </a>
          <a href="https://www.instagram.com/rashedaldeb">
            <img src="/instagram.png" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
