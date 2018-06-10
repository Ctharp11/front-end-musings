import React, { Component } from 'react';

import Login from '../Authentication/LogIn';
import SignUp from '../Authentication/SignUp';

class AuthModal extends Component {
    constructor(){
        super();
        this.state = {
            showLogin: true,
            showSignup: false
        }
    }

    componentDidMount() {
        document.addEventListener('mousedown', this.handleClickOutside);
    }
    
    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }
    
    setWrapperRef = (node) => {
        this.wrapperRef = node;
    }

    handleClickOutside = (event) => {
        if (this.wrapperRef && !this.wrapperRef.contains(event.target)) {
            this.props.toggleAuthModal()
        }
    }

    changeForm = (name) => {
        console.log(name)
        this.setState({ showLogin: !this.state[name] })
    }

    signUp = () => {
        this.setState({ showSignup: !this.state.showSignup })
    }

    render() {
        const authProps = {
            loggedInForm: this.state.showLogin,
            changeForm: this.changeForm,
            signedUpForm: this.state.showSignup,
            signUp: this.signUp,
        }
        return (
            <div className="auth"> 
                <div className="auth-modal" ref={this.setWrapperRef}> 
                    <div className="auth-modal-close hover" onClick={this.props.toggleAuthModal}>   X 
                    </div>

                    <Login {...authProps} />
                    <SignUp {...authProps} />
                </div>
            </div>
        )
    }
}

export default AuthModal;