import s from './MyPosts.module.css'

import Post from "./Post/Post";
import React from "react";

const MyPosts = (props) => {


    let postsElements =
        props.posts.map(p => <Post message={p.message} url={p.url} like={p.like}/>)

    return (
        <div className={s.postB}>
            <h3>post</h3>
            <div>
                <textarea/>
            </div>
            <div>
                <button>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts