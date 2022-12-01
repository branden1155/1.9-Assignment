import React from "react";
import { Link } from "react-router-dom";
import "./headerStyle.css";
import Avatar from "../../images/avatar.png"


function Header(){
    return(
        <div className="headerContainer">
            <div className="logoTitle">
                <a href="/">Journey</a>
            </div>
            <section className="navLinks">
                <li>
                    <Link className="navLinks" to="/Home">Home</Link>
                    <Link className="navLinks" to="/Post">Post</Link>
                    <Link className="navLinks" to="/Profile">Profile</Link>
                </li>
            </section>
            <div className="profileAvatar">
                <img className="avatar" src={Avatar} alt="profile"/>
                 <div className="signupContainer">
                    <Link className="signupTitle" to="/Profile">Sign-up</Link>
                    <Link className="loginTitle" to="/Profile">Log-in</Link>
                 </div>
            </div>
        </div>
    )
}

export default Header;