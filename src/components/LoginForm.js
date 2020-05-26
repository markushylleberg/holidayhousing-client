import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (email && password) {
      console.log('Email: ' + email);
      console.log('Password: ' + password);
      setMessage('');
    } else {
      setMessage('Please fill out all the fields.');
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div class="input-pair">
          <label>Email</label>
          <input type="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div class="input-pair">
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-wide-primary">Login</button>
        <p class="err">{message ? message : ''}</p>
      </form>
    </div>
  );
};

export default LoginForm;
