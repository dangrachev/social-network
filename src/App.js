import React from 'react';
import {Route, Switch} from "react-router-dom";
import './App.css';
import ProfileContainer from "./components/Profile/ProfileContainer";
import Feeds from "./components/Feeds/Feeds";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Messages/MessagesContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
//import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <div className="app_wrapper">
            <HeaderContainer/>
            <NavbarContainer />
            <div className="content_wrapper">
                <Switch>
                    <Route path='/profile/:userId?' render={() => <ProfileContainer />}/>
                    <Route path='/messages' render={() => <MessagesContainer />}/>
                    <Route path='/feeds' render={() => <Feeds/>}/>
                    <Route path='/music' render={() => <Music/>}/>
                    <Route path='/settings' render={() => <Settings/>}/>
                    <Route path='/users' render={() => <UsersContainer/>}/>
                </Switch>
            </div>
        </div>
    );
}

export default App;
