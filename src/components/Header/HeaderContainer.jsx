import React from "react";
import Header from "./Header";
import {setAuthUserData} from "../../Redux/auth-reducer";
import {connect} from "react-redux";
import {requestApi} from "../../api/requestApi";

class HeaderContainer extends React.Component {
    componentDidMount() {
        requestApi.authMe().then(data => {
                if (data.resultCode === 0) {
                    let {id, email, login} = data.data;
                    this.props.setAuthUserData(id, email, login);
                }
            });
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


export default connect(mapStateToProps, {setAuthUserData})(HeaderContainer);