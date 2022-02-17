import React from 'react';
import Profile from './Profile';
import {withRouter} from "react-router-dom";
import axios from 'axios';
import {connect} from 'react-redux';
import {setUserProfile} from '../../Redux/profile-reducer';


class ProfileContainerAPI extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId || 2;
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then( response => {
                this.props.setUserProfile(response.data);
            })
    }

    render() {
        return (
            <Profile {...this.props} />
        );
    }
}

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}

const WithUrlDataContainerComponent = withRouter(ProfileContainerAPI);
const ProfileContainer = connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent);

export default ProfileContainer;