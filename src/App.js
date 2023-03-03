import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import ContactForm from "./components/ContactForm";
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
      {/* Conditionally render page on what state is assigned to */}
      {navState === "About Me" && <AboutMe />}
      {navState === "My Work" && <Work />}
      {navState === "Contact" && <ContactForm />}
    </div>
  );
}

export default App;
