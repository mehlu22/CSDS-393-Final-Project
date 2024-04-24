import React, { useEffect, useState } from 'react';
import './CompanyDialogBox.css'; // Make sure to create and link the CSS file

function CompanyDialogBox({ company, onClose, onSelectCompany }) {
    const [companies, setCompanies] = useState([]);
    useEffect(() => {
        setCompanies([company])
    }, []);


    return ( 
    <div className = "company-dialog-backdrop" >
        <div className = "company-dialog-box" >
        <h2 style = {
            { fontSize: '30px', color: '#333', marginBottom: '20px' } } > Selected Company </h2> {
            companies.map((company, index) => (<button key = { index }
                className = "company-btn"
                onClick = {
                    () => onSelectCompany(company) } > { company } </button>
            ))
        } <button className = "close-btn"
        onClick = { onClose } > Close </button> </div> </div>
    );
}

export default CompanyDialogBox;