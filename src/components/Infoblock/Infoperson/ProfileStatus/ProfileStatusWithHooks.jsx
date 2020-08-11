import React, {useState} from 'react';

const ProfileStatusWithHooks =(props)=> {
    const [editMode, setEditMode] = useState(false)
    const activateEditMode =()=> {
        setEditMode({
            editMode: true
        })
    }
    const deActivateEditMode =()=> {
        setEditMode({
            editMode: false
        })
    }

    return (
        <>
            {!editMode &&
                <div><span onDoubleClick={ activateEditMode }>{props.status}</span></div>
            }
            {editMode &&
                <div><input type="text" onBlur={ deActivateEditMode } autoFocus={true} /></div>
            }
        </>
    )
}

export default ProfileStatusWithHooks