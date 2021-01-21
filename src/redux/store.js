/*
import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import friendReducer from "./friend-reducer";



let store = {

    _state: {
        profilePage: {
            messagePost: [{url: '1', message: 'hi', like: '4'},
                {url: '2', message: 'pivet', like: '1'},
                {url: '3', message: 'gogogo', like: '2'}],
            newPostText: 'fwwwhhfff'
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
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.messagePage = messageReducer(this._state.messagePage, action)
        this._state.friendReducer = friendReducer(this._state.friendPage, action)
        this._callSubscriber(this._state)
       /!* switch (action.type) {
            case ADD_POST:
                let newPost = {url: '5', message: this._state.profilePage.newPostText, like: '42'};
                this._state.profilePage.messagePost.push(newPost);
                this._state.profilePage.newPostText = '';
                this._callSubscriber(this._state)
                break;
            case UPDATE_NEW_POST:
                this._state.profilePage.newPostText = action.newText;
                this._callSubscriber(this._state)
                break;
            case ADD_MESSAGE:
                let newMessage = {url: '6', message: this._state.messagePage.newMessageText, own: "yes"};
                this._state.messagePage.messageData.push(newMessage);
                this._state.messagePage.newMessageText = '';
                this._callSubscriber(this._state)
                break;
            case UPDATE_NEW_MESSAGE:
                this._state.messagePage.newMessageText = action.newMessage;
                this._callSubscriber(this._state)
                break;
        }*!/

        /!*            let newMessage1 = this._state.messagePage.newMessageText;
                    this._state.messagePage.newMessageText = '';
                    this._state.messagePage.messageData.push({url: '6', message: newMessage, own: "yes"})
                    this._callSubscriber(this._state)*!/
        }



}





export default store

window.state = store*/
