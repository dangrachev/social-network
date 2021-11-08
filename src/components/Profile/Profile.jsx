import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from './Posts/Posts';


const Profile = (props) => {
    return (
        <div className={style.profile_wrapper}>
            <ProfileInfo />
            <Posts postsData={props.state.postsData}/>
        </div>
    );
}

export default Profile;