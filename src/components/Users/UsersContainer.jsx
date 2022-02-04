import React from 'react';
import {toggleFollowAC, setUsersAC, setCurrentPageAC, setTotalUsersCountAC, toggleFetchingAC} from '../../Redux/users-reducer';
import {connect} from 'react-redux';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';


class UsersContainerAPI extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true); // loader gif ON
        // запрос на получение пользователей
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(false); // loader gif OFF
                this.props.setUsers(response.data.items);
                this.props.setTotalUsersCount(response.data.totalCount);
            });
    }

    // метод для получения пользователей по странично
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleFetching(true); // loader gif ON
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
            .then(response => {
                this.props.toggleFetching(false); // loader gif OFF
                this.props.setUsers(response.data.items);
            });
    }

    render() {
        return <div>
            {this.props.isFetching
                ? <Preloader />
                : <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         users={this.props.users}
                         toggleFollow={this.props.toggleFollow}
                         onPageChanged={this.onPageChanged}/>}
        </div>
    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

let mapDispatchToProps = (dispatch) => {
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
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(UsersContainerAPI);

export default UsersContainer;