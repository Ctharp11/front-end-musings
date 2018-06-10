import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// COMPONENTS
import About from './About';
import AuthModal from './Modals/AuthModal';
import Home from './Home';
import Nav from './Nav';
import Post from './Post/Post';

import Footer from './Footer';

class App extends Component {
    constructor() {
        super();
        this.state={
            show: false
        }
    }

    toggleAuthModal = (show) => {
        console.log(show);
        // this.setState({ show: !this.state.show })
    }

    render() {
        const allProps = {
            show: this.state.show,
            toggleAuthModal: this.toggleAuthModal

        }

        return(
            <div className="app site">
                <div className="site-content">
                    <Nav { ...allProps } />
                    <Switch>
                        <Route exact path="/" component={Home} /> 
                        <Route exact path="/post" component={Post} />
                        <Route exact path="/about" component={About} />
                    </Switch>
                    {!this.state.show
                        ? null
                        :
                        <AuthModal />
                    }
                </div>

                <Footer />
                
            </div>
        )
    }
}

export default App;