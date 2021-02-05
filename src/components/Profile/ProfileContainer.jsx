import React from 'react'
import Profile from "./Profile";
import {connect} from "react-redux";
import {getUserProfile} from "../../redux/profile-reducer";
import {Redirect, withRouter} from "react-router";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 2
        }
        this.props.getUserProfile(userId)

    }

    render() {


        return (
            <div>
                <Profile  {...this.props} profile={this.props.profile}/>

            </div>
        )
    }


}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isAuth: state.auth.isAuth
})

let URLData = withRouter(AuthRedirectComponent)


export default connect(mapStateToProps, {getUserProfile})(URLData)