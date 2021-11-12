import style from './Messages.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import React from "react";


const Messages = (props) => {

    // mapping usersData & messagesData into components
    let usersElements = props.state.usersData.map( user => <DialogItem id={user.id} name={user.name}/>);
    let messagesElements = props.state.messagesData.map( message => <Message message={message.messageText}/>);

    // ref fot textarea
    const textMessageElement = React.createRef();
    const sendMessage = () => {
        let text = textMessageElement.current.value;
        alert(text);
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
                <textarea className={style.textarea} ref={textMessageElement}></textarea>
                <button className={style.btn_sendMessage} onClick={sendMessage}>Send message</button>
            </div>
        </div>
    );
}

export default Messages;