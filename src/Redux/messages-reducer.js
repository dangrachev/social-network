// action types
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
    ]
};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            let body = action.messageBody;
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 4, messageText: body}]
            }
        default:
            return state;
    }
}

// action creators
export const sendMessage = (messageBody) => ({type: SEND_MESSAGE, messageBody});

export default messagesReducer;