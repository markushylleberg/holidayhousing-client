import React from 'react';
import Search from '../components/Search';
import Overview from '../components/Overview';

import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <Search />
      <Overview />
    </div>
  );
};

export default HomePage;
