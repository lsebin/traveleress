
import 'bootstrap/dist/css/bootstrap.css';
import './Landing.css';


const MeetupPage = () => {
  const containerStyle = {
    maxWidth: '375px', /* iPhone width */
    margin: '0 auto', /* Center the content horizontally */
    backgroundColor: '#f7f3f0', /* Optional: Set a background color */
  };

  return (
    <div style={containerStyle}>
      <header className="App-header">


      <div style={{ height: '40px' }}></div> {/* Empty vertical box */}

      <div className="inner-container">
        <span className="text-left">Welcome to</span>
        <div style={{ height: '1px' }}></div> {/* Empty vertical box */}
        <span className="text-right">traveleress</span>
      </div>
    


      <div style={{ height: '90px' }}></div> {/* Empty vertical box */}
      <div className="button">Let's explore </div> 
      <div style={{ height: '25px' }}></div> {/* Empty vertical box */}
      <p style={{ fontSize: '15px' }}> or </p>
      <div style={{ height: '20px' }}></div> {/* Empty vertical box */}
      <div className="button">Meet up! </div> 
      <div style={{ height: '140px' }}></div> {/* Empty vertical box */}

        
      </header>

    </div>
  );
}

export default MeetupPage;
