let store = {
    _state: {
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
    },
    _callSubscriber() {

    },

    getState() {
        return this._state;
    },
    // this method passing callback rerenderAllTree() from index.js through itself without a cyclic dependence
    subscribe(observer) {
        store._callSubscriber = observer;
    },

    // instead of addPost, updatePostText and some new methods
    dispatch(action) {
        if (action.type === 'ADD-POST') {
            // receiving Posts data and pushing into state.profilePage.postsData
            let newPost = {
                id: 2,
                message: this._state.profilePage.postText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.postText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-POST-TEXT') {
            // pushing textarea content into state.profilePage.postText
            this._state.profilePage.postText = action.newText;
            this._callSubscriber(this._state);
        }
    },

}

window.store = store;

export default store;