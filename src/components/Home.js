import React, { Component } from 'react';

import Tags from './Tags';
import Post from './Post/Post';
import Rules from './Rules';

class Home extends Component {
    render() {
        return (
            <div className="home">  
                <Tags />
                <Post />
                <Rules />
            </div>
        )
    }
}

export default Home;