import React, { useState, useEffect } from 'react';

import './UserHousingsPage.css';

const UserHousingsPage = () => {
  const [housings, setHousings] = useState([]);

  useEffect(() => {
    const key = localStorage.getItem('holidayhousingkey');
    const fetchUserHousings = async () => {
      await fetch('http://gawema.pythonanywhere.com/api/profile/houses', {
        method: 'GET',
        headers: { Authorization: `Token ${key}` },
      })
        .then((res) => res.json())
        .then((data) => {
          setHousings(data);
        });
    };
    fetchUserHousings();
  }, []);

  return (
    <div className="user-housings-container w-60">
      <h1>My housings</h1>
      {housings.map((house, index) => {
        return (
          <div className="user-housing-entry">
            <h3>{house.title}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default UserHousingsPage;
