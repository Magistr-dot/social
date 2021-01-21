const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

const messageReducer = (state, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {url: '6', message: state.newMessageText, own: "yes"};
            state.messageData.push(newMessage);
            state.newMessageText = '';

            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;
    }
}

export const addMessageAction = () => ({type: ADD_MESSAGE})
export const updateMessageAction = (text) =>
    ({type: UPDATE_NEW_MESSAGE, newMessage:text})


export default messageReducer;