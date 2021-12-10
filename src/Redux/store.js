import profileReducer from "./profile-reducer";
import messagesReducer from "./messages-reducer";
import sidebarReducer from "./sidebar-reducer";


let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 0, message: 'WUBBA-LUBBA-DUB-DUB', likesCount: 13979},
                {id: 1, message: 'I\'m on the highway to hell', likesCount: 42},
            ],
            postText: '',
        },
        messagesPage: {
            usersData: [
                {id: 0, name: 'Woody'},
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Rick'},
                {id: 3, name: 'Alice'},
            ],
            messagesData: [
                {id: 0, messageText: 'Hello, world'},
                {id: 1, messageText: 'Hahahahaha'},
                {id: 2, messageText: 'WUBBA-LUBBA-DUB-DUB'},
                {id: 3, messageText: 'Howdy ho!'},
            ],
            messageBody: '',
        },
        sidebar: {
            friendsList: [
                {id: 0, name: 'Woody'},
                {id: 1, name: 'Alex'},
                {id: 2, name: 'Rick'},
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
        // before reducers:

        /*if (action.type === ADD_POST) {
            // receiving Posts data and pushing into state.profilePage.postsData
            let newPost = {
                id: 2,
                message: this._state.profilePage.postText,
                likesCount: 0
            }
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.postText = '';
            this._callSubscriber(this._state);

        } else if (action.type === UPDATE_POST_TEXT) {
            // pushing textarea content into state.profilePage.postText
            this._state.profilePage.postText = action.newText;
            this._callSubscriber(this._state);

        } else if (action.type === SEND_MESSAGE) {
            // receiving Messages data and pushing into state.messagesPage.messagesData
            let newMessage = {
                id: 4,
                messageText: this._state.messagesPage.messageBody,
            }
            this._state.messagesPage.messagesData.push(newMessage);
            this._state.messagesPage.messageBody = '';
            this._callSubscriber(this._state);


        } else if (action.type === UPDATE_MESSAGE_TEXT) {
            // pushing textarea content into state.messagesPage.messageText
            this._state.messagesPage.messageBody = action.body;
            this._callSubscriber(this._state);
        }*/


        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messagesReducer(this._state.messagesPage, action);
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);

        this._callSubscriber(this._state);

    },

}

// window.store = store;

//export default store;