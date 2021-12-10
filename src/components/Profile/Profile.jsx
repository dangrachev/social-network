import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import PostsContainer from "./Posts/PostsContainer";


const Profile = (props) => {
    return (
        <div className={style.profile_wrapper}>
            <ProfileInfo />
            <PostsContainer store={props.store}/>
        </div>
    );
}

export default Profile;