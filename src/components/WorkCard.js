import React from "react";
import "../assets/css/WorkCard.css";

export default function WorkCard(props) {
  return (
    <div className="work-card">
      <img src={props.src} alt={props.alt}></img>
      <div className="container">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
      </div>
    </div>
  );
}
