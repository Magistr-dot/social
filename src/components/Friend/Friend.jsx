import s from './Friend.module.css'
import Fr from "./Fr/Fr";
import React from "react";

const Friend = (props) => {

    let postFriends =
        props.friends.map(p => <Fr id={p.id} name={p.nav}/>)
    return (
            <div className={`${s.item}`}>
                {postFriends}
            </div>
    );
}
export default Friend