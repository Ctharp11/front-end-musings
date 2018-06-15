import React, { Component } from 'react';

class Activity extends Component {
    constructor() {
        super();
        this.state = {
            hasActivity: false
        }
    }

    render() {
        return (
            <div className="dashboard-container">
                <div className="dashboard-container-head"> Your Activity </div>

                Looks like you don't have any activity yet. 
                Click here to make a post!
                Things to include: 

                # Posts with list of Posts,
                Tags with number of times each one tagged,
                Comments made,
                Times people heart posts,
                Responses to Comments,
                Times upvoted
                Times downvoted with feedback

            </div>
        )
    }
}

export default Activity;