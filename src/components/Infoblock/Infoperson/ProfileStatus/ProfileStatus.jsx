import React from 'react';
import c from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
      editMode: false,
      status: this.props.status//здесь устанавливаем изначальное значение localState,
        //которое приходит из глобального state с сервера
    };
    activateEditMode =()=> {
      this.setState({
          editMode: true
      });
    };
    deActivateEditMode =()=> {
        this.setState({
            editMode: false
        });
        //здесь делаем callBack, запрос на сервер, чтобы обновить статус
        this.props.updateStatus(this.state.status);
    };
    onStatusChange =(e)=> {
        this.setState({
            status: e.currentTarget.value
        });
    };
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.state.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {!this.state.editMode
                    ? <div><span onDoubleClick={ this.activateEditMode }>{this.props.status}</span></div>
                    : <div><input type="text" onChange={this.onStatusChange} value={this.state.status} autoFocus={true} onBlur={ this.deActivateEditMode }/></div>
                }
            </>
        )
    }
}
export default ProfileStatus;