import React, { useState } from 'react';
import './Dialogbox.css'; // Ensure this path matches your file structure

function DialogBox({ onClose, onSubmit }) {
  const [population, setPopulation] = useState(6000000);
  const [avgHighTemp, setAvgHighTemp] = useState(55);
  const [avgLowTemp, setAvgLowTemp] = useState(50);
  const [precipitation, setPrecipitation] = useState(50);
  const [medianAge, setMedianAge] = useState(59);
  const [costOfLiving, setCostOfLiving] = useState('');
  const [crimeRate, setCrimeRate] = useState('');
  const [politicalAffiliation, setPoliticalAffiliation] = useState('');

  // The submission handler
  const handleSubmit = () => {
    // Here you can structure the formData as needed by your backend or further processing
    const formData = {
      population,
      avgHighTemp,
      avgLowTemp,
      precipitation,
      medianAge,
      costOfLiving,
      crimeRate,
      politicalAffiliation,
    };

    console.log(formData); // Demonstrating form data logging, replace with onSubmit call or other actions

    // Call the onSubmit prop function passed from the parent component
    onSubmit(); // Pass formData or other necessary information if needed

    onClose(); // Close the dialog after submission
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
        {/* Input for cost of living */}
        <div className="form-group">
          <label>Cost of Living:</label>
          <input type="text" value={costOfLiving} onChange={(e) => setCostOfLiving(e.target.value)} />
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
        <button className="close-btn" onClick={onClose}>Close</button>
        <button className="submit-btn" onClick={handleSubmit}>Submit</button>
      </div>
    </div>
  );
}

export default DialogBox;
