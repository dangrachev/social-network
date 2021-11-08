import style from "./Message.module.css";


const Message = (props) => {
    return <div className={style.messages_item}>{props.message}</div>
}

export default Message;