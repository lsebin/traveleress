import React from "react";
import mapImage from '../images/maps.jpeg';
import '../styles/events.css';
import star from '../icons/star.svg';
import globe from '../icons/earth.svg';
import calendar from '../icons/calendar.svg';
import person from '../icons/user-circle.svg';
import { useNavigate } from 'react-router-dom';
 
const Events = () => {
    const navigate = useNavigate();
    const containerStyle = {
        maxWidth: '375px',
        maxHeight: '812px',
        margin: '0 auto',
        backgroundColor: '#f7f3f0',
    };

    return (
        <div style={containerStyle}>
            <div>
                <div class="row justify-content-between">
                    <div class="col-10">
                        <h1 class="title">Your Events</h1>
                    </div>
                    <div class="col-2">
                        <button class="plusButton">+</button>
                    </div>       
                </div>
            </div>
        
         
            <h3 class="subheader">Hosting</h3>
                <div class="col">
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-7">
                                <div class="card-body text-start">
                                    <h5 class="card-title">Coffee chats!</h5>
                                    <button className="dateButton">26/2/24</button>
                                    <p>Starbucks</p>
                                    <button class="learnMore">Learn more</button>
                                </div>
                            </div>
                            <div class="col-5">
                                <img src={mapImage} class="card-img-top map img-fluid rounded-start" alt="map"></img>
                            </div>
                        </div>
                    </div>
                </div>

            <h3 class="subheader">Guesting</h3>
                <div class="col">
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-7">
                                <div class="card-body text-start">
                                    <h5 class="card-title">Thrift Marketing</h5>
                                    <button className="dateButton">27/2/24</button>
                                    <p>3820 Locust Walk</p>
                                    <button class="learnMore">Learn more</button>
                                </div>
                            </div>
                            <div class="col-5">
                                <img src={mapImage} class="card-img-top map" alt="map"></img>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col">
                    <div class="card">
                        <div class="row g-0">
                            <div class="col-7">
                                <div class="card-body text-start">
                                    <h5 class="card-title">Dance Class</h5>
                                    <button class="dateButton">27/2/24</button>
                                    <p>912 Spring Street</p>
                                    <button class="learnMore">Learn more</button>
                                </div>
                            </div>
                            <div class="col-5">
                                <img src={mapImage} class="card-img-top map" alt="map"></img>
                            </div>
                        </div>
                    </div>
                </div>
                <button class="seeMore">See more</button>
                <div className="nav-bar">
                    <button className="nav-icon-button" onClick={() => {}}>
                        <img src={star} style={{ height: '25px' }} alt="star" />
                    </button>
                    <button className="nav-icon-button" onClick={() => {/*TODO: Meetup page*/}}>
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
            
        // </div>
    );
};
 
export default Events;