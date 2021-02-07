import React from 'react';
import {Router} from "@reach/router"
import Homepage from './components/Homepage';
import RestaurantsHomepage from './components/RestaurantsHomepage';
import "./App.css"

const App = () => {
  return (
    <div>
      <Router>
        <Homepage path="/"/>
        <RestaurantsHomepage path="/feed-me"/>
      </Router>
    </div>
  );
};

export default App;