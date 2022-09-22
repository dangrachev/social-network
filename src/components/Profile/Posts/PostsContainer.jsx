import React from 'react';
import {connect} from 'react-redux';
import {addPost, deletePost, likePost} from '../../../Redux/profile-reducer';
import Posts from './Posts';


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,

    }
}

const PostsContainer = connect(mapStateToProps, {addPost, deletePost, likePost})(Posts);

export default PostsContainer;