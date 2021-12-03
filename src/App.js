import './App.css';
import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from "./components/Messages/Messages";
import Feeds from "./components/Feeds/Feeds";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
//import Footer from './components/Footer/Footer';

const App = (props) => {
    return (
        <div className="app_wrapper">
            <Header/>
            <Navbar state={props.state.sidebar}/>
            <div className="content_wrapper">
                <Route path='/profile' render={() => <Profile profilePage={props.state.profilePage}
                                                              dispatch={props.dispatch}/>}/>
                <Route path='/messages' render={() => <Messages messagesPage={props.state.messagesPage}
                                                                dispatch={props.dispatch}/>}/>
                <Route path='/feeds' render={() => <Feeds/>}/>
                <Route path='/music' render={() => <Music/>}/>
                <Route path='/settings' render={() => <Settings/>}/>
            </div>
        </div>
    );
}

export default App;
