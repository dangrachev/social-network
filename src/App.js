import React from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer';
import Feeds from './components/Feeds/Feeds';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import MessagesContainer from './components/Messages/MessagesContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {initializeApp} from './Redux/app-reducer';
import Preloader from './components/common/Preloader/Preloader';
//import Footer from './components/Footer/Footer';

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
                    <Switch>
                        <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                        <Route path='/messages' render={() => <MessagesContainer/>}/>
                        <Route path='/users' render={() => <UsersContainer/>}/>
                        <Route path='/feeds' render={() => <Feeds/>}/>
                        <Route path='/music' render={() => <Music/>}/>
                        <Route path='/settings' render={() => <Settings/>}/>
                        <Route path='/login' render={() => <Login/>}/>
                    </Switch>
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
