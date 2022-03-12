import React from 'react';
import style from './ProfileStatus.module.css';


class ProfileStatus extends React.Component {

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
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return <div className={style.status_wrapper}>
            {!this.state.editMode
                ? <div className={style.status}><span onDoubleClick={this.activateEditMode}>{this.props.status || 'Изменить статус'}</span></div>
                : <div>
                    <input className={style.statusInput} onChange={this.onStatusChange}
                           autoFocus={true} onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>
            }
        </div>
    }
}

export default ProfileStatus;