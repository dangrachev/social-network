import './App.css';
import Header from "./components/Header/Header";
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Messages from "./components/Messages/Messages";
import Feeds from "./components/Feeds/Feeds";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {BrowserRouter, Route} from "react-router-dom";
//import Footer from './components/Footer/Footer';

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="content_wrapper">
                    <Route path='/profile' render={ () => <Profile state={props.state.profilePage} />}/>
                    <Route path='/messages' render={ () => <Messages state={props.state.messagesPage} />}/>
                    <Route path='/feeds' render={ () => <Feeds/> }/>
                    <Route path='/music'render={ () => <Music/> }/>
                    <Route path='/settings' render={ () => <Settings/> }/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
