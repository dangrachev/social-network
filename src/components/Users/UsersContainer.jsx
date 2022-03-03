import React from 'react';
import {
    toggleFollow,
    setUsers,
    setCurrentPage,
    toggleFollowProgress,
    getUsers,
    getCurrentPageUsers,
    unfollow,
    follow
} from '../../Redux/users-reducer';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';


class UsersContainerAPI extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
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
                    : <Users totalUsersCount={this.props.totalUsersCount}
                             pageSize={this.props.pageSize}
                             currentPage={this.props.currentPage}
                             users={this.props.users}
                             toggleFollow={this.props.toggleFollow}
                             usersIds={this.props.usersIds}
                             unfollow={this.props.unfollow}
                             follow={this.props.follow}
                             onPageChanged={this.onPageChanged}/>
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
        usersIds: state.usersPage.usersIds
    }
}

/*let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollow: (userId) => {
            dispatch(toggleFollowAC(userId));
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users));
        },
        setCurrentPage: (currentPage) => {
            dispatch(setCurrentPageAC(currentPage))
        },
        setTotalUsersCount: (totalCount) => {
            dispatch(setTotalUsersCountAC(totalCount))
        },
        toggleFetching: (isFetching) => {
            dispatch(toggleFetchingAC(isFetching))
        }
    }
}*/
// вместо mapDispatchToProps пихаем объект с action creators
const UsersContainer = connect(mapStateToProps, {
    toggleFollow,
    setUsers,
    setCurrentPage,
    toggleFollowProgress,
    getUsers,
    getCurrentPageUsers,
    unfollow,
    follow
})(UsersContainerAPI);

export default UsersContainer;