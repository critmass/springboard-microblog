import axios from "axios"
import { ADD_COMMENT, GET_COMMENTS, REMOVE_COMMENT } from "./actionList"

const API_URL = process.env.REACT_APP_API_URL ||
    "http://localhost:5000/api";

const addedComment = (id, postId, content) => {
    return {
        type:ADD_COMMENT, postId, content, id
    }
}

const addComment = (postId, text) => {
    const addComment2API = async dispatch => {
        const {data} = await axios.post(
                        `${API_URL}/posts/${postId}/comments`, {text})
        dispatch(
            addedComment(
                data.id,
                postId,
                data.text
            )
        )
    }
    return addComment2API
}

const removedComment = (id) => {
    return { type:REMOVE_COMMENT, id }
}

const removeComment = id => {
    const removeCommentFromAPI = async dispatch => {
        await axios.delete(`${API_URL}/comments/${id}`)
        dispatch(removedComment(id))
    }
    return removeCommentFromAPI
}

const gotComments = comments => {
    return { type:GET_COMMENTS, comments}
}

const getComments = () => {
    const getCommentsFromAPI = async dispatch => {
        const {data} = await axios.get(`${API_URL}/comments`)
        dispatch(gotComments(data.map(row => {
            return {
                id:row.id,
                content:row.text,
                postId:row.post_id
            }
        })))
    }
    return getCommentsFromAPI
}

export {addComment, removeComment, getComments}