import React from 'react';
import {Box} from "@mui/material";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";

const Users = (props) => {

    return (
        <Box>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            {
                props.users.map(user => <User key={user.id} user={user}
                                              follow={props.follow} unfollow={props.unfollow}
                                              followingUsersIds={props.followingUsersIds} isAuth={props.isAuth}/>)
            }
        </Box>
    );
}

export default Users;