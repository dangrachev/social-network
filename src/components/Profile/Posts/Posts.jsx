import style from './Posts.module.css'
import Post from "./Post_item/Post_item";

const Posts = () => {
    return (
        <div className={style.posts_wrapper}>
            <div className={style.posts_header}>My posts</div>
            <div className={style.form_wrapper}>
                <textarea className={style.textarea}></textarea>
                <button className={style.buttonPost}>Post</button>
            </div>

            <Post message='First post' likes='4'/>
            <Post message='Second post' likes='1'/>
        </div>
    );
}

export default Posts;