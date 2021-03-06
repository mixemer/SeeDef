import React, { Component } from 'react';
import { connect } from 'react-redux';
import { changeLogged, changeAccountType } from './actions/account-actions';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import MenuItem from 'material-ui/MenuItem';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import RoutePaths from './App/RoutePaths'
import LoggedInMenu from './Scenes/Home/LoggedInMenu';
import AddPicture from './Scenes/picture/AddPicture';

import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

import './App.css';

class Login extends Component {
  static muiName = 'FlatButton';

  render() {
    return (
      <div>
        <FlatButton {...this.props} href="/login" label="Something" />
      </div>

    );
  }
}

class App extends Component {

  logInUser(data) {
    this.props.logInUser(data);
  }
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      logged : false
    }
    this.logInUser = this.logInUser.bind(this);

    this.logInUser(localStorage.getItem('api_token')!== null)
  }


  handleChange = (event, logged) => {
    this.setState({logged: logged});
  }
  handleToggle = () => this.setState({open: !this.state.open});

    render(){

    return (
      <MuiThemeProvider>

      <AppBar
          title="Cool Dictinary"
          iconElementRight={this.props.logged ? <LoggedInMenu /> : <Login />}
          onLeftIconButtonClick={this.handleToggle}/>

          <Drawer
            docked={false}
            width={200}
            open={this.state.open}
            onRequestChange={(open) => this.setState({open})}
          >
            <MenuItem onClick={this.handleClose} href="/#">Home</MenuItem>
            <MenuItem onClick={this.handleClose} href="/AboutUs">About Us</MenuItem>


          </Drawer>
        <RoutePaths/>
        </MuiThemeProvider>
    );
  }
}

const mapStateToProps = state => {
  return {
    logged: state.logged,
    accountType: state.accountType
  };
};
const mapDispatchToProps = {
  logInUser: changeLogged
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
