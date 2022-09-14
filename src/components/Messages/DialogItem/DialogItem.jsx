import React from "react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import ListItemButton from "@mui/material/ListItemButton";
import Grid from "@mui/material/Grid";
import Avatar from '@mui/material/Avatar';
import {Divider} from "@mui/material";
import defaultAvatar from '../../../assets/img/defaultAvatar.png'
import style from "./DialogItem.module.css";

const DialogItem = (props) => {
    let path = `/messages/${props.id}`;
    const messages = useSelector(state => state.messagesPage.messagesData)

    return(
        <>
            <Grid item xs={10} m={2} className={style.dialogs_item}>
                <ListItemButton component={NavLink} to={path}>
                    <Avatar style={{width: '65px', height: '65px', marginRight: '12px'}}
                            src={props.photos.small || defaultAvatar} alt="user-avatar"/>
                    <span>{props.userName}</span>
                </ListItemButton>
            </Grid>
            <Divider />
        </>
    );
}

export default DialogItem;