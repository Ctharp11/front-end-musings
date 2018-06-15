import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles/App.css'
import { Router } from 'react-router';

import createHistory from 'history/createBrowserHistory';

const history = createHistory({})

ReactDOM.render(
    <Router history={history}>
        < App />
    </Router>, 
    document.getElementById('root'
))