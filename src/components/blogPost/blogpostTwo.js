import React from "react";
import './blogStyle.css'
import BlogImage from "../../images/mongo-mysql.png"
import { Link } from "react-router-dom";

function BlogTwo(){
    return(
        <div className="blogCard">
    <a href="#">
        <img className="image" src={BlogImage} alt="blogImage" />
    </a>
    <div className="blogcardInfo">
        <a href="#">
            <h5 className="blogcardTitle">The Differences of MongoDB and MySQL</h5>
        </a>
        <p className="blogcardDetails">At first, I was seriously confused on the differences between MongoDB and MySQL. Now I can gladly say, they are very different from eachother.</p>
        <Link to="/BlogpageTwo" className="readmoreTag">Read more</Link>
    </div>
</div>
    )
}

export default BlogTwo;