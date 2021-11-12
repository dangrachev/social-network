import style from "./SidebarFriends.module.css";
import {NavLink} from "react-router-dom";


const SidebarFriends = (props) => {

    let path = `/messages/${props.id}`;

    return (
        <div className={style.sidebarFriends}>
            <img className={style.userAvatar} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/1024px-User-avatar.svg.png" alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}


export default SidebarFriends;