import s from './MyPosts.module.css'

import Post from "./Post/Post";
import React from "react";
import {addPostAction, updatePostAction} from "../../../redux/profile-reducer";



const MyPosts = (props) => {
    let newPost = React.createRef()

    let addPost = () => {

        props.dispatch(addPostAction())

    }

    let onPostChange = () => {
        let text = newPost.current.value;
        let newVar = updatePostAction(text);
        props.dispatch(newVar);

    }
    let postsElements =
        props.posts.map(p => <Post message={p.message} url={p.url} like={p.like}/>)

    return (
        <div className={s.postB}>
            <h3>post</h3>

            <div>
                <textarea value={props.newPostText} onChange={onPostChange} ref = {newPost}/>
            </div>

            <div>
                <button onClick={ addPost }>Add post</button>
            </div>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}
export default MyPosts