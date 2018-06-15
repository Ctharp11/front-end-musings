import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';

import Activity from './Activity';
import AccountInfo from './AccountInfo';
import Delete from './Delete';

class Dashboard extends Component {
    constructor () {
        super();
        this.state = {
            userInfo: null

        }
    }

    componentDidMount() {
        const userInfo = JSON.parse(sessionStorage.getItem('signUpInfo'));
        this.setState({ userInfo });
    }

    render () {

        if (this.state.userInfo === null) {
            return null
        }

        return (
            <div className="containers dashboard"> 
                <div className="dashboard-head"> Welcome {this.state.userInfo.name}! </div>
                <div className="dashboard-menu"> 
                    <ul className="dashboard-menu-list">

                        <Link to="/dashboard/activity"> 
                            <li className="dashboard-menu-list-item"> Your Activity </li>
                        </Link>

                        <Link to="/dashboard/account-info"> 
                            <li className="dashboard-menu-list-item"> Your Account Information </li> 
                        </Link>

                        <Link to="/dashboard/delete"> 
                            <li className="dashboard-menu-list-item"> Delete your account </li> 
                        </Link>

                    </ul>
                </div>
                <Route path='/dashboard/activity' component={Activity} />
                <Route path='/dashboard/account-info' component={AccountInfo} />
                <Route path='/dashboard/delete' component={Delete} />
            </div>
        )
    }
}

export default Dashboard;