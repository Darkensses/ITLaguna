import React, { Component } from 'react';
import TecMenu from './components/TecMenu';
import TecNewsCard from './components/TecNewsCard';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  render() {
    
    return (
      <div className="App">
        <TecMenu/>
        <div>
          <TecNewsCard/>
        </div>      
      </div>
    );
  }
}

export default App;
