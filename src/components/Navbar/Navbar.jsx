import React, {useState} from "react";
import {NavLink} from 'react-router-dom';
import SidebarFriends from './SidebarFiends/SidebarFriends';
import {Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Paper} from "@mui/material";
import PersonIcon from '@mui/icons-material/Person';
import GroupsIcon from '@mui/icons-material/Groups';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SettingsIcon from '@mui/icons-material/Settings';
import {makeStyles} from "@mui/styles";
import style from './Navbar.module.css'


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
    },

}))

const Navbar = (props) => {
    const styles = useStyles()
    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <Box flex={2} p={4} sx={{display: {xs: 'none', sm: 'none', md: 'none', lg: 'block'}, zIndex: 1}}>
            <Box position='fixed' sx={{minWidth: '15%'}} component={Paper} borderRadius={2}>
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={`/profile/${props.authorizedUserId}`} className={styles.root}
                                        selected={selectedIndex === 0}
                                        onClick={(event) => handleListItemClick(event, 0)}>
                            <ListItemIcon>
                                <PersonIcon />
                            </ListItemIcon>
                            <ListItemText primary="Profile"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={'/users'} className={styles.root}
                                        selected={selectedIndex === 1}
                                        onClick={(event) => handleListItemClick(event, 1)}>
                            <ListItemIcon>
                                <GroupsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Users"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={'/messages'} className={styles.root}
                                        selected={selectedIndex === 2}
                                        onClick={(event) => handleListItemClick(event, 2)}>
                            <ListItemIcon>
                                <Badge badgeContent={0} color="primary">
                                    <MailIcon  />
                                </Badge>
                            </ListItemIcon>
                            <ListItemText primary="Messages"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={'/feeds'} className={styles.root}
                                        selected={selectedIndex === 3}
                                        onClick={(event) => handleListItemClick(event, 3)}>
                            <ListItemIcon>
                                <NewspaperIcon />
                            </ListItemIcon>
                            <ListItemText primary="Feeds"/>
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={NavLink} to={'/settings'} className={styles.root}
                                        selected={selectedIndex === 4}
                                        onClick={(event) => handleListItemClick(event, 4)}>
                            <ListItemIcon>
                                <SettingsIcon />
                            </ListItemIcon>
                            <ListItemText primary="Settings"/>
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    );
}

export default Navbar;