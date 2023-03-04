import React from "react";
import resume from "../assets/img/BEN_LAUBACH_RESUME.pdf";
import "../assets/css/Resume.css";

export default function Resume() {
  return (
    <div className="skills">
      <section>
        <h2>Front End Skills</h2>
        <ul className="skill-list">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
          <li>Handlebars</li>
        </ul>
        <h2>Back End Skills</h2>
        <ul className="skill-list">
          <li>Node.js</li>
          <li>Express</li>
          <li>MySQL, Sequelize</li>
          <li>MongoDB, Mongoose</li>
          <li>Restful API's</li>
        </ul>
      </section>
      <a href={resume} download>
        <button id="downloadBtn">Download My Resume</button>
      </a>
    </div>
  );
}
