import React  from "react";
import classes from "./Dialogs.module.css"
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import AddNewMyPostReduxForm from "../Profile/MyPosts/AddNewMyPostReduxForm";

const Dialogs = (props) => {
    let dialogItemsData = props.dialogPage.dialogsData
        .map(dialogData => <DialogItem name={dialogData.name} id={dialogData.id}/>);
    let messagesItemsData = props.dialogPage.messagesData
        .map(messageData => <Message message={messageData.messages}/>);

    const onSubmit = (values) => {
        props.sendMessage(values.message)
    }
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogItemsData}
            </div>
            <div className={classes.messages}>
                <div>{messagesItemsData}</div>
            </div>
            <AddNewMyPostReduxForm onSubmit={onSubmit}/>
        </div>
    )
}

export default Dialogs;