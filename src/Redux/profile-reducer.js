const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';

const profileReducer = (state, action) => {

    switch (action.type) {
        case ADD_POST:
            // receiving Posts data and pushing into state.profilePage.postsData
            let newPost = {
                id: 2,
                message: state.postText,
                likesCount: 0
            }
            state.postsData.push(newPost);
            state.postText = '';
            return state;
        case UPDATE_POST_TEXT:
            // pushing textarea content into state.profilePage.postText
            state.postText = action.newText;
            return state;
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