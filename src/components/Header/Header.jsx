import React, {useState} from "react";
import {NavLink} from "react-router-dom";
import {
    Box, AppBar, Avatar,
    styled, Toolbar, Typography,
    Menu, ListItem, ListItemButton,
    ListItemText, List, Divider, ListItemIcon, Skeleton
} from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import LogoutIcon from '@mui/icons-material/Logout';
import {StyledButton} from "../common/Forms/StyledButton";
import defaultAvatar from "../../assets/img/defaultAvatar.png";
import style from './Header.module.css'


const StyledAppBar = styled(AppBar)(({theme}) => ({
    position: 'sticky',
    minWidth: '383px'
}));

const StyledToolbar = styled(Toolbar)(({theme}) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
}));
const Icons = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '60px'
}));

const UserBox = styled(Box)(({theme}) => ({
    display: 'flex',
    alignItems: 'center',
    gap: '10px'
}));

const LoginBlock = styled('div')(({theme}) => ({
    display: 'none',
    [theme.breakpoints.up("sm")]: {
        display: 'flex'
    }
}))


const Header = (props) => {
    const [open, setOpen] = useState(false);
    const avatar = props.myProfile?.photos?.small;

    return (
        <StyledAppBar >
            <StyledToolbar>
                <Typography variant='h6' sx={{display: {xs: 'none', sm: 'block'}}} >Social network</Typography>
                <img className={style.logo} src="https://www.svgrepo.com/show/327388/logo-react.svg" alt="logo"/>
                {props.isAuth && <Icons>
                    <UserBox>
                        {props.myProfile
                            ? <Typography variant='span'>{props.myProfile?.fullName}</Typography>
                            : <Skeleton variant="text" animation="wave" width={73} sx={{ fontSize: '1.5rem' }} />}
                        {props.myProfile
                            ? <Avatar sx={{width: 40, height: 40}} src={avatar || defaultAvatar}/>
                            : <Skeleton variant="circular" animation="wave" width={40} height={40}/>}

                        <KeyboardArrowDownIcon sx={{display: {md: 'block', lg: 'none'}, cursor: 'pointer'}}
                                               onClick={() => setOpen(true)}/>
                        <Menu
                            id="demo-positioned-menu"
                            aria-labelledby="demo-positioned-button"
                            open={open}
                            onClose={() => setOpen(false)}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}>
                            <List>
                                <ListItem disablePadding>
                                    <ListItemButton component={NavLink} to={`/profile/${props.authorizedUserId}`}
                                                    onClick={() => setOpen(false)}>
                                        <ListItemText primary="Profile"/>
                                    </ListItemButton>
                                </ListItem>
                                <Divider/>
                                <ListItem disablePadding>
                                    <ListItemButton component={NavLink} to={'/users'}
                                                    onClick={() => setOpen(false)}>
                                        <ListItemText primary="Users"/>
                                    </ListItemButton>
                                </ListItem>
                                <Divider/>
                                <ListItem disablePadding>
                                    <ListItemButton component={NavLink} to={'/messages'}
                                                    onClick={() => setOpen(false)}>
                                        <ListItemText primary="Messages"/>
                                    </ListItemButton>
                                </ListItem>
                                <Divider/>
                                <ListItem disablePadding>
                                    <ListItemButton component={NavLink} to={'/feeds'}
                                                    onClick={() => setOpen(false)}>
                                        <ListItemText primary="Feeds"/>
                                    </ListItemButton>
                                </ListItem>
                                <Divider/>
                                <ListItem disablePadding>
                                    <ListItemButton component={NavLink} to={'/settings'}
                                                    onClick={() => setOpen(false)}>
                                        <ListItemText primary="Settings"/>
                                    </ListItemButton>
                                </ListItem>
                                <Divider/>
                                <ListItem disablePadding>
                                    <ListItemButton component={NavLink} to={'/login'}
                                                    onClick={props.logout}>
                                        <ListItemText primary="Logout" />
                                        <ListItemIcon sx={{paddingLeft: '20px'}}>
                                            <LogoutIcon />
                                        </ListItemIcon>
                                    </ListItemButton>
                                </ListItem>
                            </List>
                        </Menu>
                    </UserBox>
                    <LoginBlock >
                        {
                            props.isAuth &&
                            <StyledButton component={NavLink}
                                          to={'/login'}
                                          onClick={props.logout}
                                          color={'warning'}>Logout</StyledButton>
                        }
                    </LoginBlock>
                </Icons>}
            </StyledToolbar>
        </StyledAppBar>
    );
}

export default Header;