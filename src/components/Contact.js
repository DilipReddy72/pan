// src/components/Contact.js
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault(); // Prevent page reload

    emailjs
      .sendForm(
        "service_z8xnnze", // Replace with your EmailJS Service ID
        "template_sq7wgf2", // Replace with your EmailJS Template ID
        form.current,
        "2Tsx5Di2-tzGtukHJ" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessageSent(true); // Update state to show success message
        },
        (error) => {
          console.log(error.text);
          setMessageSent(false); // Handle error state if needed
        }
      );

    // Optionally clear the form fields after sending
    e.target.reset();
  };

  return (
    <section className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name:</label>
        <input type="text" name="from_name" required />

        <label>Email:</label>
        <input type="email" name="reply_to" required />

        <label>Message:</label>
        <textarea name="message" required></textarea>

        <button type="submit" className="send-button">
          Send Message
        </button>
      </form>

      {messageSent && <p className="success-message">Message sent successfully!</p>}
    </section>
  );
};

export default Contact;
