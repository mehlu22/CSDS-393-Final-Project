import React, { useState } from 'react';
import './NeighborhoodDialogBox.css'; // Make sure to create and link this CSS file

function NeighborhoodDialogBox({ city, company, onClose, onSubmit }) {
    const [costOfLiving, setCostOfLiving] = useState('');
    const [crimeRate, setCrimeRate] = useState('');
    const [publicTransport, setPublicTransport] = useState('');
    const [distanceToWork, setDistanceToWork] = useState('');
    const [distanceToSchool, setDistanceToSchool] = useState('');

    const handleSubmit = () => {
        console.log({
            costOfLiving,
            crimeRate,
            publicTransport,
            distanceToWork,
            distanceToSchool
        });
        onSubmit(); // Optionally close after submitting
        
    };

    return (
        <div className="neighborhood-dialog-backdrop">
            <div className="neighborhood-dialog-box">
                <h2>Enter Neighborhood Details: {company} in {city} </h2>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>
                        Cost of Living:
                        <input type="number" value={costOfLiving} onChange={e => setCostOfLiving(e.target.value)} />
                    </label>
                    <label>
                        Crime Rate:
                        <input type="number" value={crimeRate} onChange={e => setCrimeRate(e.target.value)} />
                    </label>
                    <label>
                        Public Transportation:
                        <input type="number" value={publicTransport} onChange={e => setPublicTransport(e.target.value)} />
                    </label>
                    <label>
                        Distance to Work (km):
                        <input type="number" value={distanceToWork} onChange={e => setDistanceToWork(e.target.value)} />
                    </label>
                    <label>
                        Distance to School (km):
                        <input type="number" value={distanceToSchool} onChange={e => setDistanceToSchool(e.target.value)} />
                    </label>
                    <div className="buttons">
                        <button type="button" onClick={handleSubmit}>Submit</button>
                        <button type="button" onClick={onClose}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default NeighborhoodDialogBox;
