import './App.css';
import Header from "./components/Header/Header";
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
import Messages from "./components/Messages/Messages";
//import Footer from './components/Footer/Footer';

const App = () => {
    return (
        <div className="app_wrapper">
            <Header/>
            <Navbar/>
            <div className="content_wrapper">
                <Profile/>
                {/*<Messages/>*/}
            </div>
        </div>
    );
}

export default App;
