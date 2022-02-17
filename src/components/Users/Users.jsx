import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/img/userPhoto.jpg'
import {NavLink} from 'react-router-dom';
import {requestApi} from '../../api/requestApi';

// верстку и стили переделать

let Users = (props) => {
    // общее число страниц = всего пользователей / кол-во пользователей на 1 стр
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        // ограничение в 10 страниц, чтобы не отображалось 100500
        if (pages.length < 10) {
            pages.push(i);
        }
    }

    return (
        <div>
            <div className={style.paginationWrap}>
                {pages.map(page => {
                    return <span className={props.currentPage === page && style.currentPage}
                                 onClick={() => {
                                     props.onPageChanged(page)
                                 }}>{page}</span>
                })}
            </div>
            {
                props.users.map(user => <div key={user.id}>
                    <div className={style.userWrapper}>
                        <div className={style.user}>
                        <span>
                            <div>
                                <NavLink to={'/profile/' + user.id}>
                                    <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                         alt='user-photo'
                                         className={style.userPhoto}/>
                                </NavLink>
                            </div>
                        </span>
                            <span>
                            <div>
                                {user.followed
                                    ? <button onClick={() => {
                                        requestApi.unfollowRequest(user.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.toggleFollow(user.id)
                                                }
                                            });
                                    }}>Unfollow</button>

                                    : <button onClick={() => {
                                        requestApi.followRequest(user.id)
                                            .then(data => {
                                                if (data.resultCode === 0) {
                                                    props.toggleFollow(user.id)
                                                }
                                            });
                                    }}>Follow</button>}
                            </div>
                        </span>
                        </div>
                        <div className={style.userName}>
                            <span>{user.name}</span>
                            <div className={style.userName__status}><span>{user.status}</span></div>
                        </div>
                        <div className={style.userLocation}>
                            <span>{'user.location.country'}</span>
                            <span>{'user.location.city'}</span>
                        </div>
                    </div>
                </div>)
            }
        </div>
    );
}

export default Users;