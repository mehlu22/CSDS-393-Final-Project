import React, { useState } from 'react';
import './NeighborhoodDialogBox.css'; // Make sure to create and link this CSS file

function NeighborhoodDialogBox({ city, company, onClose, onSubmit }) {
    const [costOfLiving, setCostOfLiving] = useState('');
    const [crimeRate, setCrimeRate] = useState('');
    const [publicTransport, setPublicTransport] = useState('');
    const [distanceToWork, setDistanceToWork] = useState('');
    const [distanceToSchool, setDistanceToSchool] = useState('');

    const handleSubmit = async() => {


        const formData = {
            costOfLiving: Number(costOfLiving),
            crimeRate: Number(crimeRate),
            publicTransport: Number(publicTransport),
            distanceToWork: Number(distanceToWork),
            distanceToSchool: Number(distanceToSchool),
        };
        try {
            const response = await fetch('http://localhost:5000/neighborhoods', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify([city,formData]),
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log("Received Neighborhoods", result); // Log the success message
            onSubmit(result);
        } catch (error) {
            console.error("Failed to submit form data", error);
        }
        onClose(); // Optionally close after submitting

    };

    return ( <div className = "neighborhood-dialog-backdrop" >
        <div className = "neighborhood-dialog-box" >
        <h2 > Enter Neighborhood Details: { company } in { city } </h2> 
        <form onSubmit = {(e) => e.preventDefault() }>
        <label >
        Cost of Living:
        <input type = "number"
        value = { costOfLiving }
        onChange = { e => setCostOfLiving(e.target.value) }/> </label > <label >
        Crime Rate:
        <input type = "number"
        value = { crimeRate }
        onChange = { e => setCrimeRate(e.target.value) }/> </label > <label >
        Public Transportation:
        <input type = "number"
        value = { publicTransport }
        onChange = { e => setPublicTransport(e.target.value) }/> </label> 
        <label>Distance to Work(km):
        <input type = "number" value = { distanceToWork } onChange = { e => setDistanceToWork(e.target.value) }/>
        </label > <label>Distance to School(km):<input type = "number"value = { distanceToSchool } onChange = { e => setDistanceToSchool(e.target.value) }/> </label > <div className = "buttons" >
        <button type = "button"
        onClick = { handleSubmit } > Submit </button> <button type = "button"
        onClick = { onClose } > Close </button> </div > </form> </div > </div>
    );
}
export default NeighborhoodDialogBox;