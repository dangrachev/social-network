import React from "react";
import {connect} from "react-redux";
import Navbar from "./Navbar";

let mapStateToProps = (state) => {
    return {
        sidebar: state.sidebar,
        isAuth:state.auth.isAuth,
        authorizedUserId: state.auth.userId
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar);

export default NavbarContainer;