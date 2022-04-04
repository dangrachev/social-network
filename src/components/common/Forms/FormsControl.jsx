import React from 'react';
import style from './FormsControl.module.css'


export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={style.form_wrapper}>
            <textarea {...input} {...props} />
        </div>
    );
}

export const Input = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={style.input_wrapper}>
            <input {...input} {...props} className={hasError && style.error}/>
            {hasError && <span>{meta.error}</span>}
        </div>
    );
}