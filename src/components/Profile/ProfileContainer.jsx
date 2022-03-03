import React from 'react';
import Profile from './Profile';
import {Redirect, withRouter} from "react-router-dom";
import {connect} from 'react-redux';
import {getUserProfile} from "../../Redux/profile-reducer";


class ProfileContainerAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        this.props.getUserProfile(userId);
    }

    render() {
        if(!this.props.isAuth) return <Redirect to={'/login'}/>
        return <Profile {...this.props} />
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainerAPI);
const ProfileContainer = connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);

export default ProfileContainer;