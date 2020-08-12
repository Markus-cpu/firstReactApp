import React, {useEffect, useState} from 'react';

const ProfileStatusWithHooks =(props)=> {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    const activateEditMode =()=> {
        setEditMode({
            editMode: true
        })
    }
    const deActivateEditMode =()=> {
        setEditMode({
            editMode: false
        })
        props.updateStatus(status)
    }

    const onStatusChange =(e)=> {
        setStatus({
            status: e.currentTarget.value
        })
    }

    return (
        <>
            {!editMode &&
                <div>
                    <span onDoubleClick={ activateEditMode }>{status}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input type="text"
                           onChange={ onStatusChange }
                           onBlur={ deActivateEditMode }
                           autoFocus={true}
                           value={status} />
                </div>
            }
        </>
    )
}

export default ProfileStatusWithHooks