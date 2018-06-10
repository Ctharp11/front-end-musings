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
        this.props.signUp();
    }

    render () {
        console.log(this.props)
        return (
            <div> 
                {!this.props.signedUpForm
                    ?
                        <button className="button auth-signup-button" onClick={this.changeAuthType}> Sign Up </button>
                    :
                        <form onSubmit={this.handleSubmit} className="auth-form">

                            <div>
                                <input 
                                    placeholder="Name"
                                    name="name"
                                    onChange={this.handleChange} 
                                />

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

                                <input 
                                    placeholder="Confirm Password"
                                />
                            </div>

                            <div>
                                <button className="button auth-signup-button"> Sign Up </button>
                            </div>
                        </form>
                }
            </div>
        )
    }
}

export default SignUp;