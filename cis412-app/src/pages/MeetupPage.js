
import 'bootstrap/dist/css/bootstrap.css';
import './Landing.css';
import marker from './images/marker-pin-01.png';



const MeetupPage = () => {
  const containerStyle = {
    maxWidth: '375px', /* iPhone width */
    maxHeight: '812px',
    margin: '0 auto', /* Center the content horizontally */
    backgroundColor: '#f7f3f0', /* Optional: Set a background color */
  };
// let s = () => {border: '1px solid rgba(0, 0, 0, 0)', borderRadius: '15px', padding: '10px'}

  return (
    <div style={containerStyle}>
      <header className="App-header">
      <div style={{ height: '20px' }}></div> {/* Empty vertical box */}
      <span className="header-status">Meet up!</span>
      <div style={{ height: '20px' }}></div> {/* Empty vertical box */}
      <div className="outline-box" style= {{border: '2px solid black', padding: '10px'}}>
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

      <div className = "outline-box">
        <div className ="card" style={{ backgroundColor: '#1f47cd'}}> Food </div> 
        <div style={{ width: '5px' }}></div> 
        <div className ="card" style={{ backgroundColor: '#fec37d', color: 'black'}}> Shop </div>
      </div>

      <div className = "outline-box">
        <div className ="card" style={{ backgroundColor: '#fe755a'}}> Thrift </div>
        <div style={{ width: '5px' }}></div> 
        <div className ="card" style={{ backgroundColor: '#4c8d7d'}}> Night Life </div>
      </div>
      
      <div className = "outline-box">
        <div className ="card" style={{ backgroundColor: '#f7cdfa', color: 'black'}}> Coffee </div>
        <div style={{ width: '5px' }}></div> 
        <div className ="card" style={{ backgroundColor: '#0D2D48'}}> Tour </div>
      </div>
      
      <div style={{ height: '20px' }}></div> {/* Empty vertical box */}

      <div className="outline-box" style= {{border: '1px solid black', width: '75px', borderRadius: '25px'}}>
        <div style={{ fontSize: '13px', textAlign: 'center'}}> See more </div>
      </div>

      <div style={{ height: '80px' }}></div> {/* Empty vertical box */}

        
      </header>

    </div>
  );
}

export default MeetupPage;
