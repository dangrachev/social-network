import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={style.navigation}>
            <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/messages' activeClassName={style.active}>Messages</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/feeds' activeClassName={style.active}>Feeds</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/music' activeClassName={style.active}>Music</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/settings' activeClassName={style.active}>Settings</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;