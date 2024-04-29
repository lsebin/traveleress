import 'bootstrap/dist/css/bootstrap.css';
import './Landing.css';
import '../styles/events.css';
import star from './images/star-06.png';
import globe from './images/globe-05.png';
import calendar from './images/Vector.png';
import person from './images/Icon.png';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; // Import Datepicker CSS
import PlacesAutocomplete, { geocodeByAddress, getLatLng } from 'react-places-autocomplete';
{/* <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCVKbp-tRow4zxjhsU0oJ7RXdd6JFsGdxs&libraries=places"></script> */}


const Home = () => {
    const navigate = useNavigate();
    const containerStyle = {
        maxWidth: '50vh', /*'375px'*/
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
            setSuccess(inputValue && selectedDate && locValue && capValue && detailValue);
            setShowPopup(!showPopup);
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
        </div>
        <div style={{ height: '10px' }}></div> {/* Empty vertical box */}
        <div style={{ fontSize: '20px', textAlign: 'left', fontWeight:'500', marginRight: '150px'}}> Location</div>
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
        <button className="abutton" style={{ width: '50%' , marginLeft: '10vh'}} onClick={togglePopup}>Host event</button>
        {showPopup && (
            <div className="popup-container">
                <div className={`popup ${success ? 'success' : 'error'}`}>
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
          <button className="nav-icon-button" onClick={() => navigate('/profile')}>
              <img src={person} style={{ height: '25px' }} alt="person" />
          </button>
      </div>

    
      </header>
    </div>

)};
 
export default Home;