import { useState, useEffect } from "react";
import axios from "axios";
import "./About.css"

const About = () => {
    return (
      <div className="about-page">
        <h1>About My Pokédex </h1>
        <p className="about-description">
        This Pokédex application was developed using React and the PokéAPI. It provides users with a smooth and intuitive experience to search for, explore, and view comprehensive details about a wide variety of Pokémon. With a clean, responsive interface and real-time data fetching, it aims to deliver an enjoyable and informative journey through the world of Pokémon.
        </p>
  
        <div className="about-section">
          <h2>Technologies Used</h2>
          <ul>
            <li>React</li>
            <li>Vite</li>
            <li>Axios</li>
            <li>React Router</li>
            <li>PokéAPI</li>
            <li>Custom CSS</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default About;