
import 'bootstrap/dist/css/bootstrap.css';
import './Landing.css';
import marker from './images/marker-pin-01.png';
import star from './images/star-06.png';
import globe from './images/globe-05.png';
import calendar from './images/Vector.png';
import person from './images/Icon.png';
import { useNavigate } from 'react-router-dom';

  

const EventsLandingPage = () => {
  const navigate = useNavigate();

  const containerStyle = {
    maxWidth: '375px', /* iPhone width */
    maxHeight: '812px', /* iPhone height */
    margin: '0 auto', /* Center the content horizontally */
    backgroundColor: '#f7f3f0', /* Optional: Set a background color */
  };
 

  return (
    <div style={containerStyle}>
      <header className="App-header">
      <span className="header-status" style={{position: 'fixed', top:'10px'}}>Meet up!</span>
      <div style={{ height: '10px' }}></div> {/* Empty vertical box */}
      <div className="landing-outline-box" style= {{border: '2px solid black', padding: '10px'}}>
        <img src={marker} style={{ height: '25px' }} alt="marker" />
        <div style={{ width: '10px' }}></div>
        <div>  
          <div style={{ fontSize: '18px', textAlign: 'left' }}> Brooklyn, New York </div>
          <div style={{ fontSize: '12px', textAlign: 'left', fontWeight:'300' }}> within 5km </div>
        </div>
      </div> 

      <div style={{ height: '20px' }}></div> {/* Empty vertical box */}
      <div style={{ fontSize: '14px', textAlign: 'left', fontWeight:'500', marginRight: '130px'}}> Recommended for you </div>
      <div style={{ height: '20px' }}></div> {/* Empty vertical box */}

      <div className = "landing-outline-box">
        <button className ="s-card" style={{ backgroundColor: '#1f47cd'}}> Food </button> 
        <div style={{ width: '20px' }}></div> {/* Empty vertical box */}
        <button className ="s-card" style={{ backgroundColor: '#fec37d', color: 'black'}}> Shop </button>
      </div>

      <div className = "landing-outline-box">
        <button className ="s-card" style={{ backgroundColor: '#fe755a'}}> Thrift </button>
        <div style={{ width: '20px' }}></div> {/* Empty vertical box */}
        <button className ="s-card" style={{ backgroundColor: '#4c8d7d'}}> Night Life </button>
      </div>
      
      <div className = "landing-outline-box">
        <button className ="s-card" style={{ backgroundColor: '#f7cdfa', color: 'black'}} onClick={() => navigate('/specificEventType')}> Coffee </button> 
        <div style={{ width: '20px' }}></div> {/* Empty vertical box */}
        <button className ="s-card" style={{ backgroundColor: '#0D2D48'}}> Tour </button>
      </div>
      
      <div style={{ height: '20px' }}></div> {/* Empty vertical box */}

      <div className="landing-outline-box" style= {{border: '1px solid black', width: '75px', borderRadius: '25px'}}>
      <div style={{ fontSize: '13px', textAlign: 'center'}}> See more </div>
      </div>

      <div style={{ height: '50px' }}></div> {/* Empty vertical box */}

      <div className="nav-bar">
          <button className="nav-icon-button">
              <img src={star} style={{ height: '25px' }} alt="star" />
          </button>
          <button className="nav-icon-button" onClick={() => {/*TODO: Meetup page*/}}>
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
    
      </header>

    </div>
  );
}

export default EventsLandingPage;
