import React from 'react'
import s from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={s.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/HP_New_Logo_2D.svg/868px-HP_New_Logo_2D.svg.png'
                alt=""/>

            <div className={s.loginBlock}>
                {props.isAuth ? props.login :
                    <NavLink to={'/login'}>

                    </NavLink>}

            </div>

        </header>

    );


}
export default Header