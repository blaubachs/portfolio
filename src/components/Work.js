import React from "react";
import WorkCard from "./WorkCard";

export default function Work() {
  return (
    <div className="work">
      <section className="left-side">
        <h2>MY WORK</h2>
      </section>
      <section className="right-side">
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </section>
    </div>
  );
}
