import React from "react";
import "../style.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className="about-container" id="about">
      <h1>
        Hi,I am <span className="name">Swati Hegde</span>
      </h1>
      <h2>Frontend Developer</h2>
      <p className="about-content">
        I am frontend developer interested in developing user freindly web
        applications. with React HTML and CSS Self-motivated, hardworking and
        dedicated student interested to work and learn in challenging
        environment. Always energetic and eager to learn new things with good
        follow through skills, activeness, punctuality and honesty.
      </p>
      <a
        href="https://drive.google.com/file/d/137-aFGMXKLmRbj4CiUYHTeWMZFGvIfJE/view?usp=sharing"
        target="blank"
        className="btn"
      >
        Resume
      </a>

      <a href="https://github.com/Swati1289" target="blank" className="link">
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/swati-hegde-273046199"
        target="blank"
        className="link"
      >
        <FaLinkedin style={{ MarginTop: "100px" }} />
      </a>
    </div>
  );
}

export default About;
