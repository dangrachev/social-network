import React from 'react';
import {useHistory} from "react-router-dom";
import ProfileStatusHooks from './ProfileStatusHooks';
import ProfileData from "./ProfileData";
import defaultAvatar from '../../../assets/img/defaultAvatar.png'
import {Avatar, Box, Divider, Skeleton, Typography} from "@mui/material";
import {StyledButton} from "../../common/Forms/StyledButton";
import {makeStyles} from "@mui/styles";
import style from './ProfileInfo.module.css';


const useStyles = makeStyles(() => ({
    btn_sendMessage: {
        margin: '0 0 16px',
        padding: '10px 10px'
    }
}))

const ProfileInfo = (props) => {
    const styles = useStyles();

    let history = useHistory();

    const startDialog = () => {
        props.startChatting(props.userId)
        history.push(`/messages/${props.userId}`);
    }

    return(
        <Box >
            <div className={style.avatar_wrapper}>
                <div className={style.userPhoto_wrapper}>
                    {props.profile
                        ? <Avatar sx={{width: 130, height: 130, marginRight: '20px'}}
                             src={props.profile?.photos?.small || defaultAvatar}/>
                        : <Skeleton variant="circular" animation="wave" width={130} height={130} sx={{marginRight: '20px'}}/>}
                </div>
                <div className={style.name_and_status}>
                    {props.profile
                        ? <Typography component='h3' variant='h5'>{props.profile?.fullName}</Typography>
                        : <Skeleton variant="text" animation="wave" width={155} sx={{ fontSize: '2rem' }} />}

                    <ProfileStatusHooks status={props.status}
                                        updateUserStatus={props.updateUserStatus}
                                        isOwner={props.isOwner}/>

                </div>
            </div>

            {!props.isOwner && <StyledButton className={styles.btn_sendMessage}
                                             size='small'
                                             onClick={startDialog}>Send message</StyledButton>}

            <Divider/>

            <ProfileData profile={props.profile}/>

        </Box>
    );
}

export default ProfileInfo;