import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import userPhoto from '../../../assets/img/userPhoto.jpg'

const DialogItem = (props) => {
    let path = `/messages/${props.id}`;

    return(
        <div className={style.dialogs_item}>
            <img className={style.userAvatar} src={userPhoto} alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;