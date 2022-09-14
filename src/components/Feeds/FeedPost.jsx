import React from 'react';
import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, Typography} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Favorite, FavoriteBorder, MoreVert, Share} from "@mui/icons-material";

export const FeedPost = () => {
    return (
        <Card sx={{margin: 10, fontSize: '20px'}}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        B
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVert />
                    </IconButton>
                }
                title="Beautiful Norway"
                subheader="September 14, 2021"
            />
            <CardMedia
                component="img"
                height='20%'
                image="https://adventures.com/media/3943/t-reynisfjara-black-beach-south-coast-iceland.jpg"
                alt="Norway"
            />
            <CardContent>
                <Typography variant="body1" color="text.secondary" fontSize='20px'>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Accusantium adipisci aliquid aperiam, culpa distinctio et hic illo impedit in iusto laboriosam maiores nemo odit officia omnis quos rem soluta, ullam.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: 'red'}}/>} />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    );
};

