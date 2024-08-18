import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../api';
import { Link } from 'react-router-dom';
import '../styles/Dashboard.css';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const getProjects = async () => {
      const response = await fetchProjects();  // Replace with API to fetch user's projects
      setProjects(response.data);
    };
    getProjects();
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (filter === 'all') return true;
    return project.status === filter.toUpperCase();
  });

  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('draft')}>Draft</button>
        <button onClick={() => setFilter('published')}>Published</button>
        <button onClick={() => setFilter('archived')}>Archived</button>
      </div>
      <Link to="/create-project" className="create-project-button">Create New Project</Link>
      <ul className="projects-list">
        {filteredProjects.map((project) => (
          <li key={project.id}>
            <h3>{project.title}</h3>
            <p>Status: {project.status}</p>
            <Link to={`/projects/${project.id}`}>View Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
