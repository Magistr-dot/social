const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST = 'UPDATE-NEW-POST';

const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {url: '5', message: state.newPostText, like: '42'};
            state.messagePost.push(newPost);
            state.newPostText = '';

            return state;
        case UPDATE_NEW_POST:
            state.newPostText = action.newText;

            return state;
        default:
            return state;

    }

}
export const addPostAction = () => ({type: ADD_POST})
export const updatePostAction = (text) =>
    ({type: UPDATE_NEW_POST, newText:text})
export default profileReducer;