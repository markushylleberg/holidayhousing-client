import React, { useState, useEffect } from 'react';

import './HouseAndOverview.css';

const House = (props) => {
  const [image, setImage] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [city, setCity] = useState('');
  const [vacancy, setVacancy] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    setImage(props.image);
    setTitle(props.title);
    setDescription(props.desc);
    setCity(props.city);
    setVacancy(props.vacancy);
    setPrice(props.price);
    console.log(props);
    // const pers = 2;
    // const beds = 1;
    // const baths = 1;
  }, [props]);
  return (
    <div className="singleHouseCon">
      <div className="imgCon">
        {image !== '' ? (
          <img className="houseImg" src={props.image} alt={props.image} />
        ) : (
          <></>
        )}
      </div>
      <div className="houseInfoCon">
        <h4 className="houseVac">{vacancy}</h4>
        <h2 className="houseTitle">{title}</h2>
        <p className="houseDesc">{description}</p>
      </div>
      <div className="priceCon">
        <h3 className="houseLocation">{city}</h3>
        <h2 className="housePrice">
          {price} <span>DKK / night</span>
        </h2>
      </div>
    </div>
  );
};

export default House;
