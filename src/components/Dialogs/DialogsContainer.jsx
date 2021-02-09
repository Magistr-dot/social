import React from "react";
import {addMessageAction, updateMessageAction} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage,
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



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect)(Dialogs)
