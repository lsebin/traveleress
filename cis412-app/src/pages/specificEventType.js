import 'bootstrap/dist/css/bootstrap.css';
import './specificEventType.css';
import katie_map from '../images/katie_map.png';
import user_circle from '../icons/user-circle.svg';
import bookmark from '../icons/bookmark.svg';
import star from '../icons/star.svg';
import globe from '../icons/earth.svg';
import calendar from '../icons/calendar.svg';
import person from '../icons/user-circle.svg';
import { useNavigate } from 'react-router-dom';

const SpecificEventType = () => {
    const navigate = useNavigate();

    const containerStyle = {
        maxWidth: '375px', /* iPhone width */
        maxHeight: '812px', /* iPhone height */
        margin: '0 auto', /* Center the content horizontally */
        backgroundColor: '#f7f3f0', /* Optional: Set a background color */
    };

    const eventBoxStyle = {
        padding: '10px', 
        textAlign: 'left'
    }

    return (
        <div style={containerStyle}>
            <header className="App-header">
                <div style={{ height: '10px' }}></div> {/* Empty vertical box */}
                <div style={{ display: 'inline-block'}}>
                    <button className="back-button">&larr;</button>
                    <span className="header-status">Coffee</span>
                </div>
                <div style={{ height: '10px' }}></div>
                <div className="line"></div>
                <div className="App-body">
                    <div style={{ height: '30px' }}></div> {/* Empty vertical box */}
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
                                <button className="learn-more">Learn More</button>
                                <div className="participation-box">3/5</div>
                            </div>
                        </div>
                    </div> 
                    <div style={{ height: '10px' }}></div>
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
                    </div> 
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
                        <button className="nav-icon-button" onClick={() => {}}>
                            <img src={star} style={{ height: '25px' }} alt="star" />
                        </button>
                        <button className="nav-icon-button" onClick={() => {}}>
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