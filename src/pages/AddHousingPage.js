import React from 'react';
import AddHousingForm from '../components/AddHousingForm';
import { FaHome } from 'react-icons/fa';

import './AddHousingPage.css';

const AddHousingPage = () => {
  return (
    <div className="add-housing-container">
      <div className="sub-nav-container">
        <h1>
          <FaHome /> Add new housing
        </h1>
      </div>
      <AddHousingForm />
    </div>
  );
};

export default AddHousingPage;
