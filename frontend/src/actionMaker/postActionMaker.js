import axios from "axios"
import {
    ADD_POST,
    EDIT_POST,
    GET_POSTS,
    REMOVE_POST
} from "./actionList"

const API_URL = process.env.REACT_APP_API_URL ||
    "http://localhost:5000/api/posts";


const addedPost = (id, title, description, content) => {
    return { type:ADD_POST, post:{title, description, content, id} }
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
                data.body
        ))
    }
    return addPost2API
}

const editedPost = (id, title, description, content) => {
    return { type:EDIT_POST, post:{id, title, description, content} }
}

const editPost = (id, title, description, content) => {
    const editPostOnAPI = async dispatch => {
        const {data} = await axios.put(`${API_URL}/${id}`,
                                    {title, description, body:content})
        dispatch(editedPost(
            data.id,
            data.title,
            data.description,
            data.body
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
        data.forEach(datam => {
            dispatch(addedPost(
                datam.id,
                datam.title,
                datam.description,
                datam.body
            ))
        });
    }
    return getPostsFromAPI
}

export {addPost, editPost, removePost, getPosts}