import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const BlogTitles = () => {
    const posts = useSelector(state => state.posts)
    return (<div>
        <ul>
            {Object.values(posts).map( post => {
                return (<li key={post.id}>
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