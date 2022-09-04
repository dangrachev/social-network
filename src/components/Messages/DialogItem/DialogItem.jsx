import React from "react";
import style from "./DialogItem.module.css";
import {NavLink} from "react-router-dom";
import ListItemButton from "@mui/material/ListItemButton";
import Grid from "@mui/material/Grid";
import Avatar from '@mui/material/Avatar';
import userPhoto from '../../../assets/img/userPhoto.jpg'
import {useSelector} from "react-redux";

const DialogItem = (props) => {
    let path = `/messages/${props.id}`;
    const messages = useSelector(state => state.messagesPage.messagesData)

    return(
        <Grid item xs={10} className={style.dialogs_item}>
            <ListItemButton >
                <Avatar style={{width: '65px', height: '65px', marginRight: '12px'}}
                        src={props.photos.small || userPhoto} alt="user-avatar"/>
                <NavLink to={path}>{props.userName}</NavLink>
            </ListItemButton>
        </Grid>
    );
}

export default DialogItem;