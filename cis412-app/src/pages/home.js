import 'bootstrap/dist/css/bootstrap.css';
import './Landing.css';
import '../styles/events.css';
import star from './images/add.png';
import globe from './images/globe-05.png';
import calendar from './images/Vector.png';
import person from '../icons/user-circle.svg';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import Dropdown from 'react-dropdown-select';
import moment from 'moment';
import info from '../images/information-button.png';
import 'react-datepicker/dist/react-datepicker.css'; // Import Datepicker CSS



const Home = () => {
    const navigate = useNavigate();
    const containerStyle = {
        maxWidth: '70vh', /*'375px'*/
        maxHeight: '100vh',
        margin: '0 auto', /* Center the content horizontally */
        backgroundColor: '#f7f3f0', /* Optional: Set a background color */
        position: 'static'
      };

    //   useEffect(() => {
    //     // Disable scrolling when the component mounts
    //     document.body.style.overflow = 'hidden';
    //     // Re-enable scrolling when the component unmounts
    //     return () => {
    //       document.body.style.overflow = 'visible';
    //     };
    //   }, []);
    

      const [selectedDate, setSelectedDate] = useState(null);
      const [inputValue, setInputValue] = useState('');
      const [detailValue, setDetailValue] = useState('');
      const [capValue, setCapValue] = useState('');
      const [locValue, setLocValue] = useState('');
      const [showPopup, setShowPopup] = useState(false);
      const [success, setSuccess] = useState(false);

      const [startTime, setStartTime] = useState('09:00');
      const [endTime, setEndTime] = useState('17:00');

      const handleTimeChange = (newStartTime, newEndTime) => {
            setStartTime(newStartTime);
            setEndTime(newEndTime);
      };
    //   const [address, setAddress] = useState('');

    //     const handleSelect = async (value) => {
    //         setAddress(value);
    //         try {
    //         const results = await geocodeByAddress(value);
    //         const latLng = await getLatLng(results[0]);
    //         console.log('Geocode Success:', latLng);
    //         } catch (error) {
    //         console.error('Error:', error);
    //         }
    //     };

            const handleDateChange = (date) => {
                setSelectedDate(date);
            };
            
        const handleInputChange = (event) => {
            setInputValue(event.target.value);
        };

        const handleDetailChange = (event) => {
            setDetailValue(event.target.value);
        };

        const handleCapChange = (event) => {
            setCapValue(event.target.value);
        };

        const handleLocChange = (event) => {
            setLocValue(event.target.value);
        };
        
        const togglePopup = () => {
            setSuccess(inputValue && selectedDate && locValue && capValue && detailValue && selectedOption !== 'default');
            setShowPopup(!showPopup);
        };
        const [selectedOption, setSelectedOption] = useState('');

    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
      
    };

    const [isInfoOpen, setInfoOpen] = useState(false);

  const toggleInfo = () => {
    setInfoOpen(!isInfoOpen); // Toggle the state to open/close the popup
  };

  const [isInfoOpen2, setInfoOpen2] = useState(false);

  const toggleInfo2 = () => {
    setInfoOpen2(!isInfoOpen2); // Toggle the state to open/close the popup
  };

    return (
        
    <div style={containerStyle}>
        <header className="App-header">
        <div className="header-status" >Host Event!</div>
        <div className="App-body" style={{textAlign: 'left'}}>
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
        <div style={{ height: '10px' }}></div> {/* Empty vertical box */}
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
        <div style={{ height: '10px' }}></div> {/* Empty vertical box */}  
        <div>
        <TimePicker startTime={startTime} endTime={endTime} onChange={handleTimeChange} />
        </div>
        </div>
        <div style={{ height: '10px' }}></div> {/* Empty vertical box */}
        <div style={{display:'flex'}}> 
        <div style={{ fontSize: '20px', textAlign: 'left', fontWeight:'500'}}> Location</div>
        <button className="nav-icon-button" onClick={toggleInfo2}>
              <img src={info} style={{ height: '20px' }} alt="info2" />
              {isInfoOpen2 && (
              <div className="popup-container">
                <div className="l-popup">
                <span style={{ display: 'block' }}>Specific address of your event location will only be sent to approved guests through email.</span>
                <div style={{height:'15px'}}> </div>
                <button className="abutton" style={{ width: '50%'}} onClick={toggleInfo2}>Close</button>
                </div>
              </div>
      )}
          </button>
          </div>
        <div>
        <label htmlFor="text-input"></label>
        <input 
            value={locValue} 
            onChange={handleLocChange} 
            type="text" 
            id="text-input" 
            placeholder="Location" 
            className="custom-host-box"
        />
        </div>
        <div style={{ height: '10px' }}></div> {/* Empty vertical box */}
        <div style={{display:'flex'}}> 
        <div style={{ fontSize: '20px', textAlign: 'left', fontWeight:'500'}}> General Meet-up</div>
        <button className="nav-icon-button" onClick={toggleInfo}>
              <img src={info} style={{ height: '20px' }} alt="info" />
              {isInfoOpen && (
              <div className="popup-container">
                <div className="l-popup">
                <span style={{ display: 'block' }}>Please set area where you will meet all the guests.</span>
                <span style={{ display: 'block' }}>This area has to be a public, open space to ensure safety.</span>
                <div style={{height:'15px'}}> </div>
                <button className="abutton" style={{ width: '50%'}} onClick={toggleInfo}>Close</button>
                </div>
              </div>
      )}
          </button>
        </div>
        <div>
        <label htmlFor="dropdown"></label>
            <select id="dropdown" value={selectedOption} onChange={handleSelectChange} className="custom-host-box">
            <option value="default">Please select one</option>
            <option>The Battery</option>
            <option>Bennett Park</option>
             <option>Bryant Park</option>
              <option>Central Park</option>
              <option>Chelsea Water Park</option>
              <option>City Hall Park</option>
              <option>Columbus Park</option>
              <option>Damrosch Park</option>
              <option>DeWitt Clinton Park</option>
              <option>East River Park</option>
              <option>Empire State Building</option>
              <option>Flatiron Building</option>
              <option>Fort Washington Park</option>
              <option>Hell's Kitchen Park</option>
              <option>Herald Square</option>
              <option>High Line</option>
              <option>Hudson River Park</option>
              <option>Jackie Robinson Park</option>
              <option>Liberty Park</option>
              <option>Little Island at Pier 55</option>
              <option>Madison Square</option>
              <option>Manhattan Waterfront</option>
              <option>Millenium Park</option>
              <option>Morningside Park</option>
              <option>Pier 42</option>
              <option>Pier 62 Skateboard Park</option>
              <option>Riverside Park</option>
              <option>Rockfeller Center</option>
              <option>Seward Park</option>
              <option>Stuyvesant Park</option>
              <option>Theodore Roosevelt Park</option>
              <option>Tompkins Square Park</option>
              <option>Union Square</option>
              <option>Washington Market Park</option>
              <option>Washington Square Park</option>
              <option>Zuccotti Park</option>
            </select>
        </div>
        {/* <div>
      <label htmlFor="location-input">Enter a location:</label>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              id="location-input"
              {...getInputProps({ placeholder: 'Enter a location' })}
            />
            <div>
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                const style = {
                  backgroundColor: suggestion.active ? '#e6e6e6' : '#fff'
                };
                return (
                  <div {...getSuggestionItemProps(suggestion, { style })}>
                    {suggestion.description}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    </div> */}
        
        <div style={{ height: '10px' }}></div> {/* Empty vertical box */}
        <div style={{ fontSize: '20px', textAlign: 'left', fontWeight:'500', marginRight: '150px'}}>Capacity </div>
        <div>
        <label htmlFor="text-input"></label>
        <input 
            type="text" 
            id="text-input" 
            value={capValue} 
            onChange={handleCapChange} 
            placeholder="Max 20" 
            className="custom-cap-box" 
        />
        </div>
        <div style={{ height: '10px' }}></div> {/* Empty vertical box */}
        <div style={{ fontSize: '20px', textAlign: 'left', fontWeight:'500', marginRight: '150px'}}> Details </div>
        <div>
        <label htmlFor="text-input"></label>
        <input 
            type="text" 
            id="text-input" 
            value={detailValue} 
            onChange={handleDetailChange} 
            placeholder="Provide Event Details" 
            style={{ height: '100px' }} 
            className="custom-host-box"
        />
        </div>
        <div style={{ height: '1vh' }}></div> {/* Empty vertical box */}
        <div>
        <button className="abutton" 
                style={{ width: '40%', marginLeft: '11vh', borderRadius: '25px'}} 
                onClick={togglePopup}>Host event</button>
        {showPopup && (
            <div className="popup-container">
                <div className={`l-popup ${success ? 'success' : 'error'}`}>
                <span>{success? 'Your event is registered and under review': 'All required fields are not filled out'}</span>
                <div style={{height:'15px'}}> </div>
                <button className="abutton" style={{ width: '50%'}} onClick={togglePopup}>Close</button>
                </div>
            </div>
        )}
        </div>
        <div style={{ height: '35vh' }}></div> {/* Empty vertical box */}       

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
          <button className="nav-icon-button" onClick={() => navigate('/userprofile')}>
              <img src={person} style={{ height: '25px' }} alt="person" />
          </button>
      </div>

    
      </header>
    </div>

)};

