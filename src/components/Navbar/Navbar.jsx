import React, {useLayoutEffect, useState} from "react";
import {NavLink, useHistory} from 'react-router-dom';
import {Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SettingsIcon from '@mui/icons-material/Settings';
import {makeStyles} from "@mui/styles";
import {ScrollUpButton} from "../common/Forms/ScrollUpButton";


const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },
    divider: {
        margin: '0 13px'
    }
}))

const Navbar = (props) => {
    const styles = useStyles();
    const {location} = useHistory();
    const [selectedPath, setSelectedPath] = useState(location.pathname);

    const handleListItemClick = (event, path) => {
        setSelectedPath(path);
    };

    return (
        <Box flex={2} p={4} sx={{display: {xs: 'none', sm: 'none', md: 'none', lg: 'block'}, zIndex: 1}}>

            <ScrollUpButton/>

            <Box position='fixed' sx={{minWidth: '15%'}} component={Paper} borderRadius={2}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={`/profile/${props.authorizedUserId}`}
                                        className={styles.root}
                                        selected={selectedPath === '/profile'}
                                        onClick={(event) => handleListItemClick(event, '/profile')}>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary='Profile'/>
                        </ListItemButton>
                    </ListItem>

                    <Divider className={styles.divider}/>

                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={'/users'}
                                        className={styles.root}
                                        selected={selectedPath === '/users'}
                                        onClick={(event) => handleListItemClick(event, '/users')}>
                            <ListItemIcon>
                                <GroupsIcon />
                            </ListItemIcon>
                            <ListItemText primary='Users'/>
                        </ListItemButton>
                    </ListItem>

                    <Divider className={styles.divider}/>

                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={'/messages'}
                                        className={styles.root}
                                        selected={selectedPath === '/messages'}
                                        onClick={(event) => handleListItemClick(event, '/messages')}>
                            <ListItemIcon>
                                <Badge badgeContent={props.newMessagesCount} color="error">
                                    <MailIcon  />
                                </Badge>
                            </ListItemIcon>
                            <ListItemText primary='Messages'/>
                        </ListItemButton>
                    </ListItem>

                    <Divider className={styles.divider}/>

                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={'/feeds'}
                                        className={styles.root}
                                        selected={selectedPath === '/feeds'}
                                        onClick={(event) => handleListItemClick(event, '/feeds')}>
                            <ListItemIcon>
                                <NewspaperIcon />
                            </ListItemIcon>
                            <ListItemText primary='Feeds'/>
                        </ListItemButton>
                    </ListItem>

                    <Divider className={styles.divider}/>

                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={'/settings'}
                                        className={styles.root}
                                        selected={selectedPath === '/settings'}
                                        onClick={(event) => handleListItemClick(event, '/settings')}>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary='Settings'/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}

export default Navbar;