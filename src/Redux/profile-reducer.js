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
        case ADD_POST: {
            // receiving Posts data and pushing into state.profilePage.postsData
            let newPost = {
                id: 2,
                message: state.postText,
                likesCount: 0
            }
            let stateCopy = {...state};
            stateCopy.postData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.postText = '';
            return stateCopy;
        }
        case UPDATE_POST_TEXT: {
            // pushing textarea content into state.profilePage.postText
            let stateCopy = {...state}
            stateCopy.postText = action.newText;
            return stateCopy;
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