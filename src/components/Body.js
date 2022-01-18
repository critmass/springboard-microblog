import React, { useState } from "react";
import AllRoutes from "./AllRoutes";
import BlogContext from "./BlogContext";
import NavBar from "./NavBar";

const Body = () => {
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])
    return (<div>
        <BlogContext.Provider value={{posts, setPosts, comments, setComments}}>
            <NavBar/>
            <AllRoutes/>
        </BlogContext.Provider>
    </div>)
}

export default Body