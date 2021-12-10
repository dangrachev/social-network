import React from "react";
import {sendMessage_actionCreator, updateMessageText_actionCreator} from "../../Redux/messages-reducer";
import Messages from "./Messages";


const MessagesContainer = (props) => {

    let state = props.store.getState();

    // function to push textarea content into state.messagesPage.messageBody
    let onMessageChange = (text) => {
        props.store.dispatch(updateMessageText_actionCreator(text));
    }

    // function to sending post text to the state.messagesPage.messagesData
    let onSendMessageClick = () => {
        props.store.dispatch(sendMessage_actionCreator());
    }

    return ( <Messages updateMessageText={onMessageChange} sendMessage={onSendMessageClick}
                       messagesPage={state.messagesPage}/> );
}

export default MessagesContainer;