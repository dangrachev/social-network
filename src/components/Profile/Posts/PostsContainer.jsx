import React from 'react';
import {addPost} from '../../../Redux/profile-reducer';
import Posts from './Posts';
import {connect} from 'react-redux';


let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: (postText) => {
            dispatch(addPost(postText));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;