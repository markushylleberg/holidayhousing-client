import React, { useState, useEffect } from 'react';

import LoginPage from '../pages/LoginPage';
import SignupPage from '../pages/SignupPage';
import HomePage from '../pages/HomePage';
import SingleView from '../pages/SingleView';
import AboutPage from '../pages/AboutPage';
import AddHousingPage from '../pages/AddHousingPage';
import UserHousingsPage from '../pages/UserHousingsPage';
import AccountSettingsPage from '../pages/AccountSettingsPage';
import SingleUserHousingsPage from '../pages/SingleUserHousingsPage';
import Logout from '../components/Logout';

import { FaUser, FaBars } from 'react-icons/fa';

import './Navigation.css';

import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const Navigation = (props) => {
  const [userAuthenticated, setUserAuthenticated] = useState(props.userAuth);
  const [open, setOpen] = useState(false);
  const [burgerOpen, setBurgerOpen] = useState(false);

  useEffect(() => {
    const handleUserAuth = () => {
      setUserAuthenticated(props.userAuth);
    };
    handleUserAuth();
  }, [props]);

  const handleNavDropdown = () => {
    setOpen(!open);
  };

  const handleBurgerOpen = () => {
    setBurgerOpen(!burgerOpen);
  };

  return (
    <Router>
      <nav>
        <div className="nav-wrapper">
          {userAuthenticated ? (
            <>
              <div>
                <Link to="/home">Home</Link>
                <Link to="/about">About</Link>
              </div>
              <div>
                <Link to="/home">
                  <h3>HOLIDAY HOUSING</h3>
                </Link>
              </div>
              <div>
                <Link to="/addhousing">
                  <button className="btn-primary">Add housing</button>
                </Link>
                <FaUser className="nav-user" onClick={handleNavDropdown} />
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
        </div>
        <div
          style={open ? { opacity: '1' } : { opacity: '0' }}
          className="nav-dropdown"
        >
          <Link onClick={handleNavDropdown} to="/myhousings">
            My housings
          </Link>
          <Link onClick={handleNavDropdown} to="/accountsettings">
            Settings
          </Link>
          <Link onClick={handleNavDropdown} to="/logout">
            Logout
          </Link>
        </div>
        <div className="mobile-nav">
          <div className="logo-container">
            <p>HOLIDAY HOUSING</p>
          </div>
          <div onClick={() => handleBurgerOpen()} className="nav-icon">
            <FaBars />
          </div>
        </div>
        <div
          onClick={() => handleBurgerOpen()}
          className={burgerOpen ? 'mobile-menu active' : 'mobile-menu'}
        >
          <div>
            <Link to="/home">Home</Link>
          </div>
          <div>
            <Link to="/addhousing">Add housing</Link>
          </div>
          <div>
            <Link to="/about">About</Link>
          </div>
          <div>
            <Link to="/myhousings">My housings</Link>
          </div>
          <div>
            <Link to="/accountsettings">Account settings</Link>
          </div>
          <div>
            <Link to="/logout">Logout</Link>
          </div>
        </div>
      </nav>
      <Switch>
        <Route exact path="/home">
          <HomePage />
        </Route>
        <Route exact path="/home/:id">
          <SingleView />
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
        <Route exact path="/accountsettings">
          <AccountSettingsPage />
        </Route>
        <Route exact path="/logout">
          <Logout />
        </Route>
        <Route exact path="/myhousings">
          <UserHousingsPage />
        </Route>
        <Route exact path="/myhousings/:id">
          <SingleUserHousingsPage />
        </Route>
        <Route exact path="/addhousing">
          <AddHousingPage />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navigation;
