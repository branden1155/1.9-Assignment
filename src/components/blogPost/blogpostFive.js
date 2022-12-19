import React from "react";
import './blogStyle.css'
import SaltImage from '../../images/123.png'
import { Link } from "react-router-dom";

function BlogFive(){
    return(
        <div className="blogCard">
    <a href="#">
        <img className="image" src={SaltImage} alt="blogImage" />
    </a>
    <div className="blogcardInfo">
        <a href="#">
            <h5 className="blogcardTitle">The Ins and Outs of Password Hashing</h5>
        </a>
        <p className="blogcardDetails">Pass the salt?! The Importance of Password hasing is extremely important when it comes to keeping peoples data safe and locked away. Click read more to find out all about the salt!</p>
        <Link to="/BlogpageFive" className="readmoreTag">Read more</Link>
    </div>
</div>
    )
}

export default BlogFive;