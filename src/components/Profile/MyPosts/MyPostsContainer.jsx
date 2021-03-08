import React from "react";
import MyPosts from "./MyPosts";
import {addPostAction} from "../../../redux/profile-reducer";
import {connect} from "react-redux";


let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage,
        posts: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: (newPostText) => {
            dispatch(addPostAction(newPostText))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);


export default MyPostsContainer