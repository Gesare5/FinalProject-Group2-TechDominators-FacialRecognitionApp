import React from 'react';
import './index.css';

function Navbar() {
    return (
        <div className="nav-bar">
            <nav>
                <ul>
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#login">Login</a>
                    </li>
                    <li>
                        <a href="#sign-up">Sign Up</a>
                    </li>
                </ul>
            </nav>

        </div>
    );
}

export default Navbar;