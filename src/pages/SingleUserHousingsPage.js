import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EditHousingForm from '../components/EditHousingForm';
import { useParams } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';

import './SingleUserHousingsPage.css';

const SingleUserHousingsPage = () => {
  const [house, setHouse] = useState('');

  const params = useParams();

  useEffect(() => {
    const key = localStorage.getItem('holidayhousingkey');
    const fetchSingleHousing = async () => {
      await fetch(`http://gawema.pythonanywhere.com/api/houses/${params.id}`, {
        method: 'GET',
        headers: { Authorization: `Token ${key}` },
      })
        .then((res) => res.json())
        .then((data) => {
          setHouse(data);
        });
    };
    fetchSingleHousing();
  }, []);

  return (
    <div className="single-user-housing-container w-60">
      <div className="my-1 back-arrow">
        <Link to="/myhousings">
          <FaLongArrowAltLeft />
        </Link>
      </div>
      <h1>You are editing '{house.title}'</h1>
      <EditHousingForm house={house} />
    </div>
  );
};

export default SingleUserHousingsPage;
