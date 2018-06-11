import React, { Component } from 'react';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            error: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        console.log(name, value);
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    changeAuthType = () => {
        this.props.changeForm();
    }

    render () {
        console.log(this.props)
        return (
            <div> 
                {!this.props.loggedInForm
                    ?   <div>
                            <button className="button auth-login-button" onClick={this.changeAuthType}> Log In </button> 
                            <h6 className="auth-or"> OR </h6>
                        </div>
                    :
                        <form onSubmit={this.handleSubmit} className="auth-form">

                            <h4 className="auth-head"> Log In </h4>

                            <div>
                                <button className="button auth-login-formbutton"> Log In </button>
                            </div>

                            <div>
                                <input 
                                    className="auth-form-input"
                                    placeholder="Email"
                                    name="email"
                                    onChange={this.handleChange} 
                                />
                            </div>

                            <div>
                                <input 
                                className="auth-form-input"
                                    placeholder="Password"
                                    name="password"
                                    onChange={this.handleChange} 
                                /> 
                            </div>
                        </form>
                }
            </div>
        )
    }
}

export default Login;