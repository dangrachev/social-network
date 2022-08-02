import React from 'react';
import Header from './Header';
import {connect} from 'react-redux';
import {logout} from '../../Redux/auth-reducer';

class HeaderContainer extends React.Component {

    render() {
        return <Header {...this.props} logout={this.props.logout}/>
    }
}

const mapStateToProps = (state) => {
    return {
        userId: state.auth.userId,
        email: state.auth.email,
        login: state.auth.login,
        isAuth: state.auth.isAuth
    }
}


export default connect(mapStateToProps, {logout})(HeaderContainer);