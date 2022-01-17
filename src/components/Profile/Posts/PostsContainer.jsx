import React from "react";
import {addPost_actionCreator, updatePostText_actionCreator} from "../../../Redux/profile-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";


/*const PostsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    // function to push textarea content into state.profilePage.postText
                    let onPostChange = (text) => {
                        store.dispatch(updatePostText_actionCreator(text));
                    }

                    // function to sending post text to the state.profilePage.postsData
                    let addPost = () => {
                        store.dispatch(addPost_actionCreator());
                    }

                    return <Posts updatePostText={onPostChange} addPost={addPost}
                                  profilePage={state.profilePage}/>
                }
            }
        </StoreContext.Consumer>
    );
}*/

let mapStateToProps = (state) => {
    return {
        profilePage: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updatePostText: (text) => {
            let action = updatePostText_actionCreator(text);
            dispatch(action);
        },
        addPost: () => {
            dispatch(addPost_actionCreator());
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;