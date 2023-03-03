import React from "react";
import Me from "../assets/img/me.jpg";

export default function AboutMe() {
  return (
    <div className="hero">
      <section className="left-side">
        <h2>ABOUT ME</h2>
        <img src={Me} alt="me" id="me-img" />
      </section>
      <section className="right-side">
        <p>
          My name is Ben Laubach. Currently, I am studying full stack web
          development in the University of Washington's coding bootcamp. Feel
          free to take a look around my github for my work, or contact me. I am
          working on a full-stack application for production companies aimed
          towards keeping track of non-conforming products in an easy to see
          manner.
        </p>
      </section>
    </div>
  );
}
