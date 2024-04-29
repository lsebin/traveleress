import 'bootstrap/dist/css/bootstrap.css';
import './specificEventType.css';
import '../Landing.css'
import food1 from '../../images/food1.png';
import food2 from '../../images/food2.png';
import food3 from '../../images/food3.png';
import food4 from '../../images/food4.png';
import star from '../../icons/add.svg';
import globe from '../../icons/earth.svg';
import calendar from '../../icons/calendar.svg';
import person from '../../icons/user-circle.svg';
import { useNavigate } from 'react-router-dom';
import lizA from '../../images/lizA.jpeg';
import ashleyT from '../../images/ashleyT.jpg';
import sebinL from '../../images/sebinL.jpg';
import katieL from '../../images/katieL.jpg';

const FoodType = () => {
    const navigate = useNavigate();

    const containerStyle = {
        maxWidth: '70vh',
        maxHeight: '100vh',
        margin: '0 auto',
        backgroundColor: '#fe755a',
    };

    const eventBoxStyle = {
        padding: '10px', 
        textAlign: 'left',
        backgroundColor: '#fe755a'
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
            <div style={{backgroundColor: '#fe755a',
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
                </div>
            <header className="App-header">
                <div className="App-body">
                    <div className="event-box" style= {eventBoxStyle}>
                        <img src={food1} onClick={() => navigate('/meetup/food/food-1')} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title" style={textColorWhiteStyle}>K-Town boba run!</h2>
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
                                <div className="participation-box" style={borderAndTextWhiteStyle}>1/2</div>
                            </div>
                        </div>
                    </div> 
                    <div style={{ height: '10px' }}></div>
                    <div className="event-box" onClick={() => navigate('/meetup/food/food-2')} style= {eventBoxStyle}>
                        <img src={food2} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title" style={textColorWhiteStyle}>Creative Thai: Mitr Thai</h2>
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
                                <button className="learn-more">
                                    Learn More
                                </button>
                                <div className="participation-box" style={borderAndTextWhiteStyle}>1/3</div>
                            </div>
                        </div>
                    </div> 
                    <div style={{ height: '10px' }}></div>
                    <div className="event-box" onClick={() => navigate('/meetup/food/food-3')} style= {eventBoxStyle}>
                        <img src={food3} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title" style={textColorWhiteStyle}>Spicy ramen contest!</h2>
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
                                <div className="participation-box" style={borderAndTextWhiteStyle}>2/10</div>
                            </div>
                        </div>
                    </div> 
                    <div style={{ height: '10px' }}></div>
                    <div className="event-box" onClick={() => navigate('/meetup/food/food-4')} style= {eventBoxStyle}>
                        <img src={food4} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title" style={textColorWhiteStyle}>Jamaican food in Queens?</h2>
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
                                <div className="participation-box" style={borderAndTextWhiteStyle}>3/4</div>
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

export default FoodType;