import React, { useContext } from "react";
import { Button } from "reactstrap";
import BlogContext from "./BlogContext";

const Comment = ({id, content}) => {
    const {comments, setComments} = useContext(BlogContext)

    const handleClick = () => {
        const index = comments.findIndex(comment => comment.id === id)
        setComments(comments => [...comments.splice(index)])
    }

    return (<div>
        <Button onClick={handleClick}>X</Button>
        {content}
    </div>)
}

export default Comment