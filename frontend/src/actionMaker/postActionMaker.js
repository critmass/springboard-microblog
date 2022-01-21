import axios from "axios"
import {
    ADD_POST,
    EDIT_POST,
    GET_POSTS,
    REMOVE_POST,
    VOTE
} from "./actionList"

const API_URL = process.env.REACT_APP_API_URL ||
    "http://localhost:5000/api/posts";


const addedPost = (id, title, description, content, votes) => {
    return {
        type:ADD_POST,
        post:{title, description, content, id, votes}
    }
}

const addPost = (title, description, content) => {
    const addPost2API = async dispatch => {
        const {data} = await axios.post(`${API_URL}`,
                                    {title, description, body:content})
        dispatch(
            addedPost(
                data.id,
                data.title,
                data.description,
                data.body,
                data.votes
        ))
    }
    return addPost2API
}

const editedPost = (id, title, description, content, votes) => {
    return {
        type:EDIT_POST,
        post:{id, title, description, content, votes}
    }
}

const editPost = (id, title, description, content) => {
    const editPostOnAPI = async dispatch => {
        const {data} = await axios.put(`${API_URL}/${id}`,
                                    {title, description, body:content})
        dispatch(editedPost(
            data.id,
            data.title,
            data.description,
            data.body,
            data.votes
        ))
    }
    return editPostOnAPI
}

const removedPost = (postId) => {
    return { type:REMOVE_POST, postId }
}

const removePost = postId => {
    const removePostFromAPI = async dispatch => {
        await axios.delete(`${API_URL}/${postId}`)
        dispatch(removedPost(postId))
    }
    return removePostFromAPI
}

const getPosts = () => {
    const getPostsFromAPI = async dispatch => {
        const { data } = await axios.get(API_URL)
        dispatch({ type:GET_POSTS, posts:{} })
        data.forEach(datam => {
            dispatch(addedPost(
                datam.id,
                datam.title,
                datam.description,
                datam.body,
                datam.votes
            ))
        });
    }
    return getPostsFromAPI
}

const voted = (id, votes) => {
    return {type:VOTE, id, votes}
}

const voteUp = postId => {
    const voteUpOnAPI = async dispatch => {
        const {data} = await axios.post(
                                `${API_URL}/${postId}/vote/up`)
        dispatch(voted(postId, data.votes))
    }
    return voteUpOnAPI
}

const voteDown = postId => {
    const voteUpOnAPI = async dispatch => {
        const {data} = await axios.post(
                                `${API_URL}/${postId}/vote/down`)
        dispatch(voted(postId, data.votes))
    }
    return voteUpOnAPI
}


export {addPost, editPost, removePost, getPosts, voteDown, voteUp}