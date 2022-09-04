import React, {Suspense} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import MessagesContainer from './components/Messages/MessagesContainer'
import NavbarContainer from './components/Navbar/NavbarContainer';
import Login from './components/Login/Login';
import ChatWindowContainer from "./components/Messages/ChatWindowContainer";
import Preloader from './components/common/Preloader/Preloader';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {initializeApp} from './Redux/app-reducer';
import './App.css';
//import Footer from './components/Footer/Footer';


const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
//const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));
const Music = React.lazy(() => import('./components/Music/Music'));
const Feeds = React.lazy(() => import('./components/Feeds/Feeds'));
const Settings = React.lazy(() => import('./components/Settings/Settings'));

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if(!this.props.initialized) {
            return <Preloader />
        }
        return (
            <div className="app_wrapper">
                <HeaderContainer/>
                <NavbarContainer/>
                <div className="content_wrapper">
                    <Suspense fallback={<Preloader/>}>
                        <Switch>
                            <Route exact path='/' render={() => <Redirect from={'/'} to={'/profile'}/>}/>
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route exact path='/messages' render={() => <MessagesContainer/>}/>
                            <Route exact path='/messages/:userId' render={() => <ChatWindowContainer/>}/>
                            <Route path='/users' render={() => <UsersContainer/>}/>
                            <Route path='/music' render={() => <Music/>}/>
                            <Route path='/feeds' render={() => <Feeds/>}/>
                            <Route path='/settings' render={() => <Settings/>}/>
                            <Route path='/login' render={() => <Login/>}/>
                        </Switch>
                    </Suspense>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}

export default compose(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(App);
