import React from "react"
import "./homepage.css"
import Post from "./post"


const Homepage = ({setLoginUser}) => {
    return (
        <>
        <Post/>
        <div className="homepage">
            <h1>Hello,10x academy</h1>
            <div className="button" onClick={() => setLoginUser({})} >Logout</div>
        </div>
        </>
    )
}

export default Homepage