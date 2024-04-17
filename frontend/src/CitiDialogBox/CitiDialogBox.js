import React, { useState, useEffect } from 'react';
import './CitiDialogBox.css';
import CityDetailsDialogBox from '../CitiesDetailsDialogBox/CityDetailsDialogBox'; // This will be the new component

function CitiesDialogBox({ onClose, onCitySelect }) {
  const [selectedCities, setSelectedCities] = useState([]);

  useEffect(() => {
    // Function to pick 3 random cities
    const pickRandomCities = () => {
      const cities = ['Austin', 'Boston', 'Charlotte', 'Chicago', 'Cleveland', 'Dallas', 'Denver', 'Houston', 'Indianapolis', 'Los Angeles', 'Miami', 'Nashville', 'New York', 'Philadelphia', 'Phoenix', 'Portland', 'San Diego', 'San Francisco', 'Seattle', 'Washington D.C'];
      let shuffled = cities.sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 3);
    };
    setSelectedCities(pickRandomCities());
  }, []);

  // Handler for when a city is clicked
  const handleCityClick = (city) => {
    onCitySelect(city); // Pass the selected city back up for further action
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
      </div>
    </div>
  );
}

export default CitiesDialogBox;
