import React from "react";
import {connect} from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
    return {
        isAuth:state.auth.isAuth,
        authorizedUserId: state.auth.userId,
        newMessagesCount: state.messagesPage.newMessagesCount
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;