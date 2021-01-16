import s from './Dialogs.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";


const Dialogs = (props) => {

    let dialogsElements =
        props.dialogsData.map(dialog => <DialogItem name={dialog.name} url={dialog.url} ava ={dialog.ava}/> );

    let  messagesElements = props.messageData
        .map(message => <Message text={message.message} url={message.url}/>)

    return (
        <div>
            <div className={s.dialogs}>
                <div className={s.dialogsItem}>
                    {dialogsElements}
                </div>
                <div className={s.messages}>
                    {messagesElements}
                </div>
            </div>
        </div>
    )
}
export default Dialogs