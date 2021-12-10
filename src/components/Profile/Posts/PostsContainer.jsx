import React from "react";
import {addPost_actionCreator, updatePostText_actionCreator} from "../../../Redux/profile-reducer";
import Posts from "./Posts";


const PostsContainer = (props) => {

    let state = props.store.getState();

    // function to push textarea content into state.profilePage.postText
    let onPostChange = (text) => {
        props.store.dispatch(updatePostText_actionCreator(text));

    }

    // function to sending post text to the state.profilePage.postsData
    let addPost = () => {
        props.store.dispatch(addPost_actionCreator());
    }

    return ( <Posts updatePostText={onPostChange} addPost={addPost}
                    profilePage={state.profilePage}/> );
}

export default PostsContainer;