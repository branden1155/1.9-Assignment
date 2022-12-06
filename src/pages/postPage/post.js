import React from "react";
import './post.css'

function Post() {

    function Submit(){
        return(
            alert("Post was Created!")
        )
    }

    return(
        <div className="postPage">
            <div className="postContainer">
                <div className="postInfo">
                    <div className="postTitle">
                        <h5 className="posttitleSub">Write a new Post!</h5>
                    </div>
                </div>
                <form id="form">
                    <input className="inputTitle" type="text" placeholder="Title to your Post..."></input>
                    <input className="inputDescription" type="text" placeholder="Your Post..."></input>
                </form>
                <div className="buttonContainer">
                    <button className="button" type="submit" onClick={Submit}>Post</button>
                </div>
            </div>
        </div>
    )
}

export default Post;