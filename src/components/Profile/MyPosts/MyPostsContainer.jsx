import React from "react";
import MyPosts from "./MyPosts";
import {addPostAction, updatePostAction} from "../../../redux/profile-reducer";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage,
        posts: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updatePostAction(text));
        },
        onAddPost: () => {
            dispatch(addPostAction())
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer