import React, { useEffect, useState } from 'react';
import './NeighborhoodListDialogBox.css'; // Make sure to create and link this CSS file

function NeighborhoodListDialogBox({ neighborhoods, onClose }) {
  const [neighborhoodList, setNeighborhoodList] = useState([]);

  useEffect(() => {
    setNeighborhoodList(neighborhoods)
  }, []);



  return (
    <div className="neighborhood-list-dialog-backdrop">
      <div className="neighborhood-list-dialog-box">
        <h2>Selected Neighborhoods</h2>
        <ul>
          {neighborhoodList.map((neighborhood, index) => (
            <li key={index}>{neighborhood}</li>
          ))}
        </ul>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default NeighborhoodListDialogBox;