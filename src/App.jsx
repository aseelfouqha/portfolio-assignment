import React from "react";
import Navbar from "./companents/Navbar/navbar";
import Header from "./companents/Header/Header";
import Portfolio from "./companents/Portfolio/Portfolio";
import About from "./companents/About/About";
import Contact from "./companents/Contact/Contact";
import Footer from "./companents/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Header />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
