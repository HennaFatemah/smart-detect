import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';

const app = new Clarifai.App({
  apiKey: 'daf193fdb8a54794b9a4ddd62aafcc9d',
});

const particlesOptions = {
  particles: {
    number: {
      value: 100,
      density: {
        enable: true,
        value_area: 1000
      }
    }
  }
}
class App extends Component {
  constructor(){
    super();
    this.state = {
      imageUrl: ''
    }
  }

  onImageUrlChange = (e) => {
    console.log(e.target.value);
  }

  onButtonSubmit = () => {
    console.log('click');
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      // THE JPG
      "https://i.insider.com/5d321d4ea209d3146d650b4a?width=1100&format=jpeg&auto=webp"
    )
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
  }

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
        <ImageLinkForm
          onImageUrlChange = {this.onImageUrlChange}
          onButtonSubmit={this.onButtonSubmit}
        />
        <FaceRecognition/>
      </div>
    );
  }
}

export default App;