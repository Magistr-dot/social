import React from 'react'
import s from './ProfileInfo.module.css'
import Preloader from "../../common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";

const ProfileInfo = (props) => {
    let yes
    if(!props.profile) {
        return <Preloader/>
    }
    
    if (props.profile.lookingForAJob) {
        yes = "yes, im looking job"
    } else yes = "no, thx"
    return (
        <div>
{/*            <div>
                <img src='https://cdn.pixabay.com/photo/2017/03/04/19/54/mountain-range-2116871__480.jpg'/>
            </div>*/}
            <ProfileStatus status={props.status} updateStatus = {props.updateStatus}/>
            <div className={s.descriptionB}>
                <img src={props.profile.photos.large}/>

                <div>
                    Name - {props.profile.fullName}
                    Looking job - {yes}
                </div>

            </div>
        </div>
    );


}
export default ProfileInfo