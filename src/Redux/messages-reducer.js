import {chatApi} from "../api/requestApi";


// action types
const SEND_MESSAGE = 'SEND-MESSAGE';
const GET_DIALOGS = 'GET_DIALOGS';
const SET_MESSAGES = 'SET_MESSAGES';

let initialState = {
    dialogsData: [

    ],
    messagesData: [

    ],

};

const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, action.message]
            }
        case GET_DIALOGS:
            return {
                ...state,
                dialogsData: [...action.dialogs]
            }
        case SET_MESSAGES:
            return {
                ...state,
                messagesData: [
                    {...action.messagesList}
                ]
            }
        default:
            return state;
    }
}

// action creators
export const sendMessageAction = (message) => ({type: SEND_MESSAGE, message});
export const getAllDialogsAction = (dialogs) => ({type: GET_DIALOGS, dialogs})
export const setMessagesAction = (messagesList, userId) => ({type: SET_MESSAGES, messagesList, userId})


// thunk
export const requestAllDialogs = () => {
    return async (dispatch) => {
        const response = await chatApi.getAllDialogs();
        dispatch(getAllDialogsAction(response.data));
    }
}

export const startChatting = (userId) => {
    return async (dispatch) => {
        const response = await chatApi.startChatting(userId);

        if (response.data.resultCode === 0) {
            console.log(response.data);
        }
    }
}

export const getMessagesList = (userId, page = 1, count = 10) => {
    return async (dispatch) => {
        const response = await chatApi.getMessages(userId, page, count);

        //const messagesList = new Set();
        //messagesList.add({[userId]: [...response.data.items]})
        debugger;
        dispatch(setMessagesAction({[userId]: [...response.data.items]}, userId));

    }
}

export const sendMessage = (userId, body)  => {
    return async (dispatch) => {
        const response = await chatApi.sendMessage(userId, body);

        if (response.data.resultCode === 0) {
            console.log(response.data);
            dispatch(sendMessageAction(response.data.data.message));
        }
    }
}

export const deleteMessage = (messageId, userId) => {
    return async (dispatch) => {
        const response = await chatApi.deleteMessage(messageId);

        if (response.data.resultCode === 0) {
            console.log(response.data);
            dispatch(getMessagesList(userId));
        }
    }
}


/*!state.messagesData.length
    ? {...action.messagesList}
    : state.messagesData.forEach((obj) => {
        console.log(Object.keys(obj)[0] !== action.userId);
        if (Object.keys(obj)[0] !== action.userId) return {...action.messagesList}

        return state.messagesData[0]
    })*/


/*message:
    addedAt: "2022-08-31T16:52:26.333"
    body: "Test message 2"
    deletedByRecipient: false
    deletedBySender: false
    distributionId: null
    id: "58808f50-fa27-4921-bd08-230d71ad1a13"
    isSpam: false
    recipientId: 25694
    recipientName: "WubbaLubbaDubDub"
    senderId: 22407
    senderName: "amateurcode"
    translatedBody: null
    viewed: false
    */

export default messagesReducer;