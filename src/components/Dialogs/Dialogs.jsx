import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";
import {addMessageAction, updateMessageAction} from "../../redux/state";


const Dialogs = (props) => {

    let newPost = React.createRef()
    let newMessageBody = props.state.messageData.newMessageText

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateMessageAction(body))
    }

    let addPost = () => {
        props.store.dispatch(addMessageAction())
        let text = newPost.current.value
        alert(text)
    }

    let dialogsElements =
        props.dialogsData.map(dialog => <DialogItem name={dialog.name} url={dialog.url} ava={dialog.ava}/>);

    let messagesElements = props.messageData
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