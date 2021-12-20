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
        case SEND_MESSAGE: {
            // receiving Messages data and pushing into state.messagesPage.messagesData
            let newMessage = {
                id: 4,
                messageText: state.messageBody,
            }
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            stateCopy.messagesData.push(newMessage);
            stateCopy.messageBody = '';
            return stateCopy;
        }
        case UPDATE_MESSAGE_TEXT: {
            // pushing textarea content into state.messagesPage.messageText
            let stateCopy = {...state}
            stateCopy.messageBody = action.body;
            return stateCopy;
        }
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