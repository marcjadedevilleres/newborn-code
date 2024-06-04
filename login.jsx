import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import pregnantWomanImage from './images/pregnantwoman.jpg';
import './login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post('http://localhost:3000/api/login', {
        username,
        password,
      });

      if (response.status === 200) {
        // Store authentication token (if needed)
        navigate('/dashboard'); // Redirect to a dashboard or protected area
        alert('You have logged in successfully!'); // Display the success message
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Invalid username or password.');
    }
  };

  return (
    <div className="container">
    <div className="signup-form">
      <div className="image-container">
        <img src={pregnantWomanImage} alt="Pregnant woman" />
      </div>
    </div>
      <h1>Newborn Record System</h1>
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="/signup">Sign Up</a></p>
    </div>
  );
}

export default Login;