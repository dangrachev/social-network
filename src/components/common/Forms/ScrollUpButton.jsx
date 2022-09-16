import React, {useEffect, useState} from 'react';
import {Button} from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import styles from './ScrollUpButton.module.css';


export const ScrollUpButton = () => {
    const [isVisible, setIsVisible] = useState(false);

     const toggleVisibility = () => {
         if(window.scrollY > 300) {
             setIsVisible(true);
         } else {
             setIsVisible(false);
         }
     }

     const scrollToTop = () => {
         window.scrollTo({
             top: 0,
             behavior: 'smooth'
         });
     }

     useEffect(() => {
         window.addEventListener('scroll', toggleVisibility);

         return () => {
             window.removeEventListener('scroll', toggleVisibility)
         }
     }, [])


    return (
        <div className={styles.scrollBtn_wrap} style={{opacity: isVisible ? 1 : 0, transition: 'opacity .5s'}}>
            <Button size='large' variant="outlined" color='secondary'
                    style={{minWidth: '65px', height: '65px',
                        padding: '19px 0', borderRadius: '100%',
                        display: isVisible ? 'block' : 'none'}} onClick={scrollToTop}>
                <ArrowUpwardIcon/>
            </Button>
        </div>
    );
}