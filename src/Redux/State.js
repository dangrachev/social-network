import {rerenderAllTree} from "../render";


let state = {
    profilePage: {
        postsData: [
            {id: 0, message: "WUBBA-LUBBA-DUB-DUB", likesCount: 13979},
            {id: 1, message: "I'm on the highway to hell", likesCount: 42},
        ],
        postText: '',
    },
    messagesPage: {
        usersData: [
            {id: 0, name: "Woody"},
            {id: 1, name: "Alex"},
            {id: 2, name: "Rick"},
            {id: 3, name: "Alice"},
        ],
        messagesData: [
            {id: 0, messageText: "Hello, world"},
            {id: 1, messageText: "Hahahahaha"},
            {id: 2, messageText: "WUBBA-LUBBA-DUB-DUB"},
            {id: 3, messageText: "Howdy ho!"},
        ],
    },
    sidebar: {
        friendsList: [
            {id: 0, name: "Woody"},
            {id: 1, name: "Alex"},
            {id: 2, name: "Rick"},
        ],
    },
}

window.state = state;

// function to receiving Posts data and pushing into state.profilePage.postsData
export let addPost = () => {
    let newPost = {
        id: 2,
        message: state.profilePage.postText,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost);
    state.profilePage.postText = '';
    rerenderAllTree(state);
}

// function to push textarea content into state.profilePage.postText
export let updatePostText = (newText) => {
    state.profilePage.postText = newText;
    rerenderAllTree(state);
}


export default state;