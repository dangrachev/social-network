import React from "react";
import style from './Header.module.css'
import {NavLink} from "react-router-dom";

const Header = (props) => {
    return (
        <header className={style.header}>
            <img className={style.logo} src="https://cdn.iconscout.com/icon/free/png-256/react-2336950-1982831.png"
                 alt="logo"/>
            <div className={style.loginBlock}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Login</NavLink>}
            </div>
        </header>
    );
}

export default Header;