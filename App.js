import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Signup from './signup';
import Login from './login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* Redirect to /signup (or /login) */}
        <Route path="/" element={<Navigate to="/signup" />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;