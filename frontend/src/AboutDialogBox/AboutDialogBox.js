import React from 'react';
import './AboutDialogBox.css'; 
import aditi_img from "../images/aditi_img.png"
import gautam_img from "../images/gautam_img.png"
import jacob_img from "../images/jacob_img.png"
import mehlam_img from "../images/mehlam_img.png"
import parv_img from "../images/parv_img.png"
import vish_img from "../images/vish_img.png"
//importing all the images above as components
// react doesn't support local paths so images have to imported as components just like the normal components
function AboutDialogBox({ onClose }) {
  return (
    <div className="about-dialog-backdrop">
      <div className="about-dialog-box">
        <h2>About Our Team</h2>
        <div className="developer-profile">
          <img src={aditi_img} alt="Aditi" className="developer-photo"/>
          <div className="developer-info">
            <h3>Aditi</h3>
            <p>Senior studying Computer Science on the pre-med track. Worked on the backend</p>
          </div>
          
        </div>
        <div className="developer-profile">
          <img src={gautam_img} alt="Gautam " className="developer-photo"/>
          <div className="developer-info">
            <h3>Gautam</h3>
            <p>Junior studying Computer and Data Science. Avid sleeper. Worked on integrating the front and back-end</p>
          </div>
          
        </div>
        <div className="developer-profile">
          <img src={jacob_img} alt="Jacob" className="developer-photo"/>
          <div className="developer-info">
            <h3>Jacob</h3>
            <p>Junior studying Computer Science. A star coder worked on the backend and database</p>
          </div>
          
        </div>
        <div className="developer-profile">
          <img src={mehlam_img} alt="Mehlam" className="developer-photo"/>
          <div className="developer-info">
            <h3>Mehlam</h3>
            <p>Senior studying Bio-informatics and Computer Science. Worked on the backend and integrating ML </p>
          </div>
          
        </div>
        <div className="developer-profile">
          <img src={parv_img} alt="Parv" className="developer-photo"/>
          <div className="developer-info">
            <h3>Parv</h3>
            <p>Junior studying Computer Science and a minor in German. Worked on feature 1 and 3.</p>
          </div>
          
        </div>
        <div className="developer-profile">
          <img src={vish_img} alt="Vish" className="developer-photo"/>
          <div className="developer-info">
            <h3>Vish</h3>
            <p>Senior studying Computer Science and a star D3 tennis player. Worked on feature 2 and the backend</p>
          </div>
          
        </div>
        {/* Repeat for other developers */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

export default AboutDialogBox;
