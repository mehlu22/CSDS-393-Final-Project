import React, {useState }from 'react';
import './App.css'; // Make sure you have the App.css file for styles
import DialogBox from './Dialogbox/DialogBox';

function App() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (

    <div className="App">
      <div className="top-panel">
        <button id="searchBtn" onClick={() => setIsDialogOpen(true)} >Search</button>
        <button id="aboutBtn">About</button>
        <button id="contactBtn">Contact</button>
      </div>
      <h1 onClick={() => setIsDialogOpen(true)}>Find your perfect city with a click </h1>
      <div className="bottom-panel">
  <div className="bottom-left">
    <a href="https://github.com/mehlu22/CSDS-393-Final-Project/" target="_blank" rel="noopener noreferrer">
      GitHub Repo <img src="./frontend/src/images/github_logo.png" alt="GitHub" />
    </a>
  </div>
  <div className="bottom-center">
    SARA developed by Aditi, Gautam, Jacob, Mehlam, Parv, Vish
  </div>
  <div className="bottom-right">
  <a href="/contact" className="contact-link">Contact</a>
</div>
</div>
{isDialogOpen && <DialogBox onClose={() => setIsDialogOpen(false)} />}
    </div>
  );
}

export default App;