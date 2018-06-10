import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => (
    <div className="nav box-shadow">  
    {console.log(props)}

        <div className="nav-header"> <Link to="/"> Front End Musings </Link> </div> 

        <div className="nav-content"> 
            <div className="nav-content-create-post"> <Link to="post"> <button className="button">  Create Post </button> </Link> </div> 
            <div className="nav-content-profile"> <Link to="dashboard"> My Profile </Link> </div>
            <div className="nav-content-auth hover" onClick={props.toggleAuthModal}> Sign Up / Log In </div>
        </div>
    </div>
)

export default Nav;