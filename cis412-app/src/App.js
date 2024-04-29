import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import LandingPage from "./pages/LandingPage";
import EventsLandingPage from "./pages/EventsLandingPage";
import Events from "./pages/events";
import Home from "./pages/home";
import UserProfile from './pages/profiles/userProfile';

import CoffeeType from './pages/specificEventTypes/coffeeType';
import Coffee1Page from './pages/specificEvents/coffeeEvents/coffee1';
import Coffee2Page from "./pages/specificEvents/coffeeEvents/coffee2";
import Coffee3Page from "./pages/specificEvents/coffeeEvents/coffee3";
import Coffee4Page from "./pages/specificEvents/coffeeEvents/coffee4";
import HostCoffeePage from './pages/specificEvents/coffeeEvents/hostCoffee';

import FoodType from './pages/specificEventTypes/foodType';
import Food1Page from './pages/specificEvents/foodEvents/food1';
import Food2Page from './pages/specificEvents/foodEvents/food2';
import Food3Page from './pages/specificEvents/foodEvents/food3';
import Food4Page from './pages/specificEvents/foodEvents/food4';

import NightLifeType from './pages/specificEventTypes/nightLifeType';
import NightLife1Page from './pages/specificEvents/nightLifeEvents/nightLife1';
import NightLife2Page from './pages/specificEvents/nightLifeEvents/nightLife2';
import NightLife3Page from './pages/specificEvents/nightLifeEvents/nightLife3';
import NightLife4Page from './pages/specificEvents/nightLifeEvents/nightLife4';

import ShopType from './pages/specificEventTypes/shopType';
import Shop1Page from './pages/specificEvents/shopEvents/shop1';
import Shop2Page from './pages/specificEvents/shopEvents/shop2';
import Shop3Page from './pages/specificEvents/shopEvents/shop3';
import Shop4Page from './pages/specificEvents/shopEvents/shop4';

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
            <Route exact path="/hostEvent" element={<Home />} />

            <Route exact path="/hostEvent/hostCoffee" element={<HostCoffeePage />} /> 

            {/* COFFEE */}
            <Route exact path="/coffeeType" element={<CoffeeType />}/>
            <Route exact path="/meetup/coffee/coffee-1" element={<Coffee1Page />} /> 
            <Route exact path="/meetup/coffee/coffee-2" element={<Coffee2Page />} /> 
            <Route exact path="/meetup/coffee/coffee-3" element={<Coffee3Page />} /> 
            <Route exact path="/meetup/coffee/coffee-4" element={<Coffee4Page />} /> 

            {/* FOOD */}
            <Route exact path="/foodType" element={<FoodType />}/>
            <Route exact path="/meetup/food/food-1" element={<Food1Page />} /> 
            <Route exact path="/meetup/food/food-2" element={<Food2Page />} /> 
            <Route exact path="/meetup/food/food-3" element={<Food3Page />} /> 
            <Route exact path="/meetup/food/food-4" element={<Food4Page />} /> 

            {/* SHOP */}
            <Route exact path="/shopType" element={<ShopType />}/>
            <Route exact path="/meetup/shop/shop-1" element={<Shop1Page />} /> 
            <Route exact path="/meetup/shop/shop-2" element={<Shop2Page />} /> 
            <Route exact path="/meetup/shop/shop-3" element={<Shop3Page />} /> 
            <Route exact path="/meetup/shop/shop-4" element={<Shop4Page />} /> 

            {/* NIGHT LIFE */}
            <Route exact path="/nightLifeType" element={<NightLifeType />}/> 
            <Route exact path="/meetup/night-life/night-life-1" element={<NightLife1Page />} /> 
            <Route exact path="/meetup/night-life/night-life-2" element={<NightLife2Page />} /> 
            <Route exact path="/meetup/night-life/night-life-3" element={<NightLife3Page />} /> 
            <Route exact path="/meetup/night-life/night-life-4" element={<NightLife4Page />} />    

          </Routes>
        </Router>
        
    </div>
  );
}

export default App;
