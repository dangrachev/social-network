

let state = {
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
    profilePage: {
        postsData: [
            {id: 0, message: "WUBBA-LUBBA-DUB-DUB", likesCount: 13979},
            {id: 1, message: "I'm on the highway to hell", likesCount: 42},
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

export let addPost = (postMessage) => {
    let newPost = {
        id: 2,
        message: postMessage,
        likesCount: 0
    }
    state.profilePage.postsData.push(newPost);
}


export default state;