import style from './Messages.module.css'
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = `/messages/${props.id}`;

    return(
        <div className={style.dialogs_item}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    );
}

const Message = (props) => {
    return <div className={style.messages_item}>{props.message}</div>
}

const Messages = () => {
    return (
        <div className={style.messages_wrapper}>
            <div className={style.dialogs}>
                <DialogItem name='Kathrine' id='1'/>
                <DialogItem name='Joel' id='2'/>
                <DialogItem name='Rick' id='3'/>
                <DialogItem name='Alice' id='4'/>
            </div>
            <div className={style.messages}>
                <Message message='WUBBA-LUBBA-DUB-DUB'/>
                <Message message='WUBBA-LUBBA-DUB-DUB'/>
                <Message message='WUBBA-LUBBA-DUB-DUB'/>
                <Message message='WUBBA-LUBBA-DUB-DUB'/>
            </div>
        </div>
    );
}

export default Messages;