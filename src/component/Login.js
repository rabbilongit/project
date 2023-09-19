
import React, { useEffect, useState } from 'react';
import '../css/Page.css';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();

  const handleForm = (e) => {
    e.preventDefault();
    const emailOrPhone = e.target.elements.emailOrPhone.value;
    const password = e.target.elements.password.value;

    if (!emailOrPhone || !password) {
      alert('Please fill in all fields');
      window.location.reload(); // Reload the page
    } else {
      const headers = {
        'Content-Type': 'application/json',
      };

      const requestData = {
        username: emailOrPhone,
        password: password,
      };

      const jsonData = JSON.stringify(requestData);
 

      axios
        .post('https://dummyjson.com/auth/login', jsonData, { headers })
        .then((response) => {
          console.log('Response data:', response.data);
          navigate(`/Page/${emailOrPhone}`);
        })
        .catch((error) => {
          console.error('Request failed:', error);
          navigate(`/Page/${emailOrPhone}`);
        });
    }
  };

  const handleGoToOtherPage = () => {
    const emailOrPhone = document.querySelector('input[name="emailOrPhone"]').value;
    const password = document.querySelector('input[name="password"]').value;
   
    if (!emailOrPhone || !password) {
      alert('Please fill in all fields');
      window.location.reload(); // Reload the page
    } else {
      // Navigate to the other page
      navigate('/Page');
    }
  };

  return (
    <div className='parent_block'>
      <div>
        <button onClick={handleGoToOtherPage}>Go to Other Page</button>
      </div>

      <div className='Block'>
        <div className='Login_text'>
          <h1>Login!!</h1>
          <p className='item2'>Sign in here </p>
        </div>
        <form className='Login_form' onSubmit={handleForm}>
          <input type='text' placeholder='Name' name='emailOrPhone' />
          <input type='password' placeholder='Password' name='password' />
          <button type='submit'>Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
