import { combineReducers } from "redux"
import posts from "./postReducer"
import comments from "./commentReducer"

const rootRuducer = combineReducers({posts, comments})

export default rootRuducer