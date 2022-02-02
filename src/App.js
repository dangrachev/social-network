import React from 'react';
import {Route} from "react-router-dom";
import './App.css';
import Header from "./components/Header/Header";
import Profile from './components/Profile/Profile';
import Feeds from "./components/Feeds/Feeds";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import MessagesContainer from "./components/Messages/MessagesContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
//import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <div className="app_wrapper">
            <Header/>
            <NavbarContainer />
            <div className="content_wrapper">
                <Route path='/profile' render={() => <Profile />}/>
                <Route path='/messages' render={() => <MessagesContainer />}/>
                <Route path='/feeds' render={() => <Feeds/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
            </div>
        </div>
    );
}

export default App;
