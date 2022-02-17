import style from './Navbar.module.css'
import {NavLink} from 'react-router-dom';
import SidebarFriends from './SidebarFiends/SidebarFriends';


const Navbar = (props) => {

    // mapping friendsList into components
    let friendsList = props.sidebar.friendsList.map( friend => <SidebarFriends key={friend.id} id={friend.id} name={friend.name}/> )

    return (
        <nav className={style.navigation}>
            <div className={style.item}>
                <NavLink to='/profile' activeClassName={style.active}>Profile</NavLink>
            </div>
            <div className={style.item}>
                <NavLink to='/users' activeClassName={style.active}>Users</NavLink>
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

            <div className={style.friendsWrap}>
                <h3>Friends</h3>
                {friendsList}
            </div>
        </nav>
    );
}

export default Navbar;