import React from "react";
import './blogpageStyles.css'
import ReactNative from '../../images/reactNative.png'


function BlogFour() {
    return(
        <div className="blogoneContainer">
            <div className="blogoneHero">
                <img className="blogoneImage" alt="mongoDB" src={ReactNative}></img>
                <div className="blogoneInfo">
                    <span className="blogoneTitle">My Journey of Learning React Native</span>
                    <span className="blogoneDetails">Recently, I have been learning the in's and out's of React Native. Its a easy yet extensive Mobile JavaScript Library. I have been learning React Native's Router system and also its quick core components! I would like to say that I'm very intrigued by Natives quick components that allow you to map over list with such ease, and also creating easy to design buttons and creative input text. Back to Natives Routing System, Native uses components call React Navigation. Pretty obvious right? React Navigator allows you travel your application through stacked navigation containers and also allows you to easily edit and customize headers and styles regarding your navigators. To sum it all up, I'm enjoying learning React Native so far... But for now, I still have a lot to learn!  </span>
                    <a href="/" className="backLink">Back</a>
                </div>
            </div>
        </div>
    )
}

export default BlogFour;