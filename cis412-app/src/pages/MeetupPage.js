
import 'bootstrap/dist/css/bootstrap.css';
import './Landing.css';
import marker from './images/marker-pin-01.png';


const MeetupPage = () => {
  const containerStyle = {
    maxWidth: '375px', /* iPhone width */
    margin: '0 auto', /* Center the content horizontally */
    backgroundColor: '#f7f3f0', /* Optional: Set a background color */
  };

  return (
    <div style={containerStyle}>
      <header className="App-header">

      <div style={{ height: '20px' }}></div> {/* Empty vertical box */}
      <span className="header-status">Meet up!</span>
      <div style={{ height: '20px' }}></div> {/* Empty vertical box */}
      <div className="outline-box">
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

      <div className ="card" style={{ backgroundColor: '#1f47cd'}}> Food </div> 
      <div className ="card" style={{ backgroundColor: '#fec37d', color: 'black'}}> Shop </div>
      <div className ="card" style={{ backgroundColor: '#fe755a'}}> Thrift </div>
      <div className ="card" style={{ backgroundColor: '#4c8d7d'}}> Night Life </div>
      <div className ="card" style={{ backgroundColor: '#f7cdfa', color: 'black'}}> Coffee </div>
      <div className ="card" style={{ backgroundColor: '#0D2D48'}}> Tour </div>
      
      
      <div style={{ height: '140px' }}></div> {/* Empty vertical box */}

        
      </header>

    </div>
  );
}

export default MeetupPage;
