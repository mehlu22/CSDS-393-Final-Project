import React, { useState } from 'react';
import './CityDetailsDialogBox.css'; // Ensure CSS is properly linked

function CityDetailsDialogBox({ city, onClose }) {
  const [profession, setProfession] = useState('Software Engineer');
  const [expectedSalary, setExpectedSalary] = useState('');
  const [type, setType] = useState('In-person');

  const handleSubmit = () => {
    // Here, you would handle the submission logic
    console.log({
      city,
      profession,
      expectedSalary,
      type
    });
    onClose(); // Optionally close the dialog upon submission
  };

  return (
    <div className="city-details-dialog-backdrop">
      <div className="city-details-dialog-box">
        <h2>{city}</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label htmlFor="profession">Profession:</label>
            <select id="profession" value={profession} onChange={(e) => setProfession(e.target.value)}>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Doctor">Doctor</option>
              <option value="Consultant">Consultant</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="expectedSalary">Expected Salary:</label>
            <input
              type="number"
              id="expectedSalary"
              value={expectedSalary}
              onChange={(e) => setExpectedSalary(e.target.value)}
              placeholder="Enter expected salary"
            />
          </div>
          <fieldset>
            <legend>Type:</legend>
            <label>
              <input type="radio" name="type" value="In-person" checked={type === 'In-person'} onChange={(e) => setType(e.target.value)} />
              In-person
            </label>
            <label>
              <input type="radio" name="type" value="Hybrid" checked={type === 'Hybrid'} onChange={(e) => setType(e.target.value)} />
              Hybrid
            </label>
            <label>
              <input type="radio" name="type" value="Remote" checked={type === 'Remote'} onChange={(e) => setType(e.target.value)} />
              Remote
            </label>
          </fieldset>
          <div className="form-buttons">
            <button type="button" onClick={onClose}>Close</button>
            <button type="button" onClick={handleSubmit}>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CityDetailsDialogBox;
