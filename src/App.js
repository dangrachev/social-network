import './App.css';
import './components/Header.css';
import './components/Profile.css';
import './components/Navbar.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";
//import Footer from "./Footer";

const App = () => {
    return (
        <div className="app-wrapper">
            <Header />
            <Navbar />
            <Profile />
        </div>
    );
}

export default App;
