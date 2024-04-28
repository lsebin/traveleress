import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import LandingPage from "./pages/LandingPage";
import EventsLandingPage from "./pages/EventsLandingPage";
import Events from "./pages/events";

import UserProfile from './pages/profiles/userProfile';
import ATProfile from './pages/profiles/ATProfile';
import LAProfile from './pages/profiles/LAProfile';

import CoffeeType from './pages/specificEventTypes/coffeeType';
import Coffee2Page from "./pages/specificEvents/coffeeEvents/coffee2";

import FoodType from './pages/specificEventTypes/foodType';


import NightLifeType from './pages/specificEventTypes/nightLifeType';


import ShopType from './pages/specificEventTypes/shopType';



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
            <Route exact path="/eventslanding" element={<EventsLandingPage />} />

            <Route exact path="/events" element={<Events />} />
            <Route exact path="/userProfile" element={<UserProfile />} />
            <Route exact path="/ATProfile" element={<ATProfile />} />
            <Route exact path="/LAProfile" element={<LAProfile />} />

            {/* COFFEE */}
            <Route exact path="/coffeeType" element={<CoffeeType />}/>
            <Route exact path="/meetup/coffee/coffee-2" element={<Coffee2Page />} /> 

            {/* FOOD */}
            <Route exact path="/foodType" element={<FoodType />}/>

            {/* SHOP */}
            <Route exact path="/shopType" element={<ShopType />}/>

            {/* NIGHT LIFE */}
            <Route exact path="/nightLifeType" element={<NightLifeType />}/>    

          </Routes>
        </Router>
        
    </div>
  );
}

export default App;
