import './Navbar.css'

const Navbar = () => {
    return (
        <nav className='navigation'>
            <div><a href="#">Profile</a></div>
            <div><a href="#">Messages</a></div>
            <div><a href="#">Feeds</a></div>
            <div><a href="#">Music</a></div>
            <div><a href="#">Settings</a></div>
        </nav>
    );
}

export default Navbar;