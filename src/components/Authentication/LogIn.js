import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';

const history = createHistory({})

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
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

        const signUpInfo = JSON.parse(sessionStorage.getItem('signUpInfo'));

        if (signUpInfo === null) {
            this.setState({ error: "Please sign up first."})
            return
        }

        if (this.state.email === '' || this.state.password === '') {
            this.setState({ error: "Please fill in both email and password."})
            return
        }

        if (this.state.email !== signUpInfo.email) {
            this.setState({ error: "We don't recongize your email."})
            return
        }

        if (this.state.password !== signUpInfo.password) {
            this.setState({ error: "We don't recongize your password."})
            return
        }

        this.login();
    }

    login = () => {
        this.props.toggleAuthModal()
        this.props.toggleIsAuthenticated();
        history.push('/dashboard');
    }

    render () {
        return (
            <div> 
            <form onSubmit={this.handleSubmit} className="auth-form">

                <h4 className="auth-head"> Log In </h4>

                {this.state.error === ''
                    ? 
                        null
                    :
                        <div> {this.showError()} </div>
                }
                

                <div>
                    <input 
                        className="auth-form-input"
                        type="email"
                        placeholder="Email"
                        name="email"
                        onChange={this.handleChange} 
                    />
                </div>

                <div>
                    <input 
                        className="auth-form-input"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={this.handleChange} 
                    /> 
                </div>

                <div>
                    <button className="button auth-login-button" onSubmit={this.handleSubmit}> Log In </button>
                </div>

            </form>
              
            </div>
        )
    }
}

export default Login;

// {!this.props.loggedInForm
//     ?   <div>
//             <button className="button auth-login-button" onClick={this.changeAuthType}> Log In </button> 
//             <h6 className="auth-or"> OR </h6>
//         </div>
//     :
       
// }