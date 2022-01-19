import {v4 as uuid} from "uuid"
import { ADD_POST, EDIT_POST, REMOVE_POST } from "./actionList"

const addPost = (title, description, content) => {
    const id = uuid()
    return {
        type:ADD_POST, post:{title, description, content, id}
    }
}

const editPost = (id, title, description, content) => {
    return {
        type:EDIT_POST, post:{id, title, description, content}
    }
}

const removePost = (postId) => {
    return {type:REMOVE_POST, postId}
}

export {addPost, editPost, removePost}