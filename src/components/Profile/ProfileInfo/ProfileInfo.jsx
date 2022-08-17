import React, {useRef, useState} from 'react';
import style from './ProfileInfo.module.css';
import userPhoto from '../../../assets/img/userPhoto.jpg'
import ProfileStatusHooks from './ProfileStatusHooks';

const ProfileInfo = ({profile, status, updateUserStatus, updateUserPhoto, isOwner}) => {

    let [editMode, setEditMode] = useState(false);

    const photoInput = useRef(null);
    const sendPhoto = () => {
        setEditMode(false);
        const photoFile = photoInput.current.files[0];
        updateUserPhoto(photoFile);
    }

    return(
        <div className={style.profile_info}>
            <div className={style.avatar_wrapper}>
                <div className={style.userPhoto_wrapper}>
                    <img className={style.avatar} src={profile.photos.small || userPhoto} alt='userPhoto'/>
                    {isOwner && <div>
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
                    <div className={style.userName}>{profile.fullName}</div>
                    <div>
                        <ProfileStatusHooks status={status}
                                            updateUserStatus={updateUserStatus}
                                            isOwner={isOwner}/>
                    </div>
                </div>
            </div>
            <div className={style.profile_description}>
                <ul className={style.user_info}>
                    <li className={style.info_item}>Обо мне:
                        <span>{profile.aboutMe}</span>
                    </li>
                    <li className={style.info_item}>Работа:
                        <span>{profile.lookingForAJob
                            ? profile.lookingForAJobDescription
                            : null}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default ProfileInfo;