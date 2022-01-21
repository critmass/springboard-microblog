import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import PostVoteController from "./PostVoteController";

const BlogTitles = () => {
    const posts = useSelector(state => state.posts)
    return (<div>
        <ul>
            {Object.values(posts).sort((a, b) => {
                return b.votes - a.votes
            }).map( post => {
                return (<li key={post.id}>
                    <NavLink exact to={`/post/${post.id}`}>
                        <span>
                            {post.title}
                        </span>
                    </NavLink>: {post.description}
                    <PostVoteController
                                    votes={post.votes}
                                    postId={post.id}
                    />
                </li>)
            })}
        </ul>
    </div>)
}

export default BlogTitles