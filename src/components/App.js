import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// COMPONENTS
import AuthModal from './Modals/AuthModal';
import Home from './Home';
import Nav from './Nav';
import Post from './Post/Post';

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
            <div>
                <Nav { ...allProps } />
                <Switch>
                    <Route path="/" component={Home} /> 
                    <Route path="/post" component={Post} />
                </Switch>
                {!this.state.show
                    ? null
                    :
                    <AuthModal />
                }
                
            </div>
        )
    }
}

export default App;