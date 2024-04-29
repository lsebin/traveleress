import 'bootstrap/dist/css/bootstrap.css';
import './specificEventType.css';
import katie_map from '../../images/katie_map.png';
import star from '../../icons/star.svg';
import globe from '../../icons/earth.svg';
import calendar from '../../icons/calendar.svg';
import person from '../../icons/user-circle.svg';
import { useNavigate } from 'react-router-dom';
import lizA from '../../images/lizA.jpeg';
import ashleyT from '../../images/ashleyT.jpg';
import sebinL from '../../images/sebinL.jpg';
import katieL from '../../images/katieL.jpg';

const NightLifeType = () => {
    const navigate = useNavigate();

    const containerStyle = {
        maxWidth: '375px',
        maxHeight: '812px',
        margin: '0 auto',
        backgroundColor: '#f7f3f0',
    };

    const eventBoxStyle = {
        padding: '10px', 
        textAlign: 'left',
        backgroundColor: '#4c8d7d'
    }

    const textColorWhiteStyle = {
        color: 'white'
    }

    const borderAndTextWhiteStyle = {
        border: '1px solid white',
        color: 'white'
    }

    return (
        <div style={containerStyle}>
            <header className="App-header">
                <div style={{backgroundColor: '#4c8d7d',
                            width: '100%',
                            display: 'flex', // Use flexbox for alignment
                            flexDirection: 'column', // Stack children vertically
                            alignItems: 'center', // Center children horizontally
                            justifyContent: 'center', }}>
                    <div style={{ height: '10px' }}></div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%'}}>
                        <button className="back-button" style={textColorWhiteStyle} onClick={() => {navigate('/eventslanding')}}>
                            &larr;
                        </button>
                        <span className="header-status-coffee" style={textColorWhiteStyle}>Night Life</span>
                    </div>
                    <div style={{ height: '10px' }}></div>
                    <div className="line"></div>
                </div>
                <div className="App-body">
                    <div style={{ height: '30px' }}></div>
                    <div className="event-box" onClick={() => navigate('/meetup/night-life/night-life-1')} style= {eventBoxStyle}>
                        <img src={katie_map} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title" style={textColorWhiteStyle}>Break bar anyone??</h2>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="avatar-small">
                                        <img className="profile" src={ashleyT} alt="Event location map" />
                                    </div>
                                    <p className="event-organizer" style={textColorWhiteStyle}>Ashley T.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <button className="learn-more">Learn More</button>
                                <div className="participation-box" style={borderAndTextWhiteStyle}>3/4</div>
                            </div>
                        </div>
                    </div> 
                    <div style={{ height: '10px' }}></div>
                    <div className="event-box" style= {eventBoxStyle}  onClick={() => navigate('/meetup/night-life/night-life-2')}>
                        <img src={katie_map} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title" style={textColorWhiteStyle}>Rooftop bar near Flatiron building</h2>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="avatar-small">
                                        <img className="profile" src={katieL} alt="Event location map" />
                                    </div>
                                    <p className="event-organizer" style={textColorWhiteStyle}>Katie L.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <button className="learn-more" onClick={() => navigate('/meetup/night-life/night-life-2')}>
                                    Learn More
                                </button>
                                <div className="participation-box" style={borderAndTextWhiteStyle}>1/3</div>
                            </div>
                        </div>
                    </div> 
                    <div style={{ height: '10px' }}></div>
                    <div className="event-box" onClick={() => navigate('/meetup/night-life/night-life-3')} style= {eventBoxStyle}>
                        <img src={katie_map} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title" style={textColorWhiteStyle}>Best bar for sporting events!</h2>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="avatar-small">
                                        <img className="profile" src={sebinL} alt="Event location map" />
                                    </div>
                                    <p className="event-organizer" style={textColorWhiteStyle}>Sebin L.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <button className="learn-more">Learn More</button>
                                <div className="participation-box" style={borderAndTextWhiteStyle}>7/15</div>
                            </div>
                        </div>
                    </div> 
                    <div style={{ height: '10px' }}></div>
                    <div className="event-box" onClick={() => navigate('/meetup/night-life/night-life-4')} style= {eventBoxStyle}>
                        <img src={katie_map} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title" style={textColorWhiteStyle}>Club with best hispanic music</h2>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div className="avatar-small">
                                        <img className="profile" src={lizA} alt="Event location map" />
                                    </div>
                                    <p className="event-organizer" style={textColorWhiteStyle}>Liz A.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <button className="learn-more">Learn More</button>
                                <div className="participation-box" style={borderAndTextWhiteStyle}>9/15</div>
                            </div>
                        </div>
                    </div> 
                    <div style={{ height: '10px' }}></div>
                    <div className="nav-bar">
                        <button className="nav-icon-button">
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
            </header>
        </div> 
    );
}

export default NightLifeType;