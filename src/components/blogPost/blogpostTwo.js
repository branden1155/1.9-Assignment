import React from "react";
import './blogStyle.css'
import ReactImage from '../../images/react-logo.jpg'
import { Link } from "react-router-dom";

function BlogTwo(){
    return(
        <div className="blogCard">
    <a href="#">
        <img className="image" src={ReactImage} alt="blogImage" />
    </a>
    <div className="blogcardInfo">
        <a href="#">
            <h5 className="blogcardTitle">The Best qualities of ReactJS and its Uses</h5>
        </a>
        <p className="blogcardDetails">When I first started learning React, I was estatic to learn how JavaScript can be so easy to understand and use. What people such as myself commonly get mixed us is, React is a Library not a framework.</p>
        <Link to="/BlogpageTwo" className="readmoreTag">Read more</Link>
    </div>
</div>
    )
}

export default BlogTwo;