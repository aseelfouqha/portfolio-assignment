import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>CONTACT ME</h2>
      <div className="divider">
        <div className="line"></div>
        <div className="star">★</div>
        <div className="line"></div>
      </div>

      <form className="contact-form">
        <input type="text" placeholder="Full name" required />
        <input type="email" placeholder="Email address" required />
        <input type="tel" placeholder="Phone number" />
        <textarea placeholder="Message" rows="5"></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
