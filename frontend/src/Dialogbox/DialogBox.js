import React, { useState } from 'react';
import './Dialogbox.css'; // Make sure this import matches the location of your CSS file

function DialogBox({ onClose }) {
  const [population, setPopulation] = useState(6000000);
  const [avgHighTemp, setAvgHighTemp] = useState(55);
  const [avgLowTemp, setAvgLowTemp] = useState(50);
  const [precipitation, setPrecipitation] = useState(50);
  const [medianAge, setMedianAge] = useState(59);
  const [costOfLiving, setCostOfLiving] = useState('');
  const [crimeRate, setCrimeRate] = useState('');
  const [politicalAffiliation, setPoliticalAffiliation] = useState('');

  const handleSubmit = () => {
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
   

    console.log(formData); // For demonstration, replace with a function to send data to your backend

    onClose(); // Optionally close the dialog upon submission
  };
  return (
    <div className="dialog-backdrop">
      <div className="dialog-box">
        <h2>Filter your city</h2>
        <div className="form-group">
          <label>Population: {population}</label>
          <input type="range" min="0" max="12000000" value={population} onChange={(e) => setPopulation(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Average High Temp: {avgHighTemp}°F</label>
          <input type="range" min="0" max="110" value={avgHighTemp} onChange={(e) => setAvgHighTemp(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Average Low Temp: {avgLowTemp}°F</label>
          <input type="range" min="0" max="100" value={avgLowTemp} onChange={(e) => setAvgLowTemp(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Precipitation: {precipitation}%</label>
          <input type="range" min="0" max="100" value={precipitation} onChange={(e) => setPrecipitation(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Median Age: {medianAge}</label>
          <input type="range" min="18" max="100" value={medianAge} onChange={(e) => setMedianAge(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Cost of Living:</label>
          <input type="text" value={costOfLiving} onChange={(e) => setCostOfLiving(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Crime Rate:</label>
          <input type="text" value={crimeRate} onChange={(e) => setCrimeRate(e.target.value)} />
        </div>
        <div className="form-group">
          <fieldset>
            <legend>Political Affiliation</legend>
            <label>
              <input type="radio" name="politicalAffiliation" value="1" checked={politicalAffiliation === 'Democrat'} onChange={(e) => setPoliticalAffiliation(e.target.value)} />
              Democrat
            </label>
            <label>
              <input type="radio" name="politicalAffiliation" value="0" checked={politicalAffiliation === 'Republic'} onChange={(e) => setPoliticalAffiliation(e.target.value)} />
              Republic
            </label>
            <label>
              <input type="radio" name="politicalAffiliation" value="-1" checked={politicalAffiliation === "Neutral"} onChange={(e) => setPoliticalAffiliation(e.target.value)} />
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