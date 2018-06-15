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
import FourOhFour from './FourOhFour';

const history = createHistory({forceRefresh:true})

class App extends Component {
    constructor() {
        super();
        this.state={
            show: false, 
            isAuthenticated: false,
            userInfo: ''
        }
    }

    componentDidMount() {
        if (localStorage.getItem('signedIn')) {
            this.setState({ isAuthenticated: true });

        }
        // const userInfo = sessionStorage.getItem('signUpInfo');
        // this.setState({ userInfo });
    }

    toggleAuthModal = () => {
        this.setState({ show: !this.state.show });
    }

    toggleIsAuthenticated = () => {
        this.setState({ isAuthenticated: !this.state.isAuthenticated });
    }

    logout = () => {
        this.setState({ isAuthenticated: false });
        localStorage.clear();
        history.push('/');
    }

    restrictedRoutes = (Component, props) => {
        if (this.state.isAuthenticated) {
            return <Component {...props} />
        }

        history.push('/');
    }

    render() {
        const allProps = {
            show: this.state.show,
            toggleAuthModal: this.toggleAuthModal,
            isAuthenticated: this.state.isAuthenticated,
            toggleIsAuthenticated: this.toggleIsAuthenticated,
            userInfo: this.state.userInfo,
            logout: this.logout
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
                        <Route {...allProps} path="/dashboard" render={() => this.restrictedRoutes(Dashboard, allProps)} />
                        <Route exact path="/post" component={Post} />
                        <Route exact path="/about" component={About} />
                        <Route component={FourOhFour} />
                    </Switch>
                </div>

                <Footer />
                
            </div>
        )
    }
}

export default App;