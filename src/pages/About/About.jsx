import React, { useState } from "react";
import "./About.scss";
import { Navbar, Footer } from "../../components";
import { motion } from "framer-motion";
import utkarshimg from "../../assets/utkarshimg.png";
import data from "../../data";
import Clang from "../../assets/Clang.png";
import reactIcon from "../../assets/react.png";
import cpp from "../../assets/cpp.png";
import Tilt from "react-parallax-tilt";

const About = () => {
  const [rotate, setRotate] = useState({
    c: false,
    cpp: false,
    react: false,
  });

  const toggleRotate = (key) => {
    setRotate((prevState) => ({
      ...prevState,
      [key]: !prevState[key],
    }));
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="about"
    >
      <Navbar />
      <div className="contents">
        <h1 className="gradient__text">About</h1>
        <div className="main-info">
          <p>
            Hi, I'm {data.name} from {data.instituteName}. A{" "}
            <span style={{ fontStyle: "italic" }}> {data.majorSkill1} </span> ,
            <span style={{ fontStyle: "italic" }}> {data.majorSkill2} </span>{" "}
            and {data.majorSkill3} {data.aboutYourself}
          </p>
          <Tilt>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <img
                src={data.imageAbout}
                alt={data.name}
                height={400}
                width={350}
              />
            </motion.div>
          </Tilt>
        </div>

        <div className="tech">
          <p>
            Here are a few technologies and Design tools I've been working with
            recently:
          </p>

          <div className="tech-items">
            <motion.div
              className="item"
              animate={{ rotate: rotate.c ? 360 : 0 }}
              onClick={() => {
                toggleRotate("c");
              }}
            >
              <img src={Clang} alt="" />
            </motion.div>

            <motion.div
              className="item"
              animate={{ rotate: rotate.cpp ? 360 : 0 }}
              onClick={() => {
                toggleRotate("cpp");
              }}
            >
              <img src={cpp} alt="" />
            </motion.div>

            <motion.div
              className="item"
              animate={{ rotate: rotate.react ? 360 : 0 }}
              onClick={() => {
                toggleRotate("react");
              }}
            >
              <img src={reactIcon} alt="" />
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default About;
