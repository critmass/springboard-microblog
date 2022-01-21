import {
    ADD_POST,
    EDIT_POST,
    GET_POSTS,
    REMOVE_POST,
    VOTE
} from "../actionMaker/actionList";

const INITIAL_STATE = {}

const posts = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_POST:
            return {...state, [action.post.id]:{...action.post}}
        case EDIT_POST:
            return {...state, [action.post.id]:{...action.post}}
        case REMOVE_POST:
            const newState = {...state}
            delete newState[action.postId]
            return {...newState}
        case GET_POSTS:
            return action.posts
        case VOTE:
            return {
                ...state,
                [action.id]:{...state[action.id], votes:action.votes}
            }
        default:
            return state;
    }
}

export default posts