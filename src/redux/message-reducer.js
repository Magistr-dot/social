const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {

        messageData: [{url: '1', message: '1111', own: "no"},
            {url: '2', message: '2222', own: "yes"},
            {url: '3', message: '3333', own: "no"}],
        dialogsData: [{url: 'dialogs/1', name: 'Sasa122', ava: ""},
            {url: 'dialogs/2', name: 'Sasa2', ava: ''},
            {url: 'dialogs/3', name: 'Sasa3', ava: ''}],
        newMessageText: 'fwwwfff'

}

const messageReducer = (state = initialState, action) => {
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