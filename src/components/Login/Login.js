import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import AuthService from '../AuthService/AuthService';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [responseMessage, setResponseMessage] = useState({ message: '', isError: false });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('https://membership-prv9.onrender.com/auth/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Login successful:', data);
        AuthService.setTokens(data.tokens);
        setResponseMessage({ message: data.message || 'Login successful!', isError: false });
        setTimeout(() => navigate('/dashboard'), 2000);
      } else {
        console.error('Login failed:', data);
        setResponseMessage({
          message: data.detail || data.message || 'Login failed. Please try again later.',
          isError: true,
        });
      }
    } catch (error) {
      console.error('Error during login:', error);
      setResponseMessage({ message: 'Something went wrong. Please try again later.', isError: true });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="login-container" style={{ marginBottom: '100px' }}>
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={{ paddingRight: '60px', width: '100%' }}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                right: '8px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                fontSize: '0.85rem',
                color: '#555',
              }}
              aria-label={showPassword ? 'Hide password' : 'Show password'}
            >
              {showPassword ? 'Hide' : 'Show'}
            </button>
          </div>
        </div>

        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in...' : 'Login'}
        </button>
        <br />

        {responseMessage.message && (
          <p className="response-message" style={{ color: responseMessage.isError ? 'red' : 'green' }}>
            {responseMessage.message}
          </p>
        )}

        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default Login;