import React from "react";
import style from './Posts.module.css'
import Post from "./Post_item/Post_item";


const Posts = (props) => {
    // mapping postsData into components
    let postsElements = props.profilePage.postsData.map(post => <Post key={post.id} message={post.message}
                                                                      likesCount={post.likesCount}
                                                                      profile={props.profile}/>);

    // ref for textarea
    const newPostElement = React.createRef();

    // function to push textarea content into state.profilePage.postText
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updatePostText(text);
        // props.dispatch(updatePostText_actionCreator(text));

    }

    // function to sending post text to state.profilePage.postsData
    let onSendPost = () => {
        props.addPost();
        //props.dispatch(addPost_actionCreator());
    }

    return (
        <div className={style.posts_wrapper}>
            <div className={style.posts_header}>My posts</div>
            <div className={style.form_wrapper}>
                <textarea ref={newPostElement} onChange={onPostChange} value={props.profilePage.postText}
                          className={style.textarea}/>
                <button className={style.btnPost} onClick={onSendPost}>Add post</button>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default Posts;