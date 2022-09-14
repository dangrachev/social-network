import React, {Suspense, useState} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import MessagesContainer from './components/Messages/MessagesContainer'
import NavbarContainer from './components/Navbar/NavbarContainer';
import RightSidebar from "./components/Navbar/RightSidebar";
import Login from './components/Login/Login';
import ChatWindowContainer from "./components/Messages/ChatWindowContainer";
import Preloader from './components/common/Preloader/Preloader';
import {initializeApp} from './Redux/app-reducer';
import {getMyProfile} from "./Redux/profile-reducer";
import {Box, Stack, ThemeProvider} from "@mui/material";
import {useTheme} from "./components/common/Theme/Theme";
import './App.css';
//import Footer from './components/Footer/Footer';


const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Feeds = React.lazy(() => import('./components/Feeds/Feeds'));
const SettingsContainer = React.lazy(() => import('./components/Settings/SettingsContainer'));


class AppContainer extends React.Component {

    componentDidMount() {

        this.props.initializeApp();
        debugger;
        this.props.getMyProfile(this.props.authorizedUserId);
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }
        return (
            <App {...this.props}/>
        );
    }
}

const App = (props) => {

    const [themeMode, switchThemeMode, themeModeOptions] = useTheme();

    return <ThemeProvider theme={themeModeOptions}>
        <Box minHeight="100vh" height="100%" bgcolor={'background.default'} color={'text.primary'} >
            <HeaderContainer />
            <Stack direction='row' spacing={2} justifyContent='space-between'>
                {props.isAuth && <NavbarContainer/>}
                <Box flex={6} p={2}>
                    <Suspense fallback={<Preloader/>}>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect from={'/'} to={'/profile'}/>}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route exact path='/messages' render={() => <MessagesContainer/>}/>
                            <Route exact path='/messages/:userId' render={() => <ChatWindowContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/feeds' render={() => <Feeds/>}/>
                            <Route path='/settings' render={() => <SettingsContainer themeMode={themeMode}
                                                                                     switchThemeMode={switchThemeMode} />}/>
                            <Route path='/login' render={() => <Login/>}/>
                        </Switch>
                    </Suspense>
                </Box>
                {props.isAuth && <RightSidebar/>}
            </Stack>
        </Box>
    </ThemeProvider>
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized,
        isAuth: state.auth.isAuth,
        authorizedUserId: state.auth.userId,
    }
}

export default compose(
    connect(mapStateToProps, {initializeApp, getMyProfile}),
    withRouter
)(AppContainer);
