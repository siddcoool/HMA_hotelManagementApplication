// Signup.js
import React, { useState } from 'react';
import '../css/Signup.css';
import axios from 'axios';
import useIsAuthenticated from '../hooks/useIsAuthenticated';
import { toast } from 'react-toastify';

const Signup = () => {
  const { setAuthenticate } = useIsAuthenticated();
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your Express server
      const { status, data } = await axios.post('/user/register', formData);

      // Handle the response, you might want to redirect or show a success message
      if (status == 200) {
        toast.success(data.message)
        setAuthenticate(data.user)
      }
      else {
        toast.warning('Signup Failed')
      }
    } catch (error) {
      if (!error.response) {
        toast.error('Internal server error')
      }
      if (error.response.data && error.response.data.message) {
        toast.error(error.response.data.message);
      } else if (error.response.data && error.response.data.errors) {
        toast.error(error.response.data.errors.map(e => {
          return e.msg
        }).join());
      } else {
        // Log the entire error response for debugging purposes
        console.error('Error Response:', error.response);
      }
    }

  };

  return (
    <div className="signup-container">
      <h2 className="signup-header">Sign Up</h2>
      <form onSubmit={handleSubmit} className="signup-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>        
        <div className="form-group">
          <label htmlFor="email">Email</label>
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
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
