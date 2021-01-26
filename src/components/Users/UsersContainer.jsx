import {connect} from "react-redux";

import {followAction, setUsersAC, unfollowAction} from "../../redux/users-reducer";
import Users from "./UsersС";


let mapStateToProps = (state) => {
    return {
        users:state.usersPage.users
    }
}
let mapDispatchToProps = (dispatch) => {
    return{
        follow: (userId) => {
            dispatch(followAction(userId))
        },
        unfollow: (userId) => {
          dispatch(unfollowAction(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
    }
}

export default connect(mapStateToProps,mapDispatchToProps) (Users);