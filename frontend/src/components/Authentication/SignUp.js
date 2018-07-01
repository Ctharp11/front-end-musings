import React, { Component } from 'react';
import createHistory from 'history/createBrowserHistory';

import { signUp } from '../../services/auth';
// import base from '../../services/base';
import firebase from 'firebase';
import * as firebaseui from 'firebaseui';

const ui = new firebaseui.auth.AuthUI(firebase.auth());

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

    componentDidMount() {
       ui.start('#firebaseui-auth-container', {
        signInOptions: [
          {
            provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
            requireDisplayName: false
          }
        ]
      }); 

      var uiConfig = {
        callbacks: {
          signInSuccessWithAuthResult: function(authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true;
          },
          uiShown: function() {
            // The widget is rendered.
            // Hide the loader.
            document.getElementById('loader').style.display = 'none';
          }
        },
        // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
        signInFlow: 'popup',
        signInSuccessUrl: '<url-to-redirect-to-on-success>',
        signInOptions: [
          // Leave the lines as is for the providers you want to offer your users.
          firebase.auth.GoogleAuthProvider.PROVIDER_ID,
          firebase.auth.FacebookAuthProvider.PROVIDER_ID,
          firebase.auth.TwitterAuthProvider.PROVIDER_ID,
          firebase.auth.GithubAuthProvider.PROVIDER_ID,
          firebase.auth.EmailAuthProvider.PROVIDER_ID,
          firebase.auth.PhoneAuthProvider.PROVIDER_ID
        ],
        // Terms of service url.
        tosUrl: '<your-tos-url>'
      };
      
      ui.start('#firebaseui-auth-container', uiConfig); 
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

        if (this.state.email === '' || this.state.name === '') {
            this.setState({ error: "Please fill out all fields." })
            return
        }

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

        // const signUpData = {
        //     name: this.state.name,
        //     email: this.state.email,
        //     password: this.state.password
        // }

        // signUp(signUpData)
        const email = this.state.email;
        const password = this.state.password;

        firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

        this.props.toggleAuthModal()
        this.props.toggleIsAuthenticated();
        history.push('/dashboard');
    }

    // ui.start('#firebaseui-auth-container', uiConfig);

    render () {
        console.log(this.props)

        return (
            <div> 
            <form onSubmit={this.handleSubmit} className="auth-form">

                <h4 className="auth-head"> Sign Up </h4>

                <div id="firebaseui-auth-container"></div>
                <div id="loader">Loading...</div>

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