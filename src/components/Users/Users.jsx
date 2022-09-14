import React from 'react';
import Paginator from "../common/Paginator/Paginator";
import User from "./User";
import {Box} from "@mui/material";

const Users = (props) => {

    return (
        <Box>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize}
                       currentPage={props.currentPage} onPageChanged={props.onPageChanged}/>
            {
                props.users.map(user => <User user={user} key={user.id}
                                              follow={props.follow} unfollow={props.unfollow}
                                              followingUsersIds={props.followingUsersIds} isAuth={props.isAuth}/>)
            }
        </Box>
    );
}

export default Users;