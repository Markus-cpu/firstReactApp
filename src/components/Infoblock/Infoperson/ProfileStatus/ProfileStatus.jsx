import React from 'react';
import c from './ProfileStatus.module.css';

class ProfileStatus extends React.Component {
    state = {
      editMode: false
    };
    activateEditMode =()=> {
      this.setState({
          editMode: true
      })
    };
    deActivateEditMode =()=> {
        this.setState({
            editMode: false
        })
    };
    render() {
        return (
            <>
                {!this.state.editMode
                    ? <div><span onDoubleClick={ this.activateEditMode }>{this.props.status}</span></div>
                    : <div><input type="text" value={this.props.status} autoFocus={true} onBlur={ this.deActivateEditMode }/></div>
                }
            </>
        )
    }
}
export default ProfileStatus;