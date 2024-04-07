import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import Home from "./pages/home";
import LandingPage from "./pages/LandingPage";
import EventsLandingPage from "./pages/EventsLandingPage";
import Events from "./pages/events";
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
            <Route exact path="/" element={<Home />} />
            <Route exact path="/landing" element={<LandingPage />} />
            {/* <Route exact path="/meetup" element={<Meetup />} /> */}
            {/* <Route exact path="/meetup/coffee" element={<Coffee />} /> */}
            
            {/* <Route exact path="/meetup/coffee/manhattan-coffee-run" element={<Event1 />} />  */}
            {/* ^^^ idk if this event should inherit from Events.js yet */}

            <Route exact path="/events" element={<Events />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/specificEventType" element={<SpecificEventType />}/>

            <Route exact path="/eventslanding" element={<EventsLandingPage />} />
            

          </Routes>
        </Router>
        
    </div>
  );
}

export default App;
