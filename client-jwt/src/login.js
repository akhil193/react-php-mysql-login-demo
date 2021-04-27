import React, { Component } from "react";
import AuthHelperMethods from './components/Auth/AuthHelperMethods';
import NavBar from "./NavBar";
import HeaderQME from "./HeaderQME";
import "./LoginStyle.css";


class Login extends Component {

    /* In order to utilize our authentication methods within the AuthService class, we want to instantiate a new object */
    Auth = new AuthHelperMethods();

    state = {
        username: "",
        password: ""
    }

    /* Fired off every time the use enters something into the input fields */
    _handleChange = (e) => {
        this.setState(
            {
                [e.target.name]: e.target.value
            }
        )
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        /* Here is where all the login logic will go. Upon clicking the login button, we would like to utilize a login method that will send our entered credentials over to the server for verification. Once verified, it should store your token and send you to the protected route. */
        this.Auth.login(this.state.username, this.state.password)
            .then(res => {
                if (res === false) {
                    return alert("Sorry those credentials don't exist!");
                }
                this.props.history.replace('/');
            })
            .catch(err => {
                alert(err);
            })
    }

    componentWillMount() {
        /* Here is a great place to redirect someone who is already logged in to the protected route */
        if (this.Auth.loggedIn())
            this.props.history.replace('/');
    }

    render() {
        return (
            <div>
                <NavBar />
                <HeaderQME />
                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        <br />
                        <div className="fadeInfirst">
                            <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="currentColor" className="bi bi-person-circle" viewBox="0 0 20 20">
                                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                            </svg>
                        </div>
            
                        <form>
                            
                            <input type="text" id="username" className="fadeInsecond" name="username" placeholder="login" onChange={this._handleChange} />
                            <input type="text" id="password" className="fadeInthird" name="password" placeholder="password" onChange={this._handleChange} />
                            <input type="button" class="fadeInfourth" value="Log In" onClick={this.handleFormSubmit} />
                
                            <div className="d-flex justify-content-center links">
                                Don't have an account?<a href="/signUp">Sign Up</a>
                            </div>
                        </form>
            
                        <div id="formFooter">
                            <a className="underlineHover" href="#">Forgot Password?</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}

export default Login;