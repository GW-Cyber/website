import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class AboutUs extends Component {
  render() {
    return (
      <div>
      <h1>
      About Us
      </h1>
     <div>
      <Link to="/home" className="btn ">Home</Link>
      <Link to="/eboard" className="btn ">E-Board</Link>
      <Link to="/events" className="btn ">Events</Link>

      </div>
      <div>
      GW Cyber is an org on campus. We strive to educate the student body on topics in cybersecurity.
      </div>
      </div>
    );
  }
}
