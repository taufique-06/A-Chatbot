import React from "react";

const Login = () => {
    return (
        <div className="formContainer">
            <div className="formWrapper">
                <span className="logo">Welcome to Family!</span>
                <span className="pageTitle">Login</span>
                <form>
                    <input type= "email" placeholder = "What's your email?"/>
                    <input type= "password" placeholder = "Password"/>
                    <button>Sign in</button>
                </form>
                <p>Dont have an account with us? Register</p>
            </div>
        </div>
    );
};

export default Login;