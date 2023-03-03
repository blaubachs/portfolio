import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import "./index.css";
import { useState } from "react";

function App() {
  // create state that changes name when you click on a button in the nav bar.
  const [navState, setNavState] = useState("About Me");

  const handlePageChange = (e) => {
    e.preventDefault();
    setNavState(e.target.text);
  };

  return (
    <div className="App">
      <Nav handlePageChange={handlePageChange} />
      {navState === "About Me" && <AboutMe />}
      {navState === "Work" && <Work />}
    </div>
  );
}

export default App;
