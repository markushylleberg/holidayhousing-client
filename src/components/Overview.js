import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import House from './House';
// import Singleview from './singleview';
import './Overview.css';

const Overview = () => {
  const [houses] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      await fetch('http://gawema.pythonanywhere.com/api/houses/')
        .then((res) => res.json())
        .then((houseData) => {
          for (let i = 0; i < houseData.length; i++) {
            houses.push(houseData[i]);
          }
          setLoading(false);
        });
    }
    fetchData();
  }, [houses]);

  return (
    <div>
      <h3>{isLoading ? 'Loading' : ''}</h3>

      {houses.map((house, index) => (
        <li key={index}>
          <Link to={`/home/${house.id}`}>
            <House
              id={house.id}
              image={house.thumbnail}
              title={house.title}
              desc={house.description}
              city={house.city}
              bedrooms={house.bedrooms}
              bathrooms={house.bathroom}
              price={house.price_per_night}
              vacancy={house.vacancy}
            />{' '}
            */
          </Link>
        </li>
      ))}
    </div>
  );
};

export default Overview;
