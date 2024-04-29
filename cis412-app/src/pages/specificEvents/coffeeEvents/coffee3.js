import React, { useState } from "react";
import { Link } from "react-router-dom";
import mapImage from '../../../images/maps.jpeg';
import profile from '../../../images/ashleyT.jpg';
import '../../../styles/meetup.css';
import star from '../../../icons/star.svg';
import globe from '../../../icons/earth.svg';
import calendar from '../../../icons/calendar.svg';
import person from '../../../icons/user-circle.svg';
import { useNavigate } from 'react-router-dom';
import SignUpSuccessful from "../../popUps/signUpSuccessful";
import SubmitSuccessful from "../../popUps/submitSuccessful";
import ErrorUnderDevelopment from "../../popUps/errorUnderDevelopment";
import ATProfile from "../../profiles/ATProfile";

const Coffee3Page = () => {
    const navigate = useNavigate();
    const [showSignUpSuccessful, setShowSignUpSuccessful] = useState(false);
    const [showSubmitSuccessful, setShowSubmitSuccessful] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showHost, setShowHost] = useState(false);
    const handleSignUpClick = () => {
        setShowSignUpSuccessful(true);
    };
    const handleCloseSignUp = () => {
        setShowSignUpSuccessful(false);
    };
    const handleSubmitClick = () => {
        setShowSubmitSuccessful(true);
    };
    const handleCloseSubmit = () => {
        setShowSubmitSuccessful(false);
    };
    const handleErrorClick = () => {
        setShowError(true);
    };
    const handleCloseError = () => {
        setShowError(false);
    };
    const handleHostClick = () => {
        setShowHost(true);
    };
    const handleCloseHost = () => {
        setShowHost(false);
    };
    const containerStyle = {
        maxWidth: '375px',
        maxHeight: '812px',
        margin: '0 auto',
        backgroundColor: '#f7f3f0',
        overflow: 'auto',
        overflowX: 'hidden'
    };
    return (
        <div style={containerStyle}>
            <header className="meetup-header">
                <div className="back-run">
                    <Link to="/coffeeType" className="back">&lt;</Link>
                </div>
                <p style={{marginTop: '4px', }}>Check out this new coffee shop!</p>
            </header>
            <section className="meetup-details">
                <div className="host-info">
                    <div className="avatar-placeholder">
                        <img className="profile" 
                             src={profile} 
                             alt="Event location map"
                             onClick={handleHostClick} />
                    </div>
                    {showHost && (
                        <ATProfile onClose={handleCloseHost} />
                    )}      
                    <p style={{fontSize: '20px'}}>Ashley T.</p>
                </div>
                <div className="event-info-specific">
                    <div class="row justify-content-between"> 
                        <div class="col-5">
                            <div>Event Details</div>
                        </div>
                        <div class="col-2"> 
                            <div>Capacity</div>
                        </div>
                        <div class="col-2">
                            <div className="participation-box-event">6/10</div>
                        </div>
                    </div>
                </div>
                <div style={{ height: '5px' }}></div>
                <div className="event-desc">
                    My friends and I discovered this new coffee shop in the corner of our neighborhood
                    lately, and it's an absolute gem! Just want to post this out here and get more
                    people excited about it :)
                </div>
                <button className="abutton" onClick={handleSignUpClick}>Sign up</button>
                <div style={{ height: '10px' }}></div>
                <div>
                    <div className="event-info-specific">Current Q&A</div>
                    {showSignUpSuccessful && (
                        <SignUpSuccessful onClose={handleCloseSignUp} />
                    )}
                    <div style={{ height: '5px' }}></div>
                    <ul className="qa-list">
                        <li>
                            <strong>Q:</strong> What's your favorite order here?  
                            <p><strong>A:</strong> Definitely their matcha latte!</p>
                        </li>
                        <li>
                            <strong>Q:</strong> Are there any new-shop discounts?  
                            <p><strong>A:</strong> Yes! I believe there is a buy-one-get-one-half-off deal going on :)</p>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="event-info-specific">Have more questions? Submit them here!</div>
                    <div className="question-form">
                        <input class="question" type="text" placeholder="Type your question" />
                        <button className="abutton" onClick={handleSubmitClick}>Submit</button>
                        {showSubmitSuccessful && (
                            <SubmitSuccessful onClose={handleCloseSubmit} />
                        )}
                    </div>
                    <img className="mapImage" 
                         style={{width: '250px', height: '180px'}} 
                         src={mapImage} 
                         alt="Event location map"
                         onClick={handleErrorClick} />
                    {showError && (
                        <ErrorUnderDevelopment onClose={handleCloseError} />
                    )}
                    <div style={{ height: '20px' }}></div>
                </div>
            </section>
            <div className="nav-bar">
                    <button className="nav-icon-button" onClick={() => navigate('/eventslanding')}>
                        <img src={star} style={{ height: '25px' }} alt="star" />
                    </button>
                    <button className="nav-icon-button" onClick={() => navigate('/eventslanding')}>
                            <div className="nav-button">
                                <img src={globe} style={{ height: '25px' }} alt="globe" />
                                <span>Meet up</span>
                            </div>
                        </button>
                    <button className="nav-icon-button" onClick={() => navigate('/events')}>
                        <img src={calendar} style={{ height: '25px' }} alt="calendar" />
                    </button>
                    <button className="nav-icon-button" onClick={() => navigate('/userProfile')}>
                            <img src={person} style={{ height: '25px' }} alt="person" />
                    </button>
                </div>
        </div>
    );
};
 
export default Coffee3Page;