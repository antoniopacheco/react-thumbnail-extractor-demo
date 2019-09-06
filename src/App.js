import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ThumbnailExtractor from 'react-thumbnail-extractor'
import { throwStatement } from '@babel/types';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      file:  null,
      images: []
    }
  }

  handleChange = (event) =>{
    this.setState({
      file: event.target.files[0]
    })
  }
  onBeforeCapture = (event) => {
    console.log("before capture",event);
  }
  onStartCapture = (event) => {
    console.log("onStartCapture ",event);
  }
  onUnsupportedVideo = (event) => {
    console.log("onUnsupportedVideo ",event);
  }

  onCapture = (event) => {
    console.log("onCapture ",event);
    this.setState({
      images: event
    })
  }

  onComplete = (event) => {
    console.log("onComplete ",event);
  }

  onCompleteDetails = (event) => {
    console.log("onCompleteDetails ",event);
  }


  
  render() {
    const { file, images } = this.state
    return (
      <div className="App">
        <header className="App-header"><h1>ThumbnailExtractor Demo</h1></header>
        <div>
          <a href="https://github.com/antoniopacheco/react-thumbnail-extractor-demo/blob/master/src/App.js">Source code</a>
        </div>
        <input type="file" onChange={this.handleChange} accept="video/mp4,video/x-m4v,video/*"></input>
        <div className="imageContainer">
        <ThumbnailExtractor displayImages maxWidth={600} onCompleteDetails={this.onCompleteDetails} onComplete={this.onComplete} onCapture={this.onCapture} onUnsupportedVideo={this.onUnsupportedVideo}  onBeforeCapture={this.onBeforeCapture} onStartCapture={this.onStartCapture} videoFile={this.state.file} />
        </div>
      </div>
    );
  }
}

export default App;