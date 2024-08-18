import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/ProjectForm.css';

const ProjectForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const navigate = useNavigate();

  const handleSave = (e) => {
    e.preventDefault();
    // Implement API call to save project as draft
    alert('Project saved as draft.');
    navigate('/dashboard');
  };

  const handlePublish = (e) => {
    e.preventDefault();
    // Implement API call to save and publish project
    alert('Project published successfully.');
    navigate('/dashboard');
  };

  return (
    <div className="project-form-container">
      <form>
        <h2>Create Project</h2>
        <input
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Project Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="Goal Amount"
          value={goalAmount}
          onChange={(e) => setGoalAmount(e.target.value)}
        />
        <div className="buttons">
          <button onClick={handleSave}>Save as Draft</button>
          <button onClick={handlePublish}>Publish</button>
        </div>
      </form>
    </div>
  );
};

export default ProjectForm;
