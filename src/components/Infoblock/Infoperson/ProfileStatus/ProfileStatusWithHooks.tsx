import React, {ChangeEvent, useEffect, useState} from 'react';

type PropsType = {
    newStatus: string
    updateStatus: (newStatus: string) => void
}

const ProfileStatusWithHooks: React.FC<PropsType> = ({ newStatus, updateStatus }) => {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [status, setStatus] = useState<string>(newStatus)
    useEffect(()=> {
        setStatus(status)
    }, [newStatus])
    const activateEditMode =()=> {
        setEditMode({
            editMode: true
        })
    }
    const deActivateEditMode =()=> {
        setEditMode({
            editMode: false
        })
        updateStatus(status)
    }

    const onStatusChange =(e: ChangeEvent<HTMLInputElement>)=> {
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