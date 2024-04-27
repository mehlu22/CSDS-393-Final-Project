import React, { useState, useEffect } from 'react';
import './CitiDialogBox.css';
import CityDetailsDialogBox from '../CitiesDetailsDialogBox/CityDetailsDialogBox'; // This will be the new component

function CitiesDialogBox({ cities, onCitySelect, onClose }) {
    const [selectedCity, setSelectedCity] = useState('');
    const [showCityDetails, setShowCityDetails] = useState(false);



    const handleCityClick = (city) => {
        onCitySelect(city);
    };

    const handleCloseCityDetails = () => {
        setShowCityDetails(false);
    };

    return ( 
        <div className = "cities-dialog-backdrop" >
            <div className = "cities-dialog-box" >
            <h2 > Matched Cities</h2>
            <ul> 
             {cities.map((city, index) => (
                <li key = {index} onClick = {() => handleCityClick(city)} >{city}</li>
            ))} 
            </ul> 
            <button onClick = {onClose}>Close</button>
            </div> 
        </div>
    );
}

export default CitiesDialogBox;
