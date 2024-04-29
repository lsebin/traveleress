// import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import './profile.css';
import face_smile from '../../icons/face-smile.svg';
import home from '../../icons/home.svg';
import marker_pin from '../../icons/marker_pin.svg';
import instagram from '../../icons/instagram.svg';
import facebook from '../../icons/facebook.svg';
import tiktok from '../../icons/tiktok.svg';
import profile from '../../images/katieL.jpg';
 
const KLProfile = ({ onClose }) => {

    return (
        <div className="popup-container">
            <div className="popup">
                <div className="profile-content">
                    <div className="top-screen">
                        <div style={{ display: 'flex', alignItems: 'center', width: '100%'}}>
                            <button className="close-btn" onClick={onClose}>Close</button>
                            <div className="avatar-placeholder">
                                <img className="profile" 
                                    src={profile} 
                                    alt="Event location map"/>
                            </div>
                        </div>
                        <div style={{ height: '15px' }}></div>
                        <div className="name">Katie L.</div>
                        <div style={{ height: '6px' }}></div>
                        <div className="bio-box">
                            <img src={face_smile} alt="Smile" className="bio-icon" />
                            <span className="bio-age">27</span>
                            <div className="bio-separator"></div>
                            <img src={home} alt="Home" className="bio-icon" />
                            <span className="bio-city">Miami</span>
                            <div className="bio-separator"></div>
                            <img src={marker_pin} alt="Marker" className="bio-icon" />
                            <span className="bio-city">Boston</span>
                        </div>
                        <div style={{ height: '5px' }}></div>
                    </div>
                    <div className="App-body">
                        <div class="info-box">
                            <h3>Hobbies:</h3>
                            <ul>
                                <li>Volunteering at an animal shelter</li>
                                <li>Fine dining explorer</li>
                                <li>Surfing</li>
                            </ul>
                        </div>
                    </div>
                    <div className="App-body">
                        <div class="info-box">
                            <h3>Recent trips:</h3>
                            <ul>
                                <li>New Haven, 03/09/24 - 03/14/24</li>
                            </ul>
                            <div style={{ height: '7px' }}></div>
                            <h3>Upcoming trips:</h3>
                            <ul>
                                <li>New York City, 05/11/24 - 05/19/24</li>
                                <li>San Francisco, 08/24/24 - 09/04/24</li>
                            </ul>
                        </div>
                    </div>
                    <div className="App-body">
                        <div class="socials-box">
                            <h3>Socials:</h3>
                            <div className="social-icons">
                                <img src={instagram} alt="Instagram" className="social-icon" />
                                <span className="social-handle">ktl</span>
                                <img src={facebook} alt="Facebook" className="social-icon" />
                                <span className="social-handle">Katie L</span>
                                <img src={tiktok} alt="TikTok" className="social-icon" />
                                <span className="social-handle">ktl</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default KLProfile;