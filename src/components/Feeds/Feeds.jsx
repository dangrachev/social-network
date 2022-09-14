import {FeedPost} from "./FeedPost";
import {Box} from "@mui/material";
import style from './Feeds.module.css'


const Feeds = () => {
    return (
        <Box >
            <FeedPost/>
            <FeedPost/>
            <FeedPost/>
            <FeedPost/>
            <FeedPost/>
        </Box>
    );
}

export default Feeds;