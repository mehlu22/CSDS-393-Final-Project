import React, { useState, useEffect } from 'react';
import './CitiDialogBox.css';
import CityDetailsDialogBox from '../CitiesDetailsDialogBox/CityDetailsDialogBox'; // This will be the new component

function CitiesDialogBox({ cities, onClose }) {
  const [selectedCity, setSelectedCity] = useState('');
  const [showCityDetails, setShowCityDetails] = useState(false);



  const handleCityClick = (city) => {
    setSelectedCity(city);
    setShowCityDetails(true);
  };

  const handleCloseCityDetails = () => {
    setShowCityDetails(false);
  };

  return (
    <div className="cities-dialog-backdrop">
      <div className="cities-dialog-box">
        <h2>Selected Cities</h2>
        <ul>
          {cities.map((city, index) => (
            <li key={index} onClick={() => handleCityClick(city)}>{city}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
        {showCityDetails && <CityDetailsDialogBox city={selectedCity} onClose={handleCloseCityDetails} />}
      </div>
    </div>
  );
}

export default CitiesDialogBox;
