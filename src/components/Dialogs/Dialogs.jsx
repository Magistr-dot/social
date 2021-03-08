import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {Redirect} from "react-router";
import {Field, reduxForm} from "redux-form";


const Dialogs = (props) => {

    let state = props.messagePage
    

    let addPost = (values) => {

        props.addPost(values.newMessageBody)
    }

    let dialogsElements =
        state.dialogsData.map(dialog => <DialogItem name={dialog.name} url={dialog.url} ava={dialog.ava}/>);

    let messagesElements = state.messageData
        .map(message => <Message text={message.message} url={message.url}/>)

    if (!props.isAuth) return <Redirect to={"/login"}/>
    return (

            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>


                </div>
                <AddMessageFormRedux onSubmit={addPost}/>
            </div>

    )
}
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component="textarea" name = "newMessageBody" placeholder="Enter your message"/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>
    )
}

const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)
export default Dialogs