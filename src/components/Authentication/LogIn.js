import React, { Component } from 'react';

import { compareData } from '../../services/auth';

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

        compareData();
    }

    render () {
        console.log(this.props)
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