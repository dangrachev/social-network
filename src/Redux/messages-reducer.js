// action types
const SEND_MESSAGE = 'SEND-MESSAGE';
const UPDATE_MESSAGE_TEXT = 'UPDATE-MESSAGE-TEXT';

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
    ],
    messageBody: '',
};

const messagesReducer = (state = initialState, action) => {

    switch (action.type){
        case SEND_MESSAGE:
            // receiving Messages data and pushing into state.messagesPage.messagesData
            let newMessage = {
                id: 4,
                messageText: state.messageBody,
            }
            state.messagesData.push(newMessage);
            state.messageBody = '';
            return state;
        case UPDATE_MESSAGE_TEXT:
            // pushing textarea content into state.messagesPage.messageText
            state.messageBody = action.body;
            return state;
        default:
            return state;
    }
}

export const sendMessage_actionCreator = () => {
    return {type: SEND_MESSAGE}
}

export const updateMessageText_actionCreator = (text) => {
    return {type: UPDATE_MESSAGE_TEXT, body: text}
}

export default messagesReducer;