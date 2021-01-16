import React from 'react'
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img src='https://cdn.pixabay.com/photo/2017/03/04/19/54/mountain-range-2116871__480.jpg'/>
            </div>
            <div className={s.descriptionB}>
                ava
            </div>
        </div>
    );


}
export default ProfileInfo