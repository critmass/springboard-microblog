import React, { useState } from "react";
import InputGroupBundle from "./InputGroupBundle";
import { Button } from "reactstrap";
import { useHistory } from "react-router"
import { useDispatch } from "react-redux";
import { addPost } from "../actionMaker/postActionMaker";

const NewPost = (postInputs) => {
    const dispatch = useDispatch()
    const history = useHistory()
    const [inputs, setInputs] = useState({...postInputs})

    const handleChange = e => {
        const {name, value} = e.target
        setInputs(oldInputs => ({...oldInputs, [name]:value}))
    }

    const handleSubmit = () => {
        const { title, description, content } = inputs
        dispatch(addPost(title, description, content))
        history.push("/")
    }

    return (<div>
        <InputGroupBundle
            label="Title"
            name ="title"
            value={inputs.title}
            onChange={handleChange}
        /><br />
        <InputGroupBundle
            label="Description"
            name="description"
            value={inputs.description}
            onChange={handleChange}
        /><br />
        <InputGroupBundle
            label="Content"
            name="content"
            type="textarea"
            value={inputs.content}
            onChange={handleChange}
        /><br />
        <Button onClick={handleSubmit}>
            Submit
        </Button>
    </div>)
}

export default NewPost