import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// COMPONENTS
import About from './About';
import AuthModal from './Modals/AuthModal';
import Dashboard from './User/Dashboard';
import Home from './Home';
import Nav from './Nav';
import Post from './Post/Post';

import Footer from './Footer';

class App extends Component {
    constructor() {
        super();
        this.state={
            show: false, 
            isAuthenticated: false
        }
    }

    toggleAuthModal = () => {
        this.setState({ show: !this.state.show })
    }

    toggleIsAuthenticated = () => {

    }

    render() {
        const allProps = {
            show: this.state.show,
            toggleAuthModal: this.toggleAuthModal,
            isAuthenticated: this.state.isAuthenticated,
            toggleIsAuthenticated: this.toggleIsAuthenticated
        }

        return(
            <div className="app site">
            {!this.state.show
                ? null
                :
                <AuthModal {...allProps} />
            }
                <div className="site-content">
                    <Nav {...allProps} />
                    <Switch>
                        <Route exact path="/" component={Home} /> 
                        <Route exact path="/dashboard" component={Dashboard} />
                        <Route exact path="/post" component={Post} />
                        <Route exact path="/about" component={About} />
                    </Switch>
                </div>

                <Footer />
                
            </div>
        )
    }
}

export default App;