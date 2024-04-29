
import 'bootstrap/dist/css/bootstrap.css';
import './Landing.css';
import logo from './images/Frame.png';
import spark from './images/Burst-pucker-1.png';
import redSymbol from './images/Burst-Bloat.png';
import spiral from './images/LooperGroup.png';
import pt from './images/Topology-2.png';
import rt from './images/Topology-1.png';
import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';

const LandingPage = () => {
  const containerStyle = {
    maxWidth: '50vh', /*'375px'*/
    maxHeight: '100vh',
    margin: '0 auto',
    backgroundColor: '#f7f3f0', /* Optional: Set a background color */
  };

  useEffect(() => {
    // Disable scrolling when the component mounts
    document.body.style.overflow = 'hidden';
    // Re-enable scrolling when the component unmounts
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, []);
  return (
    <div style={containerStyle}>
      <header className="App-header">
      <div style={{  top: '-5vh', left: '15vh' }} className="background-image"> <img src={spiral} alt="spiral" /> </div>
      <div style={{  top: '5vh', left: '0vh' }} className="background-image"><img src={logo} style={{ height: '70px' }} alt="Logo" /> </div>
      <div style={{ height: '1vh' }}></div> {/* Empty vertical box */}
      <div style={{  top: '24vh', left: '-15vh' }} className="background-image"> <img src={spark} style={{ height: '70px' }} alt="spark" /> </div>
      <div className="inner-container">
        <span className="text-left">Welcome to</span>
        <div style={{ height: '1vh' }}></div> {/* Empty vertical box */}
        <span className="text-right">traveleress</span>
      </div>
      
      <div style={{  top: '75vh', left: '-10vh'}} className="background-image"> <img src={redSymbol} alt="redSymbol" /> </div>
      <div style={{  top: '35vh', left: '-8vh'}} className="background-image"> <img src={rt} alt="rt" /> </div>


      <div style={{ height: '11vh' }}></div> {/* Empty vertical box */}
      <Link to="/hostEvent"><div className="button">Host your own event!  </div> </Link>
      <div style={{ height: '5vh' }}></div> {/* Empty vertical box */}
      <p style={{ fontSize: '2vh' }}> or </p> {/* 2vh = 15px */}
      <div style={{ height: '4vh' }}></div> {/* Empty vertical box */}
      <Link to="/eventslanding"><div className="button">Explore meet-ups!  </div> </Link>
      <div style={{ height: '15vh' }}></div> {/* Empty vertical box */}

      <div style={{  top: '50vh', left: '19vh'}} className="background-image"> <img src={pt} style={{ height: '360px' }} alt="pt" /> </div>
      </header>

    </div>
  );
}

export default LandingPage;
