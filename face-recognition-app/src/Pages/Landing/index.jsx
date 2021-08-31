import React from 'react';
import faceone from  '../../store/faceone.svg';
//import classes from '/landing.module.css';


import './index.css';

function Landing() {
    return (
        <div className="reflexid">
        <h2>Facial Recognition</h2>
        <h2>App for Schools</h2>
        <p>Reflex ID provides schools a more secured</p>
        <p>verification platform for parents and guardians</p>
        <p>come over to pick up their wards from schools</p>

<button className="btn">Sign Up Now</button>

<img src={faceone} alt="" />
        
</div>
    );
}

export default Landing;