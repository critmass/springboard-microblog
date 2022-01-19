import { ADD_COMMENT, REMOVE_COMMENT } from "../actionMaker/actionList";

const INITIAL_STATE = []

const comments = (state=INITIAL_STATE, action) => {
    switch (action.type) {
        case ADD_COMMENT:
            const {postId, content, id} = action
            return [...state, {postId, content, id}]
        case REMOVE_COMMENT:
            return state.filter(
                comment => comment.id !== action.id)
        default:
            return state
    }
}

export default comments