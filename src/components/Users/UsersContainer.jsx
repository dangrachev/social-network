import React from 'react';
import {toggleFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleFetching} from '../../Redux/users-reducer';
import {connect} from 'react-redux';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';
import {requestApi} from '../../api/requestApi';


class UsersContainerAPI extends React.Component {
    componentDidMount() {
        this.props.toggleFetching(true); // гифка загрузки вкл
        // запрос на получение пользователей
        requestApi.getUsers(this.props.currentPage, this.props.pageSize)
            .then(data => {
                this.props.toggleFetching(false); // гифка загрузки выкл
                this.props.setUsers(data.items);
                this.props.setTotalUsersCount(data.totalCount);
            });
    }

    // метод для получения пользователей по странично
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleFetching(true); // гифка загрузки вкл

        requestApi.getUsers(pageNumber, this.props.pageSize)
            .then(data => {
                this.props.toggleFetching(false); // гифка загрузки выкл
                this.props.setUsers(data.items);
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
    setTotalUsersCount,
    toggleFetching
})(UsersContainerAPI);

export default UsersContainer;