function TimePicker({ startTime, endTime, onChange }) {
  const [endOptions, setEndOptions] = useState(getEndOptions(startTime));

  // Function to generate end time options based on selected start time
  function getEndOptions(startTime) {
    const options = [];
    const startMoment = moment(startTime, 'HH:mm');

    for (let i = startMoment.hour(); i < 24; i++) {
      for (let j = 0; j < 60; j += 15) {
        const endMoment = moment({ hour: i, minute: j });
        if (endMoment.isSameOrAfter(startMoment)) {
          options.push({
            value: endMoment.format('HH:mm'),
            label: endMoment.format('HH:mm'),
          });
        }
      }
    }

    return options;
  }

  // Handler function for start time change
  const handleStartTimeChange = (newStartTime) => {
    onChange(newStartTime, endTime); // Notify parent component
    setEndOptions(getEndOptions(newStartTime)); // Update end time options
  };

  // Handler function for end time change
  const handleEndTimeChange = (newEndTime) => {
    onChange(startTime, newEndTime); // Notify parent component
  };

  return (
    <div style={{display:'flex', width:'350px'}}>
      <div  style={{flex:'1'}}> 
      <div style={{fontSize: '20px', textAlign: 'left', fontWeight:'500'}}> Start Time </div>
      <Dropdown
        options={getEndOptions(startTime)}
        values={[{ value: startTime, label: startTime }]}
        onChange={(values) => handleStartTimeChange(values[0].value)}
        className='custom-host-box'
        style={{width:'100px', borderRadius:'10px'}}
      />
      </div>
      <div style={{flex:'1'}}> 
      <div style={{ fontSize: '20px', textAlign: 'left', fontWeight:'500'}}> End Time </div>
      <Dropdown
        options={endOptions}
        values={[{ value: endTime, label: endTime }]}
        onChange={(values) => handleEndTimeChange(values[0].value)}
        className='custom-host-box'
        style={{width:'100px', borderRadius:'10px'}}
      />
      </div>
      
    </div>
  );
}
 
export default Home;