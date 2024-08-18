import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { createDonation } from '../api';
import '../styles/Donate.css';

const Donate = () => {
  const { projectId } = useParams();
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handleDonate = async (e) => {
    e.preventDefault();
    try {
      await createDonation({ projectId, amount });
      alert('Donation successful!');
      navigate(`/projects/${projectId}`);
    } catch (error) {
      console.error(error);
      alert('Donation failed!');
    }
  };

  return (
    <div className="donate-container">
      <form onSubmit={handleDonate}>
        <h2>Donate to Project</h2>
        <input
          type="number"
          placeholder="Donation Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default Donate;
