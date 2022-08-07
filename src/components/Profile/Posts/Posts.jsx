import React from 'react';
import style from './Posts.module.css'
import Post from './Post_item/Post_item';
import {Field, reduxForm} from 'redux-form';
import {Textarea} from '../../common/Forms/FormsControl';
import {maxLength} from '../../../utils/validator';

const maxLength30 = maxLength(30);
let TextareaReduxForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <div>
                    <Field name={'postText'}
                           component={Textarea}
                           validate={[maxLength30]}/>
                </div>
                <div>
                    <button>Post</button>
                </div>
            </div>
        </form>
    );
}
TextareaReduxForm = reduxForm({form: 'postBodyForm'})(TextareaReduxForm);


const Posts = React.memo((props) => {
    // mapping postsData into components
    let postsElements = props.postsData.map(post => <Post key={post.id} message={post.message}
                                                                      likesCount={post.likesCount}
                                                                      profile={props.profile}/>);

    let onSendPost = (values) => {
        props.addPost(values.postText);
    }

    return (
        <div className={style.posts_wrapper}>
            <div className={style.posts_header}>My posts</div>
            <div className={style.form_wrapper}>
                <TextareaReduxForm onSubmit={onSendPost}/>
            </div>
            <div className={style.posts}>
                {postsElements}
            </div>
        </div>
    );
});

export default Posts;