import React, { useContext, useState } from "react";
import BlogContext from "./BlogContext";
import {v4 as uuid} from "uuid"

const blankInputs = { title: "", description: "", content: "" }

const NewPost = (postInputs=blankInputs) => {
    const {setPosts} = useContext(BlogContext)
    const [inputs, setInputs] = useState({...postInputs})

    const handleChange = e => {
        const {name, value} = e.target
        setInputs(oldInputs => ({...oldInputs, [name]:value}))
    }

    const handleSubmit = () => {
        setPosts(posts => [...posts, {...inputs, id:uuid(), comments:[]} ])
        setInputs({...postInputs})
    }

    return (<div>
        <InputGroupBundle
            label="Title"
            name="title"
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