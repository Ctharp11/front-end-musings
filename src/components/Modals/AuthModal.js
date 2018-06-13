import React, { Component } from 'react';

import Login from '../Authentication/LogIn';
import SignUp from '../Authentication/SignUp';

class AuthModal extends Component {
    constructor(){
        super();
        this.state = {
            showLogin: true
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

    changeForm = () => {
        this.setState({ 
            showLogin: !this.state.showLogin
         })
    }

    render() {

        return (
            <div className="auth"> 
                <div className="auth-modal" ref={this.setWrapperRef}> 
                    <div className="auth-modal-close hover" onClick={this.props.toggleAuthModal}>   X 
                    </div>

                    <div className="auth-toggle-buttons"> 
                        <span className={"auth-toggle-buttons-login hover " + (this.state.showLogin ? "auth-toggle-buttons-show-grey" : null)} onClick={this.changeForm}> Log In </span>
                        <span className={"auth-toggle-buttons-signup hover " + (!this.state.showLogin ? "auth-toggle-buttons-show-grey" : null)} onClick={this.changeForm}> Sign Up </span>
                    </div>

                    {this.state.showLogin
                        ?
                            <Login {...this.props} />
                        :
                            <SignUp {...this.props} />
                    }

                    
                    
                </div>
            </div>
        )
    }
}

export default AuthModal;