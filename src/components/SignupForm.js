import React, { useState } from 'react';
import './SignupForm.css';

const SignupForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [message, setMessage] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();
    if (firstName && lastName && email && password && passwordConfirm) {
      await fetch('http://gawema.pythonanywhere.com/rest-auth/registration/', {
        method: 'POST',
        headers: { 'Content-Type': 'Application/json' },
        body: JSON.stringify({
          username: email,
          password1: password,
          password2: passwordConfirm,
          email: email,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data['email']) {
            const err = data['email'][0];
            return setMessage(err);
          }
          if (data['password1']) {
            const err = data['password1'][0];
            return setMessage(err);
          }

          if (data['non_field_errors']) {
            const err = data['non_field_errors'][0];
            return setMessage(err);
          }

          localStorage.setItem('holidayhousingkey', data['key']);
          window.location.assign('/home');
        });
    } else {
      setMessage('Please fill out all fields.');
    }
  };

  return (
    <div className="signup-form-container">
      <form onSubmit={handleSignup}>
        <h1>Sign up</h1>
        <div className="login-input">
          <label>First name</label>
          <input type="text" onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="login-input">
          <label>Last name</label>
          <input type="text" onChange={(e) => setLastName(e.target.value)} />
        </div>
        <div className="login-input">
          <label>Email</label>
          <input type="text" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="login-input">
          <label>Password</label>
          <input type="text" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="login-input">
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
