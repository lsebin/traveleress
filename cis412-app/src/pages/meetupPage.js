import React from "react";
import {Link} from "react-router-dom";
import mapImage from '../images/maps.jpeg';
import profile from '../images/profile.jpeg';
import '../styles/meetup.css';
import star from '../icons/star.svg';
import globe from '../icons/earth.svg';
import calendar from '../icons/calendar.svg';
import person from '../icons/user-circle.svg';
import { useNavigate } from 'react-router-dom';

const MeetupPage = () => {
    const navigate = useNavigate();
    const containerStyle = {
        maxWidth: '375px',
        maxHeight: '812px',
        margin: '0 auto',
        backgroundColor: '#f7f3f0',
    };
    return (
        <div style={containerStyle}>
            {/* <button></button>
            <h1>Manhattan-view Coffee run!</h1>
            
            <div>
                <img src="" alt="pfp"></img>
                <h5>Host</h5>
                <h6>Liz A.</h6>
            </div>

            <div>
                
            </div> */}
            <header className="meetup-header">
                <div className="back-run">
                    <Link to="/coffeeType" className="back">&lt;</Link>
                </div>
                <p>Manhattan-view Coffee run!</p>
            </header>
            <section className="meetup-details">
                <div className="host-info">
                    <div className="avatar-placeholder">
                        <img className="profile" src={profile} alt="Event location map" />
                    </div>
                    <p>Host</p>
                    <p>Liz A.</p>
                </div>
                <div className="event-info">
                    <div class="row justify-content-between"> 
                        <div class="col-5">
                            <p>Event Details</p>
                        </div>

                        {/* <div> */}
                            <div class="col-2"> 
                                <p>Capacity</p>
                            </div>
                            <div class="col-2">
                                <p>3/5</p>
                            </div>
                        {/* </div> */}

                    </div>
                    <div className="event-desc">
                        <p>We will grab a drink at independent coffee roaster in Brooklyn and take a walk to the riverside near Brooklyn Bridge.</p>
                    </div>
                </div>
                <div >
                    <img className="mapImage" src={mapImage} alt="Event location map" />
                </div>
                <div className="question-form">
                    <p>Ask a question about the event</p>
                    <input class="question" type="text" placeholder="Type your question" />
                    <button className="abutton">Post</button>
                </div>
                <button className="abutton">Sign up</button>
            </section>
            <div className="nav-bar">
                    <button className="nav-icon-button" onClick={() => navigate('/eventslanding')}>
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
                    <button className="nav-icon-button" onClick={() => navigate('/profile')}>
                            <img src={person} style={{ height: '25px' }} alt="person" />
                        
                    </button>
                </div>
        
            

        </div>
    );
};
 
export default MeetupPage;