import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageAction, updateMessageAction} from "../../redux/message-reducer";


const Dialogs = (props) => {

    let state = props.messagePage
debugger
    let newPost = React.createRef()
    let newMessageBody = state.newMessageText

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewDialogs(body)
    }

    let addPost = () => {
        props.addPost()
    }

    let dialogsElements =
        state.dialogsData.map(dialog => <DialogItem name={dialog.name} url={dialog.url} ava={dialog.ava}/>);

    let messagesElements = state.messageData
        .map(message => <Message text={message.message} url={message.url}/>)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    <div>{messagesElements}</div>
                    <div>
                        <textarea value={newMessageBody}
                                  onChange={onNewMessageChange} ref={newPost}/>
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Dialogs