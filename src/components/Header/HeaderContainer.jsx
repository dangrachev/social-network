import React from "react";
import Header from "./Header";
import {connect} from "react-redux";
import {getAuthUserData} from "../../Redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.getAuthUserData()
    }

    render() {
        return <Header {...this.props} />
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


export default connect(mapStateToProps, {getAuthUserData})(HeaderContainer);