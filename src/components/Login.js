import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css';
import { loginUser } from '../api';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    // Implement your login API call here
    // On successful login, redirect to dashboard
    try {
        await loginUser({ email, password });
        alert('Login successful!');
        navigate('/dashboard');
      } catch (error) {
        console.error(error);
        alert('Signup failed!');
      }
    
  };

  return (
    <div className="login-container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
        <p>
          Don't have an account? <a href="/signup">Sign up here</a>
        </p>
      </form>
    </div>
  );
};

export default Login;
