import React, { useState, useEffect, useCallback } from 'react';
import './Dialogbox.css'; // Ensure this path matches your file structure

function DialogBox({ onClose, onSubmit }) {
  const [population, setPopulation] = useState(6000000);
  const [avgHighTemp, setAvgHighTemp] = useState(55);
  const [avgLowTemp, setAvgLowTemp] = useState(50);
  const [precipitation, setPrecipitation] = useState(50);
  const [medianAge, setMedianAge] = useState(59);
  const [costOfLiving, setCostOfLiving] = useState(50);
  const [crimeRate, setCrimeRate] = useState(50);
  const [politicalAffiliation, setPoliticalAffiliation] = useState('Democrat');
  const [publicTransportation, setPublicTransportation] = useState(50);

  // The submission handler
  const handleSubmit = async () => {
    // Here you can structure the formData as needed by your backend or further processing
    const formData = {
      population: Number(population),
      avgHighTemp: Number(avgHighTemp),
      avgLowTemp: Number(avgLowTemp),
      precipitation: Number(precipitation),
      medianAge: Number(medianAge),
      costOfLiving: costOfLiving === '' ? null: Number(costOfLiving),
      crimeRate: crimeRate === '' ? null : Number(crimeRate), 
      politicalAffiliation,
      publicTransportation: Number(publicTransportation),
    };

    try {
      const response = await fetch('http://localhost:5000/cities', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
  
      const result = await response.json();
      console.log("Received Cities", result); // Log the success message
      onSubmit(result);
    } catch (error) {
      console.error("Failed to submit form data", error);
    }
  
    onClose();
  };

  return (
    <div className="dialog-backdrop">
      <div className="dialog-box">
        <h2>Filter your city</h2>
        {/* Input for population */}
        <div className="form-group">
          <label>Population: {population}</label>
          <input type="range" min="0" max="12000000" value={population} onChange={(e) => setPopulation(e.target.value)} />
        </div>
        {/* Input for cost of living */}
        <div className="form-group">
          <label>Cost of Living:</label>
          <input type="text" value={costOfLiving} onChange={(e) => setCostOfLiving(e.target.value)} />
        </div>
        {/* Input for average high temperature */}
        <div className="form-group">
          <label>Average High Temp: {avgHighTemp}°F</label>
          <input type="range" min="0" max="110" value={avgHighTemp} onChange={(e) => setAvgHighTemp(e.target.value)} />
        </div>
        {/* Input for average low temperature */}
        <div className="form-group">
          <label>Average Low Temp: {avgLowTemp}°F</label>
          <input type="range" min="0" max="100" value={avgLowTemp} onChange={(e) => setAvgLowTemp(e.target.value)} />
        </div>
        {/* Input for precipitation */}
        <div className="form-group">
          <label>Precipitation: {precipitation}%</label>
          <input type="range" min="0" max="100" value={precipitation} onChange={(e) => setPrecipitation(e.target.value)} />
        </div>
        {/* Input for median age */}
        <div className="form-group">
          <label>Median Age: {medianAge}</label>
          <input type="range" min="18" max="100" value={medianAge} onChange={(e) => setMedianAge(e.target.value)} />
        </div>
        {/* Input for crime rate */}
        <div className="form-group">
          <label>Crime Rate:</label>
          <input type="text" value={crimeRate} onChange={(e) => setCrimeRate(e.target.value)} />
        </div>
        {/* Radio buttons for political affiliation */}
        <div className="form-group">
          <fieldset>
            <legend>Political Affiliation</legend>
            <label>
              <input type="radio" name="politicalAffiliation" value="Democrat" checked={politicalAffiliation === 'Democrat'} onChange={(e) => setPoliticalAffiliation('Democrat')} />
              Democrat
            </label>
            <label>
              <input type="radio" name="politicalAffiliation" value="Republican" checked={politicalAffiliation === 'Republican'} onChange={(e) => setPoliticalAffiliation('Republican')} />
              Republican
            </label>
            <label>
              <input type="radio" name="politicalAffiliation" value="Neutral" checked={politicalAffiliation === 'Neutral'} onChange={(e) => setPoliticalAffiliation('Neutral')} />
              Neutral
            </label>
          </fieldset>
        </div>
        {/* Input for public transportation */}
        <div className="form-group">
          <label>Public transportation:</label>
          <input type="text" value={publicTransportation} onChange={(e) => setPublicTransportation(e.target.value)} />
        </div>
        <button className="close-btn" onClick={onClose}>Close</button>
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default DialogBox;
