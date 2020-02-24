import React, { Fragment } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'


function App() {
  return (
    <div className='background' >
      <Navbar />
      <Switch>
          <Route exact path="/" component={Homepage} />
      </Switch>

    </div>

    )

}

export default App;
