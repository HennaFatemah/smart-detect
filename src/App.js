import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Particles from 'react-particles-js';
import './App.css';

const particlesOptions = {
  particles: {
    number: {
      value: 40,
      density: {
        enable: true,
        value_area: 600
      }
    }
  }
}
class App extends Component {
  render() {
    return (
      <div>
        <Particles 
          params={particlesOptions}
          className="fixed top-0 bottom-0 left-0 right-0 z-10"
        />
        <Navigation/>
        <Logo/>
        <Rank/>
        <ImageLinkForm/>
        {/* <FaceRecognition/> */}
      </div>
    );
  }
}

export default App;