import React from 'react';
import HomePage from "./pages/homepage/homepage.component";
import {Switch, Route} from 'react-router-dom';
import './App.css';

const HatsPage = () => (
    <div>
        <h1>Hats Page</h1>
    </div>
);


function App() {
  return (
    <div>
        <Switch>
            <Route exact={true} path='/' component={HomePage} />
            <Route path='/hats' component={HatsPage} />
        </Switch>
    </div>
  );
}

export default App;
