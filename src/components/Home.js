import React, { Component } from 'react';

import Tags from './Tags';
import Post from './Post/Post';

class Home extends Component {
    render() {
        return (
            <div className="containers home">  
                <Tags />
                <Post />
            </div>
        )
    }
}

export default Home;