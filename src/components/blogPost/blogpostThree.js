import React from "react";
import './blogStyle.css'
import VueImage from "../../images/vue-image.jpg"
import { Link } from "react-router-dom";

function BlogThree(){
    return(
        <div className="blogCard">
    <a href="#">
        <img className="image" src={VueImage} alt="blogImage" />
    </a>
    <div className="blogcardInfo">
        <a href="#">
            <h5 className="blogcardTitle">What is Vue and how does it really work?</h5>
        </a>
        <p className="blogcardDetails">As I continue my learning adventure through learning librarys such as ReactJS and Tailwind, I constantly here of a also popular library called Vue. What is it, and how does it work?</p>
        <Link to="/BlogpageThree" className="readmoreTag">Read more</Link>
    </div>
</div>
    )
}

export default BlogThree;