import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import {compose} from 'redux';
import DialogItem from './DialogItem/DialogItem';
import {requestAllDialogs} from "../../Redux/messages-reducer";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {Container} from "@material-ui/core";


const Messages = React.memo((props) => {


    useEffect(() => {
        props.requestAllDialogs()
    }, [])


    return (
        <Container>
            <Grid container rowSpacing={3}>
                {props.messagesPage.dialogsData.map( user => (
                    <DialogItem key={user.id}
                                id={user.id}
                                userName={user.userName}
                                photos={user.photos} />)
                )}
            </Grid>
        </Container>


    );
})


const mapStateToProps = (state) => {
    return {
        messagesPage: state.messagesPage
    }
}

// конвейер обработчиков
const MessagesContainer = compose(
    connect(mapStateToProps, {requestAllDialogs}),
    withAuthRedirect
)(Messages);

export default MessagesContainer;