import React from 'react';
import style from './Preloader.module.css';
import preloader from '../../../assets/img/preloader.gif';


let Preloader = () => {
    return (
        <div>
            <img className={style.preloader} src={preloader} alt='loader-gif'/>
        </div>
    );
}

export default Preloader;