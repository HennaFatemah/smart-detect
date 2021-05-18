import React, { Component } from 'react';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import './App.css';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';

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
      input: '',
      imageUrl: '',
      box: {},
      route: 'signin',
      isSignedIn: false,
    }
  }

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState({ isSignedIn: false })
    } else if (route === 'home') {
      this.setState({ isSignedIn: true })
    }
    this.setState({ route })
  }

  calculateFaceDetection = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return{
      leftCol: width * clarifaiFace.left_col,
      rightCol: width - (width * clarifaiFace.right_col),
      topRow: height * clarifaiFace.top_row,
      bottomRow: height - (height * clarifaiFace.bottom_row),
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({ box });
  }

  onInputChange = (e) => {
    this.setState({ input: e.target.value })
  }

  onButtonSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input
    )
    .then(response => this.displayFaceBox(this.calculateFaceDetection(response)))
    .catch(err => console.log(err));
  }

  render() {
    const { isSignedIn, route, imageUrl, box } = this.state;
    const { onRouteChange, onInputChange, onButtonSubmit } = this;
    return (
      <div>
        <Particles 
          params={particlesOptions}
          className="fixed top-0 bottom-0 left-0 right-0 z-10"
        />
        <Navigation
          onRouteChange={onRouteChange}
          isSignedIn={isSignedIn}
        />
        {
          route === 'signin' || route === 'signout'
          ? 
          <>
            <Signin
              onRouteChange={onRouteChange}
            />
          </>
          :
          route === 'register'
          ?
          <>
            <Register
              onRouteChange={onRouteChange}
            />
          </>
          :
          <>
            <Logo/>
            <Rank/>
            <ImageLinkForm
              onInputChange = {onInputChange}
              onButtonSubmit={onButtonSubmit}
            />
            <FaceRecognition
              imageUrl={imageUrl}
              box = {box}
            />
          </>
        }
      </div>
    );
  }
}

export default App;