import Nav from "./components/Nav";
import AboutMe from "./components/AboutMe";
import Work from "./components/Work";
import Resume from "./components/Resume";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
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
      {navState === "Resume" && <Resume />}
      <Footer />
    </div>
  );
}

export default App;
