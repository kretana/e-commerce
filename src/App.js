import React from 'react';
import { Switch ,Route } from 'react-router-dom';
import '../src/App.css';
import Homepage from './pages/homepage/homepage.component';
import ShopPage from './shop/shop.component';

import Header from '../src/components/header/header.component';





function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} /> 
       <Route path='/shop' component={ShopPage} /> 
      </Switch>
    </div>
  );
}



export default App;
