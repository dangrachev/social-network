import './App.css';
import Header from "./components/Header/Header";
import Profile from './components/Profile/Profile';
import Feeds from "./components/Feeds/Feeds";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";
import {Route} from "react-router-dom";
import MessagesContainer from "./components/Messages/MessagesContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
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
            </div>
        </div>
    );
}

export default App;
