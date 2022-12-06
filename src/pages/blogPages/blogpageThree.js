import React from "react";
import './blogpageStyles.css'
import VueImage from "../../images/vue-image.jpg"

function BlogThree() {
    return(
        <div className="blogoneContainer">
            <div className="blogoneHero">
                <img className="blogoneImage" alt="mongoDB Image" src={VueImage}></img>
                <div className="blogoneInfo">
                    <span className="blogoneTitle">What is Vue and how does it really work?</span>
                    <span className="blogoneDetails">As I continue my learning adventure through learning librarys such as ReactJS and Tailwind, I constantly here of a also popular library called Vue. What is it, and how does it work? Vue is similar to React in a way. Allowing for quick and precise front-end creations utilizing HTML and CSS. While Vue and React share a lot of similiarities, Vue seems to share a much more in-depth community with more documentation following/backing it up. Personally, I'm excited to learn more about Vue and the ways of its library!</span>
                    <a href="/" className="backLink">Back</a>
                </div>
            </div>
        </div>
    )
}

export default BlogThree;