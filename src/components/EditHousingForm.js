import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { FaTrash } from 'react-icons/fa';

const EditHousingForm = (props) => {
  let history = useHistory();

  const [house, setHouse] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [city, setCity] = useState('');
  const [floor, setFloor] = useState('');
  const [direction, setDirection] = useState('');
  const [price, setPrice] = useState('');
  const [message, setMessage] = useState('');

  const houseId = house.id;
  const key = localStorage.getItem('holidayhousingkey');

  const uploadImage = async (e) => {
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'holidayhousing');
    const res = await fetch(
      'https://api.cloudinary.com/v1_1/dj216sbz1/image/upload',
      {
        method: 'POST',
        body: data,
      }
    );
    const file = await res.json();

    setImage(file.secure_url);
  };

  const handleHousingEdit = async (e) => {
    e.preventDefault();
    await fetch(`http://gawema.pythonanywhere.com/api/houses/${houseId}/`, {
      method: 'PATCH',
      headers: {
        Authorization: `Token ${key}`,
        'Content-Type': 'Application/json',
      },
      body: JSON.stringify({
        title,
        description,
        thumbnail: image,
        street,
        number,
        floor,
        direction,
        vacancy: house.vacancy,
        price_per_night: price,
        longitude: house.longitude,
        laditude: house.laditude,
        owner: house.owner,
      }),
    }).then((res) => {
      if (res.status === 200) {
        history.push('/myhousings');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    });
  };

  const handleHousingDeletion = async (e) => {
    e.preventDefault();
    await fetch(`http://gawema.pythonanywhere.com/api/houses/${houseId}/`, {
      method: 'DELETE',
      headers: {
        Authorization: `Token ${key}`,
      },
    }).then((res) => {
      if (res.status === 204) {
        history.push('/myhousings');
      } else {
        setMessage('Something went wrong. Please try again.');
      }
    });
    console.log(houseId);
  };

  useEffect(() => {
    setHouse(props.house);
    setTitle(props.house.title);
    setDescription(props.house.description);
    setImage(props.house.thumbnail);
    setStreet(props.house.street);
    setNumber(props.house.number);
    setCity(props.house.city);
    setFloor(props.house.floor);
    setDirection(props.house.direction);
    setPrice(props.house.price_per_night);
  }, [props, house]);

  return (
    <div>
      <form onSubmit={handleHousingEdit}>
        <div className="input-pair req">
          <label>Title</label>
          <input
            type="text"
            defaultValue={props.house.title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="textarea-pair req">
          <label>Description</label>
          <textarea
            type="text"
            defaultValue={props.house.description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="file-upload-pair req">
          <label>Primary image</label>
          <input
            type="file"
            name="file"
            key={props.house.thumbnail}
            onChange={uploadImage}
          />
        </div>
        {props.house.thumbnail || image ? (
          <img
            src={image}
            alt={props.house.thumbnail}
            style={{ width: '200px' }}
          />
        ) : (
          <></>
        )}
        <div className="input-pair req">
          <label>Street</label>
          <input
            type="text"
            defaultValue={props.house.street}
            onChange={(e) => setStreet(e.target.value)}
          />
        </div>
        <div className="input-pair req">
          <label>Number</label>
          <input
            type="text"
            defaultValue={props.house.number}
            onChange={(e) => setNumber(e.target.value)}
          />
        </div>
        <div className="input-pair req">
          <label>City</label>
          <input
            type="text"
            defaultValue={props.house.city}
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="input-pair req">
          <label>Floor</label>
          <input
            type="text"
            defaultValue={props.house.floor}
            onChange={(e) => setFloor(e.target.value)}
          />
        </div>
        <div className="input-pair req">
          <label>Direction (left, right, middle)</label>
          <input
            type="text"
            defaultValue={props.house.direction}
            onChange={(e) => setDirection(e.target.value)}
          />
        </div>
        <div className="input-pair req">
          <label>Price per night</label>
          <input
            type="text"
            defaultValue={props.house.price_per_night}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <button className="btn btn-primary">Add new housing</button>
        <p>{message ? message : <></>}</p>
      </form>
      <button onClick={handleHousingDeletion} className="btn btn-danger">
        <FaTrash />
      </button>
    </div>
  );
};

export default EditHousingForm;
