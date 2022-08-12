import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {

    return (
        <>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            {
                props.users.map(user => <User user={user} key={user.id}
                                              follow={props.follow} unfollow={props.unfollow}
                                              followingUsersIds={props.followingUsersIds} isAuth={props.isAuth}/>)
            }
        </>
    );
}

export default Users;