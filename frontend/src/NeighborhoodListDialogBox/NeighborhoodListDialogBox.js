import React, { useEffect, useState } from 'react';
import './NeighborhoodListDialogBox.css'; // Make sure to create and link this CSS file

function NeighborhoodListDialogBox({ onClose }) {
  const [neighborhoods, setNeighborhoods] = useState([]);

  useEffect(() => {
    pickRandomNeighborhoods();
  }, []);

  const pickRandomNeighborhoods = () => {
    const allNeighborhoods = ['University Circle', 'Euclid', 'Hessler', 'Tropicana', 'Mullhood'];
    setNeighborhoods(allNeighborhoods.sort(() => 0.5 - Math.random()).slice(0, 3));
  };

  return (
    <div className="neighborhood-list-dialog-backdrop">
      <div className="neighborhood-list-dialog-box">
        <h2>Selected Neighborhoods</h2>
        <ul>
          {neighborhoods.map((neighborhood, index) => (
            <li key={index}>{neighborhood}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default NeighborhoodListDialogBox;
