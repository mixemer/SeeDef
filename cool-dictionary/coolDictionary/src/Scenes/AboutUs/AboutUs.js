import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import './AboutUs.css'
class AboutUs extends Component{
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render(){
    return(
      <div className="container">
        <h2 className="aboutUsTitle">About Us</h2>
        <Paper>
          <p className="aboutUsText">
            
          </p>
        </Paper>
      </div>
    )
  }
}
export default AboutUs
