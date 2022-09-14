import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logout} from '../../Redux/auth-reducer';
import {getMyProfile} from "../../Redux/profile-reducer";

class HeaderContainer extends React.Component {

    componentDidMount() {
        if(this.props.isAuth) {
            this.props.getMyProfile(this.props.authorizedUserId);
        }
    }

    render() {
        return <Header {...this.props} logout={this.props.logout}/>
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        authorizedUserId: state.auth.userId,
        myProfile: state.profilePage.myProfile
    }
}


export default connect(mapStateToProps, {logout, getMyProfile})(HeaderContainer);