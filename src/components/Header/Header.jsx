import style from './Header.module.css'

const Header = () => {
    return (
            <header className={style.header}>
                <img className={style.logo} src="https://cdn.iconscout.com/icon/free/png-256/react-2336950-1982831.png"
                     alt="logo"/>
            </header>
    );
}

export default Header;