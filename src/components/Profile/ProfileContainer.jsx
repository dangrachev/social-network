import React from 'react';
import Profile from './Profile';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import {getUserProfile, getUserStatus, updateUserStatus} from '../../Redux/profile-reducer';
import {withAuthRedirect} from '../hoc/withAuthRedirect';
import {compose} from 'redux';


class ProfileContainer extends React.PureComponent {
    state = {
        userId: this.props.match.params.userId || this.props.authorizedUserId
    }
    componentDidMount() {
        if(!this.state.userId) {
            this.props.history.push('/login');
        }
        this.props.getUserProfile(this.state.userId);
        this.props.getUserStatus(this.state.userId);
    }

    async componentDidUpdate(prevProps, prevState) {
        console.log('update')
        if(prevProps.match.params.userId !== this.props.match.params.userId) {
            await this.setState({
                userId: this.props.match.params.userId
            })
            this.props.getUserProfile(this.state.userId);
            this.props.getUserStatus(this.state.userId);
        }
    }

    render() {
        console.log('render')
        return <Profile {...this.props}
                        status={this.props.status}
                        updateUserStatus={this.props.updateUserStatus}/>
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        authorizedUserId: state.auth.userId,
        isAuth: state.auth.isAuth,
    }
}

// конвейер обработчиков
export default compose(
    connect(mapStateToProps,{getUserProfile, getUserStatus, updateUserStatus}),
    withRouter,
    withAuthRedirect
)(ProfileContainer);