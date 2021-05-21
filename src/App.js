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

const initialState = {
  input: '',
  imageUrl: '',
  box: {},
  route: 'signin',
  isSignedIn: false,
  user: {
    id:'',
    name:'',
    email:'',
    entries: 0,
    joined: ''
  }
}
class App extends Component {
  constructor(){
    super();
    this.state = initialState;
  }

  onRouteChange = (route) => {
    if(route === 'signout') {
      this.setState(initialState)
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

  onImageSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
    .predict(
      Clarifai.FACE_DETECT_MODEL,
      this.state.input
    )
    .then(response => {
      if(response){
        fetch('http://localhost:3000/image', {
          method: 'put',
          headers: {'Content-Type':'Application/json'},
          body: JSON.stringify({
            id: this.state.user.id
          })
        })
          .then(response => response.json())
          .then(count => {
            this.setState(Object.assign(this.state.user, { entries:count }))
          })
          .catch(console.log);
      }
      this.displayFaceBox(this.calculateFaceDetection(response))
    })
    .catch(err => console.log(err));
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name:data.name,
      email:data.email,
      entries: data.entries,
      joined: data.joined,
    }})
  }

  render() {
    const { isSignedIn, route, imageUrl, box } = this.state;
    const { onRouteChange, onInputChange, onImageSubmit, loadUser } = this;
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
              onRouteChange={ onRouteChange }
              loadUser={ loadUser }
            />
          </>
          :
          route === 'register'
          ?
          <>
            <Register
              onRouteChange={ onRouteChange }
              loadUser={ loadUser }
            />
          </>
          :
          <>
            <Logo/>
            <Rank
              name={this.state.user.name}
              entries={this.state.user.entries}
            />
            <ImageLinkForm
              onInputChange = {onInputChange}
              onImageSubmit={onImageSubmit}
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