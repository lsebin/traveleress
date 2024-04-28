// import 'bootstrap/dist/css/bootstrap.css';
import React, { useState } from "react";
import './profile.css';
import pencil from '../../icons/pencil.svg';
import pfp from '../../icons/Group 16.svg';
import face_smile from '../../icons/face-smile.svg';
import home from '../../icons/home.svg';
import marker_pin from '../../icons/marker_pin.svg';
import instagram from '../../icons/instagram.svg';
import facebook from '../../icons/facebook.svg';
import tiktok from '../../icons/tiktok.svg';
import star from '../../icons/star.svg';
import globe from '../../icons/earth.svg';
import calendar from '../../icons/calendar.svg';
import person from '../../icons/user-circle.svg';
import { useNavigate } from 'react-router-dom';
import ErrorUnderDevelopment from "../popUps/errorUnderDevelopment";
 
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
        maxWidth: '375px', /* iPhone width */
        maxHeight: '812px', /* iPhone height */
        margin: '0 auto', /* Center the content horizontally */
        backgroundColor: '#f7f3f0', /* Optional: Set a background color */
    };

    return (
        <div style={containerStyle}>
            <header className="App-header">
                <div className="top-screen">
                    <div style={{ display: 'inline-block' }}>
                        <img src={pencil} className="edit-button" alt="edit" onClick={handleErrorClick}></img>
                        {showError && (
                            <ErrorUnderDevelopment onClose={handleCloseError} />
                        )}
                    </div>
                    <div style={{ height: '15px' }}></div>
                    <img src={pfp} className="profile-pic" alt="user-profile-pic"></img>
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
                    <div style={{ height: '5px' }}></div>
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
                </div>
                <div className="App-body">
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
                </div>
                <div className="App-body">
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
                <div className="nav-bar">
                    <button className="nav-icon-button" onClick={() => {}}>
                        <img src={star} style={{ height: '25px' }} alt="star" />
                    </button>
                    <button className="nav-icon-button" onClick={() => navigate('/eventslanding')}>
                        <img src={globe} style={{ height: '25px' }} alt="globe" />
                    </button>
                    <button className="nav-icon-button" onClick={() => navigate('/events')}>
                        <img src={calendar} style={{ height: '25px' }} alt="calendar" />
                    </button>
                    <button className="nav-icon-button" onClick={() => navigate('/userProfile')}>
                        <div className="nav-button">
                            <img src={person} style={{ height: '25px' }} alt="person" />
                            <span>Profile</span>
                        </div>
                    </button>
                </div>
            </header>
        </div>
    );
};
 
export default UserProfile;