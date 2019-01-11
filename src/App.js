import React, { Component } from 'react';
import TecMenu from './components/TecMenu';
import TecNewsCard from './components/TecNewsCard';
import TecCarousel from './components/TecCarousel';
import TecSide from './components/TecSide';
import logo from './logo.svg';
import './App.css';



class App extends Component {

  render() {
    
    return (
      <div className="App">
        <TecMenu/>
        <TecCarousel></TecCarousel>
        <div className="wrapper">
          <div className="card__container">
            <TecNewsCard/>
            <TecNewsCard/>
            <TecNewsCard/>
            <TecNewsCard/>
          </div>
          <div className="side__container">
            <TecSide/>
          </div>
        </div>
           
      </div>
    );
  }
}

export default App;
