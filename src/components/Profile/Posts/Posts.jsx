import style from './Posts.module.css'
import Post from "./Post_item/Post_item";


const Posts = (props) => {

    // mapping postsData into component
    let postsElements = props.postsData.map( post => <Post message={post.message} likesCount={post.likesCount}/> );

    return (
        <div className={style.posts_wrapper}>
            <div className={style.posts_header}>My posts</div>
            <div className={style.form_wrapper}>
                <textarea className={style.textarea}></textarea>
                <button className={style.buttonPost}>Post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default Posts;