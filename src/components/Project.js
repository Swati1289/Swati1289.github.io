import React from "react";
import "../style.css";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Project() {
  return (
    <div className="project-container">
      <div className="project project--1">
        <h3>Music Mantra</h3>
        <p>
          A web application on music playlist management system for listening to
          music of their own interest, developed using HTML,CSS,JavaScript,MySql
          and PHP.
        </p>
        <ul className="components-used">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <a
          href="https://github.com/Swati1289/Music_Mantra"
          target="blank"
          className="link--to-site"
        >
          <FaGithub />
        </a>
        <a
          href="https://github.com/Swati1289/Music_Mantra"
          className="link--to-site"
        >
          <FaExternalLinkAlt />
        </a>
      </div>
      <div className="project project--2">
        <h3>Forkify</h3>
        <p>
          A vanilla JavaScript app that display recipe food data. The user can
          search for a specific recipe, and save to a favorites list via local
          storage. The user can easily increase or decrease servings as per his
          need.
        </p>
        <ul className="components-used">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>
        <a
          href="https://github.com/Swati1289/forkify-app"
          target="blank"
          className="link--to-site"
        >
          <FaGithub />
        </a>
        <a
          href="http://forkify-swati-hegde.netlify.app/"
          target="blank"
          className="link--to-site"
        >
          <FaExternalLinkAlt />
        </a>
      </div>
      <div className="project project--3">
        <h3>Task-Tracker</h3>
        <p>
          A web app for tracking the daily task where we can add and delete task
          for our reference alson can toggle reminder for specific task
          developed using HTML CSS React.Js
        </p>
        <ul className="components-used">
          <li>HTML</li>
          <li>CSS</li>
          <li>react</li>
        </ul>
        <a
          href="https://github.com/Swati1289/TaskTracker"
          target="blank"
          className="link--to-site"
        >
          <FaGithub />
        </a>
        <a href="#" className="link--to-site">
          <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
}

export default Project;
