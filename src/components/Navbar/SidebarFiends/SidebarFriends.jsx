import style from './SidebarFriends.module.css';
import {NavLink} from 'react-router-dom';
import defaultAvatar from './../../../assets/img/defaultAvatar.png'


const SidebarFriends = (props) => {

    let path = `/messages/${props.id}`;

    return (
        <div className={style.sidebarFriends}>
            <img className={style.userAvatar} src={defaultAvatar}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}


export default SidebarFriends;