import React, { Component } from 'react';
import { iframely } from '../../services/iframely';

class Post extends Component {
    constructor() {
        super();
        this.state = {
            article: '',
            title: '',
            description: '',
            img: false,
            icon: '',
            date: '',
            source: ''
        }
    }

    handleChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value })
    } 

    handleSubmit = (e) => {
        e.preventDefault()
        iframely(this.state.article)
            .then(res => { 
                return res.json()
            })
            .then((myJson, index) => {
                this.props.postSetState(myJson)
                const title = myJson.meta.title;
                const img = myJson.links.thumbnail[0].href;
                this.setState({ 
                    title,
                    img
                })
               
            });
    }

    render () {
        console.log(this.props)
        return ( 
            <div className="container post">  
                <form className="form-main" onSubmit={this.handleSubmit}> 
                    <div> Post an article </div>
                    <input className="form-main-input" name="article" onChange={this.handleChange} /> 
                    <button className="form-main-button"> Save </button>
                </form>
                <div> {this.state.title} </div>
                {!this.state.img 
                    ? 
                    null 
                    : 
                    <img src={this.state.img} alt="story" />
                } 
            </div>
        )
    }
}

export default Post;