import React, { useState, useEffect } from 'react';
import InstagramPost from '../components/InstagramPost';
import { useParams } from 'react-router-dom';
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import { Link } from 'react-router-dom';
import { FaLongArrowAltLeft } from 'react-icons/fa';

import './SingleView.css';

const SingleView = () => {
  const [house, setHouse] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const params = useParams();
  const [selected, setSelected] = useState({});
  const [instaPosts, setInstaPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      await fetch(`http://gawema.pythonanywhere.com/api/houses/${params.id}`)
        .then((res) => res.json())
        .then((houseData) => {
          setHouse(houseData);
        });
    }
    async function fetchInstaPosts() {
      await fetch(
        'http://gawema.pythonanywhere.com/api/ig/posts?profile=scandinavianhomes'
      )
        .then((res) => res.json())
        .then((data) => {
          setInstaPosts(data);
          const script = document.createElement('script');
          script.src =
            'https://instagram.com/static/bundles/es6/EmbedSDK.js/47c7ec92d91e.js';
          script.async = true;

          document.body.append(script);
        });
    }
    fetchData();
    fetchInstaPosts();
  }, []);

  const mapStyles = {
    height: '400px',
    width: '100%',
  };

  const latText = '48.849508';
  const lngText = '2.319002';

  const latInt = parseFloat(latText);
  const lngInt = parseFloat(lngText);

  const defaultCenter = {
    lat: latInt,
    lng: lngInt,
  };

  const locations = [
    {
      name: 'Location 1',
      location: {
        lat: latInt,
        lng: lngInt,
      },
    },
  ];

  const onSelect = (item) => {
    setSelected(item);
  };

  return (
    <div className="single-view-container">
      <div id="imgCon">
        <img src={house.thumbnail} alt={house.thumbnail} />
      </div>
      <div className="w-60">
        <div className="my-1 back-arrow">
          <Link to="/home">
            <FaLongArrowAltLeft />
          </Link>
        </div>
        <div id="mainInfoCon">
          <h3>{house.city}</h3>
          <h3 id="houseVac">{house.vacancy}</h3>
        </div>
        <div id="houseInfoCon">
          <h1>{house.title}</h1>
          <p>{house.description}</p>
        </div>
        <div id="purpleBox">
          <div id="streetInfoCon">
            <h3>
              {house.street}, {house.number}
            </h3>
            <h4>
              {house.floor}, {house.direction}
            </h4>
          </div>
          <div id="bookingCon">
            <h2>Book this place</h2>
            <h3>
              {house.price_per_night}
              <span> DKK / night</span>
            </h3>
            <button>Book now</button>
          </div>
        </div>
      </div>
      <div className="instagram-container">
        {instaPosts.map((post) => {
          return <InstagramPost id={post} />;
        })}
      </div>
      <div id="houseMapCon">
        <LoadScript googleMapsApiKey="AIzaSyAxMimz0Axr0W0XbrsqWjHgowCNdq2BFTg">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={13}
            center={defaultCenter}
          >
            {locations.map((item) => {
              return <Marker key={item.name} position={item.location} />;
            })}
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  );
};

export default SingleView;
