import React from 'react';
import defaultAvatar from '../../../../assets/img/defaultAvatar.png';
import {Box, Avatar, Checkbox, Tooltip, Typography} from "@mui/material";
import {Favorite, FavoriteBorder} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from '@mui/icons-material/Delete';
import {makeStyles} from "@mui/styles";
import style from './Post.module.css'


const useStyles = makeStyles((theme) => ({
    wrapper: {
        width: 'auto',
        maxWidth: 750,
        display: 'flex',
        marginBottom: '35px'
    }
}));


const Post = (props) => {
    const styles = useStyles();

    return (
        <Box className={styles.wrapper} sx={{alignItems: props.message.length > 40 ? 'end' : 'center'}}>
            <div style={{display: 'flex', alignItems: props.message.length > 40 ? 'stretch' : 'center'}}>
                <Avatar src={props.profile.photos.small || defaultAvatar} sx={{ width: 60, height: 60, marginRight: '15px'}}/>
                <Typography variant='body' >{props.message}</Typography>
            </div>

            <div className={style.like_wrapper}>
                <IconButton sx={{padding: 0}}>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}}/>} />
                </IconButton>
                <span className={style.like_count}>{props.likesCount}</span>
            </div>

            <Tooltip title="Delete post">
                <IconButton onClick={() => {props.deletePost(props.postId)}}>
                    <DeleteIcon className={style.delete_post}/>
                </IconButton>
            </Tooltip>
        </Box>
    );
}

export default Post;