import s from './../Dialogs.module.css'




const Message = (props) => {
    return (
        <div className={s.my}> {props.text} </div>,
        <div className={s.message}> {props.text} </div>
    )


}

export default Message