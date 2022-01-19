import React, { useState } from "react";
import InputGroupBundle from "./InputGroupBundle";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { addComment } from "../actionMaker/commentActionMaker";

const AddComment = ({postId}) => {
    const dispatch = useDispatch()
    const [content, setContent] = useState("")

    const handleChange = e => {
        const {value} = e.target
        setContent(value)
    }

    const handleSubmit = () => {
        dispatch(addComment(postId, content))
        setContent("")
    }

    return (<div>
        <InputGroupBundle
            label="Comment"
            name="comment"
            value={content}
            onChange={handleChange}
        /><br />
        <Button onClick={handleSubmit}>
            Add Comment
        </Button>
    </div>)
}

export default AddComment