import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    if (email && password) {
      await fetch('http://gawema.pythonanywhere.com/rest-auth/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({
          username: email,
          password: password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data['non_field_errors']) {
            return setMessage(data['non_field_errors'][0]);
          }
          localStorage.setItem('holidayhousingkey', data['key']);
          window.location.assign('/home');
        });
    } else {
      setMessage('Please fill out all the fields.');
    }
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <div className="login-input">
          <label>Email</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="login-input">
          <label>Password</label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button className="btn-wide-primary">Login</button>
        <p className="err">{message ? message : ''}</p>
      </form>
    </div>
  );
};

export default LoginForm;
