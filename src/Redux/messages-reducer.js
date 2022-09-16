import {chatApi} from "../api/requestApi";


// action types
const SEND_MESSAGE = 'SEND-MESSAGE';
const GET_DIALOGS = 'GET_DIALOGS';
const SET_MESSAGES = 'SET_MESSAGES';
const SET_NEW_MESSAGES_COUNT = 'SET_NEW_MESSAGES_COUNT';
const VIEW_MESSAGES = 'VIEW_MESSAGES';

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
        case VIEW_MESSAGES:
            return {
                ...state,
                messagesData: state.messagesData.map((messagesList) => {
                    return messagesList[action.userId].map(message => ({...message, viewed: action.viewed}))
                })
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
export const viewedMessages = (viewed, userId) => ({type: VIEW_MESSAGES, viewed, userId})

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
            console.log(response.data);
            await dispatch(sendMessageAction(response.data.data.message));
            await dispatch(getMessagesList(userId));
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


/*messagesList {
    25694: [
        0: {id: '681e7177-56a4-482b-b831-99837e9c1d4b', body: 'check', translatedBody: null, addedAt: '2022-09-11T13:03:15.323', senderId: 22407, …}
        1: {id: '326c9cdf-45fe-4b28-b8d3-2d6d93159101', body: 'Какой-то текст.<br />Перенос строки. Проверка, текста...', translatedBody: null, addedAt: '2022-09-14T20:15:58.483', senderId: 25694, …}
        2: {id: '6a716288-3007-4c4b-83f1-a42f190930cd', body: 'Почему-то виден тэг br при переносе. <br />Еще раз проверка. Что за дичь? ', translatedBody: null, addedAt: '2022-09-14T20:16:43.143', senderId: 25694, …}
        3: {id: '214aa912-a849-4623-9dd7-1e41190e8803', body: 'Lorem ipsum dolor sit amet, consectetur adipisicin…ibus molestias natus quasi quo reprehenderit? Ex!', translatedBody: null, addedAt: '2022-09-15T11:05:45.13', senderId: 22407, …}
        4: {id: 'f1dc51cb-7f30-4fc0-b161-1136598d131f', body: 'Check counter of new messages', translatedBody: null, addedAt: '2022-09-15T11:27:43.213', senderId: 22407, …}
        5: {id: 'a120f236-db78-4d77-87d1-bf957f024de0', body: 'sadfsdfv', translatedBody: null, addedAt: '2022-09-15T11:31:56.297', senderId: 22407, …}
        6: {id: '7f9bf203-2dad-498b-b839-3df847ea53e7', body: 'blablabla', translatedBody: null, addedAt: '2022-09-15T11:57:05.877', senderId: 25694, …}
        7: {id: 'be3ec449-465c-4e62-82a7-2ca20b38c3d6', body: 'Hey hey hey', translatedBody: null, addedAt: '2022-09-15T15:57:43.437', senderId: 22407, …}
    ]
}*/






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