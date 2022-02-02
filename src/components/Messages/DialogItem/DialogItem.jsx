import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/messages/${props.id}`;

    return(
        <div className={style.dialogs_item}>
            <img className={style.userAvatar} src="https://64.media.tumblr.com/avatar_ce0627a8d453_128.pnj" alt=""/>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

export default DialogItem;