import React from 'react';
import {Divider, Typography} from "@mui/material";
import style from './ProfileInfo.module.css';



const ProfileData = (props) => {

    return (
        <div className={style.profile_description}>
            <div className={style.profile_info_block}>
                <Typography variant='h5' className={style.profile_info_header}>Main information</Typography>
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
                </ul>
            </div>
            <Divider />
            <div className={style.profile_info_block}>
                <Typography variant='h5' >Contacts</Typography>
                <ul className={style.user_info}>
                    {
                        Object.keys(props.profile.contacts).map(key => (
                            <li key={key.id} className={style.info_item}>
                            {`${key}: `}<span>{props.profile.contacts[key]}</span>
                        </li>))
                    }
                </ul>
            </div>
        </div>
    );
};

export default ProfileData;