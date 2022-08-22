import React from 'react';
import style from './ProfileInfo.module.css';



const ProfileData = (props) => {

    return (
        <div className={style.profile_description}>
            <ul className={style.user_info}>
                <li className={style.info_item}>{'About me: '}
                    <span>{props.profile.aboutMe}</span>
                </li>
                <li className={style.info_item}>{'Job: '}
                    <span>
                        {props.profile.lookingForAJob ? 'Looking for a job' : 'Not interesting'}
                    </span>
                </li>
                <li className={style.info_item}>{'My professional skills: '}
                    <span>{props.profile.lookingForAJobDescription}</span>
                </li>
                <li>{'Contacts: '}
                    <ul className={style.user_info}>
                        {
                            Object.keys(props.profile.contacts).map(key => (
                                <li key={key.id} className={style.info_item}>
                                {`${key}: `}<span>{props.profile.contacts[key]}</span>
                            </li>))
                        }
                    </ul>
                </li>
            </ul>
        </div>
    );
};

export default ProfileData;