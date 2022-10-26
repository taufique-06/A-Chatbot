import React from "react";

const Register = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Welcome to Family!</span>
                <span className="pageTitle">Register</span>
                <form>
                    <input type= "text" placeholder = "Could I get your name please?"/>
                    <input type= "email" placeholder = "What's your email?"/>
                    <input type= "password" placeholder = "Password"/>
                    <input type= "file" id="file"/>
                    <label htmlFor="file">
                        <span>Click here to add an avatar</span>
                    </label>
                    <button>Sign up</button>
                </form>
                <p>Have an account with us? Sign in</p>
            </div>
        </div>
    );
};

export default Register;