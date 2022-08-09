import React from 'react';
import style from './ProfileInfo.module.css';
import userPhoto from '../../../assets/img/userPhoto.jpg'
import ProfileStatusHooks from './ProfileStatusHooks';

const ProfileInfo = ({profile, status, updateUserStatus}) => {

    return(
        <div>
            <div className={style.profile_info}>
                <div className={style.avatar_wrapper}>
                    <img className={style.avatar} src={profile.photos.small || userPhoto} alt='userPhoto'/>
                    <div>
                        <div className={style.userName}>{profile.fullName}</div>
                        <div>
                            <ProfileStatusHooks status={status}
                                                updateUserStatus={updateUserStatus}/>
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
        </div>
    );
}

export default ProfileInfo;