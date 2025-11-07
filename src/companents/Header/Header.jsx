import React from "react";
import "./Header.css";

function Header() {
  return (
    <header className="header" id="top">
      <div className="header-content">
        <img
          src="https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/avataaars.svg"
          alt="Avatar"
          className="avatar"
        />
        <h1>START BOOTSTRAP</h1>
        <div className="divider">
          <div className="line"></div>
          <div className="star">★</div>
          <div className="line"></div>
        </div>
        <p>Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </header>
  );
}

export default Header;
