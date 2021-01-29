const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT = 'SET_CURRENT'
const SET_TOTAL = 'SET_TOTAL'
const TOGGLE_FETCHING = 'TOGGLE_FETCHING'

let initialState = {
    users: [],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false

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
            return {...state, totalUsersCount:action.totalCount}
        }
        case TOGGLE_FETCHING: {
            return {...state, isFetching:action.isFetching}
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

export default usersReducer;