import React from 'react';
import style from './ProfileStatus.module.css';


class ProfileStatus extends React.Component {

    state = {
        editMode: false
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return <div className={style.status_wrapper}>
            {!this.state.editMode && <div className={style.status}><span onDoubleClick={this.toggleEditMode}>{this.props.status}</span></div>}
            {this.state.editMode && <div className={style.statusInput}><input autoFocus={true} onBlur={this.toggleEditMode} value={this.props.status}/></div>}
        </div>
    }
}

export default ProfileStatus;