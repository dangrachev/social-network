import style from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.navigation}>
            <div className={`${style.item} ${style.active}`}>
                <a>Profile</a>
            </div>
            <div className={style.item}>
                <a>Messages</a>
            </div>
            <div className={style.item}>
                <a>Feeds</a>
            </div>
            <div className={style.item}>
                <a>Music</a>
            </div>
            <div className={style.item}>
                <a>Settings</a>
            </div>
        </nav>
    );
}

export default Navbar;