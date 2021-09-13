import React from 'react';
import { useState } from 'react';
import Group from '../../store/Group 14.svg';
import './index.css';

function SignUp() {
    const initialValues = {
        Email: "",
        Password: ""
    };

    const [values, setValues] = useState(initialValues);
    // handle change function
    const handleInputChange = (e) => {

        const { name, value } = e.target;
        e.preventDefault();
        setValues({
            ...values,
            [name]: value,
        });
        console.log()
    };
    return (
        <div>
            <div className="main-sign-up">
                <div className="sign_up_container">

                    <form action="">
                        <h2>Sign Up</h2>
                        <a href="/" className="back-link">Back</a>
                        <div classname="sign_group">
                            <label htmlFor="">FIRST NAME</label>
                            <input
                                type="text"
                                name="Email"
                                label="Email"
                                value={values.Email}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            <label htmlFor="">LAST NAME</label>
                            <input type="text" required />

                        </div>
                        <div className="email_sign_up">
                            <label htmlFor="">EMAIL</label>
                            <input
                                required
                                type="text" />
                        </div>
                        <div>
                            <label htmlFor="">PASSWORD</label>
                            <input
                                type="text"
                                name="Password"
                                label="Password"
                                value={values.Password}
                                onChange={handleInputChange}
                                required />
                        </div>
                        <div>
                            <label htmlFor="">CONFIRM PASSWORD</label>
                            <input type="text"
                                required />
                        </div>
                        <div>
                            <input type="checkbox" className="checked" />
                            <span class="checkmark">I Agree to the terms and conditions</span>
                        </div>
                        <button className="sign_up_submit" type="submit" value="" >
                            SIGN UP</button>

                        <p>Already have an Account? <a href="/Login">Sign In</a></p>
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