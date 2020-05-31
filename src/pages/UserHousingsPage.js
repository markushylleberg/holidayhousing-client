import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

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
      <p>
        {housings.length > 0
          ? `Housings: ${housings.length}`
          : 'You have no housings at the moment.'}
      </p>
      {housings.map((house, index) => {
        return (
          <Link to={`/myhousings/${house.id}`}>
            <div key={house.id} className="user-housing-entry">
              <div>
                <img src={house.thumbnail} alt={house.thumbnail} />
              </div>
              <div>
                <h3>{house.title}</h3>
                <p>{house.description}</p>
              </div>
              <div>
                <p>
                  <span>Address </span>
                  {house.street} {house.number} {house.floor} {house.direction}
                </p>
                <p>
                  <span>City </span>
                  {house.city}
                </p>
                <p>
                  <span>Price </span>
                  {house.price_per_night} <span>DKK per night</span>
                </p>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default UserHousingsPage;
