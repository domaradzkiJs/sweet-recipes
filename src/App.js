import React from 'react';
import Homepage from './pages/homepage';
import Recipepage from './pages/recipepage';
import { Switch, Route } from 'react-router-dom';
import './App.scss';



function App() {
  
  return (
    <div className="App">

    
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route exact path='/recipe/:id' component={Recipepage} />

      </Switch>


    </div>
  );
}

export default App;
