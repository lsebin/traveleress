import 'bootstrap/dist/css/bootstrap.css';
import './Landing.css';
import star from './images/star-06.png';
import globe from './images/globe-05.png';
import calendar from './images/Vector.png';
import person from './images/Icon.png';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import Datepicker CSS
 
const Home = () => {
    const navigate = useNavigate();
    const containerStyle = {
        maxWidth: '50vh', /*'375px'*/
        maxHeight: '100vh',
        margin: '0 auto', /* Center the content horizontally */
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

      const [selectedDate, setSelectedDate] = useState(null);
      const [inputValue, setInputValue] = useState('');

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };
    return (
    <div style={containerStyle}>
        <header className="App-header">
        <div className="header-status" style={{position: 'fixed', top:'3vh'}}>Host Event!</div>

        <div className="App-body">
        <div style={{ fontSize: '20px', textAlign: 'left', fontWeight:'500', marginRight: '25vh'}}> Title </div>
        <div>
        <label htmlFor="text-input"></label>
        <input 
            type="text" 
            id="text-input" 
            value={inputValue} 
            onChange={handleInputChange} 
            placeholder="Type here..." 
            className="custom-host-box"
        />
        </div>
        <div style={{ height: '20px' }}></div> {/* Empty vertical box */}
        <div style={{ fontSize: '20px', textAlign: 'left', fontWeight:'500', marginRight: '25vh'}}> Date </div>
        <div>
        <label htmlFor="datepicker"></label>
        <DatePicker
            id="datepicker"
            selected={selectedDate}
            onChange={handleDateChange}
            dateFormat="yyyy/MM/dd" // Customize date format if needed
            placeholderText="Select a date"
            className="custom-host-box"
            minDate={new Date()}
        />
        {/* <p>Selected date: {selectedDate ? selectedDate.toLocaleDateString() : 'None'}</p> */}
        </div>
        <div style={{ height: '20px' }}></div> {/* Empty vertical box */}
        <div style={{ fontSize: '20px', textAlign: 'left', fontWeight:'500', marginRight: '150px'}}> Location</div>
        <div style={{ height: '20px' }}></div> {/* Empty vertical box */}
        <div style={{ fontSize: '20px', textAlign: 'left', fontWeight:'500', marginRight: '150px'}}>Capacity </div>
        <div>
        <label htmlFor="text-input"></label>
        <input 
            type="text" 
            id="text-input" 
            placeholder="Max 20" 
            className="custom-cap-box" 
        />
        </div>
        <div style={{ height: '20px' }}></div> {/* Empty vertical box */}
        <div style={{ fontSize: '20px', textAlign: 'left', fontWeight:'500', marginRight: '150px'}}> Details </div>
        <div>
        <label htmlFor="text-input"></label>
        <input 
            type="text" 
            id="text-input" 
            placeholder="Provide Event Details" 
            style={{ height: '100px' }} 
            className="custom-host-box"
        />
        </div>
        <div style={{ height: '25vh' }}></div> {/* Empty vertical box */}

        </div>



        <div className="nav-bar" style={{position: 'fixed', bottom:'0vh', width:'100%'}}>
          <button className="nav-icon-button">
          <div className="nav-button">
                  <img src={star} style={{ height: '25px' }} alt="star" />
                  <span>Host</span>
              </div>
          </button>
          <button className="nav-icon-button" onClick={() => navigate('/eventslanding')}>
              <img src={globe} style={{ height: '25px' }} alt="globe" />
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

)};
 
export default Home;