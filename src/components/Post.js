import React, { useContext } from "react";
import { useParams } from "react-router";
import AddComment from "./AddComment";
import BlogContext from "./BlogContext";

const Post = () => {
    const {postId} = useParams()
    const {posts} = useContext(BlogContext)

    const post = posts.find(p => postId === p.id)

    return (<div>
        <h1 >{post.title}</h1>
        <h4>{post.description}</h4>
        <div>
            {post.content}
        </div>
        <div>
            <AddComment postId={post.id}/>
        </div>
        <ul>
            {post.comments.map(comment => {
                return (<li>
                    <Comment
                        content={comment.content}
                        id={comment.id}
                        postId={post.id}
                    />
                </li>)
            })}
        </ul>
    </div>)
}

export default Post