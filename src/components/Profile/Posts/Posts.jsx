import React from "react";
import style from './Posts.module.css'
import Post from "./Post_item/Post_item";
import {addPost_actionCreator, updatePostText_actionCreator} from "../../../Redux/profile-reducer";


const Posts = (props) => {

    // mapping postsData into components
    let postsElements = props.postsData.map(post => <Post message={post.message} likesCount={post.likesCount}/>);

    // ref for textarea
    const newPostElement = React.createRef();

    // function to push textarea content into state.profilePage.postText
    let onPostChange = () => {
        let text = newPostElement.current.value;
        // before dispatch: props.updatePostText(text);
        props.dispatch(updatePostText_actionCreator(text));

    }

    // function to sending post text to the state.profilePage.postsData
    let sendPost = () => {
        // before dispatch: props.addPost();
        props.dispatch(addPost_actionCreator());
    }

    return (
        <div className={style.posts_wrapper}>
            <div className={style.posts_header}>My posts</div>
            <div className={style.form_wrapper}>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.postText}
                          className={style.textarea}/>
                <button className={style.btnPost} onClick={sendPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default Posts;