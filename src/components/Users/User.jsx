import React from 'react';
import style from './User.module.css';
import userPhoto from '../../assets/img/userPhoto.jpg'
import {NavLink} from 'react-router-dom';

const User = (props) => {

    return (
        <div className={style.userWrapper}>
            <div className={style.user}>
                <span>
                    <div>
                        <NavLink to={'/profile/' + props.user.id}>
                            <img src={props.user.photos.small != null ? props.user.photos.small : userPhoto}
                                 alt='user'
                                 className={style.userPhoto}/>
                        </NavLink>
                    </div>
                </span>
                <span>
                    <div>
                        {props.user.followed
                            ? <button disabled={props.followingUsersIds.some(id => id === props.user.id)}
                                      hidden={!props.isAuth}
                                      onClick={() => {
                                          props.unfollow(props.user.id)
                                      }}>Unfollow</button>
                            : <button disabled={props.followingUsersIds.some(id => id === props.user.id)}
                                      hidden={!props.isAuth}
                                      onClick={() => {
                                          props.follow(props.user.id)
                                      }}>Follow</button>
                        }
                    </div>
                </span>
            </div>
            <div className={style.user_info}>
                <NavLink to={'/profile/' + props.user.id}>
                    <span className={style.user_name}>{props.user.name}</span>
                </NavLink>
                <div className={style.user_status}>
                    <span>{props.user.status}</span>
                </div>
            </div>
        </div>
    );
}

export default User;