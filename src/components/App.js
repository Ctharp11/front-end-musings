import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// COMPONENTS
import Home from './Home';
import Nav from './Nav';

class App extends Component {
    render() {
        return(
            <div>
                <Nav />
                <Switch>
                    <Route path="/" component={Home} /> 
                </Switch>
            </div>
        )
    }
}

export default App;