import React, { useState } from "react";
import "../assets/css/ContactForm.css";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  const handleChange = (e) => {
    setFormData({
      // copies existing object
      ...formData,
      // change the value of the name of the target to be the value of the target
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <h1>Contact</h1>
      <div className="form-container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          value={formData.name}
          name="name"
          id="name"
          onChange={handleChange}
        ></input>
        <label htmlFor="email">Email</label>
        <input
          type="text"
          value={formData.email}
          name="email"
          id="email"
          onChange={handleChange}
        ></input>
        <label htmlFor="message">Message</label>
        <textarea
          type="text"
          value={formData.message}
          name="message"
          id="message"
          onChange={handleChange}
        ></textarea>
        <br></br>
        {formData.name === "" && <p>You must include a name.</p>}
        {!formData.email.match(
          /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        ) && <p>Must include a valid email address</p>}
        {formData.message === "" && <p>You must include a message.</p>}
        <button type="submit" id="sendBtn">
          Send
        </button>
      </div>
    </form>
  );
}
