import { ADD_POST, EDIT_POST, REMOVE_POST } from "../actionMaker/actionList";

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
        default:
            return state;
    }
}

export default posts