import React, { useState, useEffect } from 'react';

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
    setDescription(props.description);
    setCity(props.city);
    setLocation(props.location);
    setVacancy(props.vacancy);
    setPrice(props.price_per_night);
    console.log(props);
    // const pers = 2;
    // const beds = 1;
    // const baths = 1;
  }, [props]);
  return (
    <div>
      <div>
        {image !== '' ? (
          <img src={props.image} style={{ width: '200px' }} alt={props.image} />
        ) : (
          <></>
        )}
      </div>
      <div>
        <h2>{vacancy}</h2>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
      <div>
        <h3>{location}</h3>
        {/* <ul>
          <li>{pers}</li>
          <li>{beds}</li>
          <li>{baths}</li>
        </ul> */}
        <h2>
          {price} <span>DKK / night</span>
        </h2>
      </div>
    </div>
  );
};

export default House;
