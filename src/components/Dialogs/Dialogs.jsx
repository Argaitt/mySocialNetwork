import React  from "react";
import classes from "./Dialogs.module.css"
import {NavLink} from "react-router-dom";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
const Dialogs = (props) => {

    let dialogItemsData = props.state.dialogsData
        .map(dialogData => <DialogItem name={dialogData.name} id={dialogData.id}/>)

    let messagesItemsData = props.state.messagesData
        .map(messageData => <Message message={messageData.messages}/>)

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogItemsData}
            </div>
            <div className={classes.messages}>
                {messagesItemsData}
            </div>
        </div>
    )
}

export default Dialogs;