const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

let initialState = {

    messagePost: [{url: '1', message: 'hi', like: '4'},
        {url: '2', message: 'privet', like: '1'},
        {url: '3', message: 'go', like: '2'}],
    newPostText: 'NewMessage'
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {url: '5', message: state.newPostText, like: '42'};
            return {
                ...state,
                newPostText: '',
                messagePost: [...state.messagePost, newPost]
            }
        case UPDATE_NEW_POST:
            return {
                ...state,
                newPostText: action.newText
            }
        default:
            return state;

    }

}
export const addPostAction = () => ({type: ADD_POST})
export const updatePostAction = (text) =>
    ({type: UPDATE_NEW_POST, newText: text})
export default profileReducer;