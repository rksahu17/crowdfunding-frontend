import React, { useEffect, useState } from 'react';
import { fetchProjects } from '../api';
import Donate from './Donate';

const ProjectList = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const response = await fetchProjects();
        setProjects(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    getProjects();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            {project.title} - ${project.currentAmount} raised of ${project.goalAmount}
            <Donate projectId={project.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectList;
