import React from "react";
import {addMessageAction, updateMessageAction} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewDialogs: (body) => {
            dispatch(updateMessageAction(body))
        },
        addPost: () => {
            dispatch(addMessageAction())
        }
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer