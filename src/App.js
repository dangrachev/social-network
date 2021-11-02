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

const App = () => {
    return (
        <BrowserRouter>
            <div className="app_wrapper">
                <Header/>
                <Navbar/>
                <div className="content_wrapper">
                    <Route path='/profile' component={Profile}/>
                    <Route path='/messages' component={Messages}/>
                    <Route path='/feeds' component={Feeds}/>
                    <Route path='/music' component={Music}/>
                    <Route path='/settings' component={Settings}/>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
