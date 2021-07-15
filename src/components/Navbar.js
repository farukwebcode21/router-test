import React from 'react';
import {NavLink} from 'react-router-dom'

const Navbar = () => { 
    return (
        <nav className="navbarStyle"> 
            <ul>
                <li>
                    <NavLink exact to="/" activeStyle={{fontWeight:'bold', color:'red'}}>Home</NavLink>
                </li>
                <li>
                    <NavLink exact to="/about" activeStyle={{fontWeight:'bold', color:'red'}}>About</NavLink>
                </li>
                <li>
                    <NavLink exact  to="/service" activeStyle={{fontWeight:'bold', color:'red'}}>Service</NavLink>
                </li>
                <li>
                    <NavLink exact to="/contact" activeStyle={{fontWeight:'bold', color:'red'}}>Contact</NavLink>
                </li>
                <li>
                    <NavLink exact to="/posts/js" activeStyle={{fontWeight:'bold', color:'red'}}>Posts</NavLink>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;