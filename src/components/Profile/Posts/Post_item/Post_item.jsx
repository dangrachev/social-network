import style from './Post.module.css'

const Post = () => {
    return (
        <div className={style.post_wrapper}>
            <div className={style.userAvatar}></div>
            <p className={style.postText}>Some post ...</p>
        </div>
    );
}

export default Post;