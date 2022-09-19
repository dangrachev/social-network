import React from 'react';
import defaultAvatar from '../../assets/img/defaultAvatar.png'
import {NavLink} from 'react-router-dom';
import {Avatar, Box, Divider, List, ListItem, ListItemButton, ListItemText} from "@mui/material";
import {StyledButton} from "../common/Forms/StyledButton";
import style from './User.module.css';


const useStyles = (() => ({
    usersWrap: {
      display: 'flex'
    },
    avatar: {
        width: 100,
        height: 100,
        marginRight: 5
    },
    userInfo: {
        display: 'block'
    },
    btnFollow: {
        margin: '10px'
    }
}))

const User = (props) => {
    const style = useStyles();

    return (
        <Box>
            <List>
                <ListItem disablePadding sx={style.usersWrap}>
                    <ListItemButton component={NavLink} to={'/profile/' + props.user.id} sx={{cursor: 'pointer'}}>
                        <Avatar sx={style.avatar} src={props.user.photos.small != null
                            ? props.user.photos.small
                            : defaultAvatar}/>
                        <Box sx={style.userInfo}>
                            <ListItemText primary={props.user.name}/>
                            <ListItemText secondary={props.user.status}/>
                        </Box>
                    </ListItemButton>
                    <Box sx={style.btnFollow}>
                        {props.user.followed
                            ? <StyledButton disabled={props.followingUsersIds.some(id => id === props.user.id)}
                                      hidden={!props.isAuth}
                                      onClick={() => {
                                          props.unfollow(props.user.id)
                                      }}
                                      size='medium' variant="outlined">Unfollow</StyledButton>
                            : <StyledButton disabled={props.followingUsersIds.some(id => id === props.user.id)}
                                      hidden={!props.isAuth}
                                      onClick={() => {
                                          props.follow(props.user.id)
                                      }}
                                      size='medium' variant="outlined">Follow</StyledButton>
                        }
                    </Box>
                </ListItem>
                <Divider />
            </List>
        </Box>
    );
}


export default User;