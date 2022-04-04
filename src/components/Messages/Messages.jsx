import React from 'react';
import style from './Messages.module.css'
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../common/Forms/FormsControl';
import {maxLength} from '../../utils/validator';

const maxLength100 = maxLength(100);
let TextareaReduxForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field name={'messageBody'}
                           component={Textarea}
                           validate={[maxLength100]}/>
                </div>
                <div>
                    <button>Send</button>
                </div>
            </div>
        </form>
    );
}
TextareaReduxForm = reduxForm({form: 'messageBodyForm'})(TextareaReduxForm);

const Messages = (props) => {

    // mapping usersData & messagesData into components
    let usersElements = props.messagesPage.usersData.map( user => <DialogItem id={user.id} name={user.name} key={user.id}/>);
    let messagesElements = props.messagesPage.messagesData.map( message => <Message message={message.messageText} key={message.id}/>);


    let addMessage = (values) => {
        props.sendMessage(values.messageBody);
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
                <TextareaReduxForm onSubmit={addMessage}/>
            </div>
        </div>
    );
}

export default Messages;