import 'bootstrap/dist/css/bootstrap.css';
import './specificEventType.css';
import katie_map from '../images/katie_map.png';
import user_circle from '../icons/user-circle.svg';
import bookmark from '../icons/bookmark.svg';
import star from '../icons/star.svg';
import globe from '../icons/earth.svg';
import calendar from '../icons/calendar.svg';
import person from '../icons/user-circle.svg';
import myLocation from '../icons/icons8-map-pin-48.png';
import eventLocation from '../icons/icons8-map-pin-32.png';
import { useNavigate } from 'react-router-dom';

const SpecificEventType = () => {
    const navigate = useNavigate();

    const containerStyle = {
        maxWidth: '375px',
        maxHeight: '812px',
        margin: '0 auto',
        backgroundColor: '#f7f3f0',
    };

    const eventBoxStyle = {
        padding: '10px', 
        textAlign: 'left'
    }

    return (
        <div style={containerStyle}>
            <header className="App-header">
                <div style={{backgroundColor: '#f7cdfa',
                            width: '100%',
                            display: 'flex', // Use flexbox for alignment
                            flexDirection: 'column', // Stack children vertically
                            alignItems: 'center', // Center children horizontally
                            justifyContent: 'center', }}>
                    <div style={{ height: '10px' }}></div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%'}}>
                        <button className="back-button" onClick={() => {"/eventslanding" }}>
                            &larr;
                        </button>
                        <span className="header-status-coffee">Coffee</span>
                    </div>
                    <div style={{ height: '10px' }}></div>
                    <div className="line"></div>
                </div>
                <div className="App-body">
                    <div style={{ height: '30px' }}></div>

                    <div className="map-container">
                        <img src={katie_map} className="mapSearch" alt="katie_map" />
                        <img src={myLocation} alt="myll" className="map-pin" style={{ top: "50px", left: "60px" }}/>
                        <div className="map-content" style={{ top: "80px", left: "90px" }}>
                            {"Your \n location"}
                        </div>
                       
                        <img src={eventLocation} alt="el" className="map-pin" style={{ top: "200px", left: "170px" }}/>
                        <div className="map-content" style={{ top: "215px", left: "195px" }}>
                            {"Katie"}
                        </div>
                        <button className="pin-click" onClick={() => navigate('/meetup/coffee/manhattan-coffee-run')}>
                        <img src={eventLocation} alt="el" className="map-pin" style={{ top: "20px", left: "160px" }}/>
                        </button>
                        <div className="map-content" style={{ top: "35px", left: "180px" }}>
                            {"Liz"}
                        </div>
                        <img src={eventLocation} alt="el" className="map-pin" style={{ top: "120px", left: "300px" }}/>
                        <div className="map-content" style={{ top: "135px", left: "325px" }}>
                            {"Sebin"}
                        </div>
                    </div>


                    <div style={{ height: '10px' }}></div>
                    <div className="event-box" style= {eventBoxStyle}>
                        <img src={katie_map} className="map-style" alt="katie_map" />
                    

                        <div className="event-info">
                            <h2 className="event-title">Cute coffee study sesh :)</h2>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={user_circle} alt="user_profile_pic" />
                                    <p className="event-organizer">Katie L.</p>
                                </div>
                                <img src={bookmark} style={{ marginLeft: "auto" }} alt="saved" />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <button className="learn-more">Learn More</button>
                                <div className="participation-box">2/4</div>
                            </div>
                        </div>
                    </div> 
                    <div style={{ height: '10px' }}></div>
                    <div className="event-box" style= {eventBoxStyle}>
                        <img src={katie_map} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title">Manhattan-view Coffee run!</h2>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={user_circle} alt="user_profile_pic" />
                                    <p className="event-organizer">Liz A.</p>
                                </div>
                                <img src={bookmark} style={{ marginLeft: "auto" }} alt="saved" />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <button className="learn-more" onClick={() => navigate('/meetup/coffee/manhattan-coffee-run')}>
                                    Learn More
                                </button>
                                <div className="participation-box">3/5</div>
                            </div>
                        </div>
                    </div> 
                    {/* <div style={{ height: '10px' }}></div>
                    <div className="event-box" style= {eventBoxStyle}>
                        <img src={katie_map} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title">Check out this new coffee shop!</h2>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={user_circle} alt="user_profile_pic" />
                                    <p className="event-organizer">Ashley T.</p>
                                </div>
                                <img src={bookmark} style={{ marginLeft: "auto" }} alt="saved" />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <button className="learn-more">Learn More</button>
                                <div className="participation-box">6/10</div>
                            </div>
                        </div>
                    </div>  */}
                    <div style={{ height: '10px' }}></div>
                    <div className="event-box" style= {eventBoxStyle}>
                        <img src={katie_map} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title">Sunny day! Care for a coffee date?</h2>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={user_circle} alt="user_profile_pic" />
                                    <p className="event-organizer">Sebin L.</p>
                                </div>
                                <img src={bookmark} style={{ marginLeft: "auto" }} alt="saved" />
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <button className="learn-more">Learn More</button>
                                <div className="participation-box">0/1</div>
                            </div>
                        </div>
                    </div> 
                    <div style={{ height: '10px' }}></div>
                    <div className="nav-bar">
                        <button className="nav-icon-button">
                            <img src={star} style={{ height: '25px' }} alt="star" />
                        </button>
                        <button className="nav-icon-button" onClick={() => {'/eventslanding'}}>
                            <div className="nav-button">
                                <img src={globe} style={{ height: '25px' }} alt="globe" />
                                <span>Meet up</span>
                            </div>
                        </button>
                        <button className="nav-icon-button" onClick={() => navigate('/events')}>
                            <img src={calendar} style={{ height: '25px' }} alt="calendar" />
                        </button>
                        <button className="nav-icon-button" onClick={() => navigate('/profile')}>
                            <img src={person} style={{ height: '25px' }} alt="person" />
                        </button>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default SpecificEventType;