import React, { Component } from 'react';

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
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
                {!this.props.signedUpForm
                    ?   
                        <div>
                            <div className="auth-or"> OR </div>
                            <button className="button auth-signup-button" onClick={this.changeAuthType}> Sign Up </button>
                        </div>
                    :
                        <form onSubmit={this.handleSubmit} className="auth-form">

                            <h4 className="auth-head"> Sign Up </h4>

                            <div>
                                <button className="button auth-signup-formbutton"> Sign Up </button>
                            </div>

                            <div className="auth-form-inputflex">
                                <input 
                                    className="auth-form-input-signup"
                                    placeholder="Name"
                                    name="name"
                                    onChange={this.handleChange} 
                                />

                                <input 
                                    className="auth-form-input-signup"
                                    placeholder="Email"
                                    name="email"
                                    onChange={this.handleChange} 
                                />
                            </div>

                            <div className="auth-form-inputflex">  
                                <input 
                                    className="auth-form-input-signup"
                                    placeholder="Password"
                                    name="password"
                                    onChange={this.handleChange} 
                                />

                                <input 
                                    className="auth-form-input-signup"
                                    placeholder="Confirm Password"
                                />
                            </div>

                        </form>
                }
            </div>
        )
    }
}

export default SignUp;