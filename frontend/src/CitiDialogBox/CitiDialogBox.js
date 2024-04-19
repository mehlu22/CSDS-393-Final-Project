import React, { useState, useEffect } from 'react';
import './CitiDialogBox.css';
import CityDetailsDialogBox from '../CitiesDetailsDialogBox/CityDetailsDialogBox'; // This will be the new component

function CitiesDialogBox({ cities, onClose, shouldFetch }) {
    const [selectedCities, setSelectedCities] = useState([]);
    const [selectedCity, setSelectedCity] = useState('');
    const [showCityDetails, setShowCityDetails] = useState(false);

    useEffect(() => {
        // Function to pick 3 random cities
        const fetchCities = async() => {
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
            } catch (error) {
                console.error("Failed to fetch cities", error);
            }
        };
        fetchCities();
    }, [shouldFetch, selectedCities]);

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

return ( <
        div className = "cities-dialog-backdrop" >
        <
        div className = "cities-dialog-box" >
        <
        h2 > Selected Cities < /h2> <
        ul >
        <<
        << << < HEAD {
            cities.map((city, index) => < li key = { index } > { city } < /li>)} ===
                === = {
                    selectedCities.map((city, index) => ( <
                        li key = { index }
                        onClick = {
                            () => handleCityClick(city) } > { city } < /li>
                    ))
                } >>>
                >>> > 8 c7a0146f55715d22eb1955351d834340eb85c73 <
                /ul> <
                button onClick = { onClose } > Close < /button> {
                    showCityDetails && < CityDetailsDialogBox city = { selectedCity }
                    onClose = { handleCloseCityDetails }
                    />} <
                    /div> <
                    /div>
                );
            }

            export default CitiesDialogBox;