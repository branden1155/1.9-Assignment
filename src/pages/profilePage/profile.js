import React from "react";
import "./profile.css"

function Profile() {

    function Login(){
        return(
            alert("You have Logged in!")
        )
    }

    return(
        <div className="profileContainer">
            <div className="profileHero">
                <div>
                    <h5 className="title">Sign-Up</h5>
                </div>
                <form className="formContainer">
                    <label className="formLabel">Username:</label>
                    <input className="inputUsername" type="text" placeholder="Username..."></input>
                    <label className="formLabel">Password:</label>
                    <input className="inputPassword" type="text" placeholder="Password..."></input>
                </form>
                <div className="loginTips">
                    <a href="#" className="forgotPass">Forgot Your Password?</a>
                    <a href="#" className="signupText">Sign-up</a>
                </div>
                <button className="buttonProfile" type="submit" onClick={Login}>Log-in</button>
            </div>
        </div>
    )
}

export default Profile