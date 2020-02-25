import React, { Component } from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux'

import Navbar from './components/Navbar'
import Homepage from './pages/Homepage'
import ListsPage from './pages/ListsPage'
import SearchPage from './pages/SearchPage'
import { fetchLists } from './redux/actions'


class App extends Component {
    
    componentDidMount () {
      this.props.fetchLists()
    }

    render() {
      return (
      <div className='background' >
        <Navbar />
        <Switch>
            <Route exact path="/" component={Homepage} />
            <Route exact path='/lists' component={ListsPage} />
            <Route exact path='/movies' component={SearchPage} />
        </Switch>

      </div>

      )
  }

}


function mapDispatchToProps(dispatch) {
  return { fetchLists: () => dispatch(fetchLists())}
}


export default connect(null, mapDispatchToProps)(App);
