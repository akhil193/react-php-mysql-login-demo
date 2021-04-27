import React from "react";
import ReactDom from "react-dom";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from "./App.js";
import Registration from "./components/Registration/Registration.js";
import Home from "./Home.js";
import Login from "./Login.js";
import SignUp from "./SignUp.js";






ReactDom.render(<Router>
    <div>
        <Route exact path="/" component={App} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/Registration" component={Login} />
        <Route exact path="/signUp" component={SignUp} />
        <Route exact path="/home" component={Home} />
    </div>
</Router>, document.getElementById("root"));