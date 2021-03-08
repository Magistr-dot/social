import {profileAPI, userAPI} from "../API/api";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {

    messagePost: [{url: '1', message: 'hi', like: '4'},
        {url: '2', message: 'privet', like: '1'},
        {url: '3', message: 'go', like: '2'}],
    profile: null,
    status: ""
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {url: '5', message: action.newPostText, like: '42'};
            return {
                ...state,
                newPostText: '',
                messagePost: [...state.messagePost, newPost]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
            case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        default:
            return state;

    }

}
export const addPostAction = (newPostText) => ({type: ADD_POST, newPostText})
export const setStatus = (status) => ({type: SET_STATUS, status})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (id) => (dispatch) => {
    userAPI.getProfile(id).then(response => {

        dispatch(setUserProfile(response.data))
    })

}
export const getStatus = (id) => (dispatch) => {
    profileAPI.getStatus(id).then(response => {

        dispatch(setStatus(response.data))
    })

}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setStatus(status))
        }

    })

}
export default profileReducer;