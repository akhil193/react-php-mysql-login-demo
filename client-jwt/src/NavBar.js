import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import {getUserDetails} from './api/user';
import AuthHelperMethods from './components/Auth/AuthHelperMethods';

class NavBar extends Component {

  state = {
    name: ''
  }

  async componentDidMount() {
    console.log("Navbar");
    if (this.props.confirm && this.props.confirm.user_id) {
      await getUserDetails(this.props.confirm.user_id).then(userDetails => {
        this.setState({ name: userDetails.name });
      });
    }
  }

  /* Create a new instance of the 'AuthHelperMethods' compoenent*/
  Auth = new AuthHelperMethods();

  _handleLogout = () => {
    this.Auth.logout()
    if(this.props.history){
      this.props.history.replace('/login');
    }
    localStorage.removeItem('userData');
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">AROGYAM</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
                      
              { this.Auth.loggedIn()?
              <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">Home
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item active">
                <a className="nav-link" href="/home">Dashboard
                  <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item d-flex">
                <span style={{border:"1px solid white"}}></span>
                <h5 style={{color: "wheat",padding:"8px"}}>Welcome, {this.state.name} </h5>
                <button className="btn btn-info" onClick={this._handleLogout}>LOGOUT</button>
                </li>
                </ul>
                :
                <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="/Login">Login/SignUp</a>
                </li>
                </ul>  }
          </div>
        </div>
      </nav>
    );
  }
}


export default NavBar;