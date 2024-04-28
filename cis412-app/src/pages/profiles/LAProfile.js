// import 'bootstrap/dist/css/bootstrap.css';
import React from "react";
import './profile.css';
import face_smile from '../../icons/face-smile.svg';
import home from '../../icons/home.svg';
import marker_pin from '../../icons/marker_pin.svg';
import instagram from '../../icons/instagram.svg';
import facebook from '../../icons/facebook.svg';
import tiktok from '../../icons/tiktok.svg';
import profile from '../../images/profile.jpeg';
 
const LAProfile = ({ onClose }) => {

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
                        <div className="name">Liz A.</div>
                        <div style={{ height: '6px' }}></div>
                        <div className="bio-box">
                            <img src={face_smile} alt="Smile" className="bio-icon" />
                            <span className="bio-age">25</span>
                            <div className="bio-separator"></div>
                            <img src={home} alt="Home" className="bio-icon" />
                            <span className="bio-city">Houston</span>
                            <div className="bio-separator"></div>
                            <img src={marker_pin} alt="Marker" className="bio-icon" />
                            <span className="bio-city">New York</span>
                        </div>
                        <div style={{ height: '5px' }}></div>
                    </div>
                    <div className="App-body">
                        <div class="info-box">
                            <h3>Hobbies:</h3>
                            <ul>
                                <li>Trying new coffee shops</li>
                                <li>Thrifting</li>
                                <li>Going on road trips (yeehaw)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="App-body">
                        <div class="info-box">
                            <h3>Recent trips:</h3>
                            <ul>
                                <li>Toronto, 02/18/24 - 02/22/24</li>
                                <li>Maine, 10/08/23 - 10/15/23</li>
                            </ul>
                            <div style={{ height: '7px' }}></div>
                            <h3>Upcoming trips:</h3>
                            <ul>
                                <li>Houston, 05/14/24 - 06/07/24</li>
                            </ul>
                        </div>
                    </div>
                    <div className="App-body">
                        <div class="socials-box">
                            <h3>Socials:</h3>
                            <div className="social-icons">
                                <img src={instagram} alt="Instagram" className="social-icon" />
                                <span className="social-handle">liz_an</span>
                                <img src={facebook} alt="Facebook" className="social-icon" />
                                <span className="social-handle">Liz An</span>
                                <img src={tiktok} alt="TikTok" className="social-icon" />
                                <span className="social-handle">lizzya</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
 
export default LAProfile;