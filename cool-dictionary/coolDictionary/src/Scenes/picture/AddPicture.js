import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {addPicture} from '../../Utils/auth.js';


class AddPicture extends Component {
  constructor(props) {
    super(props);
    this.state = {
        imageURL: ''
    };
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.addPicture = addPicture.bind(this);
  }

  handleFormSubmit(e){
    alert("TEST");
    const imageURL = this.state.imageURL;

    console.log(imageURL);

    //call our axios promise, then retrieve the token from axios
  this.addPicture(imageURL)
      .then( response => {
          console.log(imageURL);

          this.props.history.push('/')
          this.OpenPopUp();
      })
    e.preventDefault();
}


    fileSelectedhandler = event => {
        console.log(event.target.files[0]);
        this.setState={
            imageURL: event.target.files[0]
        }
    }


    render(){
        const style = {
            height: 500,
            width: '70%',
            margin: '10%',
            textAlign: 'center',
            display: 'inline-block',
          };
          const styles = {
            button: {
              marginTop: '25%',
            },
            exampleImageInput: {
              cursor: 'pointer',
              position: 'absolute',
              top: 0,
              bottom: 0,
              right: 0,
              left: 0,
              width: '100%',
              opacity: 0,
            },
          };
          const styleSubmit = {
            button: {
                marginTop: '5%',
              },
          };

    return (
        <div className="container">
        <Paper style={style}>
        <RaisedButton primary={true}
            label="Choose an Image"
            labelPosition="before"
            style={styles.button}
            containerElement="label"
            // backgroundColor="red"
            // labelColor="white"
            >
            <input id="file" type="file" onChange={this.fileSelectedhandler} style={styles.exampleImageInput} value={this.state.imageURL} />
            </RaisedButton >
            <br/>
            <br/>
            <RaisedButton onClick={this.handleFormSubmit} label="Submit" style={styleSubmit} primary={true}/>
        </Paper>
      </div>
    );
  }
}
export default AddPicture;
