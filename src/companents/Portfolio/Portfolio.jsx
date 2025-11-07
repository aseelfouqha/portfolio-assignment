import React from "react";
import "./Portfolio.css";

function Portfolio() {
  const items = [
    { id: 1, img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cabin.png", title: "Cabin" },
    { id: 2, img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/cake.png", title: "Cake" },
    { id: 3, img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/circus.png", title: "Circus" },
    { id: 4, img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/game.png", title: "Game" },
    { id: 5, img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/safe.png", title: "Safe" },
    { id: 6, img: "https://startbootstrap.github.io/startbootstrap-freelancer/assets/img/portfolio/submarine.png", title: "Submarine" },
  ];

  return (
    <section id="portfolio" className="portfolio">
      <h2>PORTFOLIO</h2>
      <div className="divider">
        <div className="line"></div>
        <div className="star">★</div>
        <div className="line"></div>
      </div>

      <div className="grid">
        {items.map((item) => (
          <div key={item.id} className="card">
            <img src={item.img} alt={item.title} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
