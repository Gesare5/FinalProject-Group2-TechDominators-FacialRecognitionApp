import React from 'react';
import classes from './Navbar.module.css';
import {Link} from 'react-router-dom';
import logo from '../../store/logo.svg';
import logo2 from  '../../store/logo2.svg';
import ss from  '../../store/ss.svg';
//import {Router} from 'react-router-dom';

function Navbar() {
    return (
    
        <header className={classes.header}>

        <div className={classes.navbar}>
            <nav>
        <img src={logo2} alt="" />
        <img src={logo} alt="" />
        <br></br>
        <img src={ss} alt="" />
        
                <ul>
                    <li>
                        <Link to ='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/services'>Services</Link>
                    </li>
                    <li>
                        <Link to='/Login'>Login</Link>
                    </li>
                    <li>
                        <Link to='/sign-up'>Sign Up</Link>
                    </li>
                </ul>
            
            </nav>

        </div>
        </header>
    
    );
}

export default Navbar;