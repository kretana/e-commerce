import React from 'react';
import { Switch ,Route } from 'react-router-dom';
import '../src/App.css';
import Homepage from './pages/homepage/homepage.component';




const HatsPage = () => { 
  return( 
  <div>
    <h1>HATS PAGE</h1>
  </div>
);
}



function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Homepage} /> 
       <Route path='/hats' component={HatsPage} /> 
      </Switch>
    </div>
  );
}



export default App;
