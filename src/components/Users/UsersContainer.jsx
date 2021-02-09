import {connect} from "react-redux";

import {
    follow, followThunk, getUsersThunkCreator,
    setFetchingAC,
    setPageAC,
    setTotalCountAC,
    setUsersAC, toggleFollowing,
    unfollowAction, unfollowThunk
} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {getUsers, userAPI} from "../../API/api";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsersThunkCreator(pageNumber,this.props.pageSize)
    }

    render() {

        return <>
            {this.props.isFetching ? <Preloader/> : null}
            <Users totalUsersCount={this.props.totalUsersCount}
                   pageSize={this.props.pageSize}
                   currentPage={this.props.currentPage}
                   onPageChanged={this.onPageChanged}
                   follow={this.props.follow}
                   unfollow={this.props.unfollow}
                   toggleFollowing={this.props.toggleFollowing}
                   following = {this.props.following}
                   users={this.props.users}
                   followThunk = {this.props.followThunk}
                   unfollowThunk = {this.props.unfollowThunk}/>
        </>

    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        following: state.usersPage.following
    }
}
/*let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAction(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAction(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setPage: (pageNumber) => {
            dispatch(setPageAC(pageNumber))
        },
        setTotalCount: (totalCount) => {
            dispatch(setTotalCountAC(totalCount))
        },
        nowIsFetching: (isFetching) => {
            dispatch(setFetchingAC(isFetching))
        }
    }
}*/

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, {
        follow,
        unfollow: unfollowAction,
        setPage: setPageAC,
        toggleFollowing,
        getUsersThunkCreator,
        followThunk,
        unfollowThunk
    })
)(UsersContainer)