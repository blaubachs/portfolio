import React from "react";

function Nav(props) {
  return (
    <div className="nav">
      <h1>BEN LAUBACH</h1>
      <ul>
        <a href="/" onClick={props.handlePageChange}>
          About Me
        </a>
        <a href="/" onClick={props.handlePageChange}>
          My Work
        </a>
        <a href="/" onClick={props.handlePageChange}>
          Contact
        </a>
        <a href="/" onClick={props.handlePageChange}>
          Resume
        </a>
      </ul>
    </div>
  );
}

export default Nav;
