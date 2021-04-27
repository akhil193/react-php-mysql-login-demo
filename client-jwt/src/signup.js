import React from "react";
import NavBar from "./NavBar";
import HeaderQME from "./HeaderQME";
import Registration from "./components/Registration/Registration";

class SignUp extends React.Component {

    render(){
        return (
            <div>
                <NavBar history={this.props.history} />    
                <HeaderQME />   
                <Registration history={this.props.history} />
            </div>
        );
    }
}

export default SignUp;