import React, {useCallback, useEffect, useRef, useState} from 'react';
import {connect, useSelector} from "react-redux";
import {NavLink, useParams} from "react-router-dom";
import {deleteMessage, getMessagesList, sendMessage} from "../../Redux/messages-reducer";
import {Box, Grid, Paper, List, ListItem, ListItemText, Avatar, Divider} from "@mui/material";
import DoneIcon from '@mui/icons-material/Done';
import MessageMenu from "./MessageMenu";
import {Input} from "../common/Forms/Input";
import {StyledButton} from "../common/Forms/StyledButton";
import {makeStyles} from "@mui/styles";
import defaultAvatar from "../../assets/img/defaultAvatar.png";

const useStyles = makeStyles((theme) => ({
    chatSection: {
        width: '85%',
        height: 'auto',
        display: 'flex',
        flexDirection: 'column',
    },
    messageArea: {
        display: 'flex',
        flexDirection: 'column',
        height: '65vh',
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


const ChatWindow = React.memo((props) => {
    const style = useStyles();
    let [value, setValue] = useState('');
    let [editMode, setEditMode] = useState(false);
    let [messageId, setMessageId] = useState('');
    const messagesEndRef = useRef(null);
    let {userId} = useParams();

    // объект собеседника для отображения его фото и имени в шапке диалога
    const userData = useSelector(state => {
        return state.messagesPage.dialogsData.find( user => user.id === Number(userId))
    })

    const requestMessages = () => {
        props.getMessagesList(userId)
    }

    //useEffect срабатывает при первом рендере и почему-то, если повторно перейти в чат с тем же юзером
    //хотя зависимость в виде userId не изменилась, а вот при переходе в другой чат с другим юзером
    //эффект не срабатывает, хотя хависимость изменилась, поэтому новые данные не приходят и возвращается ошибка
    //при поиске и разметке сообщений с другим юзером.
    //
    //Второй вопрос - даже если исправить первый баг, появится новая проблема:
    //зависимость userId каждый раз будет изменяться при открытии очередного чата с конкретным юзером
    //если перейти на любой предыдущий ранее открытый чат, то сработает эффект и будут запрошены еще раз сообщения
    //таким образом в чате продублируются сообщения, потому что зависимость при открытии чата меняется.

    useEffect(() => {
        debugger;
        requestMessages();
    }, [userId])

    useEffect(() => {
        scrollToBottom();
    }, [props.messagesPage.messagesData])

    const editMessage = (messageId) => {
        setEditMode(true);
        setMessageId(messageId);
    }
    const closeMenu = () => {
        setEditMode(false)
    }

    const onChange = useCallback((e) => {
        setValue(e.currentTarget.value);
    }, [value])

    const onSendMessage = () => {
        props.sendMessage(userId, value);
        setValue('');
    }

    const onDeleteMessage = (messageId, userId) => {
        props.deleteMessage(messageId, userId)
    }

    // для автоматического скролла вниз
    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView();
    }

    return (
       <Box flex={8}>
           <Grid container component={Paper} className={style.chatSection}>
               <Grid item xs={10} style={{display: 'flex', alignItems: 'center'}}>
                   <Avatar src={userData.photos.small || defaultAvatar}
                           style={{margin: '10px 15px', width: 50, height: 50}} />
                   <span>{userData.userName}</span>
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

                       {props.messagesPage.messagesData.map(key => {
                           console.log(key)

                           return key[userId]?.map( message => {
                               console.log(message)

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

                                       <Grid item xs={12}>
                                           <ListItemText primary={message.body}/>
                                       </Grid>
                                       <Grid item xs={12}>
                                           <div style={{display: 'flex', color: message.viewed ? '#0082FF' : 'gray'}}>
                                               <ListItemText secondary={message.addedAt}/>
                                               <DoneIcon/>
                                           </div>
                                       </Grid>
                                   </Grid>
                                   <div ref={messagesEndRef}/>
                               </ListItem>
                           })})}
                   </List>

                   <Divider/>

                   <Grid container className={style.inputArea}>
                       <Grid item xs={10} style={{padding: '20px'}}>
                           <Input id="outlined-basic-email"
                                  label="Your message"
                                  value={value}
                                  onChange={onChange}
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
        authorizedUserId: state.auth.userId
    }
}

const ChatWindowContainer = connect(
    mapStateToProps,
    {getMessagesList, sendMessage, deleteMessage})(ChatWindow)

export default ChatWindowContainer;