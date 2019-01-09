import React, { Component } from 'react';
import { Link } from "react-router-dom";
import eboardslides from './eboardslides'
import EBoardSlide from './eboardslide';


export default class EBoard extends Component {
  constructor(props) {
      super(props);

      this.state = {
       slides: eboardslides.slides,
       displaySlide: eboardslides.slides[0]
      };

  }
  changeSlides(){
    const nextIndex = this.state.displaySlide.index + 1;

    if(nextIndex == this.state.slides.length){
      this.setState({
        displaySlide: this.state.slides[0]
      });
    }

    else if(nextIndex == -1){
      this.setState({
        displaySlide: this.state.slides[this.state.slides.length-1]
      });
    }
    else{
      this.setState({
        displaySlide: this.state.slides[nextIndex]
      });
    }
  }

  render() {
    return (
      <div>
      <h1>
      Meet our E-board!
      </h1>
     <div>
     <Link to="/home" className="btn ">Home</Link>
     <Link to="/about" className="btn ">About Us</Link>
     <Link to="/events" className="btn ">Events</Link>
      </div>
      <div>
      <button onClick={() => this.changeSlides()}>
        <EBoardSlide  property={this.state.displaySlide} key={this.state.displaySlide.index} />
      </button>
      </div>
      </div>
    );
  }
}
