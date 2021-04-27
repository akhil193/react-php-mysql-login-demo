import React,{Component} from "react";
import AuthHelperMethods from "../Auth/AuthHelperMethods";
import "./Registration.css";

class Registration extends Component {

    Auth = new AuthHelperMethods();
    state = {
        name: "",
        dob: "",
        contactno: "",
        email: "",
        address: "",
        password: "",
        pincode: "",
        gender: "",
        role: ""
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
        alert(e.target.value);
        /* Here is where all the login logic will go. Upon clicking the login button, we would like to utilize a login method that will send our entered credentials over to the server for verification. Once verified, it should store your token and send you to the protected route. */
        this.Auth.fetch(`http://localhost/server-jwt/register.php`, {
            method: 'POST',
			headers : {
				'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8'
			},
            body: JSON.stringify({
                name:this.state.name,
                email:this.state.email,
                password:this.state.password,
                role:e.target.value
            })
        }).then(res => {
            console.log(res);
            if(res.status==200){
                this.Auth.setToken(res.token) // Setting the token in localStorage
                this.props.history.replace('/');
            }
        })
    }

    render() {
        return (
        <div>
            <div className="container register">
                <div className="row">
                    <div className="col-md-3 register-left">
                        <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
                        <h3>Welcome</h3>
                        <p>You are 30 seconds away from helping your community!</p>
                        <a href="/Login" class="btn btn-success btn-lg " role="button" aria-disabled="true">LOGIN</a> <br />
                    </div>

                    <div className="col-md-9 register-right">
                        <ul className="nav nav-tabs nav-justified" id="myTab" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Volunteer</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Needy</a>
                            </li>
                        </ul>

                        <div className="tab-content" id="myTabContent">
                            <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                                <h3 className="register-heading">Apply as a Volunteer</h3>

                                    <div className="row register-form">
                                        <div className="col-md-6">
                                           
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Full Name *" name="name" onChange={this._handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Contact No. *" name="contactno" onChange={this._handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Address *" name="address" onChange={this._handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Pincode" name="pincode" onChange={this._handleChange} />
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            
                                            <div className="form-group">
                                                <input type="date" className="form-control" placeholder="DOB- dd/mm/yy *" name="dob" onChange={this._handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Email" name="email" onChange={this._handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Password" name="password" onChange={this._handleChange} />
                                            </div>
                                            <div class="form-group">
                                                 <input type="password" className="form-control"  placeholder="Confirm Password"  />
                                            </div>

                                            <button class="btn btn-success btn-lg "value="1" onClick={this.handleFormSubmit}>REGISTER</button>
                                        </div>
                                    </div>
                            </div>


                            <div className="tab-pane fade show" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                 <h3  className="register-heading">Apply as a Needy</h3>
                                    <div className="row register-form">
                                        <div className="col-md-6">

                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Full Name *" value="" onChange={this._handleChange} />
                                            </div>
                                            <div className="form-group">
                                                 <input type="text" className="form-control" placeholder="Contact No. *" value="" onChange={this._handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Address *" value="" onChange={this._handleChange} />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Pincode" value="" onChange={this._handleChange} />
                                            </div>
                                            <div className="form-group">
                                             <div className="maxl">
                                                <label className="radio inline"> 
              	                                    <input type="radio" name="gender" value="male" checked />
               	                                    <span> Male </span> 
                                                 </label>
                                                 <label className="radio inline"> 
                                                    <input type="radio" name="gender" value="female" />
                                                    <span>Female </span> 
                                                </label>
                                             </div>
                                            </div>


                                        </div>
                                        <div className="col-md-6">
                                        
                                            <div className="form-group">
                                                <input type="date" className="form-control" placeholder="DOB- dd/mm/yy *" value=" DOB" />
                                            </div>
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Email" value=" Email" />
                                            </div>
                                            <div className="form-group">
                                                 <input type="text" className="form-control" placeholder="Username" value=" Username" />
                                            </div>
                                            <div class="form-group">
                                                <input type="password" className="form-control"  placeholder="Password" />
                                            </div>
                                            
                                            
                                            <button class="btn btn-success btn-lg "value="2" onClick={this.handleFormSubmit}>REGISTER</button>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
}

export default Registration;
