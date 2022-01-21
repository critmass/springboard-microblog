import React from "react";
import { useParams } from "react-router";
import AddComment from "./AddComment";
import Comment from "./Comment";
import { useSelector } from "react-redux";
import PostVoteController from "./PostVoteController";

const Post = () => {
    const {postId} = useParams()
    const {posts, comments} = useSelector(state=>state)

    const post = posts[postId]

    return (<div>
        <h1>{post.title}</h1>
        <h4>{post.description}</h4>
        <div>
            {post.content}
        </div>
        <AddComment postId={post.id}/>
        <PostVoteController votes={post.votes} postId={post.id}/>
        <ul>
            {comments.filter(
                comment => comment.postId === post.id).map(
                    comment => {
                        return (<li>
                            <Comment
                                content={comment.content}
                                id={comment.id}
                                key={comment.id}
                                postId={post.id}
                            />
                    </li>)
            })}
        </ul>
    </div>)
}

export default Post