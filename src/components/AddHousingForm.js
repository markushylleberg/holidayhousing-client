import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const AddHousingForm = () => {
  const history = useHistory();

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

  const handleNewHouseSubmit = async (e) => {
    e.preventDefault();
    const key = localStorage.getItem('holidayhousingkey');
    await fetch('http://gawema.pythonanywhere.com/api/houses/', {
      method: 'POST',
      headers: {
        'Content-Type': 'Application/json',
        Authorization: `Token ${key}`,
      },
      body: JSON.stringify({
        title,
        description,
        thumbnail: image,
        city,
        street,
        number,
        floor,
        direction,
        vacancy: 'Available',
        price_per_night: price,
        longitude: '100',
        laditude: '100',
        owner: 1,
      }),
    })
      .then((res) => {
        if (res.ok) {
          history.push('/myhousings');
        }

        return res.json();
      })
      .then((data) => {
        console.log(data);

        if (data['direction']) {
          return setMessage(data['direction'][0]);
        }

        if (
          data['title'] ||
          data['description'] ||
          data['street'] ||
          data['number'] ||
          data['floor'] ||
          data['direction'] ||
          data['price_per_night']
        ) {
          return setMessage('Please make sure all fields are filled out.');
        }

        setMessage('New housing added!');
      });
  };

  return (
    <div className="add-housing-form w-60">
      <h1 className="my-2 headline">
        <FaHome /> Add housing
      </h1>
      <form onSubmit={handleNewHouseSubmit}>
        <div className="input-pair req">
          <label>Title</label>
          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="textarea-pair req">
          <label>Description</label>
          <textarea
            type="text"
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="file-upload-pair req">
          <label>Primary image</label>
          <input type="file" name="file" onChange={uploadImage} />
        </div>
        {image ? (
          <img src={image} alt={image} style={{ width: '200px' }} />
        ) : (
          <></>
        )}
        <div className="input-pair req">
          <label>Street</label>
          <input type="text" onChange={(e) => setStreet(e.target.value)} />
        </div>
        <div className="input-pair req">
          <label>Number</label>
          <input type="text" onChange={(e) => setNumber(e.target.value)} />
        </div>
        <div className="input-pair req">
          <label>City</label>
          <input type="text" onChange={(e) => setCity(e.target.value)} />
        </div>
        <div className="input-pair req">
          <label>Floor</label>
          <input type="text" onChange={(e) => setFloor(e.target.value)} />
        </div>
        <div className="input-pair">
          <label>Direction (left, right, middle)</label>
          <input type="text" onChange={(e) => setDirection(e.target.value)} />
        </div>
        <div className="input-pair req">
          <label>Price per night</label>
          <input type="text" onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button className="btn btn-primary">Add new housing</button>
        <p>{message ? message : <></>}</p>
      </form>
    </div>
  );
};

export default AddHousingForm;
