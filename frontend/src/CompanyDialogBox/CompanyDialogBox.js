import React, { useEffect, useState } from 'react';
import './CompanyDialogBox.css'; // Make sure to create and link the CSS file

function CompanyDialogBox({company, onClose, onSelectCompany }) {

  useEffect(() => {
  }, []);


  return (
    <div className="company-dialog-backdrop">
      <div className="company-dialog-box">
        {company.map((company, index) => (
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
