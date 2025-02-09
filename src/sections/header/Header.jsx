import React from "react";
import "./header.css";
import data from "./data";
import { container, itemm } from "./animation";
import { delay, motion, easeOut, easeIn, easeInOut } from "framer-motion";

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="hey-div">
          <motion.h1
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: "0.2", duration: 1.4 }}
          >
            Hey, I'm Bawo Otaigho.
          </motion.h1>
        </div>

        <div className="p__container">
          <motion.p
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{ delay: "0.4", duration: 1.4 }}
          >
            I am a dedicated Product Designer focused on delivering exceptional
            user experiences that elevate brands and drive results.
          </motion.p>
        </div>
        <div className="header__link-wrapper">
          <motion.a
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            transition={{ delay: "0.4", duration: 1 }}
            href="#projects"
            className="btn"
          >
            Skip To Projects
          </motion.a>
        </div>
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="header__socials"
        >
          {data.map((item) => (
            <div className="social__links-container">
              <motion.a
                variants={itemm}
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferer"
              >
                {item.icon}
              </motion.a>
            </div>
          ))}
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
