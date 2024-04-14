import React, { useState } from 'react';
import './App.css';
import DialogBox from './Dialogbox/DialogBox'; // Adjust the path as necessary
import CitiesDialogBox from './CitiDialogBox/CitiDialogBox';
import bg_image from "./images/bg_img.png";
import git_img from "./images/github_logo.png";

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isCitiesDialogOpen, setIsCitiesDialogOpen] = useState(false);

  // Handles closing the filter dialog box
  const handleDialogClose = () => {
    setIsDialogOpen(false);
  };

  // Handles closing the cities dialog box
  const handleCitiesDialogClose = () => {
    setIsCitiesDialogOpen(false);
  };

  // Handles the submission of the filter dialog box,
  // which in turn opens the cities dialog box
  const handleFormSubmit = () => {
    setIsDialogOpen(false); // Close the filter dialog
    setIsCitiesDialogOpen(true); // Open the cities dialog
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
      {isCitiesDialogOpen && <CitiesDialogBox onClose={handleCitiesDialogClose} />}
    </div>
  );
}

export default App;
