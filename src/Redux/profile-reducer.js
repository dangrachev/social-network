import {profileApi} from '../api/requestApi';


// action types
const ADD_POST = 'ADD_POST';
const SET_USER_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    postsData: [
        {id: 0, message: 'WUBBA-LUBBA-DUB-DUB', likesCount: 42}
    ],
    profile: null,
    status: ''

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let text = action.postText
            return {
                ...state,
                postsData: [...state.postsData, {id: state.postsData.length, message: text, likesCount: 0}]
            }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}

// action creators
export const addPost = (postText) => ({type: ADD_POST, postText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

// thunk
export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileApi.getProfile(userId)
            .then(data => dispatch(setUserProfile(data)));
    }
}

export const getUserStatus = (userId) => {
    return (dispatch) => {
        profileApi.getStatus(userId)
            .then(data => dispatch(setStatus(data)));
    }
}

export const updateUserStatus = (status) => {
    return (dispatch) => {
        profileApi.updateStatus(status)
            .then(response => {
                if (response.data.resultCode === 0) {
                    dispatch(setStatus(status));
                }
            });
    }
}

export default profileReducer;