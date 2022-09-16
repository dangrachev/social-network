import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import {compose} from 'redux';
import DialogItem from './DialogItem/DialogItem';
import {requestAllDialogs} from "../../Redux/messages-reducer";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';


const Messages = React.memo((props) => {

    useEffect(() => {
        props.requestAllDialogs()
    }, [])

    return (
        <Box flex={6} >
            <Grid >
                {props.messagesPage.dialogsData.map( user => (
                    <DialogItem key={user.id}
                                id={user.id}
                                userName={user.userName}
                                photos={user.photos}/>
                    )
                )}
            </Grid>
        </Box>


    );
});

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