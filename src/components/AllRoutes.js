import React from "react";
import { Route, Switch } from "react-router";
import BlogTitles from "./BlogTitles";
import NewPost from "./NewPost";
import Post from "./Post";

const AllRoutes = () => {
    return (<Switch>
        <Route exact path="/">
            <BlogTitles/>
        </Route>
        <Route exact path="/new">
            <NewPost/>
        </Route>
        <Route path="/post/:postId">
            <Post/>
        </Route>
    </Switch>)
}

export default AllRoutes