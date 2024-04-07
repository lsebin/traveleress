import React from "react";
import {Link} from "react-router-dom";
import mapImage from '../images/maps.jpeg';
import profile from '../images/profile.jpeg';

const MeetupPage = () => {
    const containerStyle = {
        maxwidth: '375px', /* iPhone width */
        maxHeight: '812px',
        margin: '0 auto', /* Center the content horizontally */
        backgroundColor: '#f7f3f0', /* Optional: Set a background color */
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
                <div className="back-button">
                    <Link to="/" className="back">&lt;</Link>

                </div>
                <h1>Manhattan-view Coffee run!</h1>
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
                    <h2>Event Details</h2>
                    <div className="capacity-info">
                        <p>Capacity</p>
                        <p>3/5</p>
                    </div>
                    <div className="card">
                        <p>We will grab a drink at independent coffee roaster in Brooklyn and take a walk to the riverside near Brooklyn Bridge.</p>
                    </div>
                </div>
                <div >
                    <img className="mapImage" src={mapImage} alt="Event location map" />
                </div>
                <div className="question-form">
                    <input type="text" placeholder="Type your question" />
                    <button className="post-button">Post</button>
                </div>
                <button className="signup-button">Sign up</button>
            </section>
        
            

        </div>
    );
};
 
export default MeetupPage;