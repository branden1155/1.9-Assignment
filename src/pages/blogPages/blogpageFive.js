import React from "react";
import './blogpageStyles.css'
import SaltImage from '../../images/123.png'


function BlogFive() {
    return(
        <div className="blogoneContainer">
            <div className="blogoneHero">
                <img className="blogoneImage" alt="mongoDB" src={SaltImage}></img>
                <div className="blogoneInfo">
                    <span className="blogoneTitle">The ins and outs of Password Hashing</span>
                    <span className="blogoneDetails">The importance of keeping peoples passwords locked away safely is never more important to a developer! Storing passwords is very risk and sometimes complex when it comes to the how's and do's. Most importantly, you don't want youre passwords to be cleartext. Which means you don't want it to be in a readable text. That's where Hashing/salting comes in. Many big names such as Bcrypt and SHA help with this by helping create quick to use hashing or salting libraries thats easy to understand and also to use. Fun fact! Did you know that Hashing refers to choppin items into small pieces? That's why we refer to hashing passwords and sending the data as a jumbled up mess!</span>
                    <a href="/" className="backLink">Back</a>
                </div>
            </div>
        </div>
    )
}

export default BlogFive;