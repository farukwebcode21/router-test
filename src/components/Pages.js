import React from 'react';
import {NavLink} from 'react-router-dom'

const Pages = () => {
    return (
        <div>
            <ul className="navbar">
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
                <li>
                    <NavLink exact to="/pages" activeStyle={{fontWeight:'bold', color:'red'}}>Pages</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Pages;