import React from 'react';
import style from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from '../../../assets/img/userPhoto.jpg'

const ProfileInfo = (props) => {
    /*if(!props.profile) {
        return <Preloader />
    }*/

    return(
        <div>
            <div className={style.template_img__wrapper}>
                <img className={style.template_img} src='https://wallpaperaccess.com/full/1282257.jpg' alt='template'/>
            </div>
            <div className={style.profile_info}>
                <div className={style.avatar_wrapper}>
                    <div>
                        <img className={style.avatar} src={props.profile.photos.small || userPhoto} alt="user-photo"/>
                    </div>
                    <div className={style.userName}>{props.profile.fullName}</div>
                </div>
                <div className={style.profile_description}>
                    <ul className={style.user_info}>
                        <li className={style.info_item}>Обо мне: <span>{props.profile.aboutMe}</span></li>
                        <li className={style.info_item}>Работа: <span>{props.profile.lookingForAJob ? props.profile.lookingForAJobDescription : 'не ищу'}</span></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;