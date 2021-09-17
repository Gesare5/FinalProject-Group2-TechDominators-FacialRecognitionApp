import React from 'react';
import contactimg from '../../store/contactimg.svg';
import './index.css';




function Contactus() {
    return (
<div>

<img className="ctimg" src={contactimg} alt=""/>


<div className="stylecontacts">
<h1>Get in touch for more enquires</h1>
<br></br>
<h4>Leave us a message, we will get back to you shortly</h4>

<br></br>
<br></br>
<br></br>

<p>FullName</p>
<input className="inputs" placeholder="Enter your fullname"></input>
<br></br>
<br></br>
<br></br>

<p>Email Address</p>
<input className="inputs" type="text"  placeholder="Email"></input>

<br></br>
<br></br>
<br></br>

<p>Message</p>
<input className="inputs3" type="text" placeholder="Type your message"></input>

<button className="btn-ct">Send</button>

</div>
</div>

    );
}
export default Contactus;