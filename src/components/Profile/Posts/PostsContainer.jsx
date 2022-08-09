import React from 'react';
import {addPost, deletePost} from '../../../Redux/profile-reducer';
import Posts from './Posts';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData
    }
}

const PostsContainer = connect(mapStateToProps, {addPost, deletePost})(Posts);

export default PostsContainer;