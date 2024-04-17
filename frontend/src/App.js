import React, { useState } from 'react';
import './App.css';
import DialogBox from './Dialogbox/DialogBox'; // Adjust the path as necessary
import CitiesDialogBox from './CitiDialogBox/CitiDialogBox';
import bg_image from "./images/bg_img.png";
import git_img from "./images/github_logo.png";
import CompanyDialogBox from './CompanyDialogBox/CompanyDialogBox';
import CityDetailsDialogBox from './CitiesDetailsDialogBox/CityDetailsDialogBox';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCitiesDialogOpen, setIsCitiesDialogOpen] = useState(false);
  const [isCityDetailsOpen, setIsCityDetailsOpen] = useState(false);
  const [isCompanyDialogOpen, setIsCompanyDialogOpen] = useState(false);

  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  const handleCitiesDialogClose = () => {
    setIsCitiesDialogOpen(false);
  };

  const handleCityDetailsClose = () => {
    setIsCityDetailsOpen(false);
  };

  const handleCompanyDialogClose = () => {
    setIsCompanyDialogOpen(false);
  };

  const handleFormSubmit = () => {
    setIsDialogOpen(false); // Close the filter dialog
    setIsCitiesDialogOpen(true); // Open the cities dialog
  };

  const handleCitySelection = (city) => {
    setIsCitiesDialogOpen(false);
    setIsCityDetailsOpen(true); // Transition to city details dialog
  };

  const handleCityDetailsSubmit = () => {
    setIsCityDetailsOpen(false);
    setIsCompanyDialogOpen(true); // Open company dialog upon city details submission
  };
  

  return (
    <div className="App" style={{backgroundImage:`url(${bg_image})`}}>
      <div className="top-panel">
        <button id="searchBtn" onClick={() => setIsDialogOpen(true)}>Search</button>
        <button id="aboutBtn">About</button>
        <button id="contactBtn">Contact</button>
      </div>
      <h1 onClick={() => setIsDialogOpen(true)}>Find your perfect city with a click</h1>
      <div className="bottom-panel">
        <div className="bottom-left">
          <a href="https://github.com/mehlu22/CSDS-393-Final-Project/" target="_blank" rel="noopener noreferrer">
          GitHub Repo <img src= {git_img}  alt="GitHub" />
          </a>
        </div>
        <div className="bottom-center">
          SARA developed by Aditi, Gautam, Jacob, Mehlam, Parv, Vish
        </div>
        <div className="bottom-right">
          <a href="/contact" className="contact-link">Contact</a>
        </div>
      </div>
      {isDialogOpen && <DialogBox onClose={handleDialogClose} onSubmit={handleFormSubmit} />}
      {isCitiesDialogOpen && <CitiesDialogBox onClose={handleCitiesDialogClose} onCitySelect={handleCitySelection} />}
      {isCityDetailsOpen && <CityDetailsDialogBox onClose={handleCityDetailsClose} onSubmit={handleCityDetailsSubmit} />}
      {isCompanyDialogOpen && <CompanyDialogBox onClose={handleCompanyDialogClose} />}
      
    </div>
  );
}

export default App;