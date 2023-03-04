import React from "react";
import "../assets/css/WorkCard.css";

import BGP from "../assets/img/Board-Game-Party.png";
import WTA from "../assets/img/wta-home.jpg";
import TWO from "../assets/img/twogg.PNG";

export default function WorkCard(props) {
  return (
    <div className="work-card">
      <img src={props.src} alt={props.alt}></img>
      <div className="container">
        <h3>{props.title}Board Game Party</h3>
        <p>{props.description}Front-end application for finding board games.</p>
      </div>
    </div>
  );
}
