import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../common/Preloader/Preloader";
import {Box, Paper} from "@mui/material";
import style from './Profile.module.css'


const Profile = (props) => {

    let profile = props.isOwner ? props.myProfile : props.userProfile;

    if(!profile) {
        return <Preloader />
    }


    return (
        <Box component={Paper} m={'10px'} p={'20px'} borderRadius={5}>
            <ProfileInfo profile={profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}
                         updateProfileData={props.updateProfileData}
                         startChatting={props.startChatting}
                         isOwner={props.isOwner}
                         userId={props.userId}/>
            {props.isOwner && <PostsContainer profile={profile}/>}
        </Box>
    );
}

export default Profile;