import 'bootstrap/dist/css/bootstrap.css';
import './specificEventType.css';
import katie_map from '../../images/katie_map.png';
import user_circle from '../../icons/user-circle.svg';
import star from '../../icons/star.svg';
import globe from '../../icons/earth.svg';
import calendar from '../../icons/calendar.svg';
import person from '../../icons/user-circle.svg';
import { useNavigate } from 'react-router-dom';

const FoodType = () => {
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
        backgroundColor: '#1f47cd'
    }

    const textColorWhiteStyle = {
        color: 'white'
    }

    const borderAndTextWhiteStyle = {
        border: '1px solid white',
        color: 'white'
    }

    const fillWhiteStyle = {
        filter: 'invert(100%)',
    }

    return (
        <div style={containerStyle}>
            <header className="App-header">
                <div style={{backgroundColor: '#1f47cd',
                            width: '100%',
                            display: 'flex', // Use flexbox for alignment
                            flexDirection: 'column', // Stack children vertically
                            alignItems: 'center', // Center children horizontally
                            justifyContent: 'center', }}>
                    <div style={{ height: '10px' }}></div>
                    <div style={{ display: 'flex', alignItems: 'center', width: '100%'}}>
                        <button className="back-button" style={textColorWhiteStyle} onClick={() => navigate('/eventslanding')}>
                            &larr;
                        </button>
                        <span className="header-status-coffee" style={textColorWhiteStyle}>Food</span>
                    </div>
                    <div style={{ height: '10px' }}></div>
                    <div className="line"></div>
                </div>
                <div className="App-body">
                    <div style={{ height: '30px' }}></div>
                    <div className="event-box" style= {eventBoxStyle}>
                        <img src={katie_map} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title" style={textColorWhiteStyle}>K-Town boba run!</h2>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={user_circle} style={fillWhiteStyle} alt="user_profile_pic" />
                                    <p className="event-organizer" style={textColorWhiteStyle}>Sebin L.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <button className="learn-more">Learn More</button>
                                <div className="participation-box" style={borderAndTextWhiteStyle}>1/2</div>
                            </div>
                        </div>
                    </div> 
                    <div style={{ height: '10px' }}></div>
                    <div className="event-box" style= {eventBoxStyle}>
                        <img src={katie_map} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title" style={textColorWhiteStyle}>Creative Thai: Mitr Thai</h2>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={user_circle} style={fillWhiteStyle} alt="user_profile_pic" />
                                    <p className="event-organizer" style={textColorWhiteStyle}>Katie L.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <button className="learn-more" onClick={() => navigate('/meetup/coffee/manhattan-coffee-run')}>
                                    Learn More
                                </button>
                                <div className="participation-box" style={borderAndTextWhiteStyle}>1/3</div>
                            </div>
                        </div>
                    </div> 
                    <div style={{ height: '10px' }}></div>
                    <div className="event-box" style= {eventBoxStyle}>
                        <img src={katie_map} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title" style={textColorWhiteStyle}>Spicy ramen contest!</h2>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={user_circle} style={fillWhiteStyle} alt="user_profile_pic" />
                                    <p className="event-organizer" style={textColorWhiteStyle}>Ashley T.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <button className="learn-more">Learn More</button>
                                <div className="participation-box" style={borderAndTextWhiteStyle}>2/10</div>
                            </div>
                        </div>
                    </div> 
                    <div style={{ height: '10px' }}></div>
                    <div className="event-box" style= {eventBoxStyle}>
                        <img src={katie_map} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title" style={textColorWhiteStyle}>Jamaican food in Queens?</h2>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={user_circle} style={fillWhiteStyle} alt="user_profile_pic" />
                                    <p className="event-organizer" style={textColorWhiteStyle}>Liz A.</p>
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
                        <button className="nav-icon-button" onClick={() => navigate('/profile')}>
                            <img src={person} style={{ height: '25px' }} alt="person" />
                        </button>
                    </div>
                </div>
            </header>
        </div> 
    );
}

export default FoodType;