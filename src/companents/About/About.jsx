import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about">
      <h2>ABOUT</h2>
      <div className="divider">
        <div className="line"></div>
        <div className="star">★</div>
        <div className="line"></div>
      </div>

      <div className="about-text">
        <p>
          Freelancer is a free Bootstrap theme created by Start Bootstrap. 
          The download includes the complete source files including HTML, CSS, 
          and JavaScript as well as optional SASS stylesheets for easy customization.
        </p>
        <p>
          You can use this theme to create a personal portfolio, showcase projects, 
          or build a professional online presence.
        </p>
      </div>

      <a href="#contact" className="btn">Free Download!</a>
    </section>
  );
}

export default About;
