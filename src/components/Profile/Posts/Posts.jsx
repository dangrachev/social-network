import React, {useState} from 'react';
import {Box, Typography, Divider} from "@mui/material";
import {Input} from "../../common/Forms/Input";
import {StyledButton} from "../../common/Forms/StyledButton";
import Post from './Post_item/Post_item';
import style from './Posts.module.css'


const Posts = React.memo((props) => {
    let [value, setValue] = useState('');

    const onChange = (e) => {
        setValue(e.currentTarget.value);
    }

    const onSendPost = () => {
        props.addPost(value);
        setValue('');
    }

    return (
        <Box width='auto'>
            <Divider />

            <div className={style.form_wrapper}>
                <Input value={value} onChange={onChange}
                       label="What's new?"
                       size='normal'
                       multiline
                       maxRows={3}
                       fullwidth={true}
                       sx={{marginRight: 2, width: '400px'}} />
                <StyledButton onClick={onSendPost}
                              size='large'>Post</StyledButton>
            </div>
            <Typography variant='h4' sx={{margin: '40px 0 30px 0'}}>My posts</Typography>
            <div className={style.posts}>
                {props.postsData.length
                    ? props.postsData.map(post => <Post key={post.id} message={post.message}
                                                        postId={post.id} likesCount={post.likesCount}
                                                        isLiked={post.isLiked}
                                                        profileAvatar={props.profile?.photos?.small}
                                                        deletePost={props.deletePost} likePost={props.likePost}/>)
                    : <Typography variant='h6' sx={{margin: '10px 0 15px 0'}}>
                        There are no posts here yet ...</Typography>
                }
            </div>
        </Box>
    );
});

export default Posts;