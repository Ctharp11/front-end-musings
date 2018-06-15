import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';

import { signUp } from '../../services/auth';

const history = createHistory({})

class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
            passwordConfirm:'',
            error: ''
        }
    }

    showError = () => {
        return <div className="auth-error"> {this.state.error} </div>
    }

    handleChange = (e) => {
        this.setState({ error: '' });
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const password = this.state.password;
        const passwordConfirm = this.state.passwordConfirm;

        if (!password.match("^(?=.*[a-z])(?=.*[0-9])(?=.{8,})")) {
             this.setState({ error: 'Your password must be a minimum of eight characters and have at least one letter and one number.'});
            return
        } 

        if (password !== passwordConfirm) {
            this.setState({ error: "Your passwords don't match"});
            return
        }

        this.handleSignIn();
    }

    handleSignIn = () => {

        const signUpData = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password
        }

        signUp(signUpData)
        this.props.toggleAuthModal()
        this.props.toggleIsAuthenticated();
        history.push('/dashboard');
    }

    render () {
        console.log(this.props)
        return (
            <div> 
            <form onSubmit={this.handleSubmit} className="auth-form">

                <h4 className="auth-head"> Sign Up </h4>

                {this.state.error === ''
                    ? 
                        null
                    :
                        <div> {this.showError()} </div>
                }

                <div className="auth-form-inputflex">
                    <input 
                        className="auth-form-input-signup"
                        placeholder="Name"
                        name="name"
                        onChange={this.handleChange} 
                    />

                    <input 
                        className="auth-form-input-signup"
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={this.handleChange} 
                    />
                </div>

                <div className="auth-form-inputflex">  
                    <input 
                        className="auth-form-input-signup"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChange} 
                    />

                    <input 
                        className="auth-form-input-signup"
                        type="password"
                        placeholder="Confirm Password"
                        name="passwordConfirm"
                        onChange={this.handleChange}
                    />
                </div>

                <div>
                    <button className="button auth-signup-button" onSubmit={this.handleSubmit}> Sign Up </button>
                </div>

            </form>
                
            </div>
        )
    }
}

export default SignUp;

// {!this.props.signedUpForm
//     ?   
//         <div>
//             <div className="auth-or"> OR </div>
//             <button className="button auth-signup-button" onClick={this.changeAuthType}> Sign Up </button>
//         </div>
//     :
       
// }