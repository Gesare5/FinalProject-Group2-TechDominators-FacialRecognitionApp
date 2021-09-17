import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../store/logo.svg';
import logo2 from '../../store/logo2.svg';
import ss from '../../store/ss.svg';
import classes from './Navbar2.module.css';
//import {Router} from 'react-router-dom';

function Navbar2() {
    return (

        <header className={classes.header}>

        <div className={classes.navbar}>
                     <nav>
                    
                     <img className= {classes.content} src={logo2} alt="" />
                     <img className= {classes.content2} src={logo} alt="" />
                     <br></br>
                 <img className= {classes.content3} src={ss} alt="" />
              
               
                 <ul>
                    <li><Link to='/' style={{textDecoration:'none'}} >Home </Link></li>
                    <li><Link to='/contactus' style={{textDecoration:'none'}}>Contact</Link></li>
                    <li><Link to='/services' style={{textDecoration:'none'}} >Services</Link></li>
                    <li> <Link to='/Testimonials' style={{textDecoration:'none'}} >Testimonials</Link></li>
                    <li><Link to='/sign-up' style={{textDecoration:'none'}} >Sign Up</Link></li> </ul>
            </nav>

        </div>
        </header>

    );
}

export default Navbar2;