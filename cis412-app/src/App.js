import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Home from "./pages/home";
import LandingPage from "./pages/LandingPage";
import EventsLandingPage from "./pages/EventsLandingPage";
import Events from "./pages/events";
import MeetupPage from "./pages/meetupPage";
import MapPage from "./pages/mapPage";


import Profile from './pages/profile';
import SpecificEventType from './pages/specificEventType';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      
      {/* !!!! Move this to home.js !!!!! */}
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Welcome to
        </p>
      </header>

        <div className="button">Let's explore </div> 
        
        <div className="button">Meet up! </div>  */}


        {/* !!! Uncomment your page when you create it !!! */}
        <Router>
          <Routes>
            <Route exact path="/" element={<LandingPage />} />
            <Route exact path="/landing" element={<LandingPage />} />
            
            <Route exact path="/meetup/coffee/manhattan-coffee-run" element={<MeetupPage />} /> 

            <Route exact path="/events" element={<Events />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/specificEventType" element={<SpecificEventType />}/>

            <Route exact path="/eventslanding" element={<EventsLandingPage />} />
            <Route exact path="/hostEvent" element={<Home />} />

            <Route exact path="/mapPage" element={<MapPage />} />
            

          </Routes>
        </Router>
        
    </div>
  );
}

export default App;
