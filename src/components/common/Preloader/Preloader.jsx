import React from 'react';
import {Box} from "@mui/material";
import preloader from '../../../assets/img/preloader.gif';
import style from './Preloader.module.css';


let Preloader = () => {
    return (
        <Box flex={6} sx={{minHeight: '841px'}}>
            <img className={style.preloader} src={preloader} alt='loader-gif'/>
        </Box>
    );
}

export default Preloader;