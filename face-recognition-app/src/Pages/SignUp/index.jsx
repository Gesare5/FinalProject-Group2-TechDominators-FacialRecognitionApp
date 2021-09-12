import React from 'react';
import Group from '../../store/Group 14.svg';
import './index.css';

function SignUp() {
    return (
        <div>
            <div className="main-sign-up">
                <div className="sign_up_container">
                    <form action="">
                        <div classname="sign_group">
                            <label htmlFor="">FIRST NAME</label>
                            <input type="text" required />
                        </div>
                        <div>
                            <label htmlFor="">LAST NAME</label>
                            <input type="text"
                                required />
                        </div>
                        <div className="email_sign_up">
                            <label htmlFor="">EMAIL</label>
                            <input
                                required
                                type="text" />
                        </div>
                        <div>
                            <label htmlFor="">PASSWORD</label>
                            <input type="text" required />
                        </div>
                        <div>
                            <label htmlFor="">CONFIRM PASSWORD</label>
                            <input type="text"
                                required />
                        </div>

                        <button className="sign_up_submit" type="submit" value="" >
                            SIGN UP</button>

                        <p>Already have an Account?  <a href="">Sign In</a></p>
                    </form>
                    <div className="sign_up_image">
                        <img src={Group} alt="" />
                        <h1>Experience the brand new Reflex ID</h1>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;