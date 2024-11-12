import React from "react";
import './CSS/LoginSignup.css'

const LoginSignup = () => {
    return(
        <div className="loginsignup">
            <div className="loginsignup-container">
                <h1>Sign Up</h1>
                <div className="loginsignup-filelds">
                    <input type="text" name="" id="" placeholder="Enter Your Name"/>
                    <input type="email" name="" id="" placeholder="Enter Your Email Id" />
                    <input type="password" name="" id="" placeholder="Password"/>
                </div>
                <button>Continue</button>
                <p className="loginsignup-login">Already have an account ?  <span>Login Here</span></p>
                <div className="loginsignup-agree">
                    <input type="checkbox" name="" id="" />
                    <p>By continuing, I agree to use the terms of use & privacy policy</p>
                </div>
            </div>
        </div>
    )
}
export default LoginSignup