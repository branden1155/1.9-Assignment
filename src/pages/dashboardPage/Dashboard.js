import React from "react";
import "./dashboard.css"
import BlogOne from "../../components/blogPost/blogpostOne";
import BlogTwo from "../../components/blogPost/blogpostTwo";
import BlogThree from "../../components/blogPost/blogpostThree";
import BlogFour from "../../components/blogPost/blogpostFour";
import BlogFive from "../../components/blogPost/blogpostFive";


function Dashboard () {
    return (
        <div className="dashContainer">
            <div className="hero">
                <h5 className="blogdashTitle">Recent Blogs</h5>
                <div className="dashLayout">
                    <BlogOne className="blogStyles"/>
                    <BlogTwo className="blogStyles"/>
                    <BlogThree className="blogStyles"/>
                    <BlogFour className="blogStyles"/>
                    <BlogFive className="blogStyles"/>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;