import React from "react";
import './blogpageStyles.css'
import APIImage from "../../images/apiImage.png"

function BlogThree() {
    return(
        <div className="blogoneContainer">
            <div className="blogoneHero">
                <img className="blogoneImage" alt="mongoDB" src={APIImage}></img>
                <div className="blogoneInfo">
                    <span className="blogoneTitle">Learning what's in Important when it comes to API's</span>
                    <span className="blogoneDetails">As I continue my learning adventure through learning React API's. One of the most important idea/tip that has really helped me in my adventure is Project folder Structuing. When I first started attempting to write API's I created my folders without a care in the world. Files started getting jumbled up into a massive mess. Thats where Folder Structuing comes in. This allows you to evenly organize and space out your code into specific files. The most common way that people do this is by using a component-centric structure. Creating Component like structures similar to React coding. This is a great help when you run into coding bugs, or errors. Having a good file structure helps you locate and fix them with ease. Im eager add this into my coding practice! </span>
                    <a href="/" className="backLink">Back</a>
                </div>
            </div>
        </div>
    )
}

export default BlogThree;