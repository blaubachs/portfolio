import React from "react";
import WorkCard from "./WorkCard";
import BGP from "../assets/img/Board-Game-Party.png";
import WTA from "../assets/img/wta-home.jpg";
import CAT from "../assets/img/cattention.png";
import TWO from "../assets/img/twogg.PNG";
import UNC from "../assets/img/unc.png";

export default function Work() {
  const myWorkArr = [
    {
      title: "Board Game Party",
      alt: "Board Game Party",
      src: BGP,
      link: "https://bram-g.github.io/Board-Game-Party/",
      description:
        "Front-end application to find board games based on the user's search criteria.",
    },
    {
      title: "Wild Thorn Apothecary",
      alt: "Wild Thorn Apothecary",
      src: WTA,
      link: "https://wildthornapothecary.herokuapp.com/",
      description: "Full-stack application that utilizes SQL and handlebars.",
    },
    {
      title: "CATtention",
      alt: "CATtention",
      src: CAT,
      link: "https://cattention.netlify.app",
      description: "Full stack productivity app featuring socket.io and React.",
    },
    {
      title: "Twogger",
      alt: "Twogger",
      src: TWO,
      link: "https://twoggerblogger.herokuapp.com/",
      description:
        "A full-stack blogging application where users can create posts and comments.",
    },
    {
      title: "Under Construction...",
      alt: "placeholder project",
      src: UNC,
      description:
        "This project will be updated as time goes on. Check back later!",
    },
    {
      title: "Under Construction...",
      alt: "placeholder project",
      src: UNC,
      description:
        "This project will be updated as time goes on. Check back later!",
    },
  ];
  return (
    <div className="work">
      <section className="left-side">
        <h2>MY WORK</h2>
      </section>
      <section className="right-side">
        {myWorkArr.map((project) => (
          <WorkCard
            src={project.src}
            alt={project.alt}
            title={project.title}
            description={project.description}
            link={project.link}
          />
        ))}
      </section>
    </div>
  );
}
