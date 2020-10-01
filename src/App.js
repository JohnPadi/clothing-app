import React from 'react';
import './App.css';
import Homepage from './pages/Homepage/Homepage';
import {Switch, Route} from 'react-router-dom';
import Shop from './pages/Shop/Shop';
import Header from './components/Header/Header';

function App() {
  return (
    <div>
    <Header/>
      <Switch>
      	<Route exact path='/' component={Homepage}/>
      	<Route exact path='/shop' component={Shop}/>
      </Switch>
    </div>
  );
}

export default App;
