import React, { useEffect } from 'react';
import Search from '../components/Search';
import Overview from '../components/Overview';

import './HomePage.css';

const HomePage = () => {
  useEffect(() => {
    const key = localStorage.getItem('holidayhousingkey');
    const getHousings = async () => {
      await fetch('http://gawema.pythonanywhere.com/api/houses/', {
        method: 'GET',
        headers: { Authorization: `Token ${key}` },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
        });
    };
    getHousings();
  });

  return (
    <div className="home-page-container">
      <Search />
      <Overview />
    </div>
  );
};

export default HomePage;
