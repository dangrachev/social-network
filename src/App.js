import React, {Suspense, useEffect} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {initializeApp} from './Redux/app-reducer';
import {getMyProfile} from './Redux/profile-reducer';
import {getNewMessagesCount} from './Redux/messages-reducer';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import MessagesContainer from './components/Messages/MessagesContainer'
import NavbarContainer from './components/Navbar/NavbarContainer';
import RightSidebar from "./components/Navbar/RightSidebar";
import Login from './components/Login/Login';
import ChatWindowContainer from './components/Messages/ChatWindowContainer';
import Preloader from './components/common/Preloader/Preloader';
import {Box, Stack, ThemeProvider} from '@mui/material';
import {useTheme} from './components/common/Theme/Theme';
import './App.css';


const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const Feeds = React.lazy(() => import('./components/Feeds/Feeds'));
const SettingsContainer = React.lazy(() => import('./components/Settings/SettingsContainer'));


const App = (props) => {
    const [themeMode, switchThemeMode, themeModeOptions] = useTheme();


    useEffect(() => {
        props.initializeApp();
        props.getMyProfile(props.authorizedUserId);
    }, []);


    if (!props.initialized) {
        return <Preloader />
    }

    return <ThemeProvider theme={themeModeOptions}>
        <Box minHeight="100vh" height="100%" bgcolor={'background.default'} color={'text.primary'} >
            <HeaderContainer />
            <Stack direction='row' spacing={2} justifyContent='space-between'>
                {props.isAuth && <NavbarContainer/>}

                <Box flex={6} p={2}>
                    <Suspense fallback={<Preloader/>}>
                        <Switch>
                            <Route exact path='/'
                                   render={() => <Redirect from={'/'} to={`/profile/${props.authorizedUserId}`}/>}/>
                            <Route path='/profile/:userId?'
                                   render={() => <ProfileContainer/>}/>
                            <Route exact path='/messages'
                                   render={() => <MessagesContainer/>}/>
                            <Route exact path='/messages/:userId'
                                   render={() => <ChatWindowContainer/>}/>
                            <Route path='/users'
                                   render={() => <UsersContainer/>}/>
                            <Route path='/feeds'
                                   render={() => <Feeds/>}/>
                            <Route path='/settings'
                                   render={() => <SettingsContainer themeMode={themeMode}
                                                                    switchThemeMode={switchThemeMode}/>}/>
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
    connect(mapStateToProps, {initializeApp, getMyProfile, getNewMessagesCount}),
    withRouter
)(App);
