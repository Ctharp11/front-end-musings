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
        this.props.changeForm('showLogin');
    }

    render () {
        console.log(this.props)
        return (
            <div> 
                {!this.props.loggedInForm
                    ?
                        <button className="button auth-login-button" onClick={this.changeAuthType}> Log In </button>
                    :
                        <form onSubmit={this.handleSubmit} className="auth-form">

                            <div>
                                <input 
                                placeholder="Email"
                                name="email"
                                onChange={this.handleChange} 
                                />
                            </div>

                            <div>
                                <input 
                                    placeholder="Password"
                                    name="password"
                                    onChange={this.handleChange} 
                                /> 
                            </div>

                            <div>
                                <button className="button auth-login-button"> Log In </button>
                            </div>
                        </form>
                }
            </div>
        )
    }
}

export default Login;