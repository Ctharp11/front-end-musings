import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';

// COMPONENTS
import About from './About';
import AuthModal from './Modals/AuthModal';
import Dashboard from './User/Dashboard';
import Home from './Home';
import Nav from './Nav';
import Post from './Post/Post';

import Footer from './Footer';

const history = createHistory()
const location = history.location


class App extends Component {
    constructor() {
        super();
        this.state={
            show: false, 
            isAuthenticated: false,
            history: '',
            location: ''
        }
    }

    componentDidMount() {
        this.setState({ 
            history,
            location
        })
    }

    toggleAuthModal = () => {
        this.setState({ show: !this.state.show })
    }

    toggleIsAuthenticated = () => {
        this.setState({ isAuthenticated: !this.state.isAuthenticated })
    }

    render() {
        const allProps = {
            show: this.state.show,
            toggleAuthModal: this.toggleAuthModal,
            isAuthenticated: this.state.isAuthenticated,
            toggleIsAuthenticated: this.toggleIsAuthenticated,
            history,
            location
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
                        <Route {...allProps} exact path="/" component={Home} /> 
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