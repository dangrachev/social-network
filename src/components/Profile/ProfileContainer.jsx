import React from 'react';
import Profile from './Profile';
import {compose} from 'redux';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {Box} from "@mui/material";
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import {
    getMyProfile,
    getUserProfile,
    getUserStatus,
    updateProfileData,
    updateUserStatus
} from '../../Redux/profile-reducer';
import {getNewMessagesCount, startChatting} from "../../Redux/messages-reducer";


class ProfileContainer extends React.PureComponent {

    refreshProfile() {
        let userId = this.props.match.params.userId || this.props.authorizedUserId;

        if (Number(userId) === this.props.authorizedUserId) {
            this.props.getMyProfile(userId);
            this.props.getUserStatus(userId);
            this.props.getNewMessagesCount();

        } else {
            this.props.getUserProfile(userId);
            this.props.getUserStatus(userId);
        }

        if(!userId) {
            this.props.history.push('/login');
        }
    }

    componentDidMount() {
        this.refreshProfile();
    }

    componentDidUpdate(prevProps, prevState) {
        if(this.props.match.params.userId !== prevProps.match.params.userId) {
            this.refreshProfile();
        }
    }

    render() {
        return <Box bgcolor={'background.default'} color={'text.primary'} >
            <Profile {...this.props}
                     isOwner={!this.props.match.params.userId || (Number(this.props.match.params.userId) === this.props.authorizedUserId)}
                     userId={this.props.match.params.userId}/>
        </Box>
    }
}

let mapStateToProps = (state) => {
    return {
        userProfile: state.profilePage.userProfile,
        myProfile: state.profilePage.myProfile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

// конвейер обработчиков
export default compose(
    connect(mapStateToProps,{
        getUserProfile,
        getMyProfile,
        getUserStatus,
        getNewMessagesCount,
        updateUserStatus,
        updateProfileData,
        startChatting}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);