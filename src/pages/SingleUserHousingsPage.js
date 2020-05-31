import React, { useState, useEffect } from 'react';
import EditHousingForm from '../components/EditHousingForm';
import { useParams } from 'react-router-dom';

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
      <h1>You are editing '{house.title}'</h1>
      <EditHousingForm house={house} />
    </div>
  );
};

export default SingleUserHousingsPage;
