import React, { useEffect, useState } from 'react';
import './CompanyDialogBox.css'; // Ensure the CSS file is correctly linked

function CompanyDialogBox({ onClose }) {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    const allCompanies = ['Amazon', 'UHS', 'Apple', 'IDR', 'Fortis Hospital', 'Zuckerberg International Hospital', 'Blackrock', 'Meta', 'Goldman Sachs'];
    setCompanies(allCompanies.sort(() => 0.5 - Math.random()).slice(0, 3));
  }, []);

  return (
    <div className="company-dialog-backdrop">
      <div className="company-dialog-box">
        {companies.map((company, index) => (
          <button key={index} className="company-btn" onClick={() => console.log(company)}>
            {company}
          </button>
        ))}
        <button className="close-btn" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default CompanyDialogBox;
