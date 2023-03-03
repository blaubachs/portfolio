import React from "react";
import WorkCard from "./WorkCard";

export default function Work() {
  return (
    <div className="work">
      <section className="left-side">MY WORK</section>
      <section className="right-side">
        <WorkCard />
      </section>
    </div>
  );
}
