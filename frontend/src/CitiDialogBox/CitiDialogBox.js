import React, { useState, useEffect } from 'react';
import './CitiDialogBox.css'; // Make sure you create and import the CSS file for styling

function CitiesDialogBox({ cities, onClose, shouldFetch }) {
  const [selectedCities, setSelectedCities] = useState([]);

  useEffect(() => {
    // Function to pick 3 random cities
    const fetchCities = async () => {
      if (!shouldFetch) return;
      try {
        const response = await fetch('http://localhost:5000/cities');
        if (!response.ok) {
          throw new Error('Failed to fetch cities');
        }
        const cities = await response.json();
        console.log(cities)
        if (cities) {
        setSelectedCities(cities);
        }
        console.log(selectedCities)
      } catch(error) {
        console.error("Failed to fetch cities", error);
      }
    };
    fetchCities ();
  }, [shouldFetch, selectedCities]);
  
  return (
    <div className="cities-dialog-backdrop">
      <div className="cities-dialog-box">
        <h2>Selected Cities</h2>
        <ul>
          {cities.map((city, index) => <li key={index}>{city}</li>)}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CitiesDialogBox;
