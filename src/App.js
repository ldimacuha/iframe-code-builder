import React, { Component } from 'react';
import M from "materialize-css/dist/js/materialize.min.js";
import ReactGA from 'react-ga';

import './App.css';

import AppContainer from './components/AppContainer';

class App extends Component {
  initializeReactGA() {
    ReactGA.initialize('UA-132445894-1');
    ReactGA.pageview('/');
  }

  componentDidMount() {
    M.AutoInit();
    this.initializeReactGA();
  }

  render() {
    return (
      <AppContainer />
    );
  }
}

export default App;
