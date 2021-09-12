import React from "react";
import { useState } from "react";
import Group from '../../store/Group.9.mod.png';
import './index.css';

function Login() {

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
    // handle input form submission
    function handleInputSubmission(e) {
        // useEffect(() => {
        //     setAppState({ loading: true });
        //     const apiUrl = 'https://api.github.com/users/hacktivist123/repos';
        //     axios.get(apiUrl).then((repos) => {
        //         const allRepos = repos.data;
        //         setAppState({ loading: false, repos: allRepos });
        //     });
        // }, [setAppState]);


        const url = 'http://jsonplaceholder.typicode.com/users';
    }


    return (
        <div>
            <div className="login_container">
                <div className="login_image">
                    <img src={Group} alt="" />
                </div>
                <div className="login_form_div">
                    <form action="" onSubmit={handleInputSubmission}>
                        <h1>Sign In To Reflex ID</h1>
                        <p className="content1" >
                            Welcome Back!!
                        </p>
                        <p className="content1">
                            Please Sign In with the data you entered in your registration.
                        </p>
                        <div className="email_login" id="loginform-group">
                            <label htmlFor="">EMAIL</label>
                            <input
                                type="text"
                                name="Email"
                                label="Email"
                                value={values.Email}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <div id="loginform-group">
                            <label htmlFor="">PASSWORD</label>
                            <input
                                type="password"
                                name="Password"
                                label="Password"
                                value={values.Password}
                                onChange={handleInputChange}
                                required
                            />
                        </div>

                        <button className="login_submit" type="submit" value="" >
                            SIGN IN</button>

                        <p className="content2">Don't have an Account?  <a href="/sign-up">Sign Up</a></p>

                    </form>
                </div>

            </div>
        </div>
    );
}

export default Login;