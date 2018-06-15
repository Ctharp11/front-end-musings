import React, { Component } from 'react';

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
            <div className="containers dashboard"> Welcome {this.state.userInfo.name}! </div>
        )
    }
}

export default Dashboard;