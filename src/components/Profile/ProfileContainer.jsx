import React from 'react'
import Profile from "./Profile";
import * as axios from "axios";
import {connect} from "react-redux";
import {setUserProfile} from "../../redux/profile-reducer";
import {withRouter} from "react-router";


class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId =2
        }
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then(response => {

            this.props.setUserProfile(response.data)


        })
    }

    render() {

debugger
        return (
            <div>
                <Profile  {...this.props} profile = {this.props.profile}/>

            </div>
        )
    }


}
let mapStateToProps = (state) => ({
    profile:state.profilePage.profile
})

let URLData = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUserProfile}) (URLData)