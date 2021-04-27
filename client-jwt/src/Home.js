import React, { Component } from "react";
import withAuth from './components/Auth/withAuth';
import NavBar from "./NavBar";
import HeaderQME from "./HeaderQME";
import "./LoginStyle.css";
import { getUserDetails, getLocalUser } from "./api/user";


class Home extends Component {

    render() {
        let user = getLocalUser();
        console.log(user);
        return (
            <div>
                <NavBar history={this.props.history} confirm={this.props.confirm} />
                <HeaderQME />
                {user.role=="1"?"Welcome Volunteer":"Welcome Needy"}
            </div>
        );
    }

}

export default withAuth(Home);