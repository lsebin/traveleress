// import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import './profile.css';
import face_smile from '../../icons/face-smile.svg';
import home from '../../icons/home.svg';
import marker_pin from '../../icons/marker_pin.svg';
import instagram from '../../icons/instagram.svg';
import facebook from '../../icons/facebook.svg';
import tiktok from '../../icons/tiktok.svg';
import profile from '../../images/ashleyT.jpg';
 
const ATProfile = ({ onClose }) => {

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
                        <div className="name">Ashley T.</div>
                        <div style={{ height: '6px' }}></div>
                        <div className="bio-box">
                            <img src={face_smile} alt="Smile" className="bio-icon" />
                            <span className="bio-age">22</span>
                            <div className="bio-separator"></div>
                            <img src={home} alt="Home" className="bio-icon" />
                            <span className="bio-city">New York</span>
                            <div className="bio-separator"></div>
                            <img src={marker_pin} alt="Marker" className="bio-icon" />
                            <span className="bio-city">New York</span>
                        </div>
                        <div style={{ height: '5px' }}></div>
                        <div class="others-info-box">
                            <h3>Hobbies:</h3>
                            <ul>
                                <li>Coffee shop hopping</li>
                                <li>Bar hopping</li>
                                <li>Hopping</li>
                            </ul>
                        </div>
                        <div class="others-info-box">
                            <h3>Recent trips:</h3>
                            <ul>
                                <li>Nashville, 10/02/23 - 10/06/23</li>
                                <li>Philadelphia, 07/24/23 - 09/12/23</li>
                            </ul>
                            <div style={{ height: '7px' }}></div>
                            <h3>Upcoming trips:</h3>
                            <ul>
                                <li>Chicago, 08/03/24 - 08/09/24</li>
                            </ul>
                        </div>
                        <div class="other-socials-box">
                            <h3>Socials:</h3>
                            <div className="social-icons">
                                <img src={instagram} alt="Instagram" className="social-icon" />
                                <span className="social-handle">ash_t</span>
                                <img src={facebook} alt="Facebook" className="social-icon" />
                                <span className="social-handle">Ashley T</span>
                                <img src={tiktok} alt="TikTok" className="social-icon" />
                                <span className="social-handle">ash.t</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default ATProfile;