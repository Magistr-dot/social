import s from './Fr.module.css'

import React from "react";

const Fr = (props) => {

    return (
            <div className={`${s.item}`}>
                {props.id}
                <img src='https://get.wallhere.com/photo/face-women-model-portrait-hat-photography-fashion-Person-skin-romance-girl-beauty-eye-woman-lady-photograph-portrait-photography-photo-shoot-organ-128165.jpg'/>
                {props.name}
            </div>
    );
}
export default Fr