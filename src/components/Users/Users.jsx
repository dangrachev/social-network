import React from 'react';
import style from './Users.module.css';
import userPhoto from '../../assets/img/userPhoto.jpg'
import {NavLink} from 'react-router-dom';

// верстку и стили переделать
let Users = (props) => {
    // общее число страниц = всего пользователей / кол-во пользователей на 1 стр (5)
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
                    return <span key={page.id} className={props.currentPage === page && style.currentPage}
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
                                    ? <button disabled={props.usersIds.some(id => id === user.id)}
                                              hidden={!props.isAuth}
                                              onClick={() => {props.unfollow(user.id)}}>Unfollow</button>

                                    : <button disabled={props.usersIds.some(id => id === user.id)}
                                              hidden={!props.isAuth}
                                              onClick={() => {props.follow(user.id)}}>Follow</button>}
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