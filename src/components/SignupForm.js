import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    if (firstName && lastName && email && password && passwordConfirm) {
      console.log('First name: ' + firstName);
      console.log('Last name: ' + lastName);
      console.log('Email: ' + email);
      console.log('Password: ' + password);
      console.log('Password confirm: ' + passwordConfirm);
      setMessage('');
    } else {
      setMessage('Please fill out all fields.');
    }
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSignup}>
        <h1>Sign up</h1>
        <div class="input-pair">
          <label>First name</label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div class="input-pair">
          <label>Last name</label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div class="input-pair">
          <label>Email</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div class="input-pair">
          <label>Password</label>
          <input type="text" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div class="input-pair">
          <label>Confirm password</label>
          <input
            type="text"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <button className="btn-wide-primary">Sign up</button>
        <p class="err">{message ? message : ''}</p>
      </form>
    </div>
  );
};

export default SignupForm;
