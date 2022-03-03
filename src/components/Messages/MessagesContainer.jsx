import React from "react";
import {sendMessage_actionCreator, updateMessageText_actionCreator} from "../../Redux/messages-reducer";
import Messages from "./Messages";
import {connect} from "react-redux";



/*const MessagesContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    // function to push textarea content into state.messagesPage.messageBody
                    let onMessageChange = (text) => {
                        store.dispatch(updateMessageText_actionCreator(text));
                    }

                    // function to sending post text to the state.messagesPage.messagesData
                    let onSendMessageClick = () => {
                        store.dispatch(sendMessage_actionCreator());
                    }

                    return <Messages updateMessageText={onMessageChange} sendMessage={onSendMessageClick}
                                     messagesPage={state.messagesPage}/>
                }
            }
        </StoreContext.Consumer>
    );
}*/

let mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        isAuth: state.auth.isAuth
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateMessageText: (text) => {
            dispatch(updateMessageText_actionCreator(text));
        },
        sendMessage: () => {
            dispatch(sendMessage_actionCreator());
        }
    }
}

const MessagesContainer = connect(mapStateToProps, mapDispatchToProps)(Messages);

export default MessagesContainer;