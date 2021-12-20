import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";


const Profile = () => {
    return (
        <div className={style.profile_wrapper}>
            <ProfileInfo />
            <PostsContainer />
        </div>
    );
}

export default Profile;