import React, { Component } from 'react';
import TecMenu from './components/TecMenu';
import logo from './logo.svg';
import './App.css';
import 'rc-menu/assets/index.css';

class App extends Component {

  render() {

    
    return (
      <div className="App">
        <TecMenu></TecMenu>      
      </div>
    );
  }
}

export default App;
