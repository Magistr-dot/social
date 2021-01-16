import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";
import classes from "../../Navbar/Navbar.module.css";

const DialogItem = (props) => {


    return (
        <div className={s.item}>
            <NavLink  to={`${props.url}`}> {props.ava} {props.name}</NavLink>
        </div>
    )

}


export default DialogItem