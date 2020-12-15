import React from 'react';
import c from './ProfileStatus.module.css';

type PropsType = {
    status: string
    updateStatus: (status: string) => void
}

type StateType = {
    editMode: boolean
    status: string
}

class ProfileStatus extends React.Component<PropsType, StateType> {
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
    onStatusChange =(e: React.ChangeEvent<HTMLInputElement>)=> {
        this.setState({
            status: e.currentTarget.value
        });
    };
    componentDidUpdate(prevProps: PropsType, prevState: StateType) {
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
                    ? <div>
                        <span
                            onDoubleClick={ this.activateEditMode }>
                            {this.props.status}
                        </span>
                      </div>
                    : <div>
                        <input
                            type="text"
                            onChange={this.onStatusChange}
                            value={this.state.status}
                            autoFocus={true}
                            onBlur={ this.deActivateEditMode }/>
                    </div>
                }
            </>
        )
    }
}
export default ProfileStatus;