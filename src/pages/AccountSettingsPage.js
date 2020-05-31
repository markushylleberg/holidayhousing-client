import React, { useState, useEffect } from 'react';
import { FaCheck, FaTrash } from 'react-icons/fa';
import './AccountSettingsPage.css';

const AccountSettingsPage = () => {
  const [userData, setUserData] = useState('');

  const [userId, setUserId] = useState('');
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const key = localStorage.getItem('holidayhousingkey');

  useEffect(() => {
    const fetchUserData = async () => {
      await fetch('http://gawema.pythonanywhere.com/api/profile/', {
        method: 'GET',
        headers: {
          Authorization: `Token ${key}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setUserId(data[0].id);
          setFirstname(data[0].first_name);
          setLastname(data[0].last_name);
          setEmail(data[0].email);
        });
    };
    fetchUserData();
  }, []);

  const handleUserUpdate = async (e) => {
    e.preventDefault();
    await fetch(`http://gawema.pythonanywhere.com/api/users/${userId}/`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'Application/json',
        Authorization: `Token ${key}`,
      },
      body: JSON.stringify({
        username: email,
        first_name: firstname,
        last_name: lastname,
        email,
      }),
    }).then((res) => {
      if (res.ok) {
        setMessage('Your account settings has been updated');
      }
    });
  };

  const handleAccountDeletion = async (e) => {};

  return (
    <div className="account-settings-container w-60">
      <h1 className="my-2">Account settings</h1>
      <form onSubmit={handleUserUpdate}>
        <div className="input-pair">
          <label>First name</label>
          <input
            type="text"
            defaultValue={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="input-pair">
          <label>Last name</label>
          <input
            type="text"
            defaultValue={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="input-pair">
          <label>Email</label>
          <input
            type="text"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Update</button>
      </form>
      {message ? (
        <p className="text-succes my-2">
          {message}{' '}
          <span>
            <FaCheck />
          </span>
        </p>
      ) : (
        <></>
      )}
      <button onClick={handleAccountDeletion} className="btn btn-danger">
        <FaTrash /> Delete account
      </button>
    </div>
  );
};

export default AccountSettingsPage;
