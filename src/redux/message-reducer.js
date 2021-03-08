const ADD_MESSAGE = 'ADD-MESSAGE';

let initialState = {

    messageData: [{url: '1', message: '1111', own: "no"},
        {url: '2', message: '2222', own: "yes"},
        {url: '3', message: '3333', own: "no"}],
    dialogsData: [{url: 'dialogs/1', name: 'Sasa122', ava: ""},
        {url: 'dialogs/2', name: 'Sasa2', ava: ''},
        {url: 'dialogs/3', name: 'Sasa3', ava: ''}]

}

const messageReducer = (state = initialState, action) => {



    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {url: '6', message: action.newMessageBody, own: "yes"};
            return {
                ...state,
                messageData: [...state.messageData, newMessage]
            };
        default:
            return state;
    }
}

export const addMessageAction = (newMessageBody) => ({type: ADD_MESSAGE, newMessageBody})



export default messageReducer;