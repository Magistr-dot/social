import React from 'react'
import classes from './Navbar.module.css'
import {NavLink} from "react-router-dom";
import s from "../Profile/MyPosts/Post/Post.module.css";


const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <div className={`${classes.item} ${classes.active}`}>
                <NavLink to="/dialogs" activeClassName = {classes.active}>Dialogs</NavLink>
            </div>
            <div className={classes.item}>
                <div>
                    <NavLink to="/profile" activeClassName = {classes.active}>Profile</NavLink>
                </div>
                <div className={`${classes.item}`}>
                    <NavLink to="/news" activeClassName = {classes.active}>News</NavLink>
                </div>
                <div>
                    <NavLink to ="/contact" activeClassName = {classes.active}>Contact</NavLink>
                </div>
            </div>
        </nav>
    );


}
export default Navbar