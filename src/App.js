import './App.css';
import Header from "./components/Header/Header";
import Profile from './components/Profile/Profile';
import Navbar from './components/Navbar/Navbar';
//import Footer from './components/Footer/Footer';

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
