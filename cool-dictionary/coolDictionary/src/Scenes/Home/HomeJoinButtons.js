import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './HomeJoinButtons.css'

class HomeJoinButtons extends Component{
  render(){
    return(
      <div className="container">
        <RaisedButton className="button" href="/Login" label="Add a picture" primary={true}  />
        {/* <RaisedButton className="button" href="/Register" label="Get Started" primary={true}  />
        <RaisedButton className="button" href="/RegisterSeller" label="Become a Seller" primary={true}  /> */}
      </div>
    )
  }
}

export default HomeJoinButtons;
