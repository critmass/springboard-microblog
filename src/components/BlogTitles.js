import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import BlogContext from "./BlogContext";

const BlogTitles = () => {
    const {posts} = useContext(BlogContext)
    return (<div>
        <ul>
            {posts.map( post => {
                return (<li>
                    <NavLink exact to={`/post/${post.id}`}>
                        <span>
                            {post.title}
                        </span>
                    </NavLink>: {post.description}
                </li>)
            })}
        </ul>
    </div>)
}

export default BlogTitles