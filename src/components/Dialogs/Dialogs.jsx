import React  from "react";
import classes from "./Dialogs.module.css"

const Dialogs = (props) => {

    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {props.dialogItemsData}
            </div>
            <div className={classes.messages}>
                <div>{props.messagesItemsData}</div>
                <div>
                    <div><textarea onChange={(e) => props.onNewMessagesChange(e.target.value)} value={props.newMessageText}></textarea></div>
                    <div><button onClick={props.onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;