const ADD_POST = 'ADD-POST';
const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let store = {

    _state: {
        profilePage: {
            messagePost: [{url: '1', message: 'hi', like: '4'},
                {url: '2', message: 'pivet', like: '1'},
                {url: '3', message: 'gogogo', like: '2'}],
            newPostText: 'fwwwfff'
        },
        messagePage: {
            messageData: [{url: '1', message: '1111', own: "no"},
                {url: '2', message: '2222', own: "yes"},
                {url: '3', message: '3333', own: "no"}],
            dialogsData: [{url: 'dialogs/1', name: 'Sasa122', ava: ""},
                {url: 'dialogs/2', name: 'Sasa2', ava: ''},
                {url: 'dialogs/3', name: 'Sasa3', ava: ''}],
            newMessageText: 'fwwwfff'
        },
        friendPage: {
            friends: [{id: '1', name: 'Sveta'},
                {id: '2', name: 'Nika'},
                {id: '3', name: 'Vika'}]
        }


    },
    _callSubscriber() {
        console.log('Change')
    },

    getState() {
        return this._state
    },
    subscribe  (observer)  {
        this._callSubscriber = observer
    },



    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {url: '5', message: this._state.profilePage.newPostText, like: '42'};
            this._state.profilePage.messagePost.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_POST) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state)
        }else if (action.type === ADD_MESSAGE) {
            let newMessage = {url: '6', message: this._state.messagePage.newMessageText, own: "yes"};
            this._state.messagePage.messageData.push(newMessage);
            this._state.messagePage.newMessageText = '';
            this._callSubscriber(this._state)
        } else if (action.type === UPDATE_NEW_MESSAGE) {
            this._state.messagePage.newMessageText = action.newMessage;
            this._callSubscriber(this._state)
        }

/*            let newMessage1 = this._state.messagePage.newMessageText;
            this._state.messagePage.newMessageText = '';
            this._state.messagePage.messageData.push({url: '6', message: newMessage, own: "yes"})
            this._callSubscriber(this._state)*/
        }



}

export const addPostAction = () => ({type: ADD_POST})
export const updatePostAction = (text) =>
    ({type: UPDATE_NEW_POST, newText:text})

export const addMessageAction = () => ({type: ADD_MESSAGE})
export const updateMessageAction = (text) =>
    ({type: UPDATE_NEW_MESSAGE, newMessage:text})



export default store

window.state = store