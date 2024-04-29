import React from "react";
import mapImage from '../images/maps.jpeg';
import '../styles/events.css';
import './Landing.css';
import star from '../icons/add.svg';
import globe from '../icons/earth.svg';
import calendar from '../icons/calendar.svg';
import person from '../icons/user-circle.svg';
import { useNavigate } from 'react-router-dom';
 
const Events = () => {
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

    return (
        <div style={containerStyle}>
            <header className="App-header">
            <div className="header-status"> Your Events</div>
            {/* <div>
                <div class="row justify-content-between">
                    <div class="col-10">
                        <h1 class="title">Your Events</h1>
                    </div>
                    <div class="col-2">
                        <button class="plusButton">+</button>
                    </div>       
                </div>
            </div> */}
        
         
        <div style={{ fontSize: '25px', textAlign: 'left', fontWeight:'500', marginRight: '25vh'}}>Hosting </div>
        <div class = "event-card">
            <div style={{width: '175px', marginLeft:'10px', textAlign:'left'}}> 
                <div class="card-title">Coffee chats!</div>
                <div className="dateButton">2024/05/04</div>
                <div style={{ fontSize: '14px', fontWeight:'300', width:'140px'}}>3901 Walnut St, Philadelphia, PA 19104</div>
            </div>
    
            <div style={{width: '175px',marginLeft:'auto', marginRight:'auto'}}>
                <img src={mapImage} class="card-img-top map img-fluid rounded-start" alt="map" style={{width:'80%'}}></img>
                <div style ={{height: '20px'}}> </div>
            </div>
        </div>    

         <div style={{height: '25px'}}>  </div>      

        <div style={{ fontSize: '25px', textAlign: 'left', fontWeight:'500', marginRight: '25vh'}}>Guesting </div>
        <div class = "event-card">
            <div style={{width: '175px', marginLeft:'10px', textAlign:'left'}}> 
                <div class="card-title">Thrift Marketing </div>
                <div className="dateButton">2024/05/25</div>
                <div style={{ fontSize: '14px', fontWeight:'300', width:'140px'}}>3820 Locust Walk, Philadelphia, PA 19104</div>
            </div>
    
            <div style={{width: '175px',marginLeft:'auto', marginRight:'auto'}}>
                <img src={mapImage} class="card-img-top map img-fluid rounded-start" alt="map" style={{width:'80%'}}></img>
                <div style ={{height: '20px'}}> </div>
            </div>
        </div>  
        <div class = "event-card">
            <div style={{width: '175px', marginLeft:'10px', textAlign:'left'}}> 
                <div class="card-title">Dance Class </div>
                <div className="dateButton">2024/06/02</div>
                <div style={{ fontSize: '14px', fontWeight:'300', width:'140px'}}>912 Spring Street, Philadelphia, PA 19104</div>
            </div>
    
            <div style={{width: '175px',marginLeft:'auto', marginRight:'auto'}}>
                <img src={mapImage} class="card-img-top map img-fluid rounded-start" alt="map" style={{width:'80%'}}></img>
                <div style ={{height: '20px'}}> </div>
            </div>
        </div>  
        <div style={{ height: '20vh' }}></div> {/* Empty vertical box */}    

                <div className="nav-bar" style={{position: 'fixed', bottom:'0vh', width:'100%'}}>
                    <button className="nav-icon-button" onClick={() => navigate('/hostEvent')}>
                        <img src={star} style={{ height: '25px' }} alt="star" />
                    </button>
                    <button className="nav-icon-button" onClick={() => navigate('/eventslanding')}>
                    <img src={globe} style={{ height: '25px' }} alt="globe" />
                    </button>
                    <button className="nav-icon-button" onClick={() => navigate('/events')}>
                    <div className="nav-button">
                            <img src={calendar} style={{ height: '25px' }} alt="calendar" />
                            <span>Events</span>
                        </div>
                    </button>
                    <button className="nav-icon-button" onClick={() => navigate('/profile')}>
                        <img src={person} style={{ height: '25px' }} alt="person" />
                    </button>
                </div>
                </header>
            </div>
           
        // </div>
    );
};
 
export default Events;