import React, { useState, useEffect } from 'react';

import Navigation from './components/Navigation';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  const [userAuth, setUserAuth] = useState(false);

  useEffect(() => {
    const userAuth = () => {
      const key = localStorage.getItem('holidayhousingkey');
      if (key) {
        setUserAuth(true);
      }
    };
    userAuth();
  }, []);

  return (
    <div className="App">
      <Navigation userAuth={userAuth} />
      <Footer />
    </div>
  );
};

export default App;
