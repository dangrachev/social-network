import style from './Profile.module.css'
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import Posts from './Posts/Posts';
import {addPost} from "../../Redux/State";


const Profile = (props) => {
    return (
        <div className={style.profile_wrapper}>
            <ProfileInfo />
            <Posts postsData={props.state.postsData} addPost={props.addPost}/>
        </div>
    );
}

export default Profile;