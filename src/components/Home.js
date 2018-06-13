import React, { Component } from 'react';

import Tags from './Tags';
import PostSnippet from './Post/PostSnippet';

class Home extends Component {
    render() {
        console.log('home', this.props)
        return (
            <div className="containers home">  
                <Tags />
                <PostSnippet />
            </div>
        )
    }
}

export default Home;