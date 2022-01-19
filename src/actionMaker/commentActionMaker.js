import {v4 as uuid} from "uuid"
import { ADD_COMMENT, REMOVE_COMMENT } from "./actionList"

const addComment = (postId, content) => {
    return {
        type:ADD_COMMENT, postId, content, id:uuid()
    }
}

const removeComment = (id) => {
    return {
        type:REMOVE_COMMENT, id
    }
}

export {addComment, removeComment}