import React from "react";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../common/Preloader/Preloader";


const Profile = ({profile, status, updateUserStatus, updateUserPhoto, isOwner}) => {
    if(!profile) {
        return <Preloader />
    }

    return (
        <div className={style.profile_wrapper}>
            <ProfileInfo profile={profile}
                         status={status}
                         updateUserStatus={updateUserStatus}
                         updateUserPhoto={updateUserPhoto}
                         isOwner={isOwner}/>
            <PostsContainer profile={profile}/>
        </div>
    );
}

export default Profile;