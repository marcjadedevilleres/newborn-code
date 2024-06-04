import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import pregnantWomanImage from './images/pregnantwoman.jpg';
import './signup.css';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [address, setAddress] = useState('');
  const [medicalProfession, setMedicalProfession] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    try {
      const response = await axios.post('http://localhost:3000/api/signup', {
        firstName,
        lastName,
        middleName,
        age,
        gender,
        address,
        medicalProfession,
        username,
        password,
      });

      if (response.status === 201) {
        navigate('/login');
      }
    } catch (error) {
      console.error('Signup error:', error);
      alert('Signup failed. Please try again.');
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
        <h2>Sign Up</h2>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="middleName">Middle Name:</label>
          <input
            type="text"
            id="middleName"
            value={middleName}
            onChange={(e) => setMiddleName(e.target.value)}
          />
        </div>
        <div>
  <label htmlFor="age">Age:</label>
  <input
    type="number"
    id="age"
    value={age}
    onChange={(e) => setAge(e.target.value)}
  />
</div>
<div>
  <label htmlFor="gender">Gender:</label>
  <input
    type="text"
    id="gender"
    value={gender}
    onChange={(e) => setGender(e.target.value)}
  />
</div>
<div>
  <label htmlFor="adresss">Address:</label>
  <input
    type="text"
    id="address"
    value={address}
    onChange={(e) => setAddress(e.target.value)}
  />
</div>
<div>
  <label htmlFor="medical profession">Medical Profession:</label>
  <input
    type="text"
    id="medical profession"
    value={medicalProfession}
    onChange={(e) => setMedicalProfession(e.target.value)}
  />
</div>
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
    type="text and number"
    id="password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
  />
</div>
<div>
  <label htmlFor="confirmpassword">Confirm password:</label>
  <input
    type="text and number"
    id="confirm password"
    value={confirmPassword}
    onChange={(e) => setConfirmPassword(e.target.value)}
  />
</div>
<button type="submit">Sign Up</button>
      </form>
      <p>Already have an account? <a href="/login">Login</a></p>
    </div>
  );
}

export default Signup;