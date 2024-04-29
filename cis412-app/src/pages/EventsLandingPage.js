
import 'bootstrap/dist/css/bootstrap.css';
import './Landing.css';
import '../styles/events.css';
import marker from './images/marker-pin-01.png';
import star from './images/add.png';
import globe from './images/globe-05.png';
import calendar from './images/Vector.png';
import person from './images/Icon.png';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

  

const EventsLandingPage = () => {
  const navigate = useNavigate();

  const containerStyle = {
    maxWidth: '50vh', /*'375px'*/
    maxHeight: '100vh',
    // maxWidth: '375px', /* iPhone width */
    // maxHeight: '812px', /* iPhone height */
    margin: '0 auto', /* Center the content horizontally */
    backgroundColor: '#f7f3f0', /* Optional: Set a background color */
    position: 'static'
  };

  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = 'hidden';
    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);

  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (event) => {
    if (event.target.value !== 'option2') {
      setSelectedOption(event.target.value);
    }
  };
 
  return (
    <div style={containerStyle}>
      <header className="App-header">
      <div className="header-status"> Meet up!</div>
      <div className="App-body" style={{textAlign: 'center'}}>
      <div className="landing-outline-box" style= {{border: '2px solid black', padding: '10px'}}>
        <img src={marker} style={{ height: '25px'}} alt="marker" />
        <div style={{ width: '2vh' }}></div>
        <div>  
          <div style={{ fontSize: '18px', textAlign: 'left' }}>
            <label htmlFor="dropdown"></label>
            <select id="dropdown" value={selectedOption} onChange={handleSelectChange} className="custom-dropdown">
              <option value="">Philadelphia, PA</option>
              <option value="option1">Brooklyn, NY</option>
              <option value="option2">More cities to be added..</option>
            </select>
          </div>
          {/* <div style={{ fontSize: '18px', textAlign: 'left' }}> Philadelphia, PA </div> */}
          <div style={{ fontSize: '12px', textAlign: 'left', fontWeight:'300' }}> within 5km </div>
        </div>
      </div> 

      <div style={{ height: '20px' }}></div> {/* Empty vertical box */}
      <div style={{ fontSize: '14px', textAlign: 'left', fontWeight:'500', marginRight: '130px'}}> Recommended for you </div>
      <div style={{ height: '20px' }}></div> {/* Empty vertical box */}

      <div className = "landing-outline-box">
        <button className ="s-card" style={{ backgroundColor: '#1f47cd', width: '300px'}}> Safe Travel </button> 
      </div>

      <div className = "landing-outline-box">
        <button className ="s-card" style={{ backgroundColor: '#fe755a'}}> Food </button>
        <div style={{ width: '20px' }}></div> {/* Empty vertical box */}
        <button className ="s-card" style={{ backgroundColor: '#f7cdfa', color: 'black'}} onClick={() => navigate('/mapPage')}> Coffee </button> 
        
      </div>
      
      <div className = "landing-outline-box">
       <button className ="s-card" style={{ backgroundColor: '#fec37d', color: 'black'}}> Thrift </button>
        <div style={{ width: '20px' }}></div> {/* Empty vertical box */}
        <button className ="s-card" style={{ backgroundColor: '#4c8d7d'}}> Shopping </button>
      </div>
      
      <div style={{ height: '45vh' }}></div> {/* Empty vertical box */}
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
          <button className="nav-icon-button" onClick={() => navigate('/profile')}>
              <img src={person} style={{ height: '25px' }} alt="person" />
          </button>
      </div>
      
    

    </header>
    </div>
  );
}

export default EventsLandingPage;
