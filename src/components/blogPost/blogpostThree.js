import React from "react";
import './blogStyle.css'
import APIImage from "../../images/apiImage.png"
import { Link } from "react-router-dom";

function BlogThree(){
    return(
        <div className="blogCard">
    <a href="#">
        <img className="image" src={APIImage} alt="blogImage" />
    </a>
    <div className="blogcardInfo">
        <a href="#">
            <h5 className="blogcardTitle">Learning what's in Important when it comes to API's</h5>
        </a>
        <p className="blogcardDetails">During this week, I watched many videos explaing the the different important aspects of React API's, and today I'll show you what to look for, and how to utilize them when you need them!</p>
        <Link to="/BlogpageThree" className="readmoreTag">Read more</Link>
    </div>
</div>
    )
}

export default BlogThree;