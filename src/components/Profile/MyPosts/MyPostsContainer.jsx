import React from "react";
import MyPosts from "./MyPosts";
import {addPostAction, updatePostAction} from "../../../redux/profile-reducer";


const MyPostsContainer = (props) => {
    let state = props.store.getState();

    let addPost = () => {
        props.store.dispatch(addPostAction())
    }
    let onPostChange = (text) => {
        let newVar = updatePostAction(text);
        props.store.dispatch(newVar);
    }
    return (
        <MyPosts updateNewPostText={onPostChange} onAddPost={addPost} posts = {state.profilePage} newPostText={state.profilePage}/>
    );
};
export default MyPostsContainer