import style from './Messages.module.css'
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Messages = (props) => {

    // mapping usersData & messagesData into components
    let usersElements = props.state.usersData.map( user => <DialogItem id={user.id} name={user.name}/>);
    let messagesElements = props.state.messagesData.map( message => <Message message={message.messageText}/>);

    return (
        <div className={style.messages_wrapper}>
            <div className={style.dialogs}>
                { usersElements }
            </div>
            <div className={style.messages}>
                { messagesElements }
            </div>
        </div>
    );
}

export default Messages;