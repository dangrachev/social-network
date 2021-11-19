import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from './Posts/Posts';


const Profile = (props) => {
    return (
        <div className={style.profile_wrapper}>
            <ProfileInfo />
            <Posts postsData={props.profilePage.postsData}
                   postText={props.profilePage.postText}
                   dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;