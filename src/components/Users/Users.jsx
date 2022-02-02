import React from 'react';
import style from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/img/userPhoto.jpg'

// верстку и стили переделать
const Users = (props) => {

    let getUsers = () => {
        if(props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                props.setUsers(response.data.items)
            })
        }
    }

    return <div>
        <button onClick={getUsers}>Get Users</button>
        {
            props.users.map(user => <div key={user.id}>
                <div className={style.userWrapper}>
                    <div className={style.user}>
                        <span>
                            <div><img src={user.photos.small != null ? user.photos.small : userPhoto} alt="user-photo" className={style.userPhoto}/></div>
                        </span>
                        <span>
                            <div>
                                <button onClick={() => {props.toggleFollow(user.id)}}>{user.followed ? 'Unfollow' : 'Follow'}</button>
                            </div>
                        </span>
                    </div>
                    <div className={style.userName}>
                        <span>{user.name}</span>
                        <div><span>{user.status}</span></div>
                    </div>
                    <div className={style.userLocation}>
                        <span>{'user.location.country'}</span>
                        <span>{'user.location.city'}</span>
                    </div>
                </div>
        </div>)
        }
    </div>
}

export default Users;