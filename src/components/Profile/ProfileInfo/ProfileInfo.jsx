import React, {useRef, useState} from 'react';
import style from './ProfileInfo.module.css';
import userPhoto from '../../../assets/img/userPhoto.jpg'
import ProfileStatusHooks from './ProfileStatusHooks';
import ProfileData from "./ProfileData";
import ProfileDataForm from "./ProfileDataForm";
import {useHistory} from "react-router-dom";

const ProfileInfo = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [editProfile, setEditProfile] = useState(false);
    let history = useHistory()

    const photoInput = useRef(null);
    const sendPhoto = () => {
        setEditMode(false);
        const photoFile = photoInput.current.files[0];
        props.updateUserPhoto(photoFile);
    }

    const startDialog = () => {
        props.startChatting(props.userId)
        history.push(`/messages/${props.userId}`)
    }

    return(
        <div className={style.profile_info}>
            <div className={style.avatar_wrapper}>
                <div className={style.userPhoto_wrapper}>
                    <img className={style.avatar} src={props.profile.photos.small || userPhoto} alt='userPhoto'/>

                    {props.isOwner && <div>
                        {editMode
                            ? <form id='uploadPhoto_form' onSubmit={sendPhoto}>
                                <input type='file' ref={photoInput} id='photo' />
                                <input type='submit'/>
                            </form>
                            : <span onClick={() => {
                                setEditMode(true)
                            }} className={style.editPhoto_span}>Upload photo</span>
                        }
                    </div>}

                </div>
                <div className={style.name_and_status}>
                    <div className={style.userName}>{props.profile.fullName}</div>
                    <div>
                        <ProfileStatusHooks status={props.status}
                                            updateUserStatus={props.updateUserStatus}
                                            isOwner={props.isOwner}/>
                    </div>
                </div>
            </div>

            {!props.isOwner && <button onClick={startDialog}>Send message</button>}

            {props.isOwner && <button onClick={() => {setEditProfile(true)}}>Edit profile</button>}

            <ProfileData profile={props.profile}/>

            {editProfile && <ProfileDataForm editProfile={editProfile}
                                             setEditProfile={setEditProfile}
                                             profile={props.profile}
                                             updateProfileData={props.updateProfileData}/>}

        </div>
    );
}

export default ProfileInfo;