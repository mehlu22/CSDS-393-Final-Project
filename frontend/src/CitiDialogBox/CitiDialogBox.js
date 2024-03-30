import React, { useState, useEffect } from 'react';
import './CitiDialogBox.css'; // Make sure you create and import the CSS file for styling

function CitiesDialogBox({ onClose }) {
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

  return (
    <div className="cities-dialog-backdrop">
      <div className="cities-dialog-box">
        <h2>Selected Cities</h2>
        <ul>
          {selectedCities.map((city, index) => <li key={index}>{city}</li>)}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CitiesDialogBox;
