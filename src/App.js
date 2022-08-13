import React, {Suspense} from 'react';
import {Route, Switch, withRouter} from 'react-router-dom';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import NavbarContainer from './components/Navbar/NavbarContainer';
import Login from './components/Login/Login';
import Feeds from './components/Feeds/Feeds';
import Settings from './components/Settings/Settings';
import Preloader from './components/common/Preloader/Preloader';
import {compose} from 'redux';
import {connect} from 'react-redux';
import {initializeApp} from './Redux/app-reducer';
//import Footer from './components/Footer/Footer';


const UsersContainer = React.lazy(() => import('./components/Users/UsersContainer'));
const MessagesContainer = React.lazy(() => import('./components/Messages/MessagesContainer'));
const Music = React.lazy(() => import('./components/Music/Music'));

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
                            <Route path='/profile/:userId?' render={() => <ProfileContainer/>}/>
                            <Route path='/messages' render={() => <MessagesContainer/>}/>
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
