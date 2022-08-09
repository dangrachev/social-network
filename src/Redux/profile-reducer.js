import {profileApi} from '../api/requestApi';

// action types
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
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
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(post => post.id !== action.postId)
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
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});

// thunk
export const getUserProfile = (userId) => {
    return async (dispatch) => {
        const data = await profileApi.getProfile(userId);
        dispatch(setUserProfile(data));
    }
}

export const getUserStatus = (userId) => {
    return async (dispatch) => {
        const data = await profileApi.getStatus(userId);
        dispatch(setStatus(data));
    }
}

export const updateUserStatus = (status) => {
    return async (dispatch) => {
        const response = await profileApi.updateStatus(status);

        if (response.data.resultCode === 0) {
            dispatch(setStatus(status));
        }
    }
}

export default profileReducer;