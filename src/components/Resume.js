import React from "react";
import resume from "../assets/img/BEN_LAUBACH_RESUME.pdf";

export default function Resume() {
  return (
    <div>
      <a href={resume} download>
        <button>Download My Resume</button>
      </a>
      <section className="skills">
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
    </div>
  );
}
