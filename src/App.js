import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './pages/homepage/homepage.component';


const HastsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
)

function App() {

  console.log("pase");
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop/hats" component={HastsPage} />
      </Switch>
    </div>
  );
}

export default App;
