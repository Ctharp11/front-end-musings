import React, { Component } from 'react';

import Tags from './Tags';
import PostSnippet from './Post/PostSnippet';

class Home extends Component {
    render() {
        return (
            <div className="containers home">  
                <Tags />
                <PostSnippet />
            </div>
        )
    }
}

export default Home;