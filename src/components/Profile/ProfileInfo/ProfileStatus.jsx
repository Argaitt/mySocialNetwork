import React from "react";

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status){
            this.setState({status: this.props.status})
        }
    }

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        })
        if (this.state.editMode) this.props.updateStatus(this.state.status)
    }

    onStatusChange = (e) => {
        this.setState({status: e.currentTarget.value})
    }

    render() {
        return <div>
            {this.state.editMode
                ? <input onChange={this.onStatusChange} autoFocus={true} type="text" value={this.state.status} onBlur={this.toggleEditMode}/>
                : <span onDoubleClick={this.toggleEditMode}>{this.props.status || '--no status--'}</span>}
        </div>
    }
}

export default ProfileStatus