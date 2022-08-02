import React from 'react';
import style from './ProfileStatus.module.css';


class ProfileStatusClass extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }


    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return <div className={style.status_wrapper}>
            {
                !this.state.editMode
                    ? <div className={style.status}>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || 'Установить статус'}</span>
                    </div>
                    : <div className={style.inputWrap} onMouseLeave={() => {this.setState({editMode: false})}}>
                        <input className={style.statusInput} onChange={this.onStatusChange}
                               autoFocus={true} value={this.state.status}/>
                        <button className={style.btn_saveStatus} onClick={this.deactivateEditMode}>Сохранить</button>
                    </div>
            }
        </div>
    }
}

export default ProfileStatusClass;