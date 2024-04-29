import 'bootstrap/dist/css/bootstrap.css';
import './specificEventType.css';
import '../Landing.css'
import user_circle from '../../icons/user-circle.svg';
import star from '../../icons/add.svg';
import globe from '../../icons/earth.svg';
import calendar from '../../icons/calendar.svg';
import person from '../../icons/user-circle.svg';
import { useNavigate } from 'react-router-dom';
import thrifting1 from '../../images/thrifting1.png';
import thrifting2 from '../../images/thrifting2.png';
import thrifting3 from '../../images/thrifting3.png';
import thrifting4 from '../../images/thrifting4.png';

const ShopType = () => {
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
        backgroundColor: '#fec37d'
    }

    return (
        <div style={containerStyle}>
            <div style={{backgroundColor: '#fec37d',
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
                        <span className="header-status-coffee">Shop</span>
                    </div>
                    <div style={{ height: '10px' }}></div>
                </div>
            <header className="App-header">
                <div className="App-body">
                    <div className="event-box" onClick={() => navigate('/meetup/shop/shop-1')} style= {eventBoxStyle}>
                        <img src={thrifting1} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title">Thrifting haul around NYC!</h2>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={user_circle} alt="user_profile_pic" />
                                    <p className="event-organizer">Ashley T.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <button className="learn-more">Learn More</button>
                                <div className="participation-box">2/3</div>
                            </div>
                        </div>
                    </div> 
                    <div style={{ height: '10px' }}></div>
                    <div className="event-box" onClick={() => navigate('/meetup/shop/shop-2')} style= {eventBoxStyle}>
                        <img src={thrifting2} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title">Explore 5th Ave with me :D</h2>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={user_circle} alt="user_profile_pic" />
                                    <p className="event-organizer">Sebin L.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <button className="learn-more">
                                    Learn More
                                </button>
                                <div className="participation-box">1/4</div>
                            </div>
                        </div>
                    </div> 
                    <div style={{ height: '10px' }}></div>
                    <div className="event-box" onClick={() => navigate('/meetup/shop/shop-3')} style= {eventBoxStyle}>
                        <img src={thrifting3} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title">Check out my fav record shop</h2>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={user_circle} alt="user_profile_pic" />
                                    <p className="event-organizer">Liz A.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <button className="learn-more">Learn More</button>
                                <div className="participation-box">7/20</div>
                            </div>
                        </div>
                    </div> 
                    <div style={{ height: '10px' }}></div>
                    <div className="event-box" onClick={() => navigate('/meetup/shop/shop-4')} style= {eventBoxStyle}>
                        <img src={thrifting4} className="map-style" alt="katie_map" />
                        <div className="event-info">
                            <h2 className="event-title">Time Square Nike Bulk Shop</h2>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <img src={user_circle} alt="user_profile_pic" />
                                    <p className="event-organizer">Katie L.</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', 
                                          justifyContent: 'space-between', marginTop: '-2px' }}>
                                <button className="learn-more">Learn More</button>
                                <div className="participation-box">6/15</div>
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

export default ShopType;