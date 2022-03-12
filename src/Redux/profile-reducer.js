import {profileApi} from "../api/requestApi";


// action types
const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SET_USER_PROFILE = 'SET_USERS_PROFILE';
const SET_STATUS = 'SET_STATUS';


let initialState = {
    postsData: [
        {id: 0, message: 'WUBBA-LUBBA-DUB-DUB', likesCount: 13979},
        {id: 1, message: 'I\'m on the highway to hell', likesCount: 42},
    ],
    postText: '',
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let text = state.postText
            return {
                ...state,
                postText: '',
                postsData: [...state.postsData, {id: 2, message: text, likesCount: 0}]
            }
        case UPDATE_POST_TEXT:
            return {...state, postText: action.newText}
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        default:
            return state;
    }
}

// action creators
export const addPost_actionCreator = () => ({type: ADD_POST})
export const updatePostText_actionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const setStatus = (status) => ({type: SET_STATUS, status})

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