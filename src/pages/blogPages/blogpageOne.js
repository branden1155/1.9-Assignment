import React from "react";
import './blogpageStyles.css'
import MongoImage from '../../images/mongo-mysql.png'


function BlogOne() {
    return(
        <div className="blogoneContainer">
            <div className="blogoneHero">
                <img className="blogoneImage" alt="mongoDB Image" src={MongoImage}></img>
                <div className="blogoneInfo">
                    <span className="blogoneTitle">The Differences of MongoDB and MySQL</span>
                    <span className="blogoneDetails">From my recent research I've learned that MySQL is a relational database while MongoDB is a non-relational database system. While most developers like to prefer MongoDB for its simplistic and easy to use system, MySQL allows easy for more complex and detailed data systems. Once you have become knowledgable the principles it becomes more practical </span>
                    <a href="/" className="backLink">Back</a>
                </div>
            </div>
        </div>
    )
}

export default BlogOne;