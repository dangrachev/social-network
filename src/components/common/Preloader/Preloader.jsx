import React from 'react';
import style from './Preloader.module.css';
import preloader from '../../../assets/img/preloader.gif';
import {Box} from "@mui/material";


let Preloader = () => {
    return (
        <Box flex={6} sx={{minHeight: '841px'}}>
            <img className={style.preloader} src={preloader} alt='loader-gif'/>
        </Box>
    );
}

export default Preloader;