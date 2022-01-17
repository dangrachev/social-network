// action types
const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

let initialState = {
        postsData: [
            {id: 0, message: 'WUBBA-LUBBA-DUB-DUB', likesCount: 13979},
            {id: 1, message: 'I\'m on the highway to hell', likesCount: 42},
        ],
        postText: '',
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            // receiving Posts data and pushing into state.profilePage.postsData
            let text = state.postText
            return {
                ...state,
                postText: '',
                postsData: [...state.postsData, {id: 2, message: text, likesCount: 0}]
            }
        case UPDATE_POST_TEXT:
            // pushing textarea content into state.profilePage.postText
            return {
                ...state,
                postText: action.newText
            }
        default:
            return state;
    }
}

export const addPost_actionCreator = () => {
    return {type: ADD_POST}
}

export const updatePostText_actionCreator = (text) => {
    return {type: UPDATE_POST_TEXT, newText: text}
}

export default profileReducer;