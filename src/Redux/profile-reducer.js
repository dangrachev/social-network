import {profileApi} from '../api/requestApi';

// action types
const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USERS_PROFILE';
const SET_MY_PROFILE = 'SET_MY_PROFILE';
const SET_STATUS = 'SET_STATUS';
const UPDATE_PHOTO = 'UPDATE_PHOTO';


let initialState = {
    postsData: [
        {id: 0, message: 'WUBBA-LUBBA-DUB-DUB', likesCount: 42}
    ],
    userProfile: null,
    myProfile: null,
    status: ''

};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                postsData: [...state.postsData, {id: state.postsData.length, message: action.postText, likesCount: 0}]
            }
        case DELETE_POST:
            return {
                ...state,
                postsData: state.postsData.filter(post => post.id !== action.postId)
            }
        case SET_USER_PROFILE:
            return {...state, userProfile: action.profile}
        case SET_MY_PROFILE:
            return {...state, myProfile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case UPDATE_PHOTO:
            return {...state, profile: {...state.myProfile, photos: action.photos}}
        default:
            return state;
    }
}

// action creators
export const addPost = (postText) => ({type: ADD_POST, postText});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setMyProfile = (profile) => ({type: SET_MY_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const updatePhotoSuccess = (photos) => ({type: UPDATE_PHOTO, photos});

// thunk
export const getUserProfile = (userId) => {
    return async (dispatch) => {
        const data = await profileApi.getProfile(userId);
        dispatch(setUserProfile(data));
    }
}

export const getMyProfile = (userId) => {
    return async (dispatch) => {
        const data = await profileApi.getProfile(userId);
        dispatch(setMyProfile(data));
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

export const updateUserPhoto = (photoFile) => {
    return async (dispatch) => {
        const response = await profileApi.updatePhoto(photoFile);

        if (response.data.resultCode === 0) {
            dispatch(updatePhotoSuccess(response.data.data.photos));
        }
    }
}

export const updateProfileData = (profileData) => {
    return async (dispatch, getState) => {
        const userId = getState().auth.userId;
        const response = await profileApi.updateProfileData(profileData);

        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(userId))
        }
    }
}

export default profileReducer;