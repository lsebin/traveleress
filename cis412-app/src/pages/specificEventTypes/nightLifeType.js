import 'bootstrap/dist/css/bootstrap.css';
import './specificEventType.css';
import '../Landing.css'
import star from '../../icons/add.svg';
import globe from '../../icons/earth.svg';
import calendar from '../../icons/calendar.svg';
import person from '../../icons/user-circle.svg';
import { useNavigate } from 'react-router-dom';
import lizA from '../../images/lizA.jpeg';
import ashleyT from '../../images/ashleyT.jpg';
import sebinL from '../../images/sebinL.jpg';
import katieL from '../../images/katieL.jpg';
import nightlife1 from '../../images/nightlife1.png';
import nightlife2 from '../../images/nightlife2.png';
import nightlife3 from '../../images/nightlife3.png';
import nightlife4 from '../../images/nightlife4.png';

const NightLifeType = () => {
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

                </div>
            <header className="App-header">
                <div className="App-body">
                    <div style={{ height: '30px' }}></div>
                    <div className="event-box" onClick={() => navigate('/meetup/night-life/night-life-1')} style= {eventBoxStyle}>
                        <img src={nightlife1} className="map-style" alt="katie_map" />
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
                        <img src={nightlife2} className="map-style" alt="katie_map" />
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
                        <img src={nightlife3} className="map-style" alt="katie_map" />
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
                        <img src={nightlife4} className="map-style" alt="katie_map" />
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

export default NightLifeType;