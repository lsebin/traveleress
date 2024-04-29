import 'bootstrap/dist/css/bootstrap.css';
import './specificEventType.css';
import '../Landing.css'
import katie_map from '../../images/katie_map.png';
import coffee2 from '../../images/coffee2.png';
import coffee3 from '../../images/coffee3.png';
import coffee4 from '../../images/coffee4.png';
import star from '../../icons/add.svg';
import globe from '../../icons/earth.svg';
import calendar from '../../icons/calendar.svg';
import person from '../../icons/user-circle.svg';
import { useNavigate } from 'react-router-dom';
import lizA from '../../images/lizA.jpeg';
import ashleyT from '../../images/ashleyT.jpg';
import sebinL from '../../images/sebinL.jpg';
import katieL from '../../images/katieL.jpg';

const CoffeeType = () => {
    const navigate = useNavigate();

    const containerStyle = {
        maxWidth: '70vh',
        maxHeight: '100vh',
        margin: '0 auto',
        backgroundColor: '#f7f3f0',
    };

    const eventBoxStyle = {
        padding: '10px', 
        textAlign: 'left',
        backgroundColor: '#f7cdfa'
    }

    return (
        <div style={containerStyle}>
            <div style={{backgroundColor: '#f7cdfa',
                            width: '100%',
                            display: 'flex', // Use flexbox for alignment
                            flexDirection: 'column', // Stack children vertically
                            alignItems: 'center', // Center children horizontally
                            justifyContent: 'center', }}>
                    <div style={{ height: '10px' }}></div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%'}}>
                        <button className="back-button" onClick={() => navigate('/eventslanding')}>
                            &larr;
                        </button>
                        <span className="header-status-coffee">Coffee</span>
                    </div>
                    <div style={{ height: '10px' }}></div>
                </div>
            <header className="App-header">
                <div className="App-body">
                    <div className="event-box" onClick={() => navigate('/meetup/coffee/coffee-1')} style= {eventBoxStyle}>
                        <img src={katie_map} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title">Cute coffee study sesh :)</h2>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="avatar-small">
                                        <img className="profile" src={katieL} alt="Event location map" />
                                    </div>
                                    <p className="event-organizer">Katie L.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <button className="learn-more">Learn More</button>
                                <div className="participation-box">2/4</div>
                            </div>
                        </div>
                    </div> 
                    <div style={{ height: '10px' }}></div>
                    <div className="event-box" onClick={() => navigate('/meetup/coffee/coffee-2')} style={eventBoxStyle}>
                        <img src={coffee2} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title">Manhattan-view Coffee run!</h2>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="avatar-small">
                                        <img className="profile" src={lizA} alt="Event location map" />
                                    </div>
                                    <p className="event-organizer">Liz A.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <button className="learn-more" onClick={() => navigate('/meetup/coffee/coffee-2')}>
                                    Learn More
                                </button>
                                <div className="participation-box">3/5</div>
                            </div>
                        </div>
                    </div> 
                    <div style={{ height: '10px' }}></div>
                    <div className="event-box" onClick={() => navigate('/meetup/coffee/coffee-3')} style= {eventBoxStyle}>
                        <img src={coffee3} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title">Check out this new coffee shop!</h2>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="avatar-small">
                                        <img className="profile" src={ashleyT} alt="Event location map" />
                                    </div>
                                    <p className="event-organizer">Ashley T.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <button className="learn-more">Learn More</button>
                                <div className="participation-box">6/10</div>
                            </div>
                        </div>
                    </div> 
                    <div style={{ height: '10px' }}></div>
                    <div className="event-box" onClick={() => navigate('/meetup/coffee/coffee-4')} style= {eventBoxStyle}>
                        <img src={coffee4} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title">Sunny day! Care for a coffee date?</h2>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="avatar-small">
                                        <img className="profile" src={sebinL} alt="Event location map" />
                                    </div>
                                    <p className="event-organizer">Sebin L.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <button className="learn-more">Learn More</button>
                                <div className="participation-box">0/1</div>
                            </div>
                        </div>
                    </div> 
                    <div style={{ height: '10px' }}></div>
                </div>
                <div className="nav-bar" style={{position: 'fixed', bottom:'0vh', width:'100%'}}>
                    <button className="nav-icon-button" onClick={() => navigate('/hostEvent')}>
                        <img src={star} style={{ height: '25px' }} alt="star" />
                    </button>
                    <button className="nav-icon-button" onClick={() => {/*TODO: Meetup page*/}}>
                        <div className="nav-button">
                            <img src={globe} style={{ height: '25px' }} alt="globe" />
                            <span>Meet</span>
                        </div>
                    </button>
                    <button className="nav-icon-button" onClick={() => navigate('/events')}>
                        <img src={calendar} style={{ height: '25px' }} alt="calendar" />
                    </button>
                    <button className="nav-icon-button" onClick={() => navigate('/userprofile')}>
                        <img src={person} style={{ height: '25px' }} alt="person" />
                    </button>
                </div>
            </header>
        </div> 
    );
}

export default CoffeeType;