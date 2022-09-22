import React, {useCallback, useLayoutEffect, useRef, useState} from 'react';
import {connect} from "react-redux";
import {NavLink, useParams} from "react-router-dom";
import {deleteMessage, getMessagesList, getNewMessagesCount,
    requestAllDialogs, sendMessage} from "../../Redux/messages-reducer";
import {Avatar, Box, Divider, Grid, List, ListItem, ListItemText, Paper, Skeleton, Typography} from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import MessageMenu from "./MessageMenu";
import {Input} from "../common/Forms/Input";
import {StyledButton} from "../common/Forms/StyledButton";
import {makeStyles} from "@mui/styles";
import defaultAvatar from "../../assets/img/defaultAvatar.png";


const useStyles = makeStyles(({theme}) => ({
    chatSection: {
        marginTop: '15px',
        width: '90%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
    },
    messageArea: {
        display: 'flex',
        flexDirection: 'column',
        height: '60vh',
        overflowY: 'auto',
        padding: '0 0 8px'
    },
    inputArea: {
        height: 'auto',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    }
}));


const ChatWindow = React.memo(({requestAllDialogs, getMessagesList, getNewMessagesCount, ...props}) => {
    const style = useStyles();

    let {userId} = useParams();
    const messagesEndRef = useRef(null);

    const [value, setValue] = useState('');
    const [editMode, setEditMode] = useState(false);
    const [messageId, setMessageId] = useState('');

    // объект собеседника для отображения его фото и имени в шапке диалога
    const [userData, setUserData] = useState(() => {
        if(props.messagesPage.dialogsData.length) {
            return props.messagesPage.dialogsData.find(user => user.id === Number(userId))
        } else return null
    });

    const requestMessages = useCallback((userId) => {
        getMessagesList(userId);
        getNewMessagesCount();
    }, [getMessagesList, getNewMessagesCount])

    useLayoutEffect(() => {
        requestMessages(userId);
    }, [requestAllDialogs, requestMessages, userId]);

    useLayoutEffect(() => {
        // при обновлении страницы чата делаем запрос за объектами собеседников иначе будет ошибка
        // далее вытаскиваем конкретного и отображаем его фото + имя
        if (!userData) {
            requestAllDialogs()
                .then(() => setUserData(props.messagesPage.dialogsData
                    .find(user => user.id === Number(userId))));
        }

    }, [requestAllDialogs, props.messagesPage.dialogsData]);

    useLayoutEffect(() => {
        // для автоматического скролла вниз
        const scrollToBottom = () => {
            messagesEndRef.current?.scrollIntoView();
        }

        scrollToBottom();
    }, [props.messagesPage.messagesData.length, messagesEndRef.current]);

    const onInputChange = (e) => {
        setValue(e.currentTarget.value);
    }

    const onSendMessage = () => {
        props.sendMessage(userId, value);
        setValue('');
    }

    const editMessage = (messageId) => {
        setEditMode(true);
        setMessageId(messageId);
    }

    const closeMenu = () => {
        setEditMode(false)
    }

    const onDeleteMessage = (messageId, userId) => {
        props.deleteMessage(messageId, userId)
    }

    return (
       <Box flex={8}>
           <Grid container component={Paper} className={style.chatSection}>
               <Grid item xs={10} style={{display: 'flex', alignItems: 'center'}}>
                   {userData
                       ? <Avatar src={userData?.photos?.small || defaultAvatar}
                            style={{margin: '10px 15px', width: 50, height: 50}}/>
                       : <Skeleton variant='circular' animation='wave'
                                   width={50} height={50} sx={{margin: '10px 15px'}}/>
                   }
                   {userData
                       ? <Typography component={NavLink}
                                to={'/profile/' + userId}
                                sx={{textDecoration: 'none', cursor: 'pointer'}}
                                color={'text.primary'}>{userData?.userName || ''}</Typography>
                       : <Skeleton variant='text' animation='wave'
                                   width={155} sx={{ fontSize: '1.5rem' }} />}
               </Grid>

               <Divider />

               <Grid item xs={12}>
                   <List className={style.messageArea} >

                       {editMode && <MessageMenu editMode={editMode}
                                                 messageId={messageId}
                                                 userId={userId}
                                                 setEditMode={setEditMode}
                                                 closeMenu={closeMenu}
                                                 onDeleteMessage={onDeleteMessage} />}

                       {props.messagesPage.messagesData.map(key => key[userId]?.map( message => {
                           // выбераем объект с сообщениями, подходящий по ключу userId,
                           // у которого в значении массив с сообщениями и достаем их
                           return <ListItem key={message.id} style={{padding: '0 0 16px'}} >
                                   <Grid container
                                         direction="column"
                                         alignItems={message.senderId === props.authorizedUserId
                                             ? 'flex-end'
                                             : 'flex-start'}
                                         onClick={() => editMessage(message.id)}
                                         style={{
                                             padding: '10px 15px',
                                             backgroundColor: editMode && messageId === message.id
                                                 ? '#9b9b9b'
                                                 : undefined
                                         }}>

                                       <Grid item xs={12} sx={{whiteSpace: 'break-spaces'}}>
                                           <ListItemText sx={{maxWidth: '500px'}} primary={message.body}/>
                                       </Grid>
                                       <Grid item xs={12}>
                                           <div style={{display: 'flex', color: message.viewed ? '#0082FF' : 'gray'}}>
                                               <ListItemText sx={{marginRight: 1}}
                                                             secondary={new Date(message.addedAt)
                                                                 .toISOString().substring(0, 10)}/>
                                               <ListItemText secondary={new Date(message.addedAt)
                                                   .toISOString().substring(11, 16)}/>
                                               <DoneIcon/>
                                           </div>
                                       </Grid>
                                   </Grid>

                                   <div ref={messagesEndRef}/>

                               </ListItem>}))}
                   </List>

                   <Divider/>

                   <Grid container className={style.inputArea}>
                       <Grid item xs={10} style={{padding: '20px'}}>
                           <Input id="outlined-basic-email"
                                  label="Your message"
                                  type='text'
                                  value={value}
                                  onChange={onInputChange}
                                  size='large'
                                  fullWidth={true}
                                  multiline
                                  maxRows={3}/>
                       </Grid>
                       <Grid item xs={2} align="right" style={{paddingRight: '35px'}}>
                           <StyledButton onClick={onSendMessage}>Send</StyledButton>
                       </Grid>
                   </Grid>
               </Grid>
           </Grid>
       </Box>
    );
});

const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage,
        authorizedUserId: state.auth.userId,
    }
}

const ChatWindowContainer = connect(
    mapStateToProps,
    {requestAllDialogs, getMessagesList,
        getNewMessagesCount, sendMessage, deleteMessage})(ChatWindow)

export default ChatWindowContainer;
