import React from 'react';
import Eye from './eye.jpg';

function Footer(){
    return (
        <nav className="navbar fixed-bottom navbar-light bg-light">
            @amiraliazim, all rights reserved
            <span class="navbar-brand">
                <img src={Eye} 
                width="50px"
                height="50px"
                class="d-inline-block align-top"
                alt="Eye"/>
            </span>

        </nav>
    )
}

export default Footer;