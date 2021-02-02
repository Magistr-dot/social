import {connect} from "react-redux";

import {
    follow,
    setFetchingAC,
    setPageAC,
    setTotalCountAC,
    setUsersAC, toggleFollowing,
    unfollowAction
} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {getUsers, userAPI} from "../../API/api";

class UsersContainer extends React.Component {

    componentDidMount() {

        this.props.nowIsFetching(true)

        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.nowIsFetching(false)
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount)

        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setPage(pageNumber);
        this.props.nowIsFetching(true)
        userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.nowIsFetching(false)
            this.props.setUsers(data.items);
        })

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
                   users={this.props.users}/>
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

export default connect(mapStateToProps, {
    follow,
    unfollow: unfollowAction,
    setUsers: setUsersAC,
    setPage: setPageAC,
    setTotalCount:setTotalCountAC,
    nowIsFetching:setFetchingAC,
    toggleFollowing
})(UsersContainer);