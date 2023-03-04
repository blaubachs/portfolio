import React from "react";
import "../assets/css/WorkCard.css";

export default function WorkCard(props) {
  return (
    <div className="work-card">
      <a href={props.link} target="_blank" rel="noreferrer">
        <img src={props.src} alt={props.alt}></img>
        <div className="container">
          <h3>{props.title}</h3>
          <p>{props.description}</p>
        </div>
      </a>
    </div>
  );
}
