import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import BreedImg from './BreedImg';
import RandomImg from './RandomImg';
import Image from './image'
import { withRouter } from 'react-router';

class App extends Component {
  constructor (props) {
    super (props)
  }

  render () {
    return (
      <React.Fragment>
        <h1>DoggyStyle</h1>
        <Route component={ Navbar }/>
        <Switch>
          <Route exact path='/randomBreed' component={ BreedImg }/>
          <Route path='/random/:num' component={ RandomImg }/>
          <Route exact path='/random' component={ RandomImg }/>
        </Switch>
      </React.Fragment>
    )
  }
}

export default withRouter(App);
