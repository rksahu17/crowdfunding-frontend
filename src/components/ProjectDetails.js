import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjectDetails } from '../api';  // Implement this API call
import { Link } from 'react-router-dom';
import '../styles/ProjectDetails.css';

const ProjectDetails = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);

  useEffect(() => {
    const getProjectDetails = async () => {
      const response = await fetchProjectDetails(id);
      setProject(response.data);
    };
    getProjectDetails();
  }, [id]);

  if (!project) return <div>Loading...</div>;

  return (
    <div className="project-details-container">
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <p>${project.currentAmount} raised of ${project.goalAmount}</p>
      <Link to={`/donate/${id}`} className="donate-button">Donate</Link>
    </div>
  );
};

export default ProjectDetails;
