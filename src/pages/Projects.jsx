import React from 'react';

const projects = [
  {
    title: 'Modern Portfolio',
    description: 'A fully responsive portfolio website built with React and Vite.',
    link: '#',
  },
  {
    title: 'E-commerce UI',
    description: 'A modern e-commerce frontend with product grid, cart, and checkout.',
    link: '#',
  },
  {
    title: 'Analytics Dashboard',
    description: 'A dashboard app with charts and analytics using Chart.js and React.',
    link: '#',
  },
  {
    title: 'Blog Platform',
    description: 'A blog platform with markdown support and user authentication.',
    link: '#',
  },
];

const Projects = () => (
  <section className="section projects">
    <h1>Projects</h1>
    <div className="projects-list">
      {projects.map((project, idx) => (
        <div className="project-card" key={idx}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <a href={project.link} className="project-link">View Project</a>
        </div>
      ))}
    </div>
  </section>
);

export default Projects;
