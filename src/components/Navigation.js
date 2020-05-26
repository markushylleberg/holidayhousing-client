import React, { useState } from 'react';

import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import HomePage from '../pages/HomePage';
import AboutPage from '../pages/AboutPage';
import AddHousingPage from '../pages/AddHousingPage';

import './Navigation.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Navigation = () => {
  // Is user authenticated?
  const [userAuthenticated, setUserAuthenticated] = useState(1);

  return (
    <Router>
      <nav>
        {userAuthenticated ? (
          <>
            <div>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/logout">Logout</Link>
            </div>
            <div>
              <Link to="/home">
                <h3>HOLIDAY HOUSING</h3>
              </Link>
            </div>
            <div>
              <Link to="/myhousings">
                <button className="btn-secondary">My housings</button>
              </Link>
              <Link to="/addhousing">
                <button className="btn-primary">Add housing</button>
              </Link>
            </div>
          </>
        ) : (
          <>
            <div>
              <Link to="/home">Home</Link>
              <Link to="/about">About</Link>
            </div>
            <Link to="/home">
              <h3>HOLIDAY HOUSING</h3>
            </Link>
            <div>
              <Link to="/signup">
                <button className="btn-secondary">Signup</button>
              </Link>
              <Link to="/login">
                <button className="btn-primary">Login</button>
              </Link>
            </div>
          </>
        )}
      </nav>
      <Switch>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/about">
          <AboutPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/addhousing">
          <AddHousingPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
