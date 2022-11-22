import React  from "react";
import classes from "./Dialogs.module.css"
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import {sendMessageActionCreator, updateNewMessageTextActionCreator} from "../../Redux/Store";
const Dialogs = (props) => {

    let dialogItemsData = props.dialogPage.dialogsData
        .map(dialogData => <DialogItem name={dialogData.name} id={dialogData.id}/>);
    let messagesItemsData = props.dialogPage.messagesData
        .map(messageData => <Message message={messageData.messages}/>);

    let onSendMessageClick = () => {
        props.dispatch(sendMessageActionCreator());
    };
    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.dispatch(updateNewMessageTextActionCreator(body));
    };
    return(
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogItemsData}
            </div>
            <div className={classes.messages}>
                <div>{messagesItemsData}</div>
                <div>
                    <div><textarea onChange={onNewMessageChange} value={props.dialogPage.newMessageText}></textarea></div>
                    <div><button onClick={onSendMessageClick}>Send</button></div>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;