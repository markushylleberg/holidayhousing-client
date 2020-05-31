import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import './SingleView.css';

const SingleView = () => {
  const [house, setHouse] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      await fetch(`http://gawema.pythonanywhere.com/api/houses/${params.id}`)
        .then((res) => res.json())
        .then((houseData) => {
          setHouse(houseData);
        });
    }
    fetchData();
  });

  return (
    <div className="single-view-container">
      <div id="imgCon">
        <h1>Singleview</h1>
        <img src={house.thumbnail} alt={house.thumbnail} />
      </div>
      <div id="mainInfoCon">
        <h3>{house.vacancy}</h3>
        <h3>{house.city}</h3>
      </div>
      <div id="houseInfoCon">
        <h1>{house.title}</h1>
        <p>{house.description}</p>
      </div>
      <div id="purpleBox">
        <div id="streetInfoCon">
          <h3>
            {house.street}, {house.number}
          </h3>
          <h4>
            {house.floor}, {house.direction}
          </h4>
        </div>
        <div id="bookingCon">
          <h2>Book this place</h2>
          <h3>
            {house.price_per_night}
            <span>DKK / night</span>
          </h3>
        </div>
      </div>
      <div id="houseMapCon"></div>
    </div>
  );
};

export default SingleView;
