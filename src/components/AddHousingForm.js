import React from 'react';

import './AddHousingForm.css';

const AddHousingForm = () => {
  const handleNewHouseSubmit = () => {};

  return (
    <div className="add-housing-form">
      <form onSubmit={handleNewHouseSubmit}>
        <div className="input-pair">
          <label>Title</label>
          <input type="text"></input>
        </div>
      </form>
    </div>
  );
};

export default AddHousingForm;
