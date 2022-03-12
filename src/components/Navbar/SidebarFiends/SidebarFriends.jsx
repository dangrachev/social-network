import style from './SidebarFriends.module.css';
import {NavLink} from 'react-router-dom';
import userPhoto from './../../../assets/img/userPhoto.jpg'


const SidebarFriends = (props) => {

    let path = `/messages/${props.id}`;

    return (
        <div className={style.sidebarFriends}>
            <img className={style.userAvatar} src={userPhoto}/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}


export default SidebarFriends;