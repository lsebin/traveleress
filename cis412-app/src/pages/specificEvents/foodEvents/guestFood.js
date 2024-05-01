import React, { useState } from "react";
import { Link } from "react-router-dom";
import mapImage from '../../../images/guestfood.png';
import profile from '../../../images/ashleyT.jpg';
import '../../../styles/meetup.css';
import star from '../../../icons/add.svg';
import globe from '../../../icons/earth.svg';
import calendar from '../../../icons/calendar.svg';
import person from '../../../icons/user-circle.svg';
import { useNavigate } from 'react-router-dom';
import CancelEvent from "../../popUps/cancelEvent";
import SubmitSuccessful from "../../popUps/submitSuccessful";
import ErrorUnderDevelopment from "../../popUps/errorUnderDevelopment";
import ATProfile from "../../profiles/ATProfile";

const GuestFoodPage = () => {
    const navigate = useNavigate();
    const [showCancelEvent, setShowCancelEvent] = useState(false);
    const [showSubmitSuccessful, setShowSubmitSuccessful] = useState(false);
    const [showError, setShowError] = useState(false);
    const [showHost, setShowHost] = useState(false);
    const handleCancelEventClick = () => {
        setShowCancelEvent(true);
    };
    const handleCloseCancelEvent = () => {
        setShowCancelEvent(false);
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
        maxWidth: '70vh',
        maxHeight: '100vh',
        margin: '0 auto',
        backgroundColor: '#f7f3f0',
        overflow: 'auto',
        overflowX: 'hidden'
    };
    return (
        <div style={containerStyle}>
            <header className="meetup-header">
                <div className="back-run">
                    <Link to="/events" className="back">&lt;</Link>
                </div>
                <p style={{marginTop: '4px', }}>Best Halal Food Truck</p>
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
                            <div className="participation-box-event">3/4</div>
                        </div>
                    </div>
                </div>
                <div style={{ height: '5px' }}></div>
                <div className="event-desc">
                    Come try out some of my favorite Halal food trucks near Penn's campus! 
                </div>
                <div className="event-info-container">
                    <div className="event-info-section">
                        <div className="event-info-dt">Date</div>
                        <div className="event-date">May 09, 2024</div>
                    </div> 
                    <div className="event-info-section">
                        <div className="event-info-dt">Time</div>
                        <div className="event-time">1PM - 2:30PM</div>
                    </div>  
                </div>
                <div className="event-info-specific">General Meet-Up Location</div>
                <div className="event-desc">
                    University of Pennsylvania
                </div>
                <button className="abutton" style={{backgroundColor: "#82b2ff"}}>Signed up!</button>
                <button className="abutton" 
                        style={{backgroundColor: "#f73734", marginLeft: "20px"}}
                        onClick={handleCancelEventClick}>Cancel</button>
                {showCancelEvent && (
                    <CancelEvent onClose={handleCloseCancelEvent} />
                )}   
                <div style={{ height: '10px' }}></div>
                <div>
                    <div className="event-info-specific">Current Q&A</div>
                    <div style={{ height: '5px' }}></div>
                    <ul className="qa-list">
                        <li>
                            <strong>Q:</strong> Will this be a march of Halal food trucks? 
                            <p><strong>A:</strong> Hell yeah</p>
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
                         style={{width: '250px', height: '180px',objectFit: 'cover'}} 
                         src={mapImage} 
                         alt="Event location map"
                         onClick={handleErrorClick} />
                    {showError && (
                        <ErrorUnderDevelopment onClose={handleCloseError} />
                    )}
                    <div style={{ height: '20px' }}></div>
                </div>
            </section>
            <div className="nav-bar" style={{position: 'fixed', bottom:'0vh', width:'100%'}}>
                    <button className="nav-icon-button" onClick={() => navigate('/hostEvent')}>
                        <img src={star} style={{ height: '25px' }} alt="star" />
                    </button>
                    <button className="nav-icon-button" onClick={() => navigate('/eventslanding')}>
                        <img src={globe} style={{ height: '25px' }} alt="globe" />
                    </button>
                    <button className="nav-icon-button" onClick={() => navigate('/events')}>
                        <div className="nav-button">
                            <img src={calendar} style={{ height: '25px' }} alt="calendar" />
                            <span>Events</span>
                        </div>
                    </button>
                    <button className="nav-icon-button" onClick={() => navigate('/userprofile')}>
                        <img src={person} style={{ height: '25px' }} alt="person" />
                    </button>
                </div>
        </div>
    );
};
 
export default GuestFoodPage;