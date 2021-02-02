import {userAPI} from "../API/api";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT = 'SET_CURRENT'
const SET_TOTAL = 'SET_TOTAL'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'
const TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    following: [2, 3]

}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u
                })
            }

        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u
                })
            }
        case SET_USERS: {
            return {...state, users: action.users}
        }
        case SET_CURRENT: {
            return {...state, currentPage: action.currentPage}
        }
        case SET_TOTAL: {
            return {...state, totalUsersCount: action.totalCount}
        }
        case TOGGLE_FETCHING: {
            return {...state, isFetching: action.isFetching}
        }
        case TOGGLE_FOLLOWING: {
            return {
                ...state,
                following: action.isFetching
                    ? [...state.following, action.userId]
                    : state.following.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }

}

export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollowAction = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (users) => ({type: SET_USERS, users})
export const setPageAC = (currentPage) => ({type: SET_CURRENT, currentPage})
export const setTotalCountAC = (totalCount) => ({type: SET_TOTAL, totalCount})
export const setFetchingAC = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export const toggleFollowing = (isFetching, userId) => ({type: TOGGLE_FOLLOWING, isFetching, userId})

export const getUsersThunkCreator = (currentPage, pageSize) =>  {
    return (dispatch) => {
        dispatch(setFetchingAC(true))

        userAPI.getUsers (currentPage, pageSize).then(data => {
            dispatch(setFetchingAC(false))
            dispatch(setUsersAC(data.items))
            dispatch(setTotalCountAC(data.totalCount))

        })
    }
}
export const unfollowThunk = (id) =>  {
    return (dispatch) => {
        dispatch(toggleFollowing(true, id))

        userAPI.unfollow(id).then(data => {

            if (data.resultCode === 0) {

                dispatch(unfollowAction(id))
                dispatch(toggleFollowing(false, id))
            }
        })
    }
}
export const followThunk = (id) =>  {
    return (dispatch) => {
        dispatch(toggleFollowing(true, id))

        userAPI.follow(id).then(data => {

            if (data.resultCode === 0) {

                dispatch(follow(id))
                dispatch(toggleFollowing(false, id))
            }
        })
    }
}

export default usersReducer;