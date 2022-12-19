import React from "react";
import './blogpageStyles.css'
import ReactImage from '../../images/react-logo.jpg'

function BlogTwo() {
    return(
        <div className="blogoneContainer">
            <div className="blogoneHero">
                <img className="blogoneImage" alt="mongoDB" src={ReactImage}></img>
                <div className="blogoneInfo">
                    <span className="blogoneTitle">The Best Qualities of ReactJS</span>
                    <span className="blogoneDetails">When I first started learning React, I was estatic to learn how JavaScript can be so easy to understand and use. What people such as myself commonly get mixed us is, React is a Library not a framework. React has made coding alot more flexible and most importantly quicker. One major key aspect that belongs to react is its reusable components. This allows you to create key components of an application and re-use them over and over when needed. </span>
                    <a href="/" className="backLink">Back</a>
                </div>
            </div>
        </div>
    )
}

export default BlogTwo;