import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getStatus, getUserProfile, updateStatus} from "../../redux/profile-reducer";
import {withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 14530
        }
        this.props.getUserProfile(userId)
        this.props.getStatus(userId)

    }

    render() {


        return (
            <div>
                <Profile  {...this.props} profile={this.props.profile} status = {this.props.status} updateStatus = {this.props.updateStatus}/>

            </div>
        )
    }


}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})


export default compose(
    connect(mapStateToProps, {getUserProfile, updateStatus, getStatus }),
    withRouter,
    withAuthRedirect
)(ProfileContainer)