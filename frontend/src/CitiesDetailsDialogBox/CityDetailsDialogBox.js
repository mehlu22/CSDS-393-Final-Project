import React, { useState } from 'react';
import './CityDetailsDialogBox.css'; // Ensure CSS is properly linked

function CityDetailsDialogBox({ city, onClose, onSubmit }) {
  const [profession, setProfession] = useState('Software Engineer');
  const [expectedSalary, setExpectedSalary] = useState('');
  const [type, setType] = useState('In-person');

  const handleSubmit = () => {
    console.log({city, profession, expectedSalary, type}); // Log or handle the data
    onSubmit(); // Trigger the opening of the CompanyDialogBox
  };

  return (
    <div className="city-details-dialog-backdrop">
      <div className="city-details-dialog-box">
        <h2>{city}</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Profession:</label>
            <select value={profession} onChange={(e) => setProfession(e.target.value)}>
              <option value="Software Engineer">Software Engineer</option>
              <option value="Doctor">Doctor</option>
              <option value="Consultant">Consultant</option>
            </select>
          </div>
          <div className="form-group">
            <label>Expected Salary:</label>
            <input type="number" value={expectedSalary} onChange={(e) => setExpectedSalary(e.target.value)} />
          </div>
          <div className="form-group">
            <legend>Type:</legend>
            <label>
              <input type="radio" name="type" value="In-person" checked={type === 'In-person'} onChange={() => setType('In-person')} />
              In-person
            </label>
            <label>
              <input type="radio" name="type" value="Hybrid" checked={type === 'Hybrid'} onChange={() => setType('Hybrid')} />
              Hybrid
            </label>
            <label>
              <input type="radio" name="type" value="Remote" checked={type === 'Remote'} onChange={() => setType('Remote')} />
              Remote
            </label>
          </div>
          <button type="button" onClick={handleSubmit}>Submit</button>
          <button type="button" onClick={onClose}>Close</button>
        </form>
      </div>
    </div>
  );
}

export default CityDetailsDialogBox;