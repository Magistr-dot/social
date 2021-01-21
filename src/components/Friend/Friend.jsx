import s from './Friend.module.css'
import Fr from "./Fr/Fr";
import React from "react";

const Friend = (props) => {
    let postFriends =
        props.friends1.friends.map(p => <Fr id={p.id} name={p.name}/>)
    return (
            <div className={`${s.item}`}>
                {postFriends}
            </div>
    );
}
export default Friend