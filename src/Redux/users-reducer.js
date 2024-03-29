import {usersApi} from '../api/requestApi';

// action types
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
const TOGGLE_FETCHING = 'SET_FETCHING';
const TOGGLE_FOLLOW_PROGRESS = 'TOGGLE_FOLLOW_PROGRESS';

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingUsersIds: [],
};

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {
                            ...u,
                            followed: !u.followed
                        }
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: action.users}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalCount}
        case TOGGLE_FETCHING:
            return {...state, isFetching: action.isFetching}
        case TOGGLE_FOLLOW_PROGRESS:
            return {
                ...state,
                followingUsersIds: action.isProgress
                    ? [...state.followingUsersIds, action.userId]
                    : state.followingUsersIds.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

// action creators
export const toggleFollow = (userId) => ({type: TOGGLE_FOLLOW, userId})
export const setUsers = (users) => ({type: SET_USERS, users})
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_USERS_COUNT, totalCount})
export const toggleFetching = (isFetching) => ({type: TOGGLE_FETCHING, isFetching})
export const toggleFollowProgress = (isProgress, userId) => ({type: TOGGLE_FOLLOW_PROGRESS, isProgress, userId})

// thunk
export const requestUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleFetching(true)); // гифка загрузки вкл

        const data = await usersApi.getUsers(currentPage, pageSize);
        dispatch(toggleFetching(false)); // гифка загрузки выкл
        dispatch(setUsers(data.items));
        dispatch(setTotalUsersCount(data.totalCount));
    }
}

export const getCurrentPageUsers = (pageNumber, pageSize) => {
    return async (dispatch) => {
        dispatch(setCurrentPage(pageNumber));
        dispatch(toggleFetching(true)); // гифка загрузки вкл

        const data = await usersApi.getUsers(pageNumber, pageSize);
        dispatch(toggleFetching(false)); // гифка загрузки выкл
        dispatch(setUsers(data.items));
    }
}

export const unfollow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowProgress(true, userId));

        const data = await usersApi.unfollowRequest(userId);
        if (data.resultCode === 0) {
            dispatch(toggleFollow(userId));
        }
        dispatch(toggleFollowProgress(false, userId));
    }
}

export const follow = (userId) => {
    return async (dispatch) => {
        dispatch(toggleFollowProgress(true, userId));

        const data = await usersApi.followRequest(userId);
        if (data.resultCode === 0) {
            dispatch(toggleFollow(userId));
        }
        dispatch(toggleFollowProgress(false, userId));
    }
}

export default usersReducer;