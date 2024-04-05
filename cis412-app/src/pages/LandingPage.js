
import 'bootstrap/dist/css/bootstrap.css';
import './Landing.css';
import logo from './images/Frame.png';
import spark from './images/Burst-pucker-1.png';
import redSymbol from './images/Burst-Bloat.png';
import spiral from './images/LooperGroup.png';
import pt from './images/Topology-2.png';
import rt from './images/Topology-1.png';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  const containerStyle = {
    maxWidth: '375px', /* iPhone width */
    maxHeight: '812px',
    margin: '0 auto', /* Center the content horizontally */
    backgroundColor: '#f7f3f0', /* Optional: Set a background color */
  };
  return (
    <div style={containerStyle}>
      <header className="App-header">
      <div style={{  top: '0px', left: '92px' }} className="background-image"> <img src={spiral} alt="spiral" /> </div>
      <div style={{  top: '40px', left: '0px' }} className="background-image"><img src={logo} style={{ height: '70px' }} alt="Logo" /> </div>
      <div style={{ height: '40px' }}></div> {/* Empty vertical box */}
      <div style={{  top: '150px', left: '-120px' }} className="background-image"> <img src={spark} style={{ height: '70px' }} alt="spark" /> </div>
      <div className="inner-container">
        <span className="text-left">Welcome to</span>
        <div style={{ height: '1px' }}></div> {/* Empty vertical box */}
        <span className="text-right">traveleress</span>
      </div>
      
      <div style={{  top: '550px', left: '-110px'}} className="background-image"> <img src={redSymbol} alt="redSymbol" /> </div>
      <div style={{  top: '220px', left: '-80px'}} className="background-image"> <img src={rt} style={{ height: '190px' }} alt="rt" /> </div>


      <div style={{ height: '90px' }}></div> {/* Empty vertical box */}
      <div className="button">Let's explore </div> 
      <div style={{ height: '25px' }}></div> {/* Empty vertical box */}
      <p style={{ fontSize: '15px' }}> or </p>
      <div style={{ height: '20px' }}></div> {/* Empty vertical box */}
      <Link to="/meetup"><div className="button">Meet up!  </div> </Link>
      <div style={{ height: '140px' }}></div> {/* Empty vertical box */}

      <div style={{  top: '330px', left: '75px'}} className="background-image"> <img src={pt} style={{ height: '360px' }} alt="pt" /> </div>


      
        
      </header>

    </div>
  );
}

export default LandingPage;
