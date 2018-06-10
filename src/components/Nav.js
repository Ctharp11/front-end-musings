import React from 'react';
import { Link } from 'react-router-dom';

const Nav = (props) => (
    <div className="nav box-shadow">  
    {console.log(props)}

        <div className="nav-header"> <Link to="/"> Front End Musings </Link> </div> 

        <div className="nav-content"> 
            <div className="nav-content-create-post hover"> Create Post </div> 
            <div className="nav-content-profile hover"> My Profile </div>
            <div className="nav-content-auth hover"> Sign Up / Log In </div>
        </div>
    </div>
)

export default Nav;