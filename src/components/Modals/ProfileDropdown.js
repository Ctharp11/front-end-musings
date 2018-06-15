import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 

class ProfileDropDown extends Component {
    constructor() {
        super();
        this.state = {
            showDropdown: false
        }
    }

    signout = () => {
        this.toggleShowDropdown();
        this.props.logout();
    }

    toggleShowDropdown = () => {
        this.setState({ showDropdown: !this.state.showDropdown });
    }

    


    render() {
        return (
            <div> 
                <div className="nav-content-profile" onMouseEnter={this.toggleShowDropdown} > 
                    <Link to="dashboard" > My Profile </Link> 
                    
                   
                </div>

                 {this.state.showDropdown 
                        ?
                            <div className="nav-content-profile-dropdown" onMouseLeave={this.toggleShowDropdown}>
                            
                                <Link to="/dashboard" className="nav-content-profile-dropdown-link" onClick={this.toggleShowDropdown}>
                                     My Activity      
                                </Link> 

                                <Link to="/dashboard/details" className="nav-content-profile-dropdown-link" onClick={this.toggleShowDropdown}>
                                    My Account Details 
                                </Link>

                                <div className="nav-content-profile-dropdown-link nav-content-profile-dropdown-signout" onClick={this.signout}> Sign Out </div>
                            </div>
                        :
                            null
                    }

            </div>
        )
    }
    
}

export default ProfileDropDown;