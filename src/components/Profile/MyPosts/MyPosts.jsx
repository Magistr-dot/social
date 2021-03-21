import s from './MyPosts.module.css'
import Post from "./Post/Post";
import React from "react";
import {Field, reduxForm} from "redux-form";
import {maxCreator, required} from "../../../utils/validators/validators";
import {Textarea} from "../../common/Forms/FormsControls";

const max10 = maxCreator(10)

let AddNewPostForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name="newPostText"
                validate={[required, max10]}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>

    )
}

AddNewPostForm = reduxForm({form: "Profile"})(AddNewPostForm)

const MyPosts = (props) => {
    let onAddPost = (values) => {
        props.onAddPost(values.newPostText);
    }

    let postsElements =
        props.posts.messagePost.map(p => <Post message={p.message} url={p.url} like={p.like}/>)
    return (
        <div className={s.postB}>
            <h3>post</h3>
            <AddNewPostForm onSubmit={onAddPost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    );
}


export default MyPosts