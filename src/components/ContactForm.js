import React from "react";
import "../assets/css/ContactForm.css";

export default function ContactForm() {
  return (
    <form className="contact-form">
      <div className="form-container">
        <label htmlFor="name">Name</label>
        <input type="text" id="name"></input>
        <label htmlFor="email">Email</label>
        <input type="text" id="email"></input>
        <label htmlFor="message">Message</label>
        <textarea type="text" id="message"></textarea>
        <button type="submit" id="sendBtn">
          Send
        </button>
      </div>
    </form>
  );
}
