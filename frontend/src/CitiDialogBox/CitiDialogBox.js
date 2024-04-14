import React, { useState, useEffect } from 'react';
import './CitiDialogBox.css';
import CityDetailsDialogBox from '../CitiesDetailsDialogBox/CityDetailsDialogBox'; // This will be the new component

function CitiesDialogBox({ onClose }) {
  const [selectedCities, setSelectedCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState('');
  const [showCityDetails, setShowCityDetails] = useState(false);

  useEffect(() => {
    const pickRandomCities = () => {
      const cities = ['Austin', 'Boston', 'Charlotte', 'Chicago', 'Cleveland', 'Dallas', 'Denver', 'Houston', 'Indianapolis', 'Los Angeles', 'Miami', 'Nashville', 'New York', 'Philadelphia', 'Phoenix', 'Portland', 'San Diego', 'San Francisco', 'Seattle', 'Washington D.C'];
      let shuffled = cities.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3);
    };
    setSelectedCities(pickRandomCities());
  }, []);

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
          {selectedCities.map((city, index) => (
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
