import React from "react";
import style from './Post.module.css'
import userPhoto from "../../../../assets/img/userPhoto.jpg";

const Post = (props) => {
    return (
        <div className={style.post_wrapper}>
            <div>
                <img className={style.userAvatar} src={props.profile.photos.small || userPhoto} alt="user-photo"/>
            </div>
            <p className={style.postText}>{props.message}</p>
            <div className={style.like_wrapper}>
                <img className={style.like_icon} src="https://icon-library.com/images/twitter-like-icon/twitter-like-icon-21.jpg" alt="like"/>
                <span className={style.like_count}>{props.likesCount}</span>
            </div>
        </div>
    );
}

export default Post;