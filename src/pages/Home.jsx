import React from 'react';
import pfphoto from '../assets/hi.jpeg';

const Home = ({ onProjectsClick }) => (
  <section className="section home">
    <div className="hero">
      <img src={pfphoto} alt="Profile" className="profile-photo" />
      <h1>Hi, I'm Arvin</h1>
      <h2>Frontend Developer</h2>
      <p>
        I create modern, responsive web applications with React, JavaScript, and the latest frontend technologies.
      </p>
      <button className="cta-btn" onClick={onProjectsClick}>See My Projects</button>
    </div>
  </section>
);

export default Home;
