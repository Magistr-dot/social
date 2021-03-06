import {authAPI} from "../API/api";

const SET_USER_DATA = 'SET_USER_DATA'
const UNFOLLOW = 'UNFOLLOW'


let initialState = {

    userId: null,
    login: null,
    email: null,
    isFetching: false,
    isAuth: false

}

const authReducer = (state = initialState, action) => {

    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }


        default:
            return state;

    }
}

export const setUserData = (userId, email, login) => ({type: SET_USER_DATA, data: {userId, email, login}})

export const getAuthData = () => (dispatch) => {
    authAPI.me().then(response => {

        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setUserData(id, email, login))
        }

    })
}


export default authReducer