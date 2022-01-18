import React, { useState } from "react";
import AllRoutes from "./AllRoutes";
import BlogContext from "./BlogContext";
import NavBar from "./NavBar";

const Body = () => {
    const [posts, setPosts] = useState([])
    return (<div>
        <BlogContext.Provider value={{posts, setPosts}}>
            <NavBar/>
            <AllRoutes/>
        </BlogContext.Provider>
    </div>)
}

export default Body