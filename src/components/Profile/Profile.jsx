import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from './Posts/Posts';


const Profile = () => {
    return (
        <div className={style.profile_wrapper}>
            <ProfileInfo />
            <Posts />
        </div>
    );
}

export default Profile;