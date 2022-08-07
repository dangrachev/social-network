import React from 'react';
import {
    toggleFollow,
    setUsers,
    toggleFollowProgress,
    requestUsers,
    getCurrentPageUsers,
    unfollow,
    follow
} from '../../Redux/users-reducer';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';



class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    // метод для получения пользователей по странично
    onPageChanged = (pageNumber) => {
        this.props.getCurrentPageUsers(pageNumber, this.props.pageSize);
    }

    render() {
        return <div>
            {
                this.props.isFetching
                    ? <Preloader/>
                    : <Users {...this.props} onPageChanged={this.onPageChanged}/>
            }
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingUsersIds: state.usersPage.followingUsersIds,
        isAuth: state.auth.isAuth
    }
}

export default connect(mapStateToProps, {
    toggleFollow,
    setUsers,
    toggleFollowProgress,
    requestUsers,
    getCurrentPageUsers,
    unfollow,
    follow
})(UsersContainer);