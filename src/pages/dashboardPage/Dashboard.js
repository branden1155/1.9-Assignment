import React from "react";
import "./dashboard.css"
import BlogOne from "../../components/blogPost/blogpostOne";
import BlogTwo from "../../components/blogPost/blogpostTwo";
import BlogThree from "../../components/blogPost/blogpostThree";

function Dashboard () {
    return (
        <div className="dashContainer">
            <div className="hero">
                <h5 className="blogdashTitle">Recent Blogs</h5>
                <div className="dashLayout">
                    <BlogOne />
                    <BlogTwo />
                    <BlogThree />
                </div>
            </div>
        </div>
    )
}

export default Dashboard;