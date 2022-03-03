import {usersApi} from "../api/requestApi";


// action types
const ADD_POST = 'ADD_POST';
const UPDATE_POST_TEXT = 'UPDATE_POST_TEXT';
const SET_USER_PROFILE = 'SET_USERS_PROFILE';


let initialState = {
    postsData: [
        {id: 0, message: 'WUBBA-LUBBA-DUB-DUB', likesCount: 13979},
        {id: 1, message: 'I\'m on the highway to hell', likesCount: 42},
    ],
    postText: '',
    profile: null
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
        default:
            return state;
    }
}

// action creators
export const addPost_actionCreator = () => ({type: ADD_POST})
export const updatePostText_actionCreator = (text) => ({type: UPDATE_POST_TEXT, newText: text})
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

// thunk
export const getUserProfile = (userId) => {
    return (dispatch) => {
        usersApi.getProfile(userId).then(data => dispatch(setUserProfile(data)));
    }
}

export default profileReducer;