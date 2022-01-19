import React from "react";
import { Switch, Route } from "react-router-dom";
import BlogTitles from "./BlogTitles";
import NewPost from "./NewPost";
import Post from "./Post";

const blankInputs = { title: "", description: "", content: "" }

const AllRoutes = () => {
    return (<Switch>
        <Route exact path="/">
            <BlogTitles/>
        </Route>
        <Route exact path="/new">
            <NewPost postInputs={blankInputs}/>
        </Route>
        <Route path="/post/:postId">
            <Post/>
        </Route>
    </Switch>)
}

export default AllRoutes