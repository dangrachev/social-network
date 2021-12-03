import React from "react";
import style from './Messages.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {sendMessage_actionCreator, updateMessageText_actionCreator} from "../../Redux/messages-reducer";


const Messages = (props) => {

    // mapping usersData & messagesData into components
    let usersElements = props.messagesPage.usersData.map( user => <DialogItem id={user.id} name={user.name}/>);
    let messagesElements = props.messagesPage.messagesData.map( message => <Message message={message.messageText}/>);

    // function to push textarea content into state.messagesPage.messageBody
    let onMessageChange = (e) => {
        let text = e.target.value;
        props.dispatch(updateMessageText_actionCreator(text));
    }

    // function to sending post text to the state.messagesPage.messagesData
    let onSendMessageClick = () => {
        props.dispatch(sendMessage_actionCreator());
    }

    return (
        <div className={style.messages_wrapper}>
            <div className={style.dialogs}>
                { usersElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
            </div>

            <div className={style.textareaWrapper}>
                <textarea onChange={onMessageChange} value={props.messagesPage.messageBody}
                          className={style.textarea}/>
                <button className={style.btn_sendMessage} onClick={onSendMessageClick}>Send message</button>
            </div>
        </div>
    );
}

export default Messages;