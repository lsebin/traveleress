// import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import './profile.css';
import pencil from '../../icons/pencil.svg';
import face_smile from '../../icons/face-smile.svg';
import home from '../../icons/home.svg';
import marker_pin from '../../icons/marker_pin.svg';
import instagram from '../../icons/instagram.svg';
import facebook from '../../icons/facebook.svg';
import tiktok from '../../icons/tiktok.svg';
import star from '../../icons/add.svg';
import globe from '../../icons/earth.svg';
import calendar from '../../icons/calendar.svg';
import person from '../../icons/user-circle.svg';
import { useNavigate } from 'react-router-dom';
import ErrorUnderDevelopment from "../popUps/errorUnderDevelopment";
import viviL from "../../images/viviL.jpg";
 
const UserProfile = () => {
    const navigate = useNavigate();
    const [showError, setShowError] = useState(false);
    const handleErrorClick = () => {
        setShowError(true);
    };
    const handleCloseError = () => {
        setShowError(false);
    };
    const containerStyle = {
        maxWidth: '70vh',  /* iPhone width */
        maxHeight: '100vh', /* iPhone height */
        margin: '0 auto', /* Center the content horizontally */
        backgroundColor: '#f7f3f0', /* Optional: Set a background color */
        position: 'static'
    };

    return (
        <div style={containerStyle}>
            <header className="App-header">
                <div className="top-screen" >
                    <div>
                        <img src={pencil} className="edit-button" alt="edit" onClick={handleErrorClick} style={{right:'20px', top:'30px'}}></img>
                        {showError && (
                            <ErrorUnderDevelopment onClose={handleCloseError} />
                        )}
                    </div>
                    <div style={{ height: '40px' }}></div>
                    <img src={viviL} className="profile-pic" alt="user-profile-pic"></img>
                    <div style={{ height: '15px' }}></div>
                    <div className="name">Vivi Li</div>
                    <div style={{ height: '6px' }}></div>
                    <div className="bio-box">
                        <img src={face_smile} alt="Smile" className="bio-icon" />
                        <span className="bio-age">22</span>
                        <div className="bio-separator"></div>
                        <img src={home} alt="Home" className="bio-icon" />
                        <span className="bio-city">Chicago</span>
                        <div className="bio-separator"></div>
                        <img src={marker_pin} alt="Marker" className="bio-icon" />
                        <span className="bio-city">Philadelphia</span>
                    </div>
                </div>
                <div className="App-body">
                    <div class="info-box">
                        <h3>Hobbies:</h3>
                        <ul>
                            <li>Hiking</li>
                            <li>Shopping</li>
                            <li>Wine tasting</li>
                        </ul>
                    </div>
                    <div class="info-box">
                        <h3>Recent trips:</h3>
                        <ul>
                            <li>Hawaii, 03/04/24 - 03/09/24</li>
                            <li>Florida, 12/19/23 - 12/24/23</li>
                        </ul>
                        <div style={{ height: '7px' }}></div>
                        <h3>Upcoming trips:</h3>
                        <ul>
                            <li>Tokyo, 06/30/24 - 07/04/24</li>
                        </ul>
                    </div>
                    <div class="socials-box">
                        <h3>Socials:</h3>
                        <div className="social-icons">
                            <img src={instagram} alt="Instagram" className="social-icon" />
                            <span className="social-handle">viviwjli</span>
                            <img src={facebook} alt="Facebook" className="social-icon" />
                            <span className="social-handle">Vivi Li</span>
                            <img src={tiktok} alt="TikTok" className="social-icon" />
                            <span className="social-handle">viviliwj</span>
                        </div>
                    </div>
                </div>
                <div style={{ height: '90px' }}></div>
            
            <div className="nav-bar" style={{position: 'fixed', bottom:'0vh', width:'100%'}}>
          <button className="nav-icon-button" onClick={() => navigate('/hostevent')}>
          <img src={star} style={{ height: '25px' }} alt="person" />
          </button>
          <button className="nav-icon-button" onClick={() => navigate('/eventslanding')}>
              <img src={globe} style={{ height: '25px' }} alt="globe" />
          </button>
          <button className="nav-icon-button" onClick={() => navigate('/events')}>
              <img src={calendar} style={{ height: '25px' }} alt="calendar" />
          </button>
          <button className="nav-icon-button" onClick={() => navigate('/profile')}>
          <div className="nav-button">
                  <img src={person} style={{ height: '25px' }} alt="star" />
                  <span>Profile</span>
              </div>
          </button>
      </div>
      </header>
        </div>
        
    );
};
 
export default UserProfile;