import React from "react";
import { useState } from "react";
import "./about.css";
import AboutImg from "../../assets/NewPic.JPG";
import Skills from "../../components/skills/Skills";
import Cv from "../../assets/BAWO_OTAIGO_RESUME.pdf";
import data from "./about-data";

const About = () => {
  const [paragraphs, setParagraphs] = useState(data);
  return (
    <section id="about">
      <div className="container about__container">
        <div className="section__title">
          <h2>About Me</h2>
          <div className="underline"></div>
        </div>
        <div className="about__top">
          <div className="about__left">
            <h4>Get to Know Me!</h4>
            <div className="about__left-paragraphs">
              {/* <p>
                Hello! My name is Bawo. I’m a dedicated Ux/Ui designer. I enjoy
                designing clean, user-intuitive websites, web applications and
                moblie applications that leads to the success of the overall
                product. You can check out some of my work in the projects
                section.
              </p>
              <p>
                I also like sharing content related to Ux/Ui design that I have
                learned over the years so as to help beginners looking to
                transition into design and also update fellow designers on
                latest design trends. Feel free to Connect or Follow me on my
                {"  "}
                <span style={{ color: "red" }}>
                  <a
                    href="https://www.instagram.com/uidesign3r/"
                    target="_blank"
                    style={{ color: "#52d6f4" }}
                  >
                    instagram{" "}
                  </a>
                </span>
                {"  "}
                where I post useful content related to ux/ui.
              </p>
              <p>
                I'm open to Job opportunities where I can contribute, learn and
                grow. If you have a good opportunity that matches my skills and
                experience, then don't hesitate to contact me.
              </p> */}

              <p>
                Hello! My name is Bawo, I am a highly motivated and experienced
                Product Designer with a passion for helping businesses translate
                their goals into user-centric solutions that are both functional
                and aesthetically pleasing. I am skilled in designing intuitive
                interfaces that enhance user satisfaction, conducting
                comprehensive user research, and creating stunning prototypes
                that bring your ideas to life.
              </p>
              <p>
                With over four years in product design, I've created digital
                products that resonate with users on an emotional level,
                produced intuitive designs that make complex tasks feel
                effortless, and generated positive user feedback driving
                engagement metrics high. You can see some of my work in Projects
              </p>

              <p>
                When not working you can find me exploring new tech trends and
                drawing inspiration from everyday life which fuels my creativity
                and keeps my design thinking fresh and innovative. You can
                follow me on {"  "}
                <span style={{ color: "red", fontStyle: "italic" }}>
                  <a
                    href="https://www.instagram.com/uidesign3r/"
                    target="_blank"
                    style={{ color: "#52d6f4" }}
                  >
                    instagram{" "}
                  </a>
                </span>
                {"  "} where I post useful content related to Product Design. I
                believe every product has a story to tell and I’m committed to
                helping you tell yours in a way that resonates deeply with your
                users. Let’s connect to know how I can be of help.
              </p>
            </div>
            <a href="#contact" className="btn">
              Contact Me
            </a>
          </div>
          <div className="about__right">
            <div className="about__portrait">
              <img src={AboutImg} alt="" />
            </div>
          </div>
        </div>
        <div className="about__bottom">
          <h4>My skills</h4>
          <Skills paragraphs={paragraphs}></Skills>
          <a href={Cv} download className="btn">
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
