import React from 'react';
import { Link } from 'react-router-dom'; 

const DropDown = (props) => (
    <div> 
        <div className="nav-content-profile"> <Link to="dashboard"> My Profile </Link> </div>
    </div>
)

export default DropDown;