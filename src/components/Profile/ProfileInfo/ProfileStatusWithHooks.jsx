import React, {useState} from "react";

const ProfileStatusWithHooks = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return <div>
        {editMode
            ? <input value={status} onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} type="text"/>
            : <span onDoubleClick={activateEditMode}>{props.status || '--no status--'}</span>}
    </div>
}
export default ProfileStatusWithHooks