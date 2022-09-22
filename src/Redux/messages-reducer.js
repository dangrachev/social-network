import {chatApi} from "../api/requestApi";


// action types
const SEND_MESSAGE = 'SEND-MESSAGE';
const GET_DIALOGS = 'GET_DIALOGS';
const SET_MESSAGES = 'SET_MESSAGES';
const SET_NEW_MESSAGES_COUNT = 'SET_NEW_MESSAGES_COUNT';

let initialState = {
    dialogsData: [

    ],
    messagesData: [

    ],
    newMessagesCount: null
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
        case SET_NEW_MESSAGES_COUNT:
            return {
                ...state,
                newMessagesCount: action.count
            }
        default:
            return state;
    }
}

// action creators
export const sendMessageAction = (message) => ({type: SEND_MESSAGE, message});
export const getAllDialogsAction = (dialogs) => ({type: GET_DIALOGS, dialogs});
export const setMessagesAction = (messagesList, userId) => ({type: SET_MESSAGES, messagesList, userId});
export const setMessagesCount = (count) => ({type: SET_NEW_MESSAGES_COUNT, count});

// thunk
export const requestAllDialogs = () => {
    return async (dispatch) => {
        const response = await chatApi.getAllDialogs();
        dispatch(getAllDialogsAction(response.data));
    }
}

export const startChatting = (userId) => {
    return async (dispatch) => {
        await chatApi.startChatting(userId);
    }
}

export const getMessagesList = (userId, page = 1, count = 30) => {
    return async (dispatch) => {
        const response = await chatApi.getMessages(userId, page, count);

        await dispatch(setMessagesAction({[userId]: [...response.data.items]}, userId));
        await dispatch(getNewMessagesCount());
    }
}

export const getNewMessagesCount = () => {
    return async (dispatch) => {
        const response = await chatApi.getNewMessagesCount();

        dispatch(setMessagesCount(response.data));
    }
}

export const sendMessage = (userId, body)  => {
    return async (dispatch) => {
        const response = await chatApi.sendMessage(userId, body);

        if (response.data.resultCode === 0) {
            await dispatch(sendMessageAction(response.data.data.message));
            await dispatch(getMessagesList(userId));
        }
    }
}

export const deleteMessage = (messageId, userId) => {
    return async (dispatch) => {
        const response = await chatApi.deleteMessage(messageId);

        if (response.data.resultCode === 0) {
            dispatch(getMessagesList(userId));
        }
    }
}

export default messagesReducer;