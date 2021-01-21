import React from "react";
import MyPosts from "./MyPosts";
import {addPostAction, updatePostAction} from "../../../redux/profile-reducer";


const MyPostsContainer = (props) => {
    let addPost = () => {
        props.dispatch(addPostAction())
    }
    let onPostChange = (text) => {
        let newVar = updatePostAction(text);
        props.dispatch(newVar);
    }
    return (
        <MyPosts updateNewPostText={onPostChange} onAddPost={addPost} posts = {props.post}/>
    );
}
export default MyPostsContainer