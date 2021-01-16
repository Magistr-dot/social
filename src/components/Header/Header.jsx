import React from 'react'
import s from './Header.module.css'

const Header = () => {
    return (
        <header className={s.header}>
            <img
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/HP_New_Logo_2D.svg/868px-HP_New_Logo_2D.svg.png'
                alt=""/>
        </header>

    );


}
export default Header