import './Profile.css'

const Profile = () => {
    return (
        <div className='profile-wrapper'>
            <div className="template_img-wrapper">
                <img className='template_img' src="https://wallpaperaccess.com/full/1282257.jpg" alt="template"/>
            </div>
            <div className='profile-info'>
                <div className="avatar"></div>
                <div className="profile-description">

                </div>
            </div>
            <div>My posts</div>
        </div>
    );
}

export default Profile;