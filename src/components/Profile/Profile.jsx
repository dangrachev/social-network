import React from "react";
import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../common/Preloader/Preloader";


const Profile = (props) => {
    if(!props.profile) {
        return <Preloader />
    }

    return (
        <div className={style.profile_wrapper}>
            <ProfileInfo profile={props.profile}
                         status={props.status}
                         updateUserStatus={props.updateUserStatus}
                         updateUserPhoto={props.updateUserPhoto}
                         updateProfileData={props.updateProfileData}
                         startChatting={props.startChatting}
                         isOwner={props.isOwner}
                         userId={props.userId}/>
            <PostsContainer profile={props.profile}/>
        </div>
    );
}

export default Profile;