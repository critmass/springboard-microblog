import React from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";
import { removeComment } from "../actionMaker/commentActionMaker";


const Comment = ({id, content}) => {
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(removeComment(id))
    }

    return (<div>
        <Button onClick={handleClick}>X</Button>
        {content}
    </div>)
}

export default Comment