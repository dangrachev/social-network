import React, {useEffect, useState} from 'react';
import style from './ProfileStatus.module.css';


const ProfileStatusHooks = (props) => {

    let [status, setStatus] = useState(props.status);
    let [editMode, setEditMode] = useState(false);

    useEffect(() => {
        setStatus(props.status)
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value);
    }

    return <div className={style.status_wrapper}>
        {
            !editMode
                ? <div className={style.status}>
                    <span onDoubleClick={activateEditMode}>{props.status || 'Установить статус'}</span>
                </div>
                : <div className={style.inputWrap} onMouseLeave={() => {setEditMode(false)}}>
                    <input className={style.statusInput} onChange={onStatusChange}
                           autoFocus={true} value={status}/>
                    <button className={style.btn_saveStatus} onClick={deactivateEditMode}>Сохранить</button>
                </div>
        }
    </div>
}

export default ProfileStatusHooks;