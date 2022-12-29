import React  from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddMessageForm from "./AddMessageForm";
import AddMessageReduxForm from "./AddMessageForm";

const Dialogs = (props) => {
    let dialogItemsData = props.dialogPage.dialogsData
        .map(dialogData => <DialogItem name={dialogData.name} id={dialogData.id}/>);
    let messagesItemsData = props.dialogPage.messagesData
        .map(messageData => <Message message={messageData.messages}/>);

    const onSubmit = (values) => {
        props.sendMessage(values.newMessageBody)
    }
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogItemsData}
            </div>
            <div className={classes.messages}>
                <div>{messagesItemsData}</div>
            </div>
            <AddMessageReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Dialogs;