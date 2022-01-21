import Reach from "react"
import { Button } from "reactstrap"
import { voteDown, voteUp } from "../actionMaker/postActionMaker"
import { useDispatch } from "react-redux"

const PostVoteController = ({votes, postId}) => {

    const dispatch = useDispatch()

    const handleVote = e => {
        const {name} = e.target

        if(name === "voteUp") {
            dispatch(voteUp(postId))
        }
        else {
            dispatch(voteDown(postId))
        }
    }

    return (<div>
        <Button name="voteUp" onClick={handleVote}>Up</Button>
        {votes}
        <Button name="voteDown" onClick={handleVote}>Down</Button>
    </div>)
}

export default PostVoteController