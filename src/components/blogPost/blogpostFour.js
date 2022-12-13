import React from "react";
import './blogStyle.css'
import ReactNative from '../../images/reactNative.png'
import { Link } from "react-router-dom";

function BlogFour(){
    return(
        <div className="blogCard">
    <a href="#">
        <img className="image" src={ReactNative} alt="blogImage" />
    </a>
    <div className="blogcardInfo">
        <a href="#">
            <h5 className="blogcardTitle">My Journey of Learning React Native</h5>
        </a>
        <p className="blogcardDetails">Have you ever heard of React Native? Well, Recently I have began my journey of learning the in's and out's of Natives quick and easy components that would make anyone love React!</p>
        <Link to="/BlogpageFour" className="readmoreTag">Read more</Link>
    </div>
</div>
    )
}

export default BlogFour;