import {connect} from "react-redux";

import {
    follow,
    setFetchingAC,
    setPageAC,
    setTotalCountAC,
    setUsersAC,
    unfollowAction
} from "../../redux/users-reducer";
import React from "react";
import * as axios from "axios";
import Users from "./Users";
import loader from "../../assets/images/spinner-loader.gif";
import Preloader from "../common/Preloader/Preloader";

class UsersAPI extends React.Component {

    componentDidMount() {
        debugger
        this.props.nowIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.nowIsFetching(false)
            this.props.setUsers(response.data.items);
            this.props.setTotalCount(response.data.totalCount)

        })
    }

    onPageChanged = (pageNumber) => {
        this.props.setPage(pageNumber);
        this.props.nowIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.nowIsFetching(false)
            this.props.setUsers(response.data.items);
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
        isFetching: state.usersPage.isFetching
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
    nowIsFetching:setFetchingAC
})(UsersAPI);