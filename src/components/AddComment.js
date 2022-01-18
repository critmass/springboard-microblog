import React, { useContext, useState } from "react";
import BlogContext from "./BlogContext";

const AddComment = (postId) => {
    const {setComments} = useContext(BlogContext)
    const [content, setContent] = useState("")

    const handleChange = e => {
        const {value} = e.target
        setContent(value)
    }

    const handleSubmit = () => {
        setComments(comments =>
            [...comments, {content, id:uuid(), postId}])
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