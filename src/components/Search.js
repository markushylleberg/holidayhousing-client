import React, { useState } from 'react';
import Select from 'react-select';
import './Search.css';

const Search = () => {
  const [city, setCity] = useState('');
  const [priceRange, setPriceRange] = useState('');
  const [bedroomCount, setBedroomCount] = useState('');
  const [peopleCount, setPeopleCount] = useState('');

  const peopleCountOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5+' },
  ];

  const cityOptions = [
    { value: 'Copenhagen', label: 'Copenhagen' },
    { value: 'Helsinge', label: 'Helsinge' },
    { value: 'Roskilde', label: 'Roskilde' },
    { value: 'Tønder', label: 'Tønder' },
  ];

  const priceRangeOptions = [
    { value: '200_400', label: '200-400 kr per night' },
    { value: '400_600', label: '400-600 kr per night' },
    { value: '600_800', label: '600-800 kr per night' },
    { value: '800_1000', label: '800-1000 kr per night' },
  ];

  const bedroomOptions = [
    { value: '1', label: '1' },
    { value: '2', label: '2' },
    { value: '3', label: '3' },
    { value: '4', label: '4' },
    { value: '5', label: '5' },
  ];

  const handleCityChange = (value) => {
    setCity(value);
  };

  const handleBedroomChange = (value) => {
    setBedroomCount(value);
  };

  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };

  const handlePeopleChange = (value) => {
    setPeopleCount(value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log(city);
    console.log(priceRange);
    console.log(bedroomCount);
    console.log(peopleCount);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <div className="select-pair">
          <Select
            placeholder="City"
            value={city}
            onChange={handleCityChange}
            options={cityOptions}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: 'lightgray',
                primary: '#5c3783',
                color: 'red',
              },
            })}
          />
        </div>
        <div className="select-pair">
          <Select
            placeholder="Price range"
            value={priceRange}
            onChange={handlePriceRangeChange}
            options={priceRangeOptions}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: 'lightgray',
                primary: '#5c3783',
                color: 'red',
              },
            })}
          />
        </div>
        <div className="select-pair">
          <Select
            placeholder="Bedrooms"
            value={bedroomCount}
            onChange={handleBedroomChange}
            options={bedroomOptions}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: 'lightgray',
                primary: '#5c3783',
                color: 'red',
              },
            })}
          />
        </div>
        <div className="select-pair">
          <Select
            placeholder="People"
            value={peopleCount}
            onChange={handlePeopleChange}
            options={peopleCountOptions}
            theme={(theme) => ({
              ...theme,
              borderRadius: 0,
              colors: {
                ...theme.colors,
                primary25: 'lightgray',
                primary: '#5c3783',
                color: 'red',
              },
            })}
          />
        </div>
        <button className="btn-primary">Filter</button>
      </form>
    </div>
  );
};

export default Search;
