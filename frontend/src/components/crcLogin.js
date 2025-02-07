import React, { useState } from 'react';
import "./crcLogin.css";
import Navbar from './navbar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Eye, EyeOff } from 'lucide-react';

const CRCLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4000/api/v1/crc/login', {
        email,
        password,
      });

      if (response.status === 200) {
        console.log('Login successful');
        navigate('/crcHome');
      } else {
        console.error('Login failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>CRC Login</h2>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="input-group relative">
            <label htmlFor="password">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="pr-10"
              />
              <button
                type="button"
                onClick={togglePasswordVisibility}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 focus:outline-none"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>
          <button type="submit" className="login-button">Login</button>
        </form>
      </div>
    </>
  );
};

export default CRCLogin;